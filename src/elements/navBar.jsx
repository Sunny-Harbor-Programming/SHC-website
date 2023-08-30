import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shc_logo.png";

export default function NavBar() {
  const isDesktop = window.innerWidth > 768;
  const [navbar, setNavbar] = useState(isDesktop);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [clickedButton, setClickedButton] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollingDown = currentScrollPos > prevScrollPos;

      if (window.innerWidth > 768) {
        setNavbar(!scrollingDown || currentScrollPos < 100);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const listClassName = navbar ? "block" : "hidden";
  const isRootPath = window.location.pathname === "/";

  return (
    <nav
      className={`w-full absolute top-0 z-50 bg-main shadow ${
        navbar ? "md:translate-y-0" : "md:-translate-y-full"
      } md:transition-transform md:duration-300 md:ease-in-out md:fixed md:z-50`}
    >
      <div className="justify-between bg-transparent px-4 mx-auto lg:max-w-screen-2xl md:items-center md:flex md:px-0 md:bg-transparent ">
        <div>
          <div className="flex items-center justify-between py-2 md:block">
            <a href="/">
              <img className="w-1/6 font-bold" src={logo} alt="SHC" />
              {/* <h1 className="text-3xl text-white font-extrabold italic">Sunny Harbor Consulting</h1> */}
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`text-white flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${listClassName}`}
          >
            <ul className="items-center justify-center font-body space-y-8 md:flex md:space-x-12 md:space-y-0 ">
              <li>
                <Link
                  to="/about"
                  className={`cursor-pointer text-h2`}
                  onClick={() => setClickedButton("tietoa-meistä")}
                >
                  Tietoa meistä
                </Link>
              </li>
              <li>
                <Link
                  to="/partners"
                  className={`cursor-pointer text-h2`}
                  onClick={() => setClickedButton("sisalto")}
                >
                  Kumppanit
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className={`cursor-pointer text-h2`}
                  onClick={() => setClickedButton("tiimi")}
                >
                  Palvelumme
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`cursor-pointer text-h2`}
                  onClick={() => setClickedButton("tiimi")}
                >
                  Ota yhteyttä
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}