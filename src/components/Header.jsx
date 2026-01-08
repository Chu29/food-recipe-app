import { Link } from "react-router";
import { NAV_LINKS } from "../utils/constants";

const Header = () => {
  // const buttonStyle =
  //   "px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-200";

  return (
    <header className="bg-linear-to-r from-gray-900 to-gray-800 shadow-lg sticky top-0 z-10 ">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
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
                      className="text-white font-semibold hover:text-yellow-100 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
