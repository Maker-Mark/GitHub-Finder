import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

//We use link (need to use brackets to get the non-default export) to keep state!
 const Navbar = ({icon, title}) => {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={icon} />
          {title}
        </h1>
        <ul>
          <li>
            <Link to="/" > Home</Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
        </ul>
      </nav>
    );
};

Navbar.defaultProps = {
  title: 'GitHub Finder',
  icon: 'fab fa-github'
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
