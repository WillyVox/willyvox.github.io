import { projects } from "../data"
import Separate from "../separate/Separate"

function Project () {
    return <section>
            <Separate title="Key Projects"/>
            <div className="grid gap-6">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-[#2c3e50] to-[#34495e] text-white p-6 rounded-2xl relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#667eea]/30"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-8 -translate-y-8"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="mb-4 opacity-90">
                      {project.description}
                    </p>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 border border-white/30 text-white rounded-full text-sm transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5 hover:text-white"
                    >
                      View Platform
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
}

export default Project