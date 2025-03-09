import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-4 mt-6">
      <p>Connect with me:</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://github.com/Halluc1nations" className="text-blue-400 mx-3">
          GitHub
        </a>
        <a href="https://linkedin.com/in/blainebishop" className="text-blue-400 mx-3">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
