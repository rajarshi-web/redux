import './App.css';
import Reactnp from 'react';
import { BuyStock } from './component/BuyStock';
import SellStock from './component/SellStock';
import { DisplayStock } from './component/DisplayStock';
function App() {
  return (
    <>
      <div class='container' align="center">
        <h1>Redux Example</h1>
      </div>
      <div align="center">
        <BuyStock></BuyStock>
        <SellStock></SellStock>
        <DisplayStock></DisplayStock>
      </div>
    </>
  );
}

export default App;
