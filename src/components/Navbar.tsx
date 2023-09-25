import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-gray-50 p-6 sm:justify-around">
      <Link to="/" className="text-xl font-semibold sm:text-2xl">
        The<span className="text-green-600">Cocktails</span>DB
      </Link>
      <ul className="flex items-center gap-10 text-lg sm:text-xl">
        <li>
          <Link
            to="/"
            className="transition-colors ease-in hover:text-green-600"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="transition-colors ease-in hover:text-green-600"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
