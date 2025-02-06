import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">About Me</h2>
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-950 to-black p-8 rounded-2xl border border-blue-900/30">
          <p className="text-lg text-blue-100 leading-relaxed">
            I am a passionate Software Developer with expertise in full-stack web development.
            My journey in technology started with a foundation in Economics, which has given me
            a unique perspective on problem-solving and analytical thinking. I specialize in
            creating responsive and user-friendly web applications using modern technologies
            and best practices.
          </p>
        </div>
      </div>
    </section>
  );
}