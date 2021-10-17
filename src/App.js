import React from "react";
import Welcome from "./components/Welcome";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <Welcome name="Ahmed" />
        <Welcome name="Aqsa" />
      </div>
    );
  }
}

export default App;
