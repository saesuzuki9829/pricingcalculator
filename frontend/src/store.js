import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { 
  productListReducer, 
  productDetailsReducer,
 } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'


import { 
  orderCreateReducer, 
  orderDetailsReducer,
  orderPayReducer } from './reducers/orderReducers'


const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  orderCreate: orderCreateReducer,
  orderDetails : orderDetailsReducer,
  orderPay : orderPayReducer,

})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []




const personalInfomationFromStorage = localStorage.getItem('personalInfomation')
? JSON.parse(localStorage.getItem('personalInfomation'))
: {}
  
  
const initialState = {
  cart : { 
    cartItems: cartItemsFromStorage, 
    personalInfomation: personalInfomationFromStorage
  }
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store