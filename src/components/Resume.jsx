import React from "react";

function Resume() {
  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold">Resume</h2>
      <p>
        Download my resume:{" "}
        <a href="/resume.pdf" className="text-blue-500">
          Click here
        </a>
      </p>
      <h3 className="mt-4 font-semibold">Proficiencies:</h3>
      <ul className="list-disc ml-6 mt-2">
        <li>JavaScript, React, Node.js</li>
        <li>Express, PostgreSQL</li>
        <li>CSS, Tailwind, Bootstrap</li>
      </ul>
    </section>
  );
}

export default Resume;
