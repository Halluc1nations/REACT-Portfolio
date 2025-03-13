import React from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";

const projects = [
  { title: "README generator", live: "#", repo: "https://github.com/Halluc1nations/README-Generator", img: img1 },
  { title: "Vehicle generator", live: "#", repo: "https://github.com/Halluc1nations/Module-8-Vehicle-Generator", img: img2 },
  { title: "Cost splitting calculator", live: "#", repo: "https://github.com/Halluc1nations/Project-1-Group-5 ", img: img3 },
  { title: "WeatherApp", live: "#", repo: "https://github.com/Halluc1nations/WeatherApp", img: img4 },
  { title: "Employee Tracker", live: "#", repo: "https://github.com/Halluc1nations/Employee_Tracker", img: img5 },
  { title: "Prework Study Guide", live: "#", repo: "https://github.com/Halluc1nations/prework-study-guide", img: img6 },
];

function Portfolio() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {projects.map((project, index) => (
        <div key={index} className="p-4 shadow-lg rounded-lg bg-gray-100">
          <div className="Image-Wrapper">
            <img src={project.img} alt={project.title} className="w-full h-40 object-cover rounded-lg" />
          </div>
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
