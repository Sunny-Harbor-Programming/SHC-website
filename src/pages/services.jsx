import React from "react";

function ourServices() {
  return (
    <div className="w-screen overflow-x-hidden p-36 bg-primary">
      <h2 className="items-center justify-center w-full mb-6 text-4xl font-bold text-white md:mb-0 hover-text text-start">
        Meidän palvelut
      </h2>
      <br />
      <div className="grid grid-cols-1 gap-5 px-20 md:grid-cols-4">
        <div className="h-[380px] rounded-2xl p-7 flex flex-col justify-between">
          <h2 className="text-xl font-bold text-white uppercase">
            Web- ja sovellusekehitys
          </h2>
          <p className="text-white text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus esse error, molestiae, nostrum sapiente earum
            adipisci iure placeat nulla dicta aspernatur, sunt blanditiis quasi
            fuga reiciendis maiores omnis soluta quo.
          </p>
          <div className="flex justify-end w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="white"
              className="w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>
        <div className="h-[380px] rounded-2xl p-7 flex flex-col justify-between">
          <h2 className="text-xl font-bold text-white uppercase">
            Nettisivujen teko
          </h2>
          <p className="text-white text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus esse error, molestiae, nostrum sapiente earum
            adipisci iure placeat nulla dicta aspernatur, sunt blanditiis quasi
            fuga reiciendis maiores omnis soluta quo.
          </p>
          <div className="flex justify-end w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="white"
              className="w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>
        <div className="h-[380px] rounded-2xl p-7 flex flex-col justify-between">
          <h2 className="text-xl font-bold text-white uppercase">
            Markkinointi
          </h2>
          <p className="text-white text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus esse error, molestiae, nostrum sapiente earum
            adipisci iure placeat nulla dicta aspernatur, sunt blanditiis quasi
            fuga reiciendis maiores omnis soluta quo.
          </p>
          <div className="flex justify-end w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="white"
              className="w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>
        <div className="h-[380px] rounded-2xl p-7 flex flex-col justify-between">
          <h2 className="text-xl font-bold text-white uppercase">
            Konsultointi
          </h2>
          <p className="text-white text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus esse error, molestiae, nostrum sapiente earum
            adipisci iure placeat nulla dicta aspernatur, sunt blanditiis quasi
            fuga reiciendis maiores omnis soluta quo.
          </p>
          <div className="flex justify-end w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="white"
              className="w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ourServices;
