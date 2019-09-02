import React, { Component } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/languageContext";
import ColorContext from "../contexts/colorContext";

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
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        <ColorContext.Provider value='red'>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
        <UserCreate />
      </div>
    );
  }
}

export default App;
