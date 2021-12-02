import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card, ProgressBar} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getOrderDetails } from '../actions/orderActions'
import CheckoutSteps  from '../components/CheckoutSteps'

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
                order.itemsQty *5000
            }else
        { history.push('/placeorder') }
    }

    useEffect(() => {
        if(!order || order._id !== orderId) {
            dispatch(getOrderDetails(orderId))
        }
    }, [dispatch, order, orderId]) 
   

    return loading ? <Loader /> : error ? 
        <Message variant='danger'>
            {error}
        </Message> : 
        <> 
         <div style={{display: 'flex', justifyContent: 'center'}}>
    <CheckoutSteps step5 />
    </div>
    <ProgressBar now={100} />
            <h1>概算お見積り</h1> 
            <Row>
                <Col md={20}>
                    <ListGroup varioant='flush'>
                      
                        <ListGroup.Item>
                            <h2>お見積り明細</h2>
                            {order.orderItems.length === 0 ? ( 
                                <Message>商品が選択されていません </Message>
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
                                                {item.qty} 個 x {item.price} 円 = {item.qty * item.price} 円（税別）
                                            </Col>
                                        </Row>
                                        <Row>

                                        以下のキッティング作業を含む​：SORACOM SIM設定（バイナリパーサー、Funnel機能）​・動作確認​
                             
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
                                    <Col>CO2センサー合計金額</Col>
                                    <Col>{order.itemsPrice} 円（税別）</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>初期設定費用</Col>
                                    <Col>{order.itemsQty} 個 × 5000 円 = {order.instlationFee} 円（税別）</Col>
                                </Row>
                            </ListGroup.Item>
                        
                            <ListGroup.Item>
                            <Row>
                                <Col>合計</Col>
                                <Col>{order.totalPrice} 円（税別）</Col>
                            </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>

                    <ListGroup.Item>
                      
                      <h2>お客様情報</h2>
                      <p>
                        <strong>ご担当者様お名前:</strong>
                        {' '}
                        {order.personalInfomation.name}
                      </p>
                      <p> <strong>Email:</strong>
                      {' '}
                      {order.personalInfomation.email}
                       
                        </p>
                        <p> <strong>貴社名:</strong>
                      {' '}
                      {order.personalInfomation.company}
                       
                        </p>
                        <p> <strong>所属部署名:</strong>
                      {' '}
                      {order.personalInfomation.title}
                       
                        </p>
                        <p> <strong>電話番号:</strong>
                      {' '}
                      {order.personalInfomation.phoneNumber}
                       
                        </p>
                    
                  </ListGroup.Item>

                 

                </Col>

             
            </Row>
        </> 
}

export default OrderScreen