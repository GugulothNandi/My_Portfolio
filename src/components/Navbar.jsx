import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative w-full h-20 z-50  text-white shadow-md">
      <div className="flex justify-between items-center h-full px-6">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-bold tracking-wide cursor-pointer"
        >
          GUGULOTH
        </Link>

        <div className="sm:hidden">
          {menuOpen ? (
            <X
              className="w-7 h-7 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <Menu
              className="w-7 h-7 cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>

        <div className="hidden sm:flex gap-6 text-lg">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black text-center text-lg flex flex-col gap-4 py-4 sm:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/About" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/Projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
          <Link to="/Contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
