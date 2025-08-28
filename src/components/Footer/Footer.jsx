import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative text-white py-12 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Subtle Glow at Top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-purple-400/40 blur-lg"></div>

      <div className="container mx-auto text-center relative z-10">
        {/* Name / Logo */}
       <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-300 via-white to-purple-500 bg-clip-text text-transparent tracking-wide">
  Harsh Raj
</h2>



        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 mt-6 font-medium">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="relative text-base text-gray-300 hover:text-purple-400 transition duration-300 group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400/70 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {[
            { icon: <FaFacebook />, link: "https://facebook.com" },
            { icon: <FaTwitter />, link: "https://twitter.com" },
            { icon: <FaLinkedin />, link: "https://linkedin.com" },
            { icon: <FaInstagram />, link: "https://instagram.com" },
            { icon: <FaYoutube />, link: "https://youtube.com" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-400 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-8 font-medium tracking-wide">
          © 2025 Harsh Raj. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
