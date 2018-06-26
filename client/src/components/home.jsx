import React from 'react';
import About from './about.jsx';
import Projects from './projects.jsx';
import Contact from './contact.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home',
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderPages = this.renderPages.bind(this);
    this.renderNavMenu = this.renderNavMenu.bind(this);
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

  renderNavMenu() {
    return (
      <div className="row">
        <div className="col s2 offset-l3" onClick={() => this.handleClick('about')}><a className={this.state.currentPage === "about" ? "btn-flat nav-selected": "btn-flat homepage-buttons"}>About</a></div>
        <div className="col s2" onClick={() => this.handleClick('projects')}><a className={this.state.currentPage === "projects" ? "btn-flat nav-selected": "btn-flat homepage-buttons"}>Projects</a></div>
        <div className="col s2" onClick={() => this.handleClick('contact')}><a className={this.state.currentPage === "contact" ? "btn-flat nav-selected": "btn-flat homepage-buttons"}>Contact</a></div>
      </div>
    );
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
              <div id="pic-holder">
                <img id="home-pic" src="../../client/dist/homepage_picture.jpg" />
              </div>
              <div id="name-holder">
                <span id="name">Shiyao Li</span>
              </div>
              {this.renderNavMenu()}
          </div>
        </div>
      );
    } 
    return (
      <div>
        <div className="valign-wrapper center-align" style={valignWrapperStyle}>
          <nav>
            <div className="nav-wrapper white">
              {this.renderNavMenu()}
            </div>
          </nav>
        </div>
        <div>
          {this.renderPages()}
        </div>
      </div>
    );
  }
}

export default Home;