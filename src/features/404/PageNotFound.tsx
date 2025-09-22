function PageNotFound () {
    return <header className="bg-gradient-to-br from-slate-800 to-slate-700 text-white px-6 py-12 lg:px-10 lg:py-16 text-center relative overflow-hidden">
  <div 
    className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-[0.03]"
    ></div>
  
  <div className="relative z-10">
    <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-shadow-lg tracking-tight">
      Oops! Page Not Found
    </h1>
    <p className="text-lg lg:text-xl font-light mb-8 opacity-90 tracking-wide">
      The page you're looking for is not available, please visit later!
    </p>
    <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
      <a
        href="/"
        className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-base font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/40 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        aria-label="Return to Homepage"
      >
        Back to Homepage
      </a>
    </div>
  </div>
</header>

}

export default PageNotFound;