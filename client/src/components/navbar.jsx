import React from 'react';
import About from './about.jsx';
import Projects from './projects.jsx';
import Contact from './contact.jsx';
import Home from './home.jsx';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper white">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a><span className="navbar">Home</span></a></li>
            <li><a><span className="navbar">About</span></a></li>
            <li><a><span className="navbar">Projects</span></a></li>
            <li><a><span className="navbar">Contact</span></a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;