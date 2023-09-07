import { useEffect, useRef } from "react";
import capsuleImg from "../assets/capsule.png";
import earthVideo from "../assets/earth.mp4";
import earthImg from "../assets/earth.webp";
import logo from "../assets/shc_logo.png";
import AboutPage from "../pages/about.jsx";
import ContactPage from "../pages/contact.jsx";
import PartnersPage from "../pages/partners.jsx";
import SHCFooter from "../elements/shcFooter.jsx";
import ScrollingSlides from "../elements/scrollingSlides.jsx";
import { Link } from "react-router-dom";

const motto = [
  "Developing technology beyond the horizon.",
  "Your edge in technology.",
  "Web.",
  "Apps.",
  "Software & Hardware.",
  "We do it all.",
  "We are Sunny Harbor Consulting.",
];

let sectionOne = null;
let sectionSecond = null;
let oneRect = null;
let secondRect = null;
let navBarY = null;
let done = false;
let isMobile = window.innerWidth < 821;

export default function HomePage(language = "fi") {
  sectionOne = useRef(null);
  sectionSecond = useRef(null);

  useEffect(() => {
    oneRect = sectionOne.current.getBoundingClientRect();
    secondRect = sectionSecond.current.getBoundingClientRect();

    window.scrollTo(0, 0);

    // Animation for the background video
    const video = document.getElementById("backgroundVideo");
    video.playbackRate = 0.7;

    // Animation for the title description
    const titleDesc = document.getElementById("titleDesc");
    let current = 0;
    let currentChar = 0;
    let charLimit = motto[current].length;
    let waiting = 0;

    setInterval(() => {
      if (waiting == 0) {
        if (currentChar == 0) titleDesc.innerHTML = "";
        if (currentChar < charLimit) {
          titleDesc.innerHTML = motto[current]
            .concat(" ")
            .substring(0, currentChar + 1);
          currentChar++;
        } else {
          currentChar = 0;
          current++;
          waiting = current == motto.length ? 100 : 40;
          if (current >= motto.length) {
            current = 0;
          }
          charLimit = motto[current].length;
        }
      } else {
        waiting--;
      }
    }, 60);

    setTimeout(() => {
      navBarY = document
        .getElementById("navBarWrapper")
        .getBoundingClientRect().y;
    }, 1000);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div id="homeWrapper" className="bg-main">
      <img src={logo} className="absolute z-10 w-24 md:w-32 md:top-6 top-3 lg:left-16 md:left-10 left-3"></img>
      <meta http-equiv="ScreenOrientation" content="autoRotate:disabled"></meta>
      <div
        id="main"
        className="flex justify-center h-screen mt-0 overflow-hidden"
      >
        <video
              autoPlay
              muted
              loop
              playsInline
              id="backgroundVideo"
              className="top-0 z-0 object-cover w-full p-0 m-0"
            >
              <source src={earthVideo} type="video/mp4" />
            </video>
        <div
          id="content"
          className="absolute flex flex-col items-center justify-center h-screen text-white"
        >
          <h1 className="text-2xl font-bold text-center cursor-default select-none md:text-5xl font-poppins lg:text-6xl text-h1">
            Sunny Harbor Consulting
          </h1>
          <p
            id="titleDesc"
            className="font-normal text-center cursor-default select-none font-raleway sm:text-2xl lg:text-3xl text-p"
          ></p>
          <div className="flex absolute flex-col justify-end top-[5vh] h-[90vh] w-screen">
          </div>
          <h2 className="text-base fixed lg:bottom-[5vh] md:bottom-5 bottom-3 lg:left-10 md:left-5 font-medium text-left cursor-default select-none font-poppins md:text-lg text-h1">sunnyharborconsulting@gmail.com</h2>
        </div>
      </div>
      <div id="content" className="hidden mx-0 bg-white">
        <div id="about" className="block w-full h-screen p-0 m-0">
          <div className="xl:h-screen h-1/2 z-[0]">
            <div
              id="storyDiv"
              ref={sectionOne}
              className="relative grid w-full h-full grid-cols-1 p-5 pt-5 m-auto bg-black text-h2 lg:p-32 xl:h-screen"
            >
              <div className="relative overflow-hidden w-full z-[10]">
                <h1 className="text-4xl italic font-bold xl:text-7xl font-poppins">
                  Sunny Harbor Consulting
                </h1>
                <h2 className="relative w-full mt-2 text-base font-poppins font-extralight lg:w-2/3 md:w-2/3 text-h1 sm:text-2xl md:text-3xl lg:text-5xl 2xl:text-5xl">
                  Sunny Harbor Consulting eli SHC on nuori ja taitava
                  ohjelmistoyritys, joka erikoistuu innovatiivisiin web- ja
                  mobiilisovelluksiin.
                  <br />
                  <br />
                  <br />
                  SHC tekee mobiili- ja tietokonesovelluksia, nettisivuja sekä
                  embedded-toteutuksia. Osaamisemme vain laajenee tästä ja
                  panostamme uuden osaamisen hankkimiseen.
                </h2>
              </div>
              <img
                className="h-4/5 absolute aspect-square xl:right-5 right-0 z-[0] xl:bottom-[8%] bottom-[0]"
                src={earthImg}
              />
            </div>
          </div>
          <div className="xl:h-screen h-1/2 z-[0]">
            <div
              id="storyDiv"
              ref={sectionSecond}
              className="relative grid w-full h-screen grid-cols-1 p-5 pt-5 m-auto bg-black text-h2 lg:p-32"
            >
              <div className="inline-block align-middle overflow-hidden w-full z-[10]">
                <h1 className="text-4xl xl:text-7xl font-poppins">Mitä osaamme?</h1>
                <h2 className="relative w-full mt-2 mb-4 text-base font-poppins font-extralight lg:w-2/3 md:w-2/3 text-h1 sm:text-2xl md:text-3xl lg:text-5xl 2xl:text-5xl lg:mb-10 md:mb-7">
                Olemme moniosaava ohjelmistokehitys yritys. Toteutamme teille mobiili-, netti- ja embedded-sovelluksia. <br/><br/>
                Meillä on kokemusta seuraavien ohjelmointikielien kanssa: C, C++, Python, Golang, JavaScript, TypeScript, Dart, Java, Kotlin, Swift, Lua, Rust, Mojo ja Assembly (x86, ARM ja Z80).
                </h2>
                {/* <Link to="#" className="px-3 font-light text-white border-2 border-white border-solid font-poppins lg:text-4xl md:text-2xl hover:cursor-pointer">Lue lisää...</Link> */}
              </div>
              <img
                src={capsuleImg}
                className="absolute top-0 left-0 object-cover w-full h-full grayscale"
              />
            </div>
          </div>
{/*           <AboutPage />
          <PartnersPage />
          <ContactPage /> */}
        </div>
      </div>
    </div>
  );
}
