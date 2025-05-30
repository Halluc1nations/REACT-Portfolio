function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-4 mt-6">
      <h2 className="fs-4">Connect with me</h2>
      <ul className="d-flex justify-content-center list-inline mt-2 space-x-4">
        <li>
          <a
            href="https://github.com/Halluc1nations"
            className="text-blue-400 mx-3"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/blainebishop"
            className="text-blue-400 mx-3"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:Blaine.Bishop@comcast.net?subject=Hello&body=I wanted to reach out to you.">
            Email
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
