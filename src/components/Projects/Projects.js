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
import donbuzz from "../../Assets/Projects/donbuzz.png";
import directory1 from '../../Assets/Projects/experiencemarriott.svg';
import directory2 from '../../Assets/Projects/pools-co-za-logo.webp';
import camelendar from '../../Assets/Projects/logo.svg';

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
              type="app/web"
              imgPath={k_customer}
              isBlog={false}
              title="Kooballo Customer"
              description="Kooballo - Your Ultimate Water Tank Planning Companion Effortlessly plan and manage your water storage with Kooballo! Whether you're a homeowner, farmer, or business owner, Kooballo is the go-to app for optimizing your water tank usage. Seamlessly calculate the ideal tank capacity based on your needs, track water consumption."
              ghLink="https://github.com/CML-Global/kooballo"
              app="https://apps.apple.com/us/app/kooballo/id6475052562"
              play="https://play.google.com/store/apps/details?id=com.v_bd_w.kooballo"
              demoLink="https://kooballo.ma"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              type="app"
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
              type="app"
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
              imgPath={camelendar}
              isBlog={false}
              title="Camelendar.com"
              description="Built with Next.js and Spring Boot, this dynamic platform is the ultimate guide for camelid enthusiasts. It empowers users to share activities, events, and books about camelids with a global audience. The site combines the speed and responsiveness of Next.js with the robust backend capabilities of Spring Boot, delivering a seamless user experience. Whether you're an organizer, author, or hobbyist, this platform fosters a vibrant community centered around the fascinating world of camelids."
              ghLink="https://github.com/vbdw"
              demoLink="https://www.camelendar.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={directory2}
              isBlog={false}
              title="pools"
              description="The Preferred Directory for ALL your Pool, Spa, Sauna, Jacuzzi and Hot Tub Related Service Providers in Southern Africa!"
              ghLink="https://github.com/vbdw"
              demoLink="https://pools.co.za"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={directory1}
              isBlog={false}
              title="experience marriott"
              description="Click here to find the best package for the perfect escape from reality and a relaxing time with our Hotel and Spa deals! Visit our website to learn more."
              ghLink="https://github.com/vbdw"
              demoLink="https://experiencemarriott.com"         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              type="app/web"
              imgPath={w_Custumer}
              isBlog={false}
              title="Washaaa! Customer"
              description="Washaa Customer is an innovative mobile application designed to revolutionize the way car owners approach car washing, offering a seamless, convenient, and efficient solution that caters to the modern vehicle owner's needs. In today’s fast-paced world, finding time for car maintenance tasks, including car washing, can be a challenge. Washaa Customer addresses this issue by connecting car owners with high-quality, reliable car washing services through a few taps on their smartphone."
              ghLink="https://github.com/CML-Global/washaa-mobile"
              app="https://apps.apple.com/us/app/washaaa-customer/id6498149621"
              play="https://play.google.com/store/apps/details?id=com.washaa.customer.washaacustomer"
              demoLink="https://washaaa.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              type="app"
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
              type="nc"
              imgPath={my_laayoune}
              isBlog={false}
              title="My Laayoune"
              description="A directory website built with Next.js and Express.js, enabling users to share and discover various projects such as gyms, pharmacies, hotels, and more. The platform provides a user-friendly interface for showcasing local businesses and services, promoting connectivity within the community. Designed to be fast, responsive, and scalable, the website leverages modern web technologies to deliver a seamless user experience."
              ghLink="https://github.com/CML-Global/mylaayoune"
              demoLink="https://mylaayoune.ma"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={donbuzz}
              isBlog={false}
              title="Donbuzz website"
              description=""
              ghLink="https://github.com/vbdw"
              demoLink="https://donbuzz.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
