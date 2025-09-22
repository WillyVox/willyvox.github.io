import Separate from "../separate/Separate"

function Education () {
    return <section className="mb-12">
            <Separate title="Education"/>
            <div className="bg-gradient-to-br from-gray-50 to-gray-200 p-6 rounded-2xl border-l-4 border-[#34495e]">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Software & Science Technology
              </h3>
              <p className="text-[#34495e] font-medium mb-1">
                HCMC University of Technology
              </p>
              <p className="text-gray-600 text-sm">
                2009 – 2013
              </p>
            </div>
          </section>
}

export default Education