import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';






const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Harsh Raj
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'Java Developer',
                'UI/UX Designer',
                'Coder',
                'AI/ML Enthusiast',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
         <Tilt
  tiltMaxAngleX={10}
  tiltMaxAngleY={10}
  scale={1.05}
  transitionSpeed={2500}
  className="bg-gradient-to-r from-gray-900/60 to-gray-800/60 p-6 rounded-2xl shadow-lg"
>
  <p className="text-base sm:text-lg md:text-lg text-gray-300 leading-relaxed">
    I am an enthusiastic and quick-learning software developer with a strong
    foundation in full-stack development and problem-solving. Skilled in
    modern technologies including React, Next.js, Flask, and deep learning
    frameworks, I specialize in building scalable, innovative, and visually
    engaging applications.I bring creativity, efficiency,
    and precision into every project I work on.
  </p>
</Tilt>
          {/* Resume Button */}
         <a
  href="https://drive.google.com/file/d/1Xj9HKUAAzykSE1Aus_39V1LhVAi7j2Ps/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-500 transform hover:scale-110 hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]"
  style={{
    background: 'linear-gradient(135deg, #ff6ec7, #a855f7, #4f46e5)',
    boxShadow: '0 0 10px rgba(168,85,247,0.8), 0 0 20px rgba(168,85,247,0.6)',
  }}
>
  🚀 DOWNLOAD CV
</a>

          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
         
        </div>
      </div>
    </section>
  );
};

export default About;
