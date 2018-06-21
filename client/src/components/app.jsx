import React from 'react';
import About from './about.jsx';
import Projects from './projects.jsx';
import Contact from './contact.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: '',
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
    return (
      <div className="container">
        <div className="row">
          <div className="col s2" onClick={() => this.handleClick('about')}>About</div>
          <div className="col s2" onClick={() => this.handleClick('projects')}>Projects</div>
          <div className="col s2" onClick={() => this.handleClick('contact')}>Contact</div>
        </div>
        <div>
          {this.renderPages()}
        </div>
      </div>
    );
  }
}

export default App;