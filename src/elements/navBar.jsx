import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shc_logo.png";

export default function NavBar() {
  let isMobile = false;
  let vhPx = window.innerHeight * 0.01;
  let navItems = null;
  let navBar = null;

  const navItemsRef = useRef(null);
  const navBarRef = useRef(null);

  useEffect(() => {
    let navBar = navBarRef.current;
    let vhPx = window.innerHeight * 0.01;
    navItems = navItemsRef.current;

    // Function to apply frosted glass effect
    function applyFrostedGlassEffect() {
      navBar.style.background = "rgba(255, 255, 255, 0.1)";
      navBar.style.backdropFilter = "blur(10px)";
    }

    if (window.location.hash !== "") {
      if (
        document.cookie
          .split(";")
          .some((item) => item.trim().startsWith("scrollTo="))
      ) {
        const elem = document.getElementById(window.location.hash.substring(1));
        if (elem !== null) {
          window.scrollTo(
            0,
            elem.offsetTop -
              document.getElementById("navBar").getBoundingClientRect().height
          );
          document.cookie =
            "scrollTo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
      }
    }

    if (window.location.pathname === "/") {
      if (!isMobile) {
        if (window.scrollY < vhPx * 3) {
          //applyFrostedGlassEffect();
          navBar.style.background = "none";
        }
      }
    } else {
      navBar.style.background = "#111111";
      navBar.style.backdropFilter = "none"; 
    }

    const onScroll = () => {
      if (window.location.pathname === "/") {
        if (!isMobile) {
          if (window.scrollY < vhPx * 3) {
            //applyFrostedGlassEffect();
            navBar.style.background = "none";
          } else {
            navBar.style.background = "#111111";
            navBar.style.backdropFilter = "none"; 
          }
        }
      } else {
        navBar.style.background = "#111111";
        navBar.style.backdropFilter = "none"; 
      }
    };
    window.addEventListener("scroll", onScroll);

    const onResize = () => {
      vhPx = window.innerHeight * 0.01;
      /* document.body.style.overflow = "scroll"; */ //this causes the overflow on ubuntu etc
      if (window.innerWidth < 770) {
        console.log("mobile");
        isMobile = true;
        navBar.style.background = "#111111";
      } else {
        isMobile = false;
      }
    };
    onResize();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav ref={navBarRef} id="navBar" className="fixed z-[11] h-[8vh] transition-all duration-[150ms] bg-primary flex justify-between w-screen px-[2vw] text-white text-center lg:text-[1.75vh] font-poppins">
      <div className="flex">
        <Link className="my-auto lg:min-w-[100px] hover:cursor-pointer" reloadDocument="true" to={"/"}><img src={logo} className="h-[7vh] my-auto"></img></Link>
        <div ref={navItemsRef} className="z-[10] lg:bg-transparent bg-primary transition-all duration-[250ms] lg:grid grid-cols-6 gap-4 lg:my-auto lg:text-center lg:font-light font-semibold text-left lg:text-[1.75vh] text-[3vh] lg:px-[3vw] px-[5vw] lg:relative fixed lg:top-auto top-[8vh] left-0 lg:h-auto h-[0vh] lg:w-auto w-screen overflow-hidden">
          <Link to={"/kustannusarviolaskuri"} reloadDocument="true"><h1 className="hover:cursor-pointer transition duration-500 hover:text-secondary hover:scale-105  lg:px-[0] px-[2vw] lg:border-l-0 border-l-4 border-white lg:my-auto my-[3vh]">Kustannusarvio</h1></Link>
          {/* <h1 className="hover:cursor-pointer md:px-[0] px-[2vw] md:border-l-0 border-l-4 border-white md:my-auto my-[3vh]" onClick={() => {
            if (window.location.pathname == "/") {
              window.scrollTo(0, document.getElementById("team").offsetTop - document.getElementById("navBar").getBoundingClientRect().height);
              if (isMobile) {
                navItems.style.height = "0vh";
                navItems.style.borderTop = "0px solid #FCA311";
                document.body.style.overflow = "scroll"
              }
            } else {
              window.location = "/#team";
              document.cookie = "scrollTo=true";
            }
          }}>Tiimi</h1> */}
          {/* <h1 className="hover:cursor-pointer md:px-[0] px-[2vw] md:border-l-0 border-l-4 border-white md:my-auto my-[3vh]" onClick={() => {
            if (window.location.pathname == "/") {
              window.scrollTo(0, document.getElementById("customers").offsetTop - document.getElementById("navBar").getBoundingClientRect().height);
              if (isMobile) {
                navItems.style.height = "0vh";
                navItems.style.borderTop = "0px solid #FCA311";
                document.body.style.overflow = "scroll"
              }
            } else {
              window.location = "/#customers";
              document.cookie = "scrollTo=true";
            }
          }}>Asiakkaat</h1> */}
          <h1 className="hover:cursor-pointer transition duration-500 hover:text-secondary hover:scale-105 lg:px-[0] px-[2vw] lg:border-l-0 border-l-4 border-white lg:my-auto my-[3vh]" onClick={() => {
            if (window.location.pathname == "/") {
              window.scrollTo(0, document.getElementById("#referensseja").offsetTop - document.getElementById("navBar").getBoundingClientRect().height);
              if (isMobile) {
                navItems.style.height = "0vh";
                navItems.style.borderTop = "0px solid #FCA311";
                document.body.style.overflow = "scroll"
              }
            } else {
              window.location = "/#referensseja";
              document.cookie = "scrollTo=true";
            }
          }}>Referenssejä</h1>
          <Link to={"/blogs"} reloadDocument="true"><h1 className="hover:cursor-pointer transition duration-500 hover:text-secondary hover:scale-105 lg:px-[0] px-[2vw] lg:border-l-0 border-l-4 border-white lg:my-auto my-[3vh] ">Blogit</h1></Link>
          <Link to={"/ota-yhteytta"} reloadDocument="true" className="lg:hidden"><h1 className="hover:cursor-pointer lg:px-[0] px-[2vw] lg:border-l-0 border-l-4 border-white lg:my-auto my-[3vh]">Ota yhteyttä</h1></Link>
          <Link to={"/palvelut"} reloadDocument="true"><h1 className="hover:cursor-pointer transition duration-500 hover:text-secondary hover:scale-105 lg:px-[0] px-[2vw] lg:border-l-0 border-l-4 border-white lg:my-auto my-[3vh] ">Palvelut</h1></Link>
          <h1 className="hover:cursor-pointer transition duration-500 hover:text-secondary hover:scale-105 lg:px-[0] px-[2vw] lg:border-l-0 border-l-4 border-white lg:my-auto my-[3vh]" onClick={() => {
            if (window.location.pathname == "/") {
              window.scrollTo(0, document.getElementById("calendar").offsetTop - document.getElementById("navBar").getBoundingClientRect().height);
              if (isMobile) {
                navItems.style.height = "0vh";
                navItems.style.borderTop = "0px solid #FCA311";
                document.body.style.overflow = "scroll"
              }
            } else {
              window.location = "/#calendar";
              document.cookie = "scrollTo=true";
            }
          }}>Tapaaminen</h1>
        </div>
      </div>
      <div className="border-solid transition duration-500 hover:scale-110  hover:shadow-md hover:border-secondary  border-[#FFFFFF] border-2 w-[15vh] my-auto lg:block hidden">
        <Link reloadDocument="true" to={"/ota-yhteytta"}>
          <h1 className="text-[#FFFFFF] hover:text-secondary hover:font-extrabold font-semibold hover:cursor-pointer transition-all duration-[250ms] my-auto py-[0.5vw] w-full h-full">
            Ota yhteyttä!
          </h1>
        </Link>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#FFFFFF"
        className="w-[5vh] h-[5vh] my-auto lg:hidden block"
        onClick={(e) => {
          if (navItems.getBoundingClientRect().height < 10) {
            navItems.style.height = "92vh";
            navItems.style.borderTop = "3px solid #FCA311";
            document.body.style.overflow = "hidden";
          } else {
            navItems.style.height = "0vh";
            navItems.style.borderTop = "0px solid #FCA311";
            document.body.style.overflow = "scroll";
          }
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </nav>
  );
}
