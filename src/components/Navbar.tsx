import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white p-6 sm:justify-around">
      <Link to="/" className="text-xl font-bold sm:text-2xl">
        The<span className="text-green-500">Cocktails</span>DB
      </Link>
      <ul className="flex items-center gap-2 text-lg sm:text-xl">
        <li>
          <Link to="/" className="transition-colors hover:text-green-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="transition-colors hover:text-green-500">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
