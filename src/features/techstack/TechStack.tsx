import { techStack } from '../constants';
import Separate from '../separate/Separate';

function TechStack() {
  return (
    <section className="techstack mb-12">
      <Separate title="Tech Stack & Expertise" />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Object.entries(techStack).map(([category, data]) => (
          <div
            key={category}
            className="rounded-2xl border border-gray-600 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 p-3 shadow-lg transition-all duration-300 hover:scale-105 hover:border-gray-500 hover:shadow-xl"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-500 bg-gradient-to-br from-gray-600 to-gray-700 shadow-md">
                <span className="text-xl text-white drop-shadow-sm">
                  {data.icon}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-100">
                {category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.technologies.map(tech => (
                <span
                  key={tech}
                  className="rounded-full border border-gray-600 bg-gray-700 px-3 py-1.5 text-sm font-medium text-gray-200 transition-all duration-200 hover:border-gray-500 hover:bg-gray-600 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
