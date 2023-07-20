import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-gray-950 text-gray-100 flex justify-around items-center p-10">
      <div>
        <p>Copyright © 2023. All rights are reserved</p>
      </div>
      <div className="flex">
        <a href="https://www.linkedin.com/in/solves8/" target="_blank" className="text-red">
          <FaLinkedin size={24} className="text-gray-100" />
        </a>
        <a href="https://github.com/solvesweb" target="_blank" className="px-2">
          <FaGithubSquare size={24} className="text-gray-100"/>
        </a>
      </div>
    </div>
  );
};
