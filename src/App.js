import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import EmailHome from "./assets/emailHome.png";
import GithubHome from "./assets/githubHome.png";
import LinkedInHome from "./assets/linkedInHome.png";
import ArrowDownHome from "./assets/arrowDownHome.png";
import AboutMeIcon from "./assets/aboutMeIcon.png";

function App() {
  return (
    <div className="webBackground">
      <div className=" p-4">
        <div class="card rounded-3">
          {/* --------------------  Nav ----------------------- */}
          <Navbar bg="light" expand="lg">
            <Container>
              <h2 class="dustinHeader font-family-Didot">Dustin</h2>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto justify-content-end">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">About</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* -----------------End of Nav --------------------- */}

          <div class="card-body cardHome">
            <div class="row justify-content-center">
              <svg width="300" height="300" viewBox="0 0 253.295 272.608">
                <defs>
                  <linearGradient
                    id="linear-gradient"
                    x1="0.833"
                    y1="0.045"
                    x2="0.268"
                    y2="0.818"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stop-color="#565fad" />
                    <stop offset="1" stop-color="#2b3057" />
                  </linearGradient>
                </defs>
                <g
                  id="Path_1"
                  data-name="Path 1"
                  transform="translate(-64.665 27.476)"
                  fill="url(#linear-gradient)"
                >
                  <path
                    d="M 252.7674560546875 243.6323699951172 C 244.7918395996094 243.6323699951172 235.7703399658203 242.392822265625 225.9535827636719 239.9482421875 C 216.5228424072266 237.5997924804688 206.4129180908203 234.1551666259766 195.9046325683594 229.7100372314453 C 185.6789245605469 225.3844909667969 175.2036743164062 220.1673278808594 164.7698364257812 214.2034912109375 C 154.4239959716797 208.2899475097656 144.2932891845703 201.7425842285156 134.6591339111328 194.7432098388672 C 114.7177963256836 180.2554931640625 97.85170745849609 164.5357818603516 85.88425445556641 149.2835388183594 C 79.57825469970703 141.2467041015625 74.70146179199219 133.4193725585938 71.38925170898438 126.018913269043 C 67.92287445068359 118.2740783691406 66.16529083251953 110.9773254394531 66.16529083251953 104.3313674926758 C 66.16529083251953 97.82112121582031 67.85350036621094 90.76499938964844 71.18299865722656 83.35903930664062 C 74.36733245849609 76.27607727050781 79.06129455566406 68.84658050537109 85.13449859619141 61.27695465087891 C 96.65621185302734 46.91624450683594 112.9731292724609 32.24970245361328 132.3212890625 18.86282920837402 C 141.6656341552734 12.39757919311523 151.5279541015625 6.362703800201416 161.6343383789062 0.9258706569671631 C 171.8049163818359 -4.545504570007324 182.0660400390625 -9.326545715332031 192.1326751708984 -13.28442096710205 C 202.4520416259766 -17.34167098999023 212.444580078125 -20.48417091369629 221.8326721191406 -22.62462997436523 C 231.5859222412109 -24.84833717346191 240.6324615478516 -25.97583770751953 248.7210388183594 -25.97583770751953 C 260.3638916015625 -25.97583770751953 269.9334106445312 -23.65575408935547 277.1638488769531 -19.08004570007324 C 289.812744140625 -11.0752124786377 300.2160034179688 6.979537487030029 307.2488403320312 33.13232803344727 C 310.4990844726562 45.21903610229492 312.9386596679688 58.69970321655273 314.499755859375 73.19986724853516 C 316.0238342285156 87.35658264160156 316.6644592285156 102.030158996582 316.40380859375 116.8130340576172 C 316.1615295410156 130.5525360107422 315.144287109375 143.9699554443359 313.3802490234375 156.6926574707031 C 311.5670776367188 169.76953125 309.00390625 181.8134918212891 305.761962890625 192.4899139404297 C 302.3742065429688 203.6463775634766 298.2889099121094 213.1521606445312 293.6195983886719 220.7433319091797 C 288.7208251953125 228.7073669433594 283.1994934082031 234.5209197998047 277.2090148925781 238.0224914550781 C 270.8406677246094 241.7449188232422 262.6173400878906 243.6323699951172 252.7674560546875 243.6323699951172 Z"
                    stroke="none"
                  />
                  <path
                    d="M 248.7209777832031 -24.47587585449219 C 233.0043029785156 -24.47587585449219 213.6261596679688 -20.12319946289062 192.6814880371094 -11.88847351074219 C 182.6700286865234 -7.952285766601562 172.4633483886719 -3.19647216796875 162.3449401855469 2.246810913085938 C 152.2875671386719 7.657302856445312 142.4732971191406 13.6627197265625 133.1747131347656 20.09635925292969 C 113.9441528320312 33.40185546875 97.73666381835938 47.96649169921875 86.304443359375 62.21562194824219 C 80.31060791015625 69.68630981445312 75.683349609375 77.00689697265625 72.55108642578125 83.97412109375 C 69.30908203125 91.18539428710938 67.66525268554688 98.03457641601562 67.66525268554688 104.3313980102539 C 67.66525268554688 110.764762878418 69.37881469726562 117.855354309082 72.75836181640625 125.4061660766602 C 76.02056884765625 132.6949768066406 80.83380126953125 140.4169921875 87.06436157226562 148.3576354980469 C 98.947265625 163.5021667480469 115.7101745605469 179.1224060058594 135.5407409667969 193.5296630859375 C 145.1309814453125 200.4971313476562 155.2155303955078 207.0146636962891 165.5142059326172 212.9012145996094 C 175.896484375 218.8356170654297 186.3179321289062 224.026123046875 196.4889831542969 228.3285827636719 C 217.8373413085938 237.3590850830078 237.2981262207031 242.1323547363281 252.7674865722656 242.1323547363281 C 262.3477783203125 242.1323547363281 270.31640625 240.3139038085938 276.4520263671875 236.7274932861328 C 282.2275390625 233.3515777587891 287.5736694335938 227.7093048095703 292.3418884277344 219.9573974609375 C 296.9439697265625 212.4756774902344 300.9761962890625 203.0876312255859 304.32666015625 192.0540313720703 C 307.5458984375 181.4525299072266 310.092041015625 169.4859466552734 311.8944396972656 156.4866333007812 C 313.6502685546875 143.8232116699219 314.662841796875 130.4661712646484 314.9040222167969 116.7865371704102 C 315.16357421875 102.0658950805664 314.5257568359375 87.45521545410156 313.0083618164062 73.36039733886719 C 311.45556640625 58.93730163574219 309.0304565429688 45.53367614746094 305.8002624511719 33.52180480957031 C 302.4320678710938 20.99653625488281 298.2630310058594 10.28044128417969 293.4090270996094 1.671218872070312 C 288.3512573242188 -7.299423217773438 282.61572265625 -13.85469055175781 276.3616638183594 -17.81256103515625 C 269.3750305175781 -22.2340087890625 260.0753479003906 -24.47587585449219 248.7209777832031 -24.47587585449219 M 248.7209930419922 -27.47587585449219 C 260.1869506835938 -27.47587585449219 270.2001953125 -25.26206970214844 277.9659423828125 -20.34756469726562 C 331.2911376953125 13.39898681640625 331.2911376953125 208.1477661132812 277.9659423828125 239.3174896240234 C 271.1343078613281 243.3107299804688 262.5393676757812 245.1323547363281 252.7674713134766 245.1323547363281 C 186.2637329101562 245.1323547363281 64.66525268554688 160.9310302734375 64.66525268554688 104.3313980102539 C 64.66525268554688 48.86888122558594 181.4534301757812 -27.47587585449219 248.7209930419922 -27.47587585449219 Z"
                    stroke="none"
                    fill="#f7f7f8"
                  />
                </g>
              </svg>

              {/* Content here */}
              <div class="row justify-content-around mt-4">
                <img
                  src={GithubHome}
                  style={{
                    width: "58px",
                    height: "30px",
                  }}
                  alt="githubIcon"
                ></img>
                <img
                  src={LinkedInHome}
                  style={{
                    width: "55px",
                    height: "30px",
                  }}
                  alt="linkedInIcon"
                ></img>
                <img
                  src={EmailHome}
                  style={{
                    width: "60px",
                    height: "30px",
                  }}
                  alt="emailIcon"
                ></img>
              </div>

              {/* Content here */}
              <div class="mt-4">
                <h1 class="row justify-content-center fw-bold">
                  Hello, Im Dustin Mayer
                </h1>
                <h2 class="row justify-content-center fw-bold">
                  Front-end Developer
                </h2>
                <h4 class="row justify-content-center mt-2 mx-4">
                  “Front-End Pro: Delivering User-Centric, Responsive Designs
                  with HTML, CSS, JavaScript, and Top Frameworks.”
                </h4>
              </div>
              <div>
                <button class="button-29">Contact Me</button>
              </div>
            </div>
            <div class="row justify-content-center">
              <img
                src={ArrowDownHome}
                style={{
                  width: "60px",
                  height: "40px",
                  marginTop: "60px",
                }}
                alt="continueDownIcon"
              ></img>
            </div>
          </div>
          {/* ------------------------ Emd of card body ----------------------- */}
        </div>
        {/* ----------------------- About Me Card ------------------------ */}

        <div class="card mt-4">
          <div class="card-body cardAbout">
            <h1 class="justify-content-center row" style={{ color: "#4F58A0" }}>
              About Me
            </h1>

            <div class="row justify-content-center  my-5">
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
      </div>
    </div>
  );
}

export default App;
