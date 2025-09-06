const projects = [
  {
    title: "BlackJack Game",
    description: "A fun, interactive JavaScript and CSS-based BlackJack game.",
    image: "/src/assets/blackjack.png",
    tech: ["JavaScript", "CSS"],
    link: "https://your-blackjack-demo.com",
  },
  {
    title: "Personal Portfolio",
    description: "A modern portfolio website showcasing my work, built with React and Tailwind CSS.",
    image: "/src/assets/myportfolio.png",
    tech: ["React", "Tailwind"],
    link: "https://yourportfolio.com",
  },
  {
    title: "My Workspace",
    description: "A HTML + CSS app that fetches and displays weather data from an API.",
    image: "/src/assets/workspace.png",
    tech: ["HTML", "CSS"],
    link: "https://yourweatherapp.com",
  },
  {
    title: "ReInvent-Security",
    description: "A TypeScript + Tailwind platform offering cybersecurity mentorship and skill development.",
    image: "/src/assets/reinvent.png",
    tech: ["TypeScript", "Tailwind", "Figma"],
    link: "https://reinventsecurity.org",
  },
];

export default function Projects() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-8 sm:mb-12 md:mb-16">
          My Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-1 sm:hover:-translate-y-2 duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-48 object-contain"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 px-2 sm:px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-900 font-medium hover:underline text-sm sm:text-base"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
