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
      I am an MBA holder with a strong passion for technology and problem-solving. Recently, I earned a Full-Stack Development Certificate, equipping me with expertise in HTML, CSS, JavaScript, Node.js, TypeScript, PostgreSQL, and React.

With a unique blend of business acumen and technical proficiency, I am eager to apply my skills in an entry-level software development role. I thrive in collaborative environments, enjoy building user-friendly applications, and am committed to continuous learning.

I am excited to contribute to a dynamic team where I can grow as a developer while leveraging my analytical and strategic thinking skills from my MBA background.
      </p>
    </section>
  );
}

export default About;
