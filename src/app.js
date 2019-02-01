import React from "react";
import Chatter from "./chatter.js";

const App = props => {
  return (
    <React.Fragment>
      <h1> React Chat Client </h1>
      <Chatter />
      <hr />
    </React.Fragment>
  );
};

export default App;
