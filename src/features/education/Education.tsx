import Separate from '../separate/Separate';

function Education() {
  return (
    <section className="mb-12">
      <Separate title="Education" />
      <div className="rounded-2xl border-l-4 border-[#34495e] bg-gradient-to-br from-gray-50 to-gray-200 p-6">
        <h3 className="mb-2 text-xl font-semibold text-gray-800">
          Software & Science Technology
        </h3>
        <p className="mb-1 font-medium text-[#34495e]">
          HCMC University of Technology
        </p>
        <p className="text-sm text-gray-600">2009 – 2013</p>
      </div>
    </section>
  );
}

export default Education;
