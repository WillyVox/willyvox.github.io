import { contactInfo } from '../data';
import './Header.css';

function Header ()  {
    return  <header className="bg-gradient-to-br from-gray-800 to-gray-700 text-white px-6 py-12 lg:px-10 lg:py-16 text-center relative overflow-hidden header">
          <div 
            className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-[0.03]"
            style={{
              background: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
              animation: 'float 20s linear infinite',
            }}
          ></div>
          
          <div className="relative z-10">
            <h1 className="text-4xl lg:text-5xl font-bold mb-2 text-shadow-md">
              Willy Vo
            </h1>
            <p className="text-xl lg:text-2xl font-light mb-8 opacity-90">
              Senior Software Engineer
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
              {contactInfo.map((contact, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
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
}

export default Header