import React from "react";

function Header({ currentPage, setCurrentPage }) {
  return (
    <header className="bg-gray-900 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Blaine Bishop</h1>
      <nav>
        <ul className="flex space-x-4 d-flex gap-5 list-unstyled">
          {["About", "Portfolio", "Contact", "Resume"].map((title) => (
            <li
              key={title}
              className={` ${currentPage === title ? "text-yellow" : "text-black"
                }`}
             // onClick={() => setCurrentPage(title)}
            >
             <a href='#'>{title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
