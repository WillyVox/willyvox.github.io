import React from 'react';
import './Resume.css';
import Header from '../header/Header';
import TechStack from '../techstack/TechStack';
import Experience from '../experience/Experience';
import Summary from '../summary/Summary';
import Education from '../education/Education';
import Project from '../project/Project';

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-gray-800 md:p-8">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <Header />

        {/* Content */}
        <main className="px-6 py-10 lg:px-10 lg:py-12">
          {/* Professional Summary */}
          <Summary />

          {/* Tech Stack */}
          <TechStack />

          {/* Professional Experience */}
          <Experience />

          {/* Education */}
          <Education />

          {/* Key Projects */}
          <Project />
        </main>
      </div>
    </div>
  );
};

export default Resume;
