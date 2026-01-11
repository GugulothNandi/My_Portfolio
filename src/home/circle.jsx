import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

function Circle() {
  const [active, setActive] = useState(false);

  return (
    <div className="relative flex flex-col-reverse md:flex-row h-screen md:gap-x-12 ">
      <div className="relative flex flex-col items-center md:items-start justify-center text-center md:text-left gap-4 ml-0 md:ml-16 z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white whitespace-nowrap">
          I am a Developer
        </h1>

        <TypeAnimation
          sequence={[
            "Hi, I'm Guguloth Nandi 👋",
            1000,
            "Welcome to my Portfolio!",
            2000,
            "Frontend & Full-Stack Developer",
            2000,
          ]}
          wrapper="span"
          cursor
          repeat={Infinity}
          className="text-2xl text-white font-semibold"
        />
      </div>

      <div className="flex-1 flex items-center justify-center relative z-10">
        <div
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          onClick={() => setActive(!active)}
          className={`relative w-80 h-80 md:w-96 md:h-96 rounded-full cursor-pointer
            flex items-center justify-center p-2
            transition-all duration-500 ease-out
            ${
              active
                ? "top-[-60px] scale-110 bg-sky-200/40 shadow-[0_0_100px_rgba(56,189,248,0.6)]"
                : "top-0 bg-transparent shadow-[0_0_20px_rgba(56,189,248,0.4)]"
            }
          `}
        >
          <img
            src="/profile.png"
            alt="Developer"
            className="w-full h-full rounded-full object-cover pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Circle;
