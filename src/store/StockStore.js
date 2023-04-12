import { connect } from 'react-redux'
import REDUCER_STOCK from './StockReducer'
import * as reduxToolkit from '@reduxjs/toolkit'; 

const STORE_STOCK = reduxToolkit.configureStore({reducer: REDUCER_STOCK});

export default STORE_STOCK