import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="appname">
        <h2>Forum App</h2>
      </div>
      <nav className="navigation">
        <Link to="/">
          <h4>Threads</h4>
        </Link>
        <Link to="/leaderboards">
          <h4>Leaderboards</h4>
        </Link>
        <Link to="/login">
          <h4>Login</h4>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
