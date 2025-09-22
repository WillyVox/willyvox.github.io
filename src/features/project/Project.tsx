import { projects } from '../data';
import Separate from '../separate/Separate';

function Project() {
  return (
    <section>
      <Separate title="Key Projects" />
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2c3e50] to-[#34495e] p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#667eea]/30"
          >
            <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-white/10"></div>

            <div className="relative z-10">
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="mb-4 opacity-90">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-white/30 px-4 py-2 text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 hover:text-white"
              >
                View Platform
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
