import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from "lucide-react";
import vigneshImage from '../vignesh.jpg'
export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Software Developer crafting elegant solutions";

  useEffect(() => {
    let isMounted = true;
    let index = 0;
    
    const typeWriter = () => {
      if (isMounted && index < fullText.length) {
        setDisplayText(prev => prev + fullText.charAt(index));
        index++;
        setTimeout(typeWriter, 50);
      }
    };

    typeWriter();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-black via-blue-950 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-bounce-in">
              Hi, I'm <span className="text-primary-400 animate-pulse">Vignesh</span>
            </h1>
            <p className="text-2xl text-blue-100 mb-8 min-h-[2.5rem] animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {displayText}
              <span className="animate-blink">|</span>
            </p>
            <div className="flex space-x-4 justify-center md:justify-start animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
              <a href="https://github.com/thevignes" className="p-3 bg-blue-950/50 text-white rounded-full hover:bg-blue-900/50 transition-colors animate-bounce-in" style={{ animationDelay: '0.5s' }}>
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/vignesh-s-a44245312/" className="p-3 bg-blue-950/50 text-white rounded-full hover:bg-blue-900/50 transition-colors animate-bounce-in" style={{ animationDelay: '0.6s' }}>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:your.email@example.com" className="p-3 bg-blue-950/50 text-white rounded-full hover:bg-blue-900/50 transition-colors animate-bounce-in" style={{ animationDelay: '0.7s' }}>
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-blue-400/20 animate-bounce-in" style={{ animationDelay: '0.8s' }}>
              <img
                src={vigneshImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}