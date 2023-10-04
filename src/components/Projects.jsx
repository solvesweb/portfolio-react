import { CardProject } from "./CardProject";

export const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-white p-8 flex flex-col justify-center items-center my-8"
    >
      <h2 className="pb-4 text-sm text-left uppercase font-bold text-teal-400">
        Projects
      </h2>
      <CardProject />
    </div>
  );
};
