import { FaMapLocation } from "react-icons/fa6";
import { HiMailOpen } from "react-icons/hi";

export const Contact = () => {
  return (
    <div id="contact" className="bg-white flex flex-col justify-center items-center py-16 px-6">
      <div className="pb-8 text-center md:text-left">
        <h2 className='pb-4 text-xl uppercase font-bold text-teal-400'>Contact</h2>
        <h3 className="font-bold text-2xl drop-shadow-md">Feel free to reach out! Let's connect! 👇</h3>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex">
          <div className="rounded-full bg-white shadow-md p-3 mx-4">
            <FaMapLocation className="text-teal-400" size={30}/>
          </div>
          <div>
            <p className="font-bold">Location</p>
            <p className="text-gray-500">Valencia, Spain</p>
          </div>
        </div>
        <div className="flex">
          <div className="rounded-full bg-white shadow-md p-3 mx-4">
          <HiMailOpen className="text-teal-400" size={30}/>
          </div>
          <div>
            <p className="font-bold">Mail</p>
            <p className="text-gray-500">solvesweb@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
