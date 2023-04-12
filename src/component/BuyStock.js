import React from "react";
import STORE_STOCK from "../store/StockStore";
import ACTION_STOCK from "../store/StockAction";
export function BuyStock() {
    const buyStock = () =>{
        STORE_STOCK.dispatch(ACTION_STOCK.BUY_STOCK);
    }
  return (
    <div>
        <h1> Buy a stock </h1>
        <button onClick={buyStock}>Buy Stock</button>
    </div>
  )
}