import React from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';

export default function HireMe() {
  const services = [
    "Full-stack Web Development",
    "Custom Web Applications",
    "API Development & Integration",
    "Frontend Development",
    "Backend Development",
    "Cloud Solutions (AWS)"
  ];

  return (
    <section id="hire" className="py-32 bg-gradient-to-br from-black to-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Hire Me</h2>
        <div className="max-w-4xl mx-auto bg-blue-950/30 backdrop-blur-sm p-8 rounded-2xl border border-blue-900/30">
          <div className="flex items-center mb-8">
            <Briefcase className="h-8 w-8 text-blue-400 mr-4" />
            <h3 className="text-2xl font-semibold text-white">Services I Offer</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-blue-100">{service}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}