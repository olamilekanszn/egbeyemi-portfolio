import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-blue-100/70 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">O.SZN</h1>
          <p className="text-xs uppercase tracking-wider text-white mb-4">Front-End Developer</p>
          <div className="space-y-3 text-sm leading-relaxed">
            <h3>
              Got a question, project or want to work together on something? Feel free to reach out.
            </h3>
            <p>
              I&apos;m currently looking fresh opportunities to do what I love and also build amazing stuffs.
            </p>
            <p>
              I&apos;m ready to apply my passion for coding to a talented engineering team to develop quality solutions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="mailto:egbeyemiolamilekan3008@gmail.com"
                className="inline-flex items-center justify-center rounded-md bg-white text-blue-900 px-4 py-2 text-sm font-semibold shadow hover:bg-blue-100 transition"
              >
                Email me
              </a>
              <a
                href="mailto:egbeyemiolamilekan3008@gmail.com"
                className="text-white underline hover:text-blue-200 text-sm"
              >
                egbeyemiolamilekan3008@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Connect with me</h2>
          <p className="text-sm mb-4">Let&apos;s connect on social platforms.</p>
          <div className="flex gap-3 text-xl text-white">
            <a
              href="https://github.com/olamilekanszn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 hover:bg-white/20 border border-white/10 text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/olamilekan-egbeyemi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 hover:bg-white/20 border border-white/10 text-white transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/ridwanullahiszn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 hover:bg-white/20 border border-white/10 text-white transition"
            >
              <FaTwitter />
            </a>
          </div>
          <div className="mt-6 text-xs text-white">
            Available for freelance and full-time roles.
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm border-t border-white/10 pt-4">
        &copy; {new Date().getFullYear()} Egbeyemi Olamilekan. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
