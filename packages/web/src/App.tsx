import { PROJECTS } from "./projects";
import ProjectList from "./components/ProjectList";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <div className="flex flex-col h-screen ml-20">
        <ProjectList projects={PROJECTS} />
      </div>
    </>
  );
}

export default App;
