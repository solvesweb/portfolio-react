import { FaHtml5, FaBootstrap, FaCss3Alt, FaReact, FaAngular } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTailwindCss } from "react-icons/bi";
import { IconBox } from "./IconBox";
import { SiVite } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import stack from "../assets/stack.jpg"

export const Stack = () => {
  return (
    <div id="stack" className="bg-white flex flex-col justify-center items-center m-4 p-4">
      <h2 className="p-4 m-4 text-xl text-left uppercase font-bold text-teal-400">
        My Stack
      </h2>
      <div className="flex flex-col lg:flex-row p-4 m-4 gap-8">
        <p className="leading-7 tracking-wide max-w-lg">
          I have acquired skills in the development and maintenance of web
          applications using a variety of programming languages, including{" "}
          <b>Java</b>, <b>PHP</b>, <b>Python</b>, and <b>JavaScript</b>. I have
          worked with <b>SQL</b> databases to ensure data security and access,
          while adhering to quality standards, usability, and accessibility
          through <b>HTML</b> and <b>CSS</b>. Additionally, I have utilized
          tools such as <b>Git</b> and explored frameworks like <b>React</b> and{" "}
          <b>Angular</b>, as well as preprocessors such as <b>Sass</b> and{" "}
          <b>Less</b>.
        </p>
        <img className="max-h-60 rounded-2xl" src={stack} alt="About me" />
      </div>
      <div className="flex flex-wrap justify-center items-center m-4 p-4">
          <IconBox icon={<FaHtml5 />} color="black" size={40} bg="white" />
          <IconBox icon={<FaCss3Alt />} color="black" size={40} bg="white" />
          <IconBox
            icon={<BiLogoJavascript />}
            color="black"
            size={40}
            bg="white"
          />
          <IconBox
            icon={<BiLogoTailwindCss />}
            color="black"
            size={40}
            bg="white"
          />
          <IconBox icon={<FaBootstrap />} color="black" size={40} bg="white" />
          <IconBox icon={<FaReact />} color="black" size={40} bg="white" />
          <IconBox icon={<FaAngular />} color="black" size={40} bg="white" />
          <IconBox icon={<SiVite />} color="black" size={40} bg="white" />
          <IconBox icon={<BsGit />} color="black" size={40} bg="white" />{" "}
        </div>
    </div>
  );
};
