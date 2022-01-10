import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card, ProgressBar, Container} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getOrderDetails } from '../actions/orderActions'
import CheckoutSteps  from '../components/CheckoutSteps'
import Header from '../components/HeaderOther'

const OrderScreen = ({history, match}) => {

    const orderId = match.params.id

    const dispatch = useDispatch()

    const orderDetails = useSelector((state) => state.orderDetails)
    const { order, loading, error } = orderDetails

  
    if(!loading) {
        if(order)
        {
            
            //   Calculate prices
            const addDecimals = (num) => {
            return (Math.round(num * 100) / 100).toFixed(0)
            }
        
            order.itemsPrice = addDecimals(
            order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
            )
            order.itemsQty = 
                order.orderItems.reduce((acc, item) => acc +  item.qty,0)
            order.instlationFee=
                order.itemsQty *5
            }else
        { history.push('/confirmation') }
    }

    useEffect(() => {
        if(!order || order._id !== orderId) {
            dispatch(getOrderDetails(orderId))
        }
    }, [dispatch, order, orderId]) 
   

    return loading ? <Loader /> : error ? 
    <>    <Header /> <Container>  <Message variant='danger'>
            {error}
        </Message>  </Container> </> : 
        <>
        <Header />
        <Container> 
         <div style={{display: 'flex', justifyContent: 'center'}}>
    <CheckoutSteps step5 />
    </div>
    <ProgressBar now={100} />
            <h1>Result</h1> 
            <Row>
                <Col md={20}>
                    <ListGroup varioant='flush'>
                      
                        <ListGroup.Item>
                            <h2>Details</h2>
                            {order.orderItems.length === 0 ? ( 
                                <Message>No product is selected. </Message>
                            ):(
                                <ListGroup variant='flush'>
                                {order.orderItems.map((item, index) => (
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
                                                {item.qty}  x £{item.price}  = £ {item.qty * item.price} 
                                            </Col>
                                        </Row>
                                        
                                    </ListGroup.Item>
                                ))}
                                            
                                        
                                </ListGroup>
                            )}
                        </ListGroup.Item>

                    </ListGroup>
                    <Card>
                        <ListGroup variant='flush'>
                        
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total Price of Products</Col>
                                    <Col>£{order.itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Kitting Prices</Col>
                                    <Col>{order.itemsQty} × £5 = £{order.instlationFee} </Col>
                                </Row>
                            </ListGroup.Item>
                        
                            <ListGroup.Item>
                            <Row>
                                <Col>Total Price</Col>
                                <Col>£{order.totalPrice}</Col>
                            </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>

                    <ListGroup.Item>
                      
                      <h2>Your Information</h2>
                      <p> <strong>Title:</strong>
                      {' '}
                      {order.personalInfomation.title}
                       
                        </p>
                      <p>
                        
                        <strong>Name:</strong>
                        {' '}
                        {order.personalInfomation.name}
                      </p>
                      
                      <p> <strong>Email:</strong>
                      {' '}
                      {order.personalInfomation.email}
                       
                        </p>
                        <p> <strong>Company Name:</strong>
                      {' '}
                      {order.personalInfomation.company}
                       
                        </p>
                       
                        <p> <strong>Phone Number:</strong>
                      {' '}
                      {order.personalInfomation.phoneNumber}
                       
                        </p>
                    
                  </ListGroup.Item>

                 

                </Col>

             
            </Row>
        </Container> 
        </>
}

export default OrderScreen