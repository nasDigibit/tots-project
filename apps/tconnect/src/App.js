import React, { Component } from "react";
import { render } from "react-dom";


import MenuAppBar from "./MenuAppBar";
import CustomMap from "./Map/CustomMap";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <MenuAppBar />

          <h2>Taxi Connect </h2>
        </div>
        <div>
          <CustomMap />
        </div>
       
      </React.Fragment>
    );
  }
}
render(<App />, document.getElementById("root"));
export default App;
