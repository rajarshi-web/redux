import { useState, useEffect } from 'react'
import STORE_STOCK from '../store/StockStore'
export function DisplayStock() {
    const [numberOfStocks, setNumberofStock] = useState(10);
    useEffect(() => {
        setNumberofStock(STORE_STOCK.getState()['numberOfStocks']);
        STORE_STOCK.subscribe(
            () =>{
                setNumberofStock(STORE_STOCK.getState()["numberOfStocks"]);
            }
         )
    },[]

    )
    return (
        <div>
            <h1>Display The Number of Current Stock</h1>
            <h3>Number of available stocks are = <span>{numberOfStocks}</span></h3>
        </div>
    
      )
}