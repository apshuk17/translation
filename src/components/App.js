import React, { Component } from "react";

class App extends Component {
  state = {
    language: "english"
  };

  onLanguageChange(language) {
    this.setState({ language });
  }

  render() {
    return (
      <div className="ui container">
        <div>
          <h1>Select a language</h1>
          <i className="flag us" onClick={this.onLanguageChange("english")} />
          <i className="flag nl" onClick={this.onLanguageChange("dutch")} />
        </div>
        {this.state.language}
      </div>
    );
  }
}

export default App;
