import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <form id="frm1">
              Enter your pets name:
              <input type="text" name="fname"></input>
          </form>
          <button onclick={myFunction()}>Submit</button>
      </div>
    );
  }
}
function myFunction() {
    let x = document.getElementById("frm1");
    let text = "";
    let i;
    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
}
export default App;
