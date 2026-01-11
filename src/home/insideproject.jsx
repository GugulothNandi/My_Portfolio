import React from "react";

import patientDashboard from "../assets/projects/patient-dashboard.png";
import assignmentApp from "../assets/projects/assignment-app.png";
import smartLauncher from "../assets/projects/smart-launcher.png";
import taskManager from "../assets/projects/task-manager.png";
import addPhotoUrl from "../assets/projects/addPhotoUrl.png";

const projects = [
  {
    title: "Patient Dashboard",
    description:
      " Developed a responsive healthcare dashboard to manage patient data and visualize statistics. Implemented dynamic charts using Chart.js for data-driven insights. Designed reusable components with a mobile-first responsive layout.",
    image: patientDashboard,
    liveLink: "https://patient-dashboard-three-alpha.vercel.app/",
    githubLink: "https://github.com/GugulothNandi/patient-dashboard",
  },
  {
    title: "Jarurat Care– Patient Records Dashboard",
    description:
      " Built a responsive patient records dashboard using React.js and Bootstrap 5. Integrated JSONPlaceholder API to fetch and display patient data dynamically. Implemented search functionality, patient detail modal, and local form-based record addition.",
    image: assignmentApp,
    liveLink: "https://assignement-nine.vercel.app/",
    githubLink: "https://github.com/GugulothNandi/Assignement",
  },
  {
    title: "Smart Launcher",
    description:
      " Built a fast and modern launcher interface using React.js, Vite and Tailwind CSS.js with Vite for optimized performance. Designed a clean UI with reusable components and responsive layout.",
    image: smartLauncher,
    liveLink: "https://smart-launcher-self.vercel.app/",
    githubLink: "https://github.com/GugulothNandi/Smart-Launcher",
  },
  {
    title: "Task Management App",
    description:
      "Developed a task management application with user authentication and protected routes. Implemented login-based access control and state-driven task management",
    image: taskManager,
    liveLink: "https://devtask-smoky.vercel.app/",
    githubLink: "https://github.com/GugulothNandi/devtask",
  },
  {
    title: "Add Photo URL App",
    description:
      "Built a simple React application that allows users to add and display images using direct image URLs. Focused on state management, dynamic rendering, and clean UI handling.",
    image: addPhotoUrl,
    liveLink:
      "https://patient-dashboard-k7bh-luz302s1g-guguloth-nandis-projects.vercel.app/",
    githubLink: "https://github.com/GugulothNandi/AddPhoto-URL",
  },
];

function Projects() {
  return (
    <section className="px-8 pt-32 pb-24 flex flex-col items-center w-full ">
      <div className="h-20 flex flex-col items-center justify-center pt-28 pb-16 w-full">
        <div className="h-20">
          <h2 className="text-4xl font-bold mb-6">My Projects</h2>
        </div>
      </div>

      <div className="flex flex-col gap-16 max-w-6xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12
              rounded-2xl shadow-lg overflow-hidden 
             transition-all duration-300
             hover:shadow-[0_0_20px_8px_rgba(255,255,255,0.6)]"
          >
            <div className=" w-full md:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-80 object-cover rounded-xl shadow-md"
              />
            </div>

            <div className="flex-1 flex flex-col justify-center gap-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                {project.title}
              </h3>

              <p className=" text-lg leading-relaxed">{project.description}</p>

              <div className="flex gap-4 mt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-white hover:bg-gray-300 text-black py-2 rounded-lg font-medium transition-colors duration-300"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg font-medium transition-colors duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
