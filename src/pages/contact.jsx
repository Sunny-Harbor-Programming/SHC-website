import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import emialjs from "@emailjs/browser";

export default function ContactPage() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);

  const service_id = "service_ugrysuk";
  const template_id = "template_l4ab3ia";
  const public_key = "eo1_RxL5bvU14Ai96";

  const send = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const desc = descRef.current.value;

    const template_params = {
      name,
      email,
      phone,
      desc,
    };
    emialjs.send(service_id, template_id, template_params, public_key).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        window.location = "/contact/ok";
      },
      function (error) {
        console.log("FAILED...", error);
        window.location = "/contact/failed";
      }
    );
  };

  useEffect(() => {
    btnRef.current.addEventListener("click", send);

    return () => {
      btnRef.current.removeEventListener("click", send);
    };
  });

  return (
    <div className="relative w-screen z-[0] bg-primary font-poppins">
      <div className="md:pt-[16vh] pt-[12vh] w-[90vw] mx-auto">
        <h1 className="text-[#FCA311] md:text-3xl text-[7vw] font-semibold">
          Ota yhteyttä!
        </h1>
        <h2 className="text-white md:text-xl text-[4.5vw] font-light pb-[6vh] md:w-[90vh] w-[80vw]">
          Ota meihin yhteyttä käyttämällä alla olevaa lomaketta tai tee
          kustannusarvio laskurillamme, niin vastaamme mahdollisimman pian!
        </h2>
      </div>
      <div className="md:grid md:grid-cols-2 lg:w-[90vw] md:w-[95vw] w-[80vw] mx-auto md:pb-[20vh] pb-[5vh]">
        <div className="md:border-r-[4px] border-[#FCA311] md:min-w-[400px] h-full overflow-hidden md:px-[2vw] md:w-full">
          <h2 className="md:text-lg text-[5.5vw] text-[#FCA311] pb-1">
            Nimi
          </h2>
          <input
            ref={nameRef}
            for="name"
            type="text"
            placeholder="Nimi"
            className="bg-[#E5E5E5] w-[90%] p-3 text-[#14213D] mb-[1.5vh]"
          ></input>
          <h2 className="md:text-lg text-[5.5vw] text-[#FCA311] pb-1">
            Sähköposti
          </h2>
          <input
            ref={emailRef}
            type="text"
            placeholder="Sähköposti"
            className="bg-[#E5E5E5] w-[90%] p-3 text-[#14213D] mb-[1.5vh]"
          ></input>
          <h2
            for="email"
            className="md:text-lg text-[5.5vw] text-[#FCA311] pb-1"
          >
            Puhelinnumero
          </h2>
          <input
            ref={phoneRef}
            type="text"
            placeholder="Puhelinnumero"
            className="bg-[#E5E5E5] w-[90%] p-3 text-[#14213D] mb-[1.5vh]"
          ></input>
          <h2 className="md:text-lg text-[5.5vw] text-[#FCA311] pb-1">
            Kuvaus
          </h2>
          <p className="md:text-base md:w-auto w-[70%] text-[4vw] md:leading-normal leading-[4.2vw] text-white font-light mb-2 md:mb-0">
            Kuvaile yksityiskohtaisesti tarvettasi.
          </p>
          <textarea
            ref={descRef}
            className="bg-[#E5E5E5] p-2 w-[90%] h-[20vh] text-[#14213D] mb-[3vh]"
          ></textarea>
          <button
            ref={btnRef}
            className=" bg-card2 md:w-[8vw] md:px-[1vw] px-[2.5vw] md:py-[0.5vw] py-[1vw] md:text-lg text-[5vw] text-white rounded-lg hover:cursor-pointer transition-all duration-[500ms] hover:scale-110 hover:bg-[#FCA311] mb-5"
          >
            Lähetä <i className="fa fa-angle-right"></i>
          </button>
        </div>
        <div className="md:flex hidden flex-col justify-center items-center border-l-[0px] border-[#FCA311] md:h-[90%] overflow-hidden px-[2vw] w-full hover:cursor-pointer">
          <Link
            to={"/price-estimate"}
            reloadDocument="true"
            className="w-[70%]"
          >
            <h1
              className="relative
                text-[#FCA311] text-5xl font-semibold
                "
            >
              Kustannusarvio
              <br />
              laskuriin
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#FCA311"
                className="z-[-1] absolute top-[2.8vw] right-[15vw] w-[2vw] h-[2vw]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
