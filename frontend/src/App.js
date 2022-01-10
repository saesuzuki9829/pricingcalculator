import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen'

const App = () => {
  return (
    <Router>


    <main className='pb-3'>

        <Route path='/order/:id' component={OrderScreen} exact/>
        <Route path='/confirmation' component={PlaceOrderScreen} exact/>
        <Route path='/agree' component={PaymentScreen} exact/>
        <Route path='/shipping' component={ShippingScreen} exact/>
        <Route path='/product/:id' component={ProductScreen} exact/>
        <Route path='/cart/:id?' component={CartScreen}/>
        <Route path='/' component={HomeScreen} exact/>
        <Route path='/privacypolicy' component={PrivacyPolicyScreen} exact/>
      
        

    </main>

    <Footer />
    </Router>
  );
}

export default App;
