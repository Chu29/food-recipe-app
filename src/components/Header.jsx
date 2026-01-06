import { Link } from "react-router";

const Header = () => {
  const navStyle =
    "text-white font-semibold hover:text-yellow-100 transition-colors duration-200";
  const buttonStyle =
    "px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-200";

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
              <li>
                <Link to="/" className={navStyle}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/recipes" className={navStyle}>
                  Recipes
                </Link>
              </li>
              <li>
                <Link to="/favorites" className={navStyle}>
                  Favorites
                </Link>
              </li>
              <li>
                <Link to="/community" className={navStyle}>
                  Community
                </Link>
              </li>
              <li>
                <Link to="/signin" className={buttonStyle}>
                  Sign In
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
