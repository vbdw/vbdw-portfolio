import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import w_Custumer from "../../Assets/Projects/washaaa-customer.png";
import w_Washer from "../../Assets/Projects/washaaa-washer.png";
import k_pay from "../../Assets/Projects/kooballo-pay.png";
import k_customer from "../../Assets/Projects/kooballo-customer.png";
import k_driver from "../../Assets/Projects/kooballo-driver.png";
import my_laayoune from "../../Assets/Projects/my_laayoune.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={k_customer}
              isBlog={false}
              title="Kooballo Customer"
              description="Kooballo - Your Ultimate Water Tank Planning Companion Effortlessly plan and manage your water storage with Kooballo! Whether you're a homeowner, farmer, or business owner, Kooballo is the go-to app for optimizing your water tank usage. Seamlessly calculate the ideal tank capacity based on your needs, track water consumption."
              ghLink="https://github.com/CML-Global/kooballo"
              app="https://apps.apple.com/us/app/kooballo/id6475052562"
              play="https://play.google.com/store/apps/details?id=com.v_bd_w.kooballo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={k_driver}
              isBlog={false}
              title="Kooballo Driver"
              description="ntroducing Kooballo Driver, your go-to app for efficient water delivery services. Designed specifically for transporting water for non-drinking purposes, our platform connects users with reliable truck drivers for filling water tanks seamlessly. With Kooballo Driver, ensure timely and hassle-free water deliveries to homes, businesses, and construction sites. Track deliveries in real-time, manage schedules effortlessly, and enjoy transparent pricing. Simplify your water transportation needs with our user-friendly interface and secure payment options. Experience convenience and reliability like never before with Kooballo Driver - the ultimate solution for water tank filling."
              ghLink="https://github.com/CML-Global/kooballo"
              app="https://apps.apple.com/us/app/kooballo-driver/id6477842109"
              play="https://play.google.com/store/apps/details?id=com.v_bd_w.kooballoDriver"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={k_pay}
              isBlog={false}
              title="Kooballo Pay"
              description="Kooballo Pay: Simplified QR Transactions Unlock Seamless Payments on the Go! Kooballo Pay is the ultimate solution for effortless and secure transactions between drivers and customers. Say goodbye to the hassle of cash or card payments. Our innovative app leverages the power of QR code technology to make payments smoother than ever."
              ghLink="https://github.com/CML-Global/kooballo"
              app="https://apps.apple.com/us/app/kooballo-pay/id6477578724"
              play="https://play.google.com/store/apps/details?id=com.v_bd_w.KooballoPay"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={w_Custumer}
              isBlog={false}
              title="Washaaa! Customer"
              description="Washaa Customer is an innovative mobile application designed to revolutionize the way car owners approach car washing, offering a seamless, convenient, and efficient solution that caters to the modern vehicle owner's needs. In today’s fast-paced world, finding time for car maintenance tasks, including car washing, can be a challenge. Washaa Customer addresses this issue by connecting car owners with high-quality, reliable car washing services through a few taps on their smartphone."
              ghLink="https://github.com/CML-Global/washaa-mobile"
              app="https://apps.apple.com/us/app/washaaa-customer/id6498149621"
              play="https://play.google.com/store/apps/details?id=com.washaa.customer.washaacustomer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={w_Washer}
              isBlog={false}
              title="Washaaa! Washer"
              description="Transform your car wash experience with Washaaa! Washer, the ultimate solution for all your vehicle cleaning needs. Washaaa! Washer is a user-friendly app designed to connect you with top-rated car wash services in your area. Whether you need a quick rinse or a detailed cleaning, Washaaa! Washer makes it easy and convenient."
              ghLink="https://github.com/CML-Global/washaa-mobile"
              app="https://apps.apple.com/us/app/washaaa-washer/id6498715620"
              play="https://play.google.com/store/apps/details?id=com.washaa.washer.washaawasher"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={my_laayoune}
              isBlog={false}
              title="My Laayoune"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/CML-Global/mylaayoune"
              demoLink="https://mylaayoune.ma"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
