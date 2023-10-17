import { CardProject } from "./CardProject";

export const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-white flex flex-col justify-center items-center m-4 p-4"
    >
      <h2 className="p-4 text-xl text-left uppercase font-bold text-teal-400">
        Projects
      </h2>
      <CardProject />
    </div>
  );
};
