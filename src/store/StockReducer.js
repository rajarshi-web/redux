import ACTION_STOCK from "./StockAction";
const initialState = {
    numberOfStocks: 100
}

function REDUCER_STOCK(state = initialState, action) {
    let updatedValue;
    switch (action.type) {
        case ACTION_STOCK.BUY_STOCK.type:
            updatedValue = state.numberOfStocks + 1;
            return {
                ...state,
                numberOfStocks: updatedValue
            }
            break;
        case ACTION_STOCK.SELL_STOCK.type:
            updatedValue = state.numberOfStocks - 1;
            return {
                ...state,
                numberOfStocks: updatedValue
            }
            break;
        default:
            return state;
    }


}

export default REDUCER_STOCK;

