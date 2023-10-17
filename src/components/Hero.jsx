import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

import photo from "../assets/photo.png";

export const Hero = () => {
  return (
    <div
      id="hero"
      className="py-8 px-6 bg-gray-100 lg:pt-20 2xl:pt-40 3xl:pt-50"
    >
      <div>
        <div className="m-auto py-8 text-center md:text-left flex md:flex-row flex-col justify-around">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold drop-shadow-xl py-6">
              Web Developer 👋
            </h1>
            <p className="text-lg py-6">
              Hi, I'm Jose Manuel Solves. A passionate Web Developer based in
              Valencia, Spain. 📍
            </p>
            <div className="p-6 flex justify-center md:justify-start md:px-0">
              <a
                href="https://www.linkedin.com/in/solves8/"
                rel="noreferrer"
                target="_blank"
              >
                <FaLinkedin size={36} />
              </a>
              <a
                href="https://github.com/solvesweb"
                rel="noreferrer"
                target="_blank"
                className="px-2"
              >
                <FaGithubSquare size={36} />
              </a>
            </div>
          </div>
          <div>
            <img
              className="hidden md:block drop-shadow-2xl rounded-full max-w-xs"
              src={photo}
              alt="Me"
            />
          </div>
        </div>

        {/* <div className="rounded-full bg-white shadow-md p-3 mx-4">
            <FaHtml5 className="text-orange-600" size={40} />
          </div>
          <div className="rounded-full bg-white shadow-md p-3 mx-4">
            <FaCss3Alt className="text-blue-500" size={40} />
          </div>
          <div className="rounded-full bg-white shadow-md p-3 m-6">
            <BiLogoJavascript className="text-yellow-400" size={40} />
          </div>
          <div className="rounded-full bg-white shadow-md p-3 mx-4">
            <BiLogoTailwindCss className="text-cyan-500" size={40} />
          </div>
          <div className="rounded-full bg-white shadow-md p-3 mx-4">
            <FaReact className="text-blue-400" size={40} />
          </div> */}
      </div>
    </div>
  );
};
