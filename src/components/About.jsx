import React from "react";
import profilePic from "../../assets/profile.jpg";

function About() {
  return (
    <section className="text-center p-6">
      <img
        src={profilePic} width={250} height={250}
        alt="Developer"
        className="w-32 h-32 mx-auto rounded-full shadow-lg"
      />
      <h2 className="text-xl font-semibold mt-4">About Me</h2>
      <p className="mt-2 text-gray-600">
        I am a new full-stack developer specializing in modern JavaScript
        frameworks, React, and backend technologies.
      </p>
    </section>
  );
}

export default About;
