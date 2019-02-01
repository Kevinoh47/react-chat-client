import React from "react";
// const { useTroll } = require("./troll-hook.js");
const { useTroll } = require("./troll.js"); // renamed chatter.js

const Words = props => {
  const [words, troll] = useTroll();
  return <h2>{words}</h2>;
};

export default Words;
