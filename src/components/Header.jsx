import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold text-blue-600">Muhammed Adnan</h1>
        <p className="text-xl text-gray-600">Founder & Developer at AD Web Comic Agency | ChatGPT Expert</p>
        <nav className="mt-4">
          <ul className="flex space-x-4">
            {['Contact', 'About', 'Portfolio', 'Social', 'Consultation'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-blue-500 hover:text-blue-700 cursor-pointer"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
