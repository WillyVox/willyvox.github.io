import { techStack } from '../data';
import Separate from '../separate/Separate';

function TechStack() {
  return (
    <section className="mb-12">
      <Separate title="Tech Stack & Expertise" />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Object.entries(techStack).map(([category, data]) => (
          <div
            key={category}
            className={`bg-gradient-to-br from-${data.color}-50 to-${data.color}-100 rounded-2xl border p-6 border-${data.color}-200 transition-all duration-300 hover:shadow-lg`}
          >
            <div className="mb-4 flex items-center gap-3">
              <div
                className={`h-10 w-10 bg-gradient-to-br from-${data.color}-500 to-${data.color}-600 flex items-center justify-center rounded-lg`}
              >
                <span className="text-lg text-white">{data.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.technologies.map(tech => (
                <span
                  key={tech}
                  className={`bg-${data.color}-100 text-${data.color}-800 rounded-full px-3 py-1 text-sm font-medium`}
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
