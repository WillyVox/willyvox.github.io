import { summary } from '../data';
import Separate from '../separate/Separate';

function Summary() {
  return (
    <section className="mb-12">
      <Separate title="Summary" />
      <div className="relative rounded-2xl border-l-4 border-[#34495e] bg-gradient-to-br from-gray-50 to-gray-200 p-6 lg:p-8">
        <div className="absolute left-6 top-4 font-serif text-6xl text-[#34495e]/30"></div>
        <div className="relative z-10 text-base leading-relaxed text-gray-600 lg:text-lg">
          {summary.first}
          <br />
          <br />
          {summary.second}
          <br />
          <br />
          {summary.third}
        </div>
      </div>
    </section>
  );
}

export default Summary;
