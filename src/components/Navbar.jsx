import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  
  return (
    <div className="flex justify-between items-center h-20 mx-auto px-8 text-gray-900">
      <h1 className="w-full text-2xl font-bold">Solves.</h1>
      <ul className="hidden md:flex">
        <li className="p-4"><a href="/Hero">Home</a></li>
        <li className="p-4">About</li>
        <li className="p-4">Projects</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="md:hidden">
        {!nav ? <HiXMark size={26} /> : <HiBars3 size={26} />}
      </div>

      <div
        className={
          !nav
            ? "fixed z-10 md:hidden left-0 top-0 w-[60%] font-semibold h-full bg-white border-r border-r-gray-600 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-2xl font-bold m-4 p-2">Solves.</h1>

        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-black"><a href="/Hero">Home</a></li>
          <li className="p-4 border-b border-black"><a href="/AboutMe">About</a></li>
          <li className="p-4 border-b border-black"><a href="/Projects">Projects</a></li>
          <li className="p-4"><a href="/Contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};