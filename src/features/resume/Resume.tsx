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
    <div className="min-h-screen p-8 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden relative">
        
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