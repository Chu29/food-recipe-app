import { Link } from "react-router";
import { NAV_LINKS } from "../utils/constants";
import { useState } from "react";
import SearchBar from "./molecules/SearchBar";

const Header = ({ searchQuery = "", onSearchQueryChange = null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const shouldRenderSearch = typeof onSearchQueryChange === "function";
  // const buttonStyle =
  //   "px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-200";

  return (
    <header className="bg-linear-to-r from-gray-900 to-gray-800 shadow-lg sticky top-0 z-99 ">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="hidden md:flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="text-3xl font-bold text-white">
              <img className="w-10 h-10" src="./hero.svg" alt="" />
            </div>
            <h1 className="text-2xl font-bold text-white">Foodie</h1>
          </Link>

          {/* Navigation */}
          <nav>
            <ul className="flex gap-8 list-none">
              {NAV_LINKS.map((link) => {
                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-white font-semibold hover:text-orange-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          {shouldRenderSearch && (
            <SearchBar
              query={searchQuery}
              onQueryChange={onSearchQueryChange}
            />
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center justify-between md:hidden">
          <button
            className="text-white"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onClick={() => setIsOpen((prevState) => !prevState)}
          >
            <svg
              className="w-8 h-8 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="text-3xl font-bold text-white">
              <img className="w-10 h-10" src="./hero.svg" alt="" />
            </div>
            <h1 className="text-2xl font-bold text-white">Foodie</h1>
          </Link>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-700 shadow-2xl md:hidden">
              <div className="mx-auto max-w-7xl px-4 py-6 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-white">Menu</span>
                  <button
                    className="text-orange-400 text-sm font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </button>
                </div>

                <nav>
                  <ul className="space-y-3 list-none">
                    {NAV_LINKS.map((link) => {
                      return (
                        <li key={link.to}>
                          <Link
                            to={link.to}
                            onClick={() => setIsOpen(false)}
                            className="block rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white font-semibold hover:border-orange-500 hover:text-orange-300 transition-colors duration-200"
                          >
                            {link.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                {shouldRenderSearch && (
                  <SearchBar
                    query={searchQuery}
                    onQueryChange={onSearchQueryChange}
                  />
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
