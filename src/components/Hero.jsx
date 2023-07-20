import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import IconComponent from "./IconComponent";
import photo from "../assets/photo.png";

export const Hero = () => {
  return (
    <div className="py-8 px-6 bg-gray-100">
      <div >
        <div className="m-auto py-8 text-center md:text-left flex md:flex-row flex-col justify-around">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold drop-shadow-xl py-6">
              Frontend React Developer 👋
            </h1>
            <p className="text-lg py-6">
              Hi, I'm Jose Manuel Solves. A passionate Web Developer based in
              Valencia, Spain. 📍
            </p>
            <div className="p-6 flex justify-center md:justify-start md:px-0">
              <a
                href="https://www.linkedin.com/in/solves8/"
                target="_blank"
                
              >
                <FaLinkedin size={36} />
              </a>
              <a
                href="https://github.com/solvesweb"
                target="_blank"
                className="px-2"
              >
                <FaGithubSquare size={36} />
              </a>
            </div>
          </div>
          <div >
            <img className="hidden md:block drop-shadow-2xl rounded-full max-w-xs" src={photo} alt="Me" />
          </div>
        </div>
        
        <div className="p-1 m-1 flex justify-around md:justify-center items-center text-left">
          <p className="text-lg md:px-4 drop-shadow-md">My tech stack</p>
          <IconComponent iconName="html" />
          <IconComponent iconName="css" />
          <IconComponent iconName="js" />
          <IconComponent iconName="tailwind" />
          <IconComponent iconName="react" />
        </div>
      </div>
    </div>
  );
};
