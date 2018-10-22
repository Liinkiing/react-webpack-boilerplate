// @flow
import React, { Component } from "react";

class App extends Component<{}> {
  render() {
    return (
      <>
        <h1>{process.env.APP_NAME}</h1>
      </>
    );
  }
}

export default App;
