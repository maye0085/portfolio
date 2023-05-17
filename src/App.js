import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import EmailHome from "./assets/emailHome.png";
import GithubHome from "./assets/githubHome.png";
import LinkedInHome from "./assets/linkedInHome.png";
import ResumeHome from "./assets/resumeHome.png";
import ArrowDownHome from "./assets/arrowDownHome.png";
import AboutMeIcon from "./assets/aboutMeIcon.png";
import CssIcon from "./assets/cssIcon.png";
import Html5Icon from "./assets/html5Icon.png";
import JavascriptIcon from "./assets/javascriptIcon.png";
import ReactIcon from "./assets/reactIcon.png";
import PremergencyIcon from "./assets/premergencyInc.svg";
import PremergencyDemo from "./assets/video/CP-CME-Demo.mp4";
import android1 from "./assets/Android1.png";
import android2 from "./assets/Android2.png";
import android3 from "./assets/Android3.png";
import ResumeDownload from "./assets/resume.pdf";
import Avatar from "./assets/avatar.svg";
import BackgroundAvatar from "./assets/Path.svg";

function App() {
  return (
    <div className="webBackground ">
      {/* --------------------  Nav ----------------------- */}
      <div className="navBarHome ">
        <Navbar bg="white" expand="lg">
          <Container fluid className="navBarContainer">
            <Navbar.Brand className="dustinHeader" href="#">
              Dustin
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0">
                <div className="divContainerIconsHome">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <img
                    src={JavascriptIcon}
                    style={{
                      // marginRight: "5px",
                      marginTop: "13px",
                      width: "15px",
                      height: "15px",
                    }}
                    alt="Javascript Icon"
                  ></img>
                </div>
                <div className="divContainerIconsHome">
                  <Nav.Link href="#aboutMe">About Me</Nav.Link>
                  <img
                    src={ReactIcon}
                    style={{
                      // marginRight: "5px",
                      marginTop: "13px",
                      width: "15px",
                      height: "15px",
                    }}
                    alt="React Icon"
                  ></img>
                </div>
                <div className="divContainerIconsHome">
                  <Nav.Link href="#skillsCard">Skills</Nav.Link>
                  <img
                    src={Html5Icon}
                    style={{
                      // marginRight: "5px",
                      marginTop: "13px",
                      width: "15px",
                      height: "15px",
                    }}
                    alt="Html Icon"
                  ></img>
                </div>
                <div className="divContainerIconsHome">
                  <Nav.Link href="#experienceCard">Experience</Nav.Link>
                  <img
                    src={CssIcon}
                    style={{
                      marginRight: "5px",
                      marginTop: "13px",
                      width: "15px",
                      height: "15px",
                    }}
                    alt="Github Icon"
                  ></img>
                </div>
                <div className="divContainerIconsHome">
                  <Nav.Link href="#contactCard">Contact</Nav.Link>
                  <img
                    src={GithubHome}
                    style={{
                      marginRight: "5px",
                      marginTop: "13px",
                      width: "15px",
                      height: "15px",
                    }}
                    alt="Github Icon"
                  ></img>
                </div>
              </Nav>
            </Navbar.Collapse>
            <div className="reactHeader d-none d-lg-block ">
              <h4>Responsive in React</h4>
            </div>
          </Container>
        </Navbar>
      </div>
      {/* -----------------End of Nav --------------------- */}

      <div className="">
        <div className="card rounded-3  ">
          <div className="card-body cardHome  ">
            <div className="row justify-content-center">
              {/* ----------- Avatar -------------- */}
              
              <img
                className="backgroundAvatar"
                src={BackgroundAvatar}
                style={{
                 
                }}
                alt="Background"
              ></img>

              <img
                className="avatarMe"
                src={Avatar}
                style={{
                  
                }}
                alt="Github Icon"
              ></img>

              {/* Content here */}
              <div className="row justify-content-around mt-4  iconRow ">
                <img
                  src={GithubHome}
                  style={{
                    width: "58px",
                    height: "30px",
                  }}
                  alt="Github Icon"
                ></img>
                <img
                  src={LinkedInHome}
                  style={{
                    width: "55px",
                    height: "30px",
                  }}
                  alt="LinkedIn Icon"
                ></img>
                <img
                  src={EmailHome}
                  style={{
                    width: "60px",
                    height: "30px",
                  }}
                  alt="Email Icon"
                ></img>
                <img
                  src={ResumeHome}
                  style={{
                    width: "55px",
                    height: "30px",
                  }}
                  alt="Resume Icon"
                ></img>
              </div>

              {/* Content here */}

              <div className="topHeyHeader ">
                <h2 className="fw-bold">Welcome I'm</h2>
              </div>

              <div className="homeAnimContainer">
                <div className="homeAnim">
                  <h4>Dustin Mayer</h4>
                  <h4>Dustin Mayer</h4>
                </div>
              </div>

              <div className="mt-4 row justify-content-center ">
                <h2 className=" row justify-content-center">
                  Front-end Developer
                </h2>
                <h4 className="descHome">
                  “Front-End Pro: Delivering User-Centric, Responsive Designs
                  with HTML, CSS, JavaScript, and Top Frameworks.”
                </h4>
                <div className="contactButton">
                  <a href="#contactCard">
                    <button className="button-29">Contact Me</button>
                  </a>
                </div>

                <div className="arrowDown mt-3  ">
                  <img
                    src={ArrowDownHome}
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                    alt="Continue Down Icon"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------ Emd of card body ----------------------- */}
        </div>
        {/* ----------------------- About Me Card ------------------------ */}

        <div id="aboutMe" className="card mt-4">
          <div className="card-body cardAbout">
            <h1
              className="justify-content-center row"
              style={{ color: "#4F58A0" }}
            >
              About Me
            </h1>

            <div className="row justify-content-center  my-5">
              <img
                src={AboutMeIcon}
                style={{
                  width: " 250px",
                }}
                alt="About Me Icon"
              ></img>
            </div>

            <p>
              I’m Dustin Mayer, a highly motivated and passionate Front-End
              Developer, committed to crafting innovative solutions and solving
              complex problems in the world of web development. My expertise in
              HTML, CSS, JavaScript, and modern frameworks like React, enables
              me to create intuitive, user-centric, and responsive web
              experiences that delight users and exceed expectations. <br />
            </p>
            <p>
              {" "}
              As an avid learner, I continually stay updated with the latest
              trends, tools, and best practices in front-end development. This
              commitment to growth and improvement also drives me to actively
              participate in the web development community, sharing knowledge,
              engaging in discussions, and contributing to open-source projects.{" "}
              <br />
            </p>
            <p>
              {" "}
              My ultimate goal as a front-end developer is to positively impact
              users’ lives by creating seamless, engaging, and accessible
              digital experiences. I am eager to take on new challenges and
              apply my passion and skills to make a difference in the
              fast-paced, ever-evolving world of web development.
            </p>
          </div>
        </div>
        {/* -------------------- End of About Me Card --------------------- */}

        {/* --------------------- Skills Card ------------------------- */}

        <div id="skillsCard" className="card mt-4">
          <div className="card-body">
            <h1
              className="justify-content-center row"
              style={{ color: "#4F58A0" }}
            >
              Skills
            </h1>
            <div className="row justify-content-center my-5">
              <img
                src={JavascriptIcon}
                style={{
                  width: "95px",
                  height: "75px",
                }}
                alt="Javascript Icon"
              ></img>
              <img
                src={ReactIcon}
                style={{
                  width: "90px",
                  height: "75px",
                }}
                alt="React Icon"
              ></img>
              <img
                src={Html5Icon}
                style={{
                  width: "120px",
                  height: "100px",
                  position: "relative",
                  bottom: "15px",
                }}
                alt="Html Icon"
              ></img>
              <img
                src={CssIcon}
                style={{
                  width: "90px",
                  height: "90px",
                  position: "relative",
                  bottom: "16px",
                }}
                alt="Css Icon"
              ></img>
            </div>
            <div className="content">
              <div>
                <p>
                  As a proficient front-end developer, my expertise in HTML,
                  CSS, and JavaScript allows me to create user-friendly web
                  pages focusing on structure, colours, fonts, and style. I
                  skillfully implement JavaScript to enhance interactivity and
                  functionality, providing engaging and dynamic websites for
                  users.
                </p>
                <p>
                  My experience in React Development enables me to create
                  efficient and interactive user interfaces using the React
                  JavaScript library. This knowledge empowers me to build
                  scalable and maintainable web applications, prioritizing
                  performance and user experience for seamless navigation.
                </p>
                <p>
                  In the ever-evolving landscape of technology, I am adept at
                  designing and optimizing websites and applications for various
                  devices. My skills in Responsive Design and Mobile-based
                  Features ensure a seamless user experience across desktop,
                  tablet, and mobile platforms, catering to diverse user needs.
                </p>
                <p>
                  As a collaborative and communicative professional, I work
                  effectively with back-end developers, web designers, and
                  graphic designers to create cohesive and user-centric final
                  products. My problem-solving abilities allow me to overcome
                  obstacles related to code, functionality, and appearance,
                  while my customer-focused approach helps me meet client
                  expectations and requirements by developing tailored website
                  designs.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* --------------- End of Skills Card ----------------- */}

        {/* --------------- Experience Card -------------------- */}
        <div id="experienceCard" className="card mt-4">
          <div className="card-body">
            <h1
              className="justify-content-center row"
              style={{ color: "#4F58A0" }}
            >
              Experience
            </h1>
            <h3 className="text-center justify-content-center row">
              Community Paramedic <br /> Cross Platform App at Premergeny Inc
            </h3>

            <div className="row justify-content-center my-3">
              <img
                src={PremergencyIcon}
                style={{
                  width: "300px",
                }}
                alt="Premergency Inc Icon"
              ></img>
            </div>
            <div className="content">
              <div>
                <p>
                  As a design team leader at Premergency Inc, I led a talented
                  group of designers and developers in creating a user-centric
                  paramedic application for both Apple and Android platforms.
                  Our primary goal was to streamline the process for paramedics
                  to access patient information in the community, transitioning
                  from traditional paper methods to a more efficient and
                  effective digital solution.
                </p>
                <p>
                  Our user experience design process began with extensive
                  research and empathizing with our target users: paramedics. We
                  focused on understanding their needs, challenges, and
                  expectations when attending to patients in the field. With a
                  solid foundation of user insights, we moved on to prototyping
                  and iterative design, ensuring that the app's interface was
                  both intuitive and responsive. Throughout the development
                  process, we implemented functional components and styling
                  using React, a popular JavaScript library for building user
                  interfaces.
                </p>
                <p>
                  In addition to the paramedic application, our team was also
                  responsible for designing and developing an Admin portal. This
                  portal enabled easy querying of results and facilitated better
                  organization within the company. By creating a seamless
                  experience for both paramedics and administrative staff, we
                  successfully delivered a comprehensive solution that improved
                  patient care and streamlined operations for Premergency Inc.
                </p>
              </div>
              <h2 className="row justify-content-center">PremergencyDemo</h2>
              <div className="row justify-content-center">
                <video
                  src={PremergencyDemo}
                  width="420"
                  height="540"
                  controls
                ></video>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------End of Experience Card 1--------------- */}

        {/* -------------- Experience Card 2 --------------------- */}
        <div className="card mt-4">
          <div className="card-body">
            <h1
              className="justify-content-center row"
              style={{ color: "#4F58A0" }}
            >
              Experience
            </h1>
            <h3 className="text-center justify-content-center row">
              Canadian Sales Calculator <br />
              React App on{" "}
              <a href="https://play.google.com/store/apps/details?id=com.blueseedapps.canadianSalesTaxCalc">
                Google Play Store
              </a>
            </h3>
            <div className="content">
              <p>
                As part of my commitment to creating user-centric applications,
                I developed the Canadian Sales Calculator, an innovative mobile
                app designed to help consumers effectively manage their spending
                by calculating sales tax on their cart of items in real time.
                The app was born out of the observation that many people
                struggle to stick to their budget, often exceeding their limits
                at the checkout counter. By providing an easy-to-use interface
                and real-time calculations, the Canadian Sales Calculator helps
                users stay within their budget means while shopping at grocery
                stores, convenience stores, and other retail establishments.
              </p>
              <p>
                The Canadian Sales Calculator app not only calculates GST and
                HST tax rates for all provinces but also allows users to set a
                custom spending limit, sending a notification if they go over
                it. In addition, the app can accommodate tax-exempt items, such
                as dairy products, by removing the tax on individual items and
                providing an updated total spending amount. This flexibility
                enables users to maintain control over their spending and avoid
                unnecessary purchases, ultimately promoting responsible
                financial management.
              </p>
              <p>
                As a developer, I am always looking for ways to improve my
                applications and deliver better user experiences. To that end, I
                am actively seeking feedback on the Canadian Sales Calculator
                app to identify areas of improvement and potential new features.
                With user input, I aim to continuously refine the app to better
                serve the needs of consumers in managing their finances
                effectively. Furthermore, the app's current success on the
                Google Play Store highlights my dedication to creating
                practical, user-friendly solutions that make a real difference
                in people's lives.
              </p>
            </div>
            <div className="justify-content-center row">
              <img
                src={android1}
                style={{
                  height: "400px",
                  width: "180px",
                }}
                alt="Demo Pic1"
              ></img>
              <img
                src={android2}
                style={{
                  height: "400px",
                  width: "180px",
                }}
                alt="Demo Pic2"
              ></img>
              <img
                src={android3}
                style={{
                  height: "400px",
                  width: "180px",
                }}
                alt="Demo Pic3"
              ></img>
            </div>
          </div>
        </div>
        {/* ------------- Contact Card --------------- */}
        <div id="contactCard" className="card mt-4 ">
          <div className="card-body">
            <h1
              className="justify-content-center row"
              style={{ color: "#4F58A0" }}
            >
              Contact
            </h1>

            <div className="mt-3 p-5">
              <h5 className="p-1">
                LinkedIn:{" "}
                <a href="https://www.linkedin.com/in/dustin-mayer/">
                  Dustin Mayer
                </a>
                <img
                  src={LinkedInHome}
                  style={{
                    marginLeft: "20px",
                    width: "40px",
                    height: "40px",
                  }}
                  alt="LinkedIn Icon"
                ></img>
              </h5>
              <h5 className="p-1">
                Email:{" "}
                <a href="mailto:dmayer0615@gmail.com">dmayer0615@gmail.com</a>
                <img
                  src={EmailHome}
                  style={{
                    marginLeft: "25px",
                    width: "50px",
                    height: "40px",
                  }}
                  alt="Email Icon"
                ></img>
              </h5>
              <h5 className="p-1">
                Github Username:{" "}
                <a href="https://github.com/maye0085">maye0085</a>
                <img
                  src={GithubHome}
                  style={{
                    marginLeft: "20px",
                    width: "40px",
                    height: "40px",
                  }}
                  alt="Github Icon"
                ></img>
              </h5>
              <h5 className="p-1">
                Resume: {/* --------------- Add Resume ----------------- */}
                <a href={ResumeDownload} download>
                  Click to Download
                </a>
                <img
                  className="hideMe"
                  src={ResumeHome}
                  style={{
                    marginLeft: "20px",
                    width: "40px",
                    height: "40px",
                  }}
                  alt="Github Icon"
                ></img>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
