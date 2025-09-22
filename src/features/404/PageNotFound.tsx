function PageNotFound() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700 px-6 py-12 text-center text-white lg:px-10 lg:py-16">
      <div className="absolute left-[-50%] top-[-50%] h-[200%] w-[200%] opacity-[0.03]"></div>

      <div className="relative z-10">
        <h1 className="text-shadow-lg mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
          Oops! Page Not Found
        </h1>
        <p className="mb-8 text-lg font-light tracking-wide opacity-90 lg:text-xl">
          The page you're looking for is not available, please visit later!
        </p>
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          <a
            href="/"
            className="inline-block rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Return to Homepage"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </header>
  );
}

export default PageNotFound;
