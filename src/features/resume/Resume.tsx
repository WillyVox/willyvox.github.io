import React from 'react';
import './Resume.css';
import Header from '../header/Header';
import TechStack from '../techstack/TechStack';
import Experience from '../experience/Experience';
import Summary from '../summary/Summary';
import Education from '../education/Education';
import Project from '../project/Project';


const ProfessionalCV: React.FC = () => {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] p-8 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden relative">
        {/* Decorative top border */}
        {/* <div className="h-1.5 bg-gradient-to-r from-[#667eea] via-[#764ba2] via-[#f093fb] to-[#f5576c]"></div> */}
        
        {/* Header */}
       <Header/>

        {/* Content */}
        <main className="px-6 py-10 lg:px-10 lg:py-12">
          {/* Professional Summary */}
          <Summary/>

          {/* Tech Stack */}
          <TechStack/>

          {/* Professional Experience */}
          <Experience/>
          
          {/* Education */}
          <Education/>

          {/* Key Projects */}
          <Project/>
        </main>
      </div>
    </div>
  );
};

export default ProfessionalCV;