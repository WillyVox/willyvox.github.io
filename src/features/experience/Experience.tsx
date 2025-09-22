import { experiences } from "../data"
import Separate from "../separate/Separate"

function Experience () {
    return <section className="mb-12">
            <Separate title="Professional Experience"/>
            
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 mb-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-[#2c3e50] to-[#34495e]"></div>
                
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-[#34495e] font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-[#2c3e50] to-[#34495e] text-white px-4 py-2 rounded-2xl text-sm font-medium whitespace-nowrap">
                    {exp.duration}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li 
                      key={achievementIndex}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <span className="text-[#34495e] text-sm mt-1">▶</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-gradient-to-r from-[#2c3e50] to-[#34495e] text-white px-3 py-1 rounded-sm text-sm font-medium transition-all duration-300 hover:shadow-md hover:shadow-[#667eea]/40"
                    >
                       {/* linear-gradient(135deg, #2c3e50 0%, #34495e 100%); */}
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

}

export default Experience