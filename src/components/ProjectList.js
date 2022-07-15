import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectItemElements = projects.map((elem) => {
    return (
      <ProjectItem key={elem.id} name={elem.name} about={elem.about} technologies = {elem.technologies} />
    )
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
      {projectItemElements}
      </div>
    </div>
  );
}

export default ProjectList;
