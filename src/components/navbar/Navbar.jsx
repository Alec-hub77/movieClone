import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import { Search, Notifications, ArrowDropDown } from '@material-ui/icons';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll == null)
    }

  return (
    <div className={isScrolled ? 'navbar scrolled' : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="logo"
          />
          <Link to="/">Homepage</Link>
          <Link to="/">Series</Link>
          <Link to="/">Movies</Link>
          <Link to="/">New and Popular</Link>
          <Link to="/">My List</Link>
        </div>
        <div className="right">
          <Search  className="icon"/>
          <span>KID</span>
          <Notifications  className="icon"/>
          <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="profile" />
          <div className="profile">
            <ArrowDropDown className="icon"/>
            <div className="options">
                <span>Settings</span>
                <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
