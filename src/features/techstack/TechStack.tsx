import { techStack } from "../data";
import Separate from "../separate/Separate";

function TechStack () {
    return <section className="mb-12">
            <Separate title="Tech Stack & Expertise"/>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {Object.entries(techStack).map(([category, data]) => (
                <div 
                  key={category}
                  className={`bg-gradient-to-br from-${data.color}-50 to-${data.color}-100 p-6 rounded-2xl border border-${data.color}-200 hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br from-${data.color}-500 to-${data.color}-600 rounded-lg flex items-center justify-center`}>
                      <span className="text-white text-lg">{data.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {data.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className={`bg-${data.color}-100 text-${data.color}-800 px-3 py-1 rounded-full text-sm font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
}

export default TechStack