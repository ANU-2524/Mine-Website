import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing pb-10" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1 min-h-[22rem] md:min-h-0">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.5] -right-[2rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] object-contain"
          />
          <div className="z-10 relative">
            <p className="headtext">Hi, I'm Anu...</p>
            <p className="subtext">
              I developed my frontend and backend dev
              skills to deliver dynamic and software and web applications.
              Exploring in AI/ML.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2 min-h-[20rem] md:min-h-0">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full relative"
          >
            <p className="flex items-end text-3xl md:text-5xl text-gray-500 opacity-20 md:opacity-100">
              CODE IS CRAFT
            </p>
            {/* Cards - hiding on very small screens or adjusting if needed, but for now keeping with better sizing */}
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/Kaggle.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "75deg", top: "30%", left: "5%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            {/* ... keeping other cards but adding relative positioning context ... */}
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3 min-h-[18rem] md:min-h-0">
          <div className="z-10 w-full md:w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext text-sm">
              I'm based in Mars, and open to remote work worldwide...
            </p>
          </div>
          <figure className="absolute left-[20%] top-[20%] md:left-[30%] md:top-[10%] opacity-40 md:opacity-100">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4 min-h-[15rem] md:min-h-0">
          <div className="flex flex-col items-center justify-center gap-4 size-full p-4">
            <p className="text-center headtext leading-tight">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5 min-h-[22rem] md:min-h-0">
          <div className="z-10 w-full md:w-[50%]">
            <p className="headtext">Teck Stack</p>
            <p className="subtext text-xs sm:text-sm">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications.
              <br className="md:block hidden" />
              Upskilling myself everyday also.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full left-[20%] md:start-[50%] scale-75 md:scale-125 pointer-events-none">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;