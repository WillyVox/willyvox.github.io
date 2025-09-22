import { summary } from "../data"
import Separate from "../separate/Separate"

function Summary () {
    return  <section className="mb-12">
            <Separate title="Professional Summary"/>
            <div className="bg-gradient-to-br from-gray-50 to-gray-200 p-6 lg:p-8 rounded-2xl border-l-4 border-[#34495e] relative">
              <div className="absolute top-4 left-6 text-6xl text-[#34495e]/30 font-serif">"</div>
              <div className="relative z-10 text-gray-600 leading-relaxed text-base lg:text-lg">
                {summary.first}
                <br /><br />
                {summary.second}
                <br /><br />
                {summary.third}
              </div>
            </div>
          </section>
}

export default Summary