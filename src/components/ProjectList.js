import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const MyProjectItems = projects.map((element)=>
  <ProjectItem key = {element.id}
  name = {element.name}
  about = {element.about}
  technologies = {element.technologies} 
  />
  )
  console.log(projects)
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{ MyProjectItems}</div>
    </div>
  );
}

export default ProjectList;
