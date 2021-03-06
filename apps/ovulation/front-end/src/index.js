import React from 'react';
import { render } from 'react-dom';
import MenuAppBar from "./components/MenuAppBar";
import Ovulation from "./components/Ovulation";
import FooterPage from "./components/FooterPage";


const App = () => (
  
  <React.Fragment>
    <div>
      <MenuAppBar />

      <h2>Ovulation </h2>
    </div>
    <div>
      <Ovulation />
    </div>
    <FooterPage />
  </React.Fragment>
);

render(<App />, document.getElementById('root'));



