"use client";
import React from "react";

const projects = [
  {
    title: "National ID Help Page Redesign",
    description:
      "Redesigned the official help page using React and Tailwind CSS. Implemented responsive design and user-friendly forms. Overcame challenges with legacy codebase (i8). Developed a custom Next.js server for testing purposes.",
    techStack: ["React", "Next.js", "Tailwind CSS", "i8"],
    
    link: "https://id.et/help",
  },
  {
    title: "Grievance Management System (GMS) Portal",
    description:
      "Built a dynamic GRM table with pagination, sorting, and updates. Managed state and integrated REST API for backend communication. Created a mini-dashboard for data insights. Implemented advanced search options and a responsive user panel.",
    techStack: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "REST API"],
    link: "https://github.com/abrahamt17/grievance-mgmt-portal-",
  },
  {
    title: "Song Manager App",
    description:
      "Fetched song data from JSONPlaceholder REST API. Added functionalities to add, edit, and delete records. Implemented show more/less feature for list items. Ensured responsive design for various devices.",
    techStack: ["React", "Tailwind CSS", "Redux", "Emotion", "Redux-Saga", "REST API"],
    link: "https://github.com/abrahamt17/Music-manager-with-RESTapi",
  },
];

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Projects Start ===== --> */}
      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="text-center text-black dark:text-white">
            <h2 className="text-4xl font-bold mb-8 ">My Projects & Collaborations</h2>
            <p className="mb-4 text-lg font-normal text-gray-600 dark:text-gray-400">
              Here are some of the projects and collaborations I have been part of.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-gray-200 dark:bg-gray-800 p-6 shadow-md flex flex-col justify-between"
                >
                  <div>
                    <h3 className="mb-4 text-xl font-bold">{project.title}</h3>
                    <p className="mb-1 text-sm dark:text-gray-400 normal">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.link}
                    className="mt-4 inline-block text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Projects End ===== --> */}
    </>
  );
};

export default Brands;
