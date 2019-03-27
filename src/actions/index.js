 export function setTechnology (text) {
  return {
    type: "SET_TECHNOLOGY",
    tech: text
  }
 }


// or ES6
// const setTechnology = text => ({ type: "SET_TECHNOLOGY",
//     tech: text});

//  {
//   type: "SET_TECHNOLOGY",
//   text: "React"
//  }

//  {
//      type: "SET_TECHNOLOGY",
//      text: "React-redux"
//    }

// {
//    type: "SET_TECHNOLOGY",
//   text: "Elm"
// }

