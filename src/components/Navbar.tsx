import React from 'react';
import { Code2 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-xl font-bold text-white">Vignesh</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-blue-100 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#about" className="text-blue-100 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#skills" className="text-blue-100 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Skills</a>
              <a href="#projects" className="text-blue-100 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
              <a href="#education" className="text-blue-100 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Education</a>
              <a href="#hire" className="text-blue-100 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Hire Me</a>
              <a href="#contact" className="text-blue-100 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}