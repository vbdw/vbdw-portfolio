import { uploadPicture } from "../middleware/uploadPictureMiddleware";
import User from "../models/User";
import Business from "../models/business";
import { fileRemover } from "../utils/fileRemover";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const defaultAvatarImage = "user.png";

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      throw new Error("User have already registered");
    }
    let avatar = req.body.avatar || defaultAvatarImage;
    // creating a new user
    user = await User.create({
      name,
      email,
      password,
      avatar,
    });

    return res.status(201).json({
      _id: user._id,
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      bio: user.bio,
      verified: user.verified,
      admin: user.admin,
      token: await user.generateJWT(),
    });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      throw new Error("Email not found");
    }

    if (await user.comparePassword(password)) {
      return res.status(201).json({
        _id: user._id,
        avatar: user.avatar,
        name: user.name,
        email: user.email,
        bio: user.bio,
        verified: user.verified,
        admin: user.admin,
        token: await user.generateJWT(),
      });
    } else {
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    next(error);
  }
};

const userProfile = async (req, res, next) => {
  try {
    let user = await User.findById(req.user._id);

    if (user) {
      return res.status(201).json({
        _id: user._id,
        avatar: user.avatar,
        name: user.name,
        email: user.email,
        bio: user.bio,
        googleId: user.googleId,
        verified: user.verified,
        admin: user.admin,
      });
    } else {
      let error = new Error("User not found");
      error.statusCode = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

const updateProfile = async (req, res, next) => {
  try {
    let user = await User.findById(req.user._id);

    if (!user) {
      throw new Error("User not found");
    }

    user.name = req.body.name || user.name;
    user.bio = req.body.bio || user.bio;
    if (req.body.password && req.body.password.length < 6) {
      throw new Error("Password length must be at least 6 character");
    } else if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUserProfile = await user.save();

    res.json({
      _id: updatedUserProfile._id,
      avatar: updatedUserProfile.avatar,
      name: updatedUserProfile.name,
      email: updatedUserProfile.email,
      bio: updatedUserProfile.bio,
      verified: updatedUserProfile.verified,
      googleId: updatedUserProfile.googleId,
      admin: updatedUserProfile.admin,
      token: await updatedUserProfile.generateJWT(),
    });
  } catch (error) {
    next(error);
  }
};

const updateProfilePicture = async (req, res, next) => {
  try {
    const upload = uploadPicture.single("profilePicture");

    upload(req, res, async function (err) {
      if (err) {
        const error = new Error(
          "An unknown error occured when uploading " + err.message
        );
        next(error);
      } else {
        if (req.file) {
          let filename;
          let updatedUser = await User.findById(req.user._id);
          filename = updatedUser.avatar;
          if (filename) {
            fileRemover(filename);
          }
          updatedUser.avatar = req.file.filename;
          await updatedUser.save();
          res.json({
            _id: updatedUser._id,
            avatar: updatedUser.avatar,
            name: updatedUser.name,
            email: updatedUser.email,
            bio: updatedUser.bio,
            verified: updatedUser.verified,
            admin: updatedUser.admin,
            token: await updatedUser.generateJWT(),
          });
        } else {
          let filename;
          let updatedUser = await User.findById(req.user._id);
          filename = updatedUser.avatar;
          updatedUser.avatar = "";
          await updatedUser.save();
          fileRemover(filename);
          res.json({
            _id: updatedUser._id,
            avatar: updatedUser.avatar,
            name: updatedUser.name,
            email: updatedUser.email,
            bio: updatedUser.bio,
            verified: updatedUser.verified,
            admin: updatedUser.admin,
            token: await updatedUser.generateJWT(),
          });
        }
      }
    });
  } catch (error) {
    next(error);
  }
};
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mylaayoune@cmlglobal.tech",
        pass: "bhyuerbsdrithpij",
  },
});
const sendEmailContanct = async (req, res) => {
  const { first_name, last_name, email, number, message } = req.body;
  const mailOptions = {
    from: "mylaayoune@cmlglobal.tech",
    to: "zouytenleila@gmail.com",
    subject: "New Form Submission from My Laayoune",
    html: `
    <p>First Name: ${first_name}</p>
    <p>Last Name: ${last_name}</p>
    <p>Email: ${email}</p>
    <p>Phone Number: ${number}</p>
    <p>Message: ${message}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
};

const getBusinessesByuser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const businesses = await Business.find({ user: userId }).populate("user");
    res.json(businesses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const forgotPassword = async (req, res) => {
  const { email } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (!user) {
      return res.send({ Status: "User not existed" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mylaayoune@cmlglobal.tech",
        pass: "bhyuerbsdrithpij",
      },
    });
    var mailOptions = {
      from: "mylaayoune@cmlglobal.tech",
      to: email,
      subject: "Reset Password Link",
    //   text: rest a password of ${user.email} account,
//       html: `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//     <p style="font-size: 16px; color: #333;">Dear ${user.name},</p>
//     <p style="font-size: 16px; color: #333;">You are receiving this email because a request to reset your password has been initiated.</p>
//     <p style="font-size: 16px; color: #333;">To reset your password, please click on the following link:</p>
//     <a href="http://localhost:3000/reset_password/${user._id}/${token}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">Reset Password</a>
//     <p style="font-size: 16px; color: #333; margin-top: 20px;">If you did not request a password reset, please disregard this email.</p>
//     <p style="font-size: 16px; color: #333;">Thank you,</p>
//     <p style="font-size: 16px; color: #333;">My Laayoune Support</p>
// </div>
//   `,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        return res.send({ Status: "Success" });
      }
    });
  });
};
const resetPassword = async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.json({ Status: "Error with token" });
    } else {
      bcrypt
        .hash(password, 10)
        .then((hash) => {
          User.findByIdAndUpdate({ _id: id }, { password: hash })
            .then((u) => res.send({ Status: "Success" }))
            .catch((err) => res.send({ Status: err }));
        })
        .catch((err) => res.send({ Status: err }));
    }
  });
};
export {
  registerUser,
  loginUser,
  userProfile,
  updateProfile,
  updateProfilePicture,
  sendEmailContanct,
  getBusinessesByuser,
  forgotPassword,
  resetPassword,
};