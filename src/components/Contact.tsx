import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-blue-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Get In Touch</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-8 bg-blue-950/30 backdrop-blur-sm rounded-xl border border-blue-900/30 hover:border-blue-400 transition-all duration-300">
              <Mail className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href="mailto:your.email@example.com" className="text-blue-200 hover:text-blue-400 transition-colors">
              vigneshkdr777@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-center p-8 bg-blue-950/30 backdrop-blur-sm rounded-xl border border-blue-900/30 hover:border-blue-400 transition-all duration-300">
              <Phone className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-blue-200">9633268322</p>
            </div>
            <div className="flex flex-col items-center p-8 bg-blue-950/30 backdrop-blur-sm rounded-xl border border-blue-900/30 hover:border-blue-400 transition-all duration-300">
              <MapPin className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
              <p className="text-blue-200 text-center">Kochi, India,kerala</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}