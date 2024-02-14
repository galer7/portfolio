import { PROJECTS } from "./projects";
import ProjectList from "./components/ProjectList";
import TopBar from "./components/TopBar";

function App() {
  return (
    <main>
      <TopBar />
      <div className="flex justify-center">
        <ProjectList projects={PROJECTS} />
      </div>
    </main>
  );
}

export default App;
