import { contactInfo } from '../data';
import './Header.css';

function Header() {
  return (
    <header className="header relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-700 px-6 py-12 text-center text-white lg:px-10 lg:py-16">
      <div
        className="absolute left-[-50%] top-[-50%] h-[200%] w-[200%] opacity-[0.03]"
        style={{
          background:
            'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
          animation: 'float 20s linear infinite',
        }}
      ></div>

      <div className="relative z-10">
        <h1 className="text-shadow-md mb-2 text-4xl font-bold lg:text-5xl">
          Willy Vo
        </h1>
        <p className="mb-8 text-xl font-light opacity-90 lg:text-2xl">
          Senior Software Engineer
        </p>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
            >
              <span className="text-lg">{contact.icon}</span>
              <span className="text-sm lg:text-base">{contact.text}</span>
            </div>
          ))}
        </div>
        {/* <a
              href="/Willy_Vox_Resume.pdf"
              download
              className="mt-8 inline-block px-8 py-3 bg-gradient-to-r from-grey-400 to-grey-400 text-white rounded-full text-base font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-grey-400/40 focus:ring-2 focus:ring-grey-400 focus:outline-none"
              aria-label="Download CV as PDF"
            >
              Download CV
            </a> */}
      </div>
    </header>
  );
}

export default Header;
