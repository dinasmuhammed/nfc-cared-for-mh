import React from 'react';
import { Link } from 'react-scroll';

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
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="text-blue-500 hover:text-blue-700 cursor-pointer"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;