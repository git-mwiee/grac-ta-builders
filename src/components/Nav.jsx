import "./Nav.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <Link to="/" className="brand">
        GRAC-TA BUILDERS
      </Link>

      <button
        className="menuBtn"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        ☰
      </button>

      <ul className={`navLinks ${open ? "open" : ""}`}>
        <li>
          <a href="#services" onClick={() => setOpen(false)}>
            Services
          </a>
        </li>
        <li>
          <Link to="/signin" className="book-btn" onClick={() => setOpen(false)}>
            Book Now
          </Link>
        </li>
      </ul>
    </nav>
  );
}