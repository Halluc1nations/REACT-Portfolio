import React from "react";

function Header({ currentPage, setCurrentPage }) {
  return (
    <header className="bg-gray-900 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Blaine Bishop</h1>
      <nav>
        <ul className="flex space-x-4">
          {["About", "Portfolio", "Contact", "Resume"].map((title) => (
            <li
              key={title}
              className={`cursor-pointer ${currentPage === title ? "text-yellow" : "text-black"
                }`}
              onClick={() => setCurrentPage(title)}
            >
              {title}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
