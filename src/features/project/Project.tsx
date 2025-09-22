import { projects } from "../data"

function Project () {
    return <section>
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6 pb-2 border-b-4 border-[#667eea] relative">
              Key Projects
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-[#f093fb] to-[#f5576c] -mb-1"></div>
            </h2>
            
            <div className="grid gap-6">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white p-6 rounded-2xl relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#667eea]/30"
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
                      className="inline-block px-4 py-2 border border-white/30 rounded-full text-sm transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
}

export default Project