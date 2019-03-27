import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup";
// move this to store/index.js
// import reducer from "./reducers";
// import { createStore } from 'redux';

// const initialState = {tech: "react"};
// const store = createStore(reducer, initialState );

//add 
import store from "./store/index.js";
 //remove state -- add lines 3 and 5 
  // state = {
  //   tech: "Redux"
  // };
 
class App extends Component {
  render() {
    return [
      <HelloWorld key={1} tech={store.getState().tech} />,
      <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />
    ];
  }
}

export default App;
