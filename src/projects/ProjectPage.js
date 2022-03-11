import Typewriter from 'typewriter-effect';
import { useEffect } from "react";
import { useState } from "react";
import Project from "./ImportProject.jsx";
import "./ProjectPage.css";
import JS from "../Images/js.png";

export default function ProjectPage() {
  let [projects, setProjects] = useState([]);
  let i = 0;

  useEffect(() => {
    if (projects.length > 0) {
      return;
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
        <h1>Projects:
        <span className='font2'>
        <Typewriter onInit={(typewriter) => {typewriter
                    .start()
                    .pauseFor(1000)
                    .typeString('JavaScript class projects from SnapIT')
                  }}
              />
            <div className="iconBox2">
              <img src={JS} />
            </div>
        </span>
        </h1>
      </div>
      <div className="pjBox boxes">
        <div className="projects">
          {projects.map((project) => {
            i += 1;
            return (
              <Project
                name={project.name}
                url={project.html_url}
                description={project.description}
                key={i}
              ></Project>
            );
          })}
        </div>
      </div>
    </>
  );
}
