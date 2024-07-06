/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/function-component-definition */
import { useState } from 'react';
import { Menu, X } from 'react-feather';
import { Link } from 'react-router-dom';

interface HeaderItem {
  title: string;
  link: string;
}
const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const header: HeaderItem[] = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/' },
    { title: 'Review', link: '/' },
    { title: 'Gallary', link: '/' },
    { title: 'Contact', link: '/' },
  ];
  // bg-red-300 sm:bg-pink-400 md:bg-blue-300 lg:bg-yellow-500 xl:bg-orange-400
  return (
    <header className="border-b ">
      <div className="container mx-auto flex justify-between text-center items-center p-3 ">
        <img
          width={90}
          src="https://printo-s3.dietpixels.net/site/Printo-logo/printo-logo_1710143759.png?quality=70&format=webp&w=320"
          alt=""
        />
        <div className="hidden lg:flex gap-4 text-md">
          {header.map((item, index) => (
            <ul key={index} className="flex justify-center">
              <Link to={item.link}>
                <li>{item.title}</li>
              </Link>
            </ul>
          ))}
        </div>
        <div className="flex items-center  font-extrabold gap-5">
          <button
            className="bg-gradient-to-t from-[#f5bbaa] shadow-inner shadow-[#f5bbaa] p-3 rounded-lg "
            type="button"
          >
            Login
          </button>
          <button
            className="bg-gradient-to-t  from-[#f5bbaa] shadow-inner shadow-[#f5bbaa]   p-3 rounded-lg "
            type="button"
          >
            Signup
          </button>

          <button
            type="button"
            className="lg:hidden flex justify-end "
            onClick={toggleMenu}
          >
            {menuOpen ? <X /> : <Menu className="" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className=" container mx-auto md:hidden bg-zinc-200 p-4">
          {header.map((item, index) => (
            <ul key={index} className="flex flex-col">
              <li className="py-1">{item.title}</li>
            </ul>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
