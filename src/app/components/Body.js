"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Lottie from "react-lottie";

function Body() {
  const animationData = require("../../../public/assets/projects.json");
  const [text, count] = useTypewriter({
    words: ["Hi, My Name is Chandimal", "Learn with Me", "I Love to code More"],
    loop: true,
    delaySpeed: 2000,
  });

  const container = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="py-8">
      <div className="container px-4 mx-auto">
        {/* First Part */}
        <div className="flex flex-col-reverse justify-between md:flex-row md:space-x-8">
          <div className="w-full flex flex-col item-start md:w-2/4 mt-0 md:mt-28 p-10">
            <h1 className="text-3xl lg:text-5xl font-semibold">
              <span className="mr-3 text-white">{text}</span>
              <Cursor />
            </h1>
            <p className="text-white text-xl md:text-2xl mb-3 mt-2">
              I am a DevOps Developer. I am creating CICD pipelines to
              Applicatios.
            </p>
            <div>
              <button className="bg-blue-400 text-white px-4 py-1 rounded mr-4 hover:bg-blue-600">
                Learn More
              </button>
              <button className="bg-gray-300 text-gray-700 px-4 py-1 rounded hover:bg-gray-400">
                Contact me
              </button>
            </div>
            <p className="text-blue-500 text-small font-normal mt-2">
              CICD | Troubleshooting | Linux
            </p>
            <h1 className="text-slate-400 text-xl">
              3 Years Experience | More Projects Done
            </h1>
          </div>
          <div className="md:w-1/2 z-auto pt-2 md:mt-0">
            <Lottie options={container} width={600} height={600} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Body;
