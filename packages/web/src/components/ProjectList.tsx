import { ProjectType } from "../projects";
import Project from "./Project";

interface ProjectListProps {
  projects: ProjectType[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="flex flex-col justify-center rounded-lg w-4/5 text-white max-w-6xl">
      <div className="my-6">
        <h2>All projects</h2>
        <div className="text-[#868D96]">Showing runs from all projects</div>
      </div>
      <div className="p-4 border border-[#31363C] rounded-t-md font-bold bg-[#171B21]">
        {projects.length} project runs
      </div>
      {projects.map((project, projectIndex) => (
        <Project key={project.name} {...project} index={projectIndex} />
      ))}
    </div>
  );
}
