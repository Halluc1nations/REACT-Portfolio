function Resume() {
  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold">Resume</h2>
      <p>
        <a href="../../assets/MBA_Tech_Resume.docx" className="text-blue-500">
          Download my resume
        </a>
      </p>
      <h3 className="mt-4 font-semibold">Proficiencies:</h3>
      <ul className="list-disc ml-6 mt-2">
        <li>JavaScript, Typescript, React, Node.js</li>
        <li>Express, PostgreSQL, MongoDB</li>
        <li>CSS, HTML, Bootstrap</li>
      </ul>
    </section>
  );
}

export default Resume;
