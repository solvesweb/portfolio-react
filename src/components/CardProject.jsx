import serra from "../assets/serra.png";
import movies from "../assets/movies.png";
import gifapp from "../assets/gifapp.png";

export const CardProject = () => {
  return (
    <div className="flex text-center flex-wrap gap-16 justify-center my-8">
      <div className="rounded-md bg-gray-100 shadow-md pb-4 max-w-md">
        <h3 className="pt-4 text-xl font-bold">The Movies App</h3>
        <img className="py-4" src={movies} alt="" />
        <div className="flex justify-center pb-4">
          <p className="m-2 px-2 font-bold border-2 border-black">JavaScript</p>
          <p className="m-2 px-2 font-bold border-2 border-black">React</p>
        </div>
        <button className="bg-teal-400 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded mb-2">
          <a
            href="https://movie-solves.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            Go Demo
          </a>
        </button>
      </div>
      <div className="rounded-md bg-gray-100 shadow-md pb-4 max-w-md">
        <h3 className="pt-4 text-xl font-bold">Giff App</h3>
        <img className="py-4" src={gifapp} alt="" />

        <div className="flex justify-center pb-4">
          <p className="m-2 px-2 font-bold border-2 border-black">JavaScript</p>
          <p className="m-2 px-2 font-bold border-2 border-black">React</p>
        </div>
        <button className="bg-teal-400 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded mb-2">
          <a
            href="https://gifapp-solves.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            Go Demo
          </a>
        </button>
      </div>
      <div className="rounded-md bg-gray-100 shadow-md pb-4 max-w-md">
        <h3 className="pt-4 text-xl font-bold">Serra Abogados</h3>
        <img className="py-4" src={serra} alt="" />
        <div className="flex justify-center pb-4">
          <p className="m-2 px-2 font-bold border-2  border-black	">CSS</p>
          <p className="m-2 px-2 font-bold border-2 border-black">JavaScript</p>
        </div>
        <button className="bg-teal-400 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded mb-2">
          <a
            href="https://serra-abogados.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            Go Demo
          </a>
        </button>
      </div>
    </div>
  );
};
