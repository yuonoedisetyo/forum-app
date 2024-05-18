import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IconAccount } from '../../assets';
import { getAccessToken } from '../../data/network-data';

function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const start = () => {
    const token = getAccessToken();
    if (token) {
      setIsLogin(true);
    }
  };

  useEffect(() => {
    start();
  }, []);
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
        {isLogin ? (
          <Link to="/myaccount">
            <img src={IconAccount} alt="icon-account" style={{ height: 32, width: 32 }} />
          </Link>
        )
          : (
            <Link to="/login">
              <h4>Login</h4>
            </Link>
          )}
      </nav>
    </header>
  );
}

export default Header;
