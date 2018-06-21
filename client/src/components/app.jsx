import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s2">About</div>
          <div className="col s2">Projects</div>
          <div className="col s2">Contact</div>
        </div>
      </div>
    );
  }
}

export default App;