import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

export const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClickHome = () => {
    const element = document.getElementById("hero");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    
    handleNav();
  };

  const handleClickProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    
    handleNav();
  };

  const handleClickAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    
    handleNav();
  };

  const handleClickContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    
    handleNav();
  };

  return (
    <div className="flex justify-between items-center h-20 mx-auto px-8 text-gray-900">
      <h1 className="w-full text-2xl font-bold">Solves.</h1>
      <ul className="hidden font-semibold uppercase md:flex">
        <li className="p-4">
          <button onClick={handleClickHome}>HOME</button>
        </li>
        <li className="p-4">
          <button onClick={handleClickProjects}>PROJECTS</button>
        </li>
        <li className="p-4">
          <button onClick={handleClickAbout}>ABOUT</button>
        </li>
        <li className="p-4">
          <button onClick={handleClickContact}>CONTACT</button>
        </li>
      </ul>

      <div onClick={handleNav} className="md:hidden">
        {!nav ? <HiXMark size={26} /> : <HiBars3 size={26} />}
      </div>

      <div
        id="menu"
        className={
          !nav
            ? "fixed z-10 md:hidden left-0 top-0 w-[60%] font-semibold h-full bg-white border-r border-r-gray-600 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-2xl font-bold m-4 p-2">Solves.</h1>

        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-black">
            <button onClick={handleClickHome}>HOME</button>
          </li>
          <li className="p-4 border-b border-black">
            <button onClick={handleClickProjects}>PROJECTS</button>
          </li>
          <li className="p-4 border-b border-black">
            <button onClick={handleClickAbout}>ABOUT</button>
          </li>
          <li className="p-4">
            <button onClick={handleClickContact}>CONTACT</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
