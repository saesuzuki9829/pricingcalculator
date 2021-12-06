import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import DownloadScreen from './screens/DownloadScreen'

const App = () => {
  return (
    <Router>
    <Header />
    <Container>
    <main className='pb-3'>
      <Container>
        <Route path='/order/:id' component={OrderScreen} exact/>
        <Route path='/placeorder' component={PlaceOrderScreen} exact/>
        <Route path='/payment' component={PaymentScreen} exact/>
        <Route path='/shipping' component={ShippingScreen} exact/>
        <Route path='/product/:id' component={ProductScreen} exact/>
        <Route path='/cart/:id?' component={CartScreen}/>
        <Route path='/' component={HomeScreen} exact/>
        <Route path='/download' component={DownloadScreen} exact/>
        
      </Container>
    </main>
    </Container>
    <Footer />
    </Router>
  );
}

export default App;
