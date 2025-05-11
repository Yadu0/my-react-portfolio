import React from 'react';
import GitHubProjects from '../components/GitHubProjects';
import ProjectDetails from './Pages/ProjectDetails';
 // Ensure this import is correct

const Projects = () => {
  const demoProjects = [
    {
      id: 1,
      name: "Diseases Detection App on Xcode",
      description: "A project showcasing a Diseases Detection App developed using Xcode.",
    },
    {
      id: 2,
      name: "Women Safety AI App",
      description: "An AI-powered Women Safety app designed to enhance personal safety.",
    },
    {
      id: 3,
      name: "Flutter Design",
      description: "A project demonstrating Flutter UI/UX design principles.",
    },
  ];

  return (
    <section className="my-16 px-4 md:px-8">
      <h2 className="text-white text-3xl font-bold mb-6">My Projects</h2>
      
      {/* Render demo projects */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {demoProjects.map((project) => (
          <div key={project.id} className="bg-white/5 border border-white/10 p-4 rounded-xl">
            <h3 className="text-white text-xl font-bold">{project.name}</h3>
            <p className="text-gray-400 text-sm mb-2">{project.description}</p>
            <a href="#" className="text-blue-400 text-sm hover:underline">
              View on GitHub
            </a>
          </div>
        ))}
      </div>

      {/* GitHub auto-fetching projects */}
      <h2 className="text-white text-2xl font-semibold mt-12 mb-4">GitHub Repositories</h2>
      <GitHubProjects />
    </section>
  );

const ProjectDetails = () => {
  // your logic
};

export default ProjectDetails;


export default Projects;
