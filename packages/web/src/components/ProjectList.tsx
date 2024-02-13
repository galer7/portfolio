import { ProjectType } from "../projects";
import Project from "./Project";

interface ProjectListProps {
  projects: ProjectType[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="flex justify-center flex-col border-slate-300 rounded-lg w-full text">
      <div>All projects</div>
      <div>Showing runs from all projects</div>
      <div>{projects.length} project runs</div>
      {projects.map((project) => (
        <Project key={project.name} {...project} />
      ))}
    </div>
  );
}
