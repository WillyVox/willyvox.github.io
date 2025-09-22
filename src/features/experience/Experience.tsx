import { experiences } from "../data"

function Experience () {
    return <section className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6 pb-2 border-b-4 border-[#667eea] relative">
              Professional Experience
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-[#f093fb] to-[#f5576c] -mb-1"></div>
            </h2>
            
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 mb-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-[#667eea] to-[#764ba2]"></div>
                
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-[#667eea] font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                    {exp.duration}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li 
                      key={achievementIndex}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <span className="text-[#667eea] text-sm mt-1">▶</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#667eea]/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

}

export default Experience