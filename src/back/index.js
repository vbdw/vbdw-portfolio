const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const http = require('http');
const socketIO = require('socket.io');



const app = express();
const port = 1010;

app.use(express.json());
app.use(cors());



const secretKey = crypto.randomBytes(32).toString('hex');

// mongoose.connect('mongodb://localhost:27017');
const mongoconnect = async() => {
    try {
    const connect = await mongoose.connect('mongodb://0.0.0.0:27017');
    console.log(
        "Database connected: ",
        connect.connection.host,
        connect.connection.name
        );
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

mongoconnect()


const server = http.createServer(app);
const io = socketIO(server);

const uesrSchema = new Schema({
    loginNumber: { type: Number, default: 0 },
    email: String,
    password: String,
});
const User = mongoose.model("User", uesrSchema);

app.get('/', (req, res) => {
    User.find()
    .then((result) => {
        res.json(result)
    })
    .catch((err) => {
        console.log(err);
    });
})

app.get('/:email', async (req, res) => {
    try {
        const { email } = req.params;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// User signup route
app.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
        }
        if (password.length < 8) {
            const errorMessage = 'Password must be at least 8 characters long';
            return res.status(400).json({ error: errorMessage, showAlert: true });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
        return res.status(400).json({ error: 'Email/username is already taken' });
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = new User({ email, password: hashedPassword, loginNumber: 0  });
        await newUser.save();
        const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
        res.header('Authorization', `Bearer ${token}`).json({ 
            message: 'Signup successful'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Email/username and password are required' });
        }
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(401).json({ error: 'Invalid email/username or password' });
        }
        const passwordMatch = await bcrypt.compare(password, existingUser.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid email/username or password' });
        }
        existingUser.loginNumber += 1;
        await existingUser.save();
        io.emit('newLogin', { userId: existingUser._id, message: 'New login from ' + email });
        const token = jwt.sign({ email: existingUser.email }, secretKey, { expiresIn: '1h' });
        res.header('Authorization', `Bearer ${token}`).json({
            message: 'Signin successful',
            userData: {
                email: existingUser.email,
                } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/logout', async (req, res) => {
    try {
        const { email } = req.body;
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        existingUser.loginNumber -= 1;
        await existingUser.save();
        res.json({ message: 'Logout successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle disconnects if needed
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
