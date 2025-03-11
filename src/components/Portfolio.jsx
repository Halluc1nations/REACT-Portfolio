import React from "react";
const projects = [
  { title: "README generator", live: "#", repo: "https://github.com/Halluc1nations/README-Generator" },
  { title: "Vehicle generator", live: "#", repo: "https://github.com/Halluc1nations/Module-8-Vehicle-Generator" },
  { title: "Cost splitting calculator", live: "#", repo: "https://github.com/Halluc1nations/Project-1-Group-5 " },
  { title: "WeatherApp", live: "#", repo: "https://github.com/Halluc1nations/WeatherApp" },
  { title: "Employee Tracker", live: "#", repo: "https://github.com/Halluc1nations/Employee_Tracker" },
  { title: "Prework Study Guide", live: "#", repo: "https://github.com/Halluc1nations/prework-study-guide" },
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
