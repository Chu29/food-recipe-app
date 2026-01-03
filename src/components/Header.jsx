import { Link } from "react-router";

const Header = () => {
  const navStyle =
    "text-white font-medium hover:text-yellow-100 transition-colors duration-200";

  return (
    <header className="bg-linear-to-r from-gray-900 to-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-3xl font-bold text-white">🍳</div>
            <h1 className="text-2xl font-bold text-white">Foodie</h1>
          </div>

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
                <Link to="/settings" className={navStyle}>
                  Settings
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
