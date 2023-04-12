import React from "react";
import STORE_STOCK from "../store/StockStore";
import ACTION_STOCK from "../store/StockAction";
export default function SellStock() {
    const sellStock = () =>{
        STORE_STOCK.dispatch(ACTION_STOCK.SELL_STOCK);
    }
  return (
    <div>
        <h1>Sell a stock </h1>
        <button onClick={sellStock}>Sell Stock</button>
    </div>
  )
}