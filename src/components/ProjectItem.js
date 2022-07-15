import React from "react";

function ProjectItem({ name, about, technologies }) {
  const techs = technologies.map((elem, index) => {
    return(
      <span key={index}>{elem}</span>
    )
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {techs}
      </div>
    </div>
  );
}

export default ProjectItem;
