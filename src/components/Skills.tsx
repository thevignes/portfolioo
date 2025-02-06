import React from 'react';
import { Code, Database, Layout, Server, Cloud, Brain } from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      icon: <Layout className="h-6 w-6" />,
      items: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap","Next.js","Vanila.js","svelte"]
    },
    {
      category: "Backend",
      icon: <Server className="h-6 w-6" />,
      items: ["Node.js", "Express.js", "EJS","TypeScript","Next.js"]
    },
    {
      category: "Programming",
      icon: <Code className="h-6 w-6" />,
      items: ["JavaScript", "C", "DSA" ,"TypeScript"]
    },
    {
      category: "Cloud",
      icon: <Cloud className="h-6 w-6" />,
      items: ["AWS","EC2","CLOUDNARY","FIREBASE"]
    },
    {
      category: "Database",
      icon: <Database className="h-6 w-6" />,
      items: ["MongoDB", "SQL","Postgress SQL "]
    },
    {
      category: "Soft Skills",
      icon: <Brain className="h-6 w-6" />,
      items: ["Communication", "Problem Solving", "Team Collaboration"]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-gradient-to-b from-black to-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-blue-950/30 backdrop-blur-sm p-6 rounded-xl border border-blue-900/30 hover:border-blue-400 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-900/50 text-blue-400 rounded-lg">
                  {skill.icon}
                </div>
                <h3 className="ml-3 text-xl font-semibold text-white">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-black/30 text-blue-200 rounded-full text-sm hover:bg-blue-900/30 hover:text-blue-300 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}