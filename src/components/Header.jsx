import { Link } from "react-router";

const Header = () => {
  const navStyle =
    "text-white font-medium hover:text-yellow-100 transition-colors duration-200";
  const buttonStyle =
    "px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200";

  return (
    <header className="bg-linear-to-r from-gray-900 to-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="text-3xl font-bold text-white">🍳</div>
            <h1 className="text-2xl font-bold text-white">Foodie</h1>
          </Link>

          {/* Navigation */}
          <nav>
            <ul className="flex gap-8 list-none">
              <li>
                <Link to="/home" className={navStyle}>
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
                <Link to={"/signin"} className={buttonStyle}>
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
