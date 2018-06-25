import React from 'react';
import About from './about.jsx';
import Projects from './projects.jsx';
import Contact from './contact.jsx';
import Navbar from './navbar.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home',
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderPages = this.renderPages.bind(this);
  }

  handleClick(option) {
    this.setState({
      currentPage: option,
    });
  }

  renderPages() {    
    if (this.state.currentPage === 'about') {
      return <About />;
    } else if (this.state.currentPage === 'projects') {
      return <Projects />;
    } else if (this.state.currentPage === 'contact') {
      return <Contact />;
    }
  }

  render() {
    const valignWrapperStyle = {
      width: '100%',
      height: '100%',
      postion: 'absolute',
    };

    const valignStyle = {
      width: '100%',
    };

    const isHome = this.state.currentPage === 'home';

    if (isHome) {
      return (
        <div className="valign-wrapper center-align" style={valignWrapperStyle}>
          <div className="valign" style={valignStyle}> 
            <div className="container">
              <div id="pic-holder">
                <img id="home-pic" src="../../client/dist/homepage_picture.jpg" />
              </div>
              <div id="name-holder">
                <span id="name">Shiyao Li</span>
              </div>
              <div className="row">
                <div className="col s2 offset-l3" onClick={() => this.handleClick('about')}><a className="waves-effect waves-orange btn-flat">About</a></div>
                <div className="col s2" onClick={() => this.handleClick('projects')}><a className="waves-effect waves-orange btn-flat">Projects</a></div>
                <div className="col s2" onClick={() => this.handleClick('contact')}><a className="waves-effect waves-orange btn-flat">Contact</a></div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <Navbar />
          </div>
          <div>
          {this.renderPages()}
          </div>
        </div>
      );
    }
  }
}

export default Home;