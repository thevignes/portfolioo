import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const educationDetails = [
    {
      degree: "Bachelor of Arts in Economics",
      institution: "University",
      description: "My economics background has equipped me with strong analytical and problem-solving skills, which I leverage in my software development career to create efficient and scalable solutions.",
      distinction: "Graduated with distinction"
    },
    {
      degree: "Development Program",
      institution: "Brototype",
      description: "Participated in a comprehensive development program focused on enhancing coding and technical skills.",
      distinction: "Skill Enhancement Certification"
    }
  ];

  return (
    <section id="education" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Education</h2>
        
        <div className="space-y-8 max-w-3xl mx-auto">
          {educationDetails.map((edu, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-blue-950 to-black p-8 rounded-2xl border border-blue-900/30 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-900/50 text-blue-400 rounded-xl">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-semibold text-white">{edu.degree}</h3>
                  <p className="text-blue-400 font-medium">{edu.distinction}</p>
                </div>
              </div>
              <p className="text-lg text-blue-100 leading-relaxed" >{edu.institution}</p>
              <p className="text-lg text-blue-100 leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}