import { useEffect } from "react";
import { useState } from "react";
import Project from "./ImportProject.jsx";
import "./ProjectPage.css";

export default function ProjectPage() {
  let [projects, setProjects] = useState([]);
  let i = 0;

  useEffect(() => {
      if (projects.length > 0) {
          return
      }
    fetch("https://api.github.com/users/PaN8bors/repos?per_page=100")
      .then((resp) => {
        return resp.json();
      })
      .then((projects) => {
        const filtered = projects.filter((project) => {
          return project.stargazers_count >= 1;
        });
        console.log(filtered);
        setProjects(filtered);
      });
  });
  return (
    <>
      <div className="projBox boxes">
        <h1>Projects:</h1>
      </div>
      <div className="pjBox boxes">
            <div className="projects">
                {projects.map((project) => {
                i += 1;
                return (
                    <div className="gitBox">
                        <Project
                            name={project.name}
                            description={project.description}
                            key={i}
                        ></Project>
                    </div>
            );
        })}
        </div>
      </div>
    </>
  );
}
