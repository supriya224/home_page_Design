/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/function-component-definition */
import { useState } from 'react';
import { Menu, Search, ShoppingCart, X } from 'react-feather';
import { Link } from 'react-router-dom';

interface HeaderItem {
  title: string;
  link: string;
}

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const header: HeaderItem[] = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/' },
    { title: 'Review', link: '/' },
    { title: 'Gallary', link: '/' },
    { title: 'Contact', link: '/contact' },
  ];

  return (
    <header className="border-b">
      <div className="bg-orange-400 p-1">
        <h3 className="tfont-light text-center text-white tracking-wide">
          We have offer for you
          <span
            id="spin"
            className="text-transparent font-extrabold bg-clip-text pl-2 bg-orange-800  "
          />
          <br />
        </h3>
      </div>

      <div className="container mx-auto w-full flex gap-6 justify-between items-center p-3">
        <img
          width={60}
          src="https://printo-s3.dietpixels.net/site/Printo-logo/printo-logo_1710143759.png?quality=70&format=webp&w=320"
          alt=""
          className="animate-bounce"
        />
        <div className="hidden lg:flex gap-7 text-md items-center">
          {header.map((item, index) => (
            <ul key={index} className="flex justify-center">
              <Link
                to={item.link}
                className="hover:scale-125 duration-300 py-1 hover:text-orange-400"
              >
                <li>{item.title}</li>
              </Link>
            </ul>
          ))}
        </div>
        <div className="flex  justify-center items-center font-extrabold gap-2">
          <div className="flex gap-2">
            {searchOpen && (
              <input
                type="text"
                placeholder="search"
                className="border p-1.5 rounded-2xl text-sm font-light outline-none"
              />
            )}
            <Search
              onClick={toggleSearch}
              className="cursor-pointer hover:scale-125 duration-300"
            />
            <ShoppingCart className="hover:scale-125 duration-300" />
          </div>

          <button
            type="button"
            className="md:hidden flex justify-end"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <X className="hover:scale-125 duration-300" />
            ) : (
              <Menu className="hover:scale-125 duration-300" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="container mx-auto md:hidden bg-zinc-200 p-4">
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
