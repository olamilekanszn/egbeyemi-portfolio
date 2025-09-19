import { FaLaptopCode, FaUsers, FaLightbulb } from "react-icons/fa";

function About() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-50/70 italic text-center min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-6 sm:mb-8">About Me</h1>

      <div className="max-w-4xl mx-auto text-gray-700 text-base sm:text-lg space-y-4 sm:space-y-6 text-left px-2">
        <p>
          Hello! I&apos;m{" "}
          <strong className="text-blue-800">Egbeyemi Olamilekan</strong>, a
          passionate frontend developer with a skill for building engaging,
          performant, and accessible user interfaces.
        </p>

        <p>
          I thrive in collaborative environments where developers and designers
          work hand-in-hand. I&apos;m known for being someone who not only
          delivers solid frontend code but also jumps in to help teammates, fill
          gaps, and keep the momentum going especially when it matters most.
        </p>

        <p>
          With a strong focus on self-growth and continuous learning, I actively
          seek out mentorship and new challenges. I love exploring emerging
          technologies, refining my skills, and contributing to projects that
          make a meaningful impact.
        </p>

        <p>
          My development philosophy is centered around creating{" "}
          <span className="font-semibold text-blue-800">user-first</span>{" "}
          experiences: fast, intuitive, and elegant. I also place high value on
          clean code, reusability, and performance optimization.
        </p>
      </div>

      {/* Highlights */}
      <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto text-left px-2">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow hover:shadow-md transition">
          <FaLaptopCode className="text-blue-700 text-2xl sm:text-3xl mb-3 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">
            Code with Purpose
          </h3>
          <p className="text-xs sm:text-sm text-gray-600">
            I build fast, accessible, and user-friendly applications using
            modern tools like React and TailwindCSS.
          </p>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow hover:shadow-md transition">
          <FaUsers className="text-blue-700 text-2xl sm:text-3xl mb-3 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">
            Team Collaboration
          </h3>
          <p className="text-xs sm:text-sm text-gray-600">
            I enjoy working with others developers, designers, or product
            managers to turn ideas into interactive solutions.
          </p>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow hover:shadow-md transition sm:col-span-2 lg:col-span-1">
          <FaLightbulb className="text-blue-700 text-2xl sm:text-3xl mb-3 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">
            Always Learning
          </h3>
          <p className="text-xs sm:text-sm text-gray-600">
            I believe in lifelong learning and regularly explore new tools,
            frameworks, and best practices to sharpen my skills.
          </p>
        </div>
      </div>

      {/* Skills */}
      <h2 className="text-xl sm:text-2xl font-semibold text-blue-800 mt-12 sm:mt-16 lg:mt-20 mb-4 sm:mb-6">
        Tech Stack & Skills
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto px-2">
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "React",
          "Next.JS",
          "TailwindCSS",
          "Git",
          "GitHub",
          "VS Code",
          "Responsive Design",
          "Accessibility", 
        ].map((skill) => (
          <div
            key={skill}
            className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 text-center shadow hover:shadow-md transition"
          >
            <span className="text-blue-800 font-medium text-sm sm:text-base">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
