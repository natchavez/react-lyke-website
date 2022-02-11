import classes from './Header.module.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { IoMdMenu } from 'react-icons/io';
import { IoCloseCircleOutline } from 'react-icons/io5';

const Header = () => {
  const [isShowing, setIsShowing] = useState(false);

  const showLinks = () => {
    setIsShowing(true);
  };

  const hideLinks = () => {
    setIsShowing(false);
  };
  return (
    <nav>
      <Link to='/'>
        <img src={logo} />
      </Link>

      <h1 className={classes.title}>L.A. Clothes</h1>

      <div
        className={`${classes['nav-links']} ${
          !isShowing && classes['link-hide']
        }`}
      >
        <IoCloseCircleOutline
          className={classes['close-icon']}
          onClick={hideLinks}
        />

        <ul>
          <Link to='/about'>
            <li>ABOUT</li>
          </Link>
          {/* <Link to='/collections'>
            <li>COLLECTIONS</li>
          </Link> */}
          <Link to='/head-ware'>
            <li>ALL HEAD WEAR</li>
          </Link>
          <Link to='/sale'>
            <li>SALE</li>
          </Link>
          <Link to='/sale'>
            <li>REVIEWS</li>
          </Link>
        </ul>
      </div>
      <IoMdMenu className={classes['burger-icon']} onClick={showLinks} />
    </nav>
  );
};

export default Header;
