import { experiences } from '../data';
import Separate from '../separate/Separate';

function Experience() {
  return (
    <section className="mb-12">
      <Separate title="Professional Experience" />

      {experiences.map((exp, index) => (
        <div
          key={index}
          className="relative mb-8 overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:p-8"
        >
          <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#2c3e50] to-[#34495e]"></div>

          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h3 className="mb-1 text-xl font-semibold text-gray-800 lg:text-2xl">
                {exp.title}
              </h3>
              <p className="text-lg font-medium text-[#34495e]">
                {exp.company}
              </p>
            </div>
            <div className="whitespace-nowrap rounded-2xl bg-gradient-to-r from-[#2c3e50] to-[#34495e] px-4 py-2 text-sm font-medium text-white">
              {exp.duration}
            </div>
          </div>

          <ul className="mb-6 space-y-3">
            {exp.achievements.map((achievement, achievementIndex) => (
              <li
                key={achievementIndex}
                className="flex items-start gap-3 text-gray-600"
              >
                <span className="mt-1 text-sm text-[#34495e]">▶</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {exp.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="rounded-sm bg-gradient-to-r from-[#2c3e50] to-[#34495e] px-3 py-1 text-sm font-medium text-white transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experience;
