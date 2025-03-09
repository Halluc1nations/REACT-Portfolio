import React from "react";
const projects = [
  { title: "Project 1", live: "#", repo: "#" },
  { title: "Project 2", live: "#", repo: "#" },
  { title: "Project 3", live: "#", repo: "#" },
  { title: "Project 4", live: "#", repo: "#" },
  { title: "Project 5", live: "#", repo: "#" },
  { title: "Project 6", live: "#", repo: "#" },
];

function Portfolio() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {projects.map((project, index) => (
        <div key={index} className="p-4 shadow-lg rounded-lg bg-gray-100">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <div className="mt-2">
            <a href={project.live} className="text-blue-500 mr-2 mx-3">
              Live Demo
            </a>
            <a href={project.repo} className="text-blue-500">
              GitHub Repo
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Portfolio;
