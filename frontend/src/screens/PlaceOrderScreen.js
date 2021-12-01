import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card, ProgressBar} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'
import { createOrder } from '../actions/orderActions'
import { ORDER_CREATE_RESET } from '../constants/orderConstants'

const PlaceOrderScreen = ({history}) => {
    
 

    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)

    // Calculate prices
    const addDecimals = (num) =>{
      return (Math.round(num * 100) /100).toFixed(0)
    }

    cart.itemsPrice = addDecimals(
      cart.cartItems.reduce(
      (acc, item) => acc+ item.price * item.qty, 
      0
    ))
    cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100)
    cart.taxPrice = addDecimals(Number((0.2 * cart.itemsPrice).toFixed(0)))
    cart.totalPrice = (
      Number(cart.itemsPrice) + 
      Number(cart.shippingPrice) + 
      Number(cart.taxPrice)
    ).toFixed(0)

    const orderCreate = useSelector(state => state.orderCreate)
    const { order, success, error } = orderCreate

    useEffect(() => {
      if(success){
        history.push(`/order/${order._id}`)
        dispatch({ type: ORDER_CREATE_RESET })

      }
      // eslint-disable-next-line
    },[history, success])

    const placeOrderHandler = () => {
      dispatch(createOrder({
        orderItems: cart.cartItems,
        personalInfomation: cart.personalInfomation,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      }))

    }

    return (
      <> 
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <CheckoutSteps step4 />
              </div>
              <ProgressBar now={70} />
                <Row>
                  <Col md={8}>
                    <ListGroup varioant='flush'>
                        <ListGroup.Item>
                            <h2>お客様情報</h2>
                            <p>
                              <strong>担当者様お名前:</strong>
                              {' '}
                              {cart.personalInfomation.name}
                            </p>
                            <p> <strong>Email:</strong>
                            {' '}
                            {cart.personalInfomation.email}
                             
                              </p>
                              <p> <strong>貴社名:</strong>
                            {' '}
                            {cart.personalInfomation.company}
                             
                              </p>
                              <p> <strong>所属部署名:</strong>
                            {' '}
                            {cart.personalInfomation.title}
                             
                              </p>
                              <p> <strong>電話番号:</strong>
                            {' '}
                            {cart.personalInfomation.phoneNumber}
                             
                              </p>
                         
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <p>
                                <strong>Method:</strong>
                                {' '}{cart.paymentMethod}
                            </p>

                        </ListGroup.Item>

                        <ListGroup.Item>
                          <h2>CO2センサー</h2>
                            {cart.cartItems.length === 0 ? ( 
                              <Message> 商品が選択されていません </Message>
                            ):(
                              <ListGroup variant='flush'>
                                {cart.cartItems.map((item, index) => (
                                  <ListGroup.Item key={index}>
                                    <Row>
                                      <Col md={1}>
                                        <Image 
                                          src= {item.image} 
                                          alt={item.name}
                                          fluid 
                                          rounded 
                                        />
                                      </Col>

                                      <Col>
                                        <Link to={`/product/${item.product}`}>
                                          {item.name}
                                        </Link>
                                      </Col>

                                      <Col md={4}>
                                        {item.qty} x {item.price} 円（税込） = {item.qty * item.price} 円（税込）
                                      </Col>
                                    </Row>
                                  </ListGroup.Item>
                                ))}
                                            
                                        
                              </ListGroup>
                            )}
                    </ListGroup.Item>

                    </ListGroup>
                </Col>

                <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>概算お見積内訳</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>CO2センサー</Col>
                  <Col>¥{cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${cart.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant='danger'>{error}</Message>}
              </ListGroup.Item>
              <ListGroup.Item>
      
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  概算お見積を出力
                </Button>
                
              </ListGroup.Item>
            </ListGroup>
          </Card>
          </Col>
        </Row>
        </>
    )
}

export default PlaceOrderScreen