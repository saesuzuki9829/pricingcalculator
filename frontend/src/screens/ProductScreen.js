import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form, ProgressBar } from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProductDetails } from '../actions/productActions'
import CheckoutSteps from '../components/CheckoutSteps'

const ProductScreen = ({ history, match }) => {
    const [qty, setQty] = useState(1)

    const dispatch = useDispatch()

    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
      }
return (
    <>
    
    <Link className ='btn btn-light my-3' to='/home'>
        戻る
    </Link>
    {loading ? <Loader /> : error ? <Message variant ='danger'> {error} </Message>:(
        <Row>
            <Col   Col md={6}>
                <Image src={product.image} alt={product.name} fluid/>
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating 
                            value={product.rating} 
                            text={`${product.numReviews} reviews`}
                        />
                    </ListGroup.Item>
                    <ListGroup.Item>価格: {product.price} 円 (税込)</ListGroup.Item>
                    <ListGroup.Item>詳細: {product.description}</ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md ={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                                <Row>
                                    <Col>価格:</Col>
                                    <Col>
                                    <strong>{product.price} 円 (税込)</strong>
                                    </Col>
                                </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                                <Row>
                                    <Col>在庫:</Col>
                                    <Col>
                                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                        </ListGroup.Item>

                    {product.countInStock > 0 && (
                        <ListGroup.Item>
                            <Row>
                                <Col>数量</Col>
                                <Col>
                                    <Form.Control 
                                        as ='select' 
                                        value ={qty} 
                                        onChange={(e) =>setQty(e.target.value)}>{
                
                                        [...Array(product.countInStock).keys()].map((x)=> (
                                            <option key={x + 1} value = {x+1}>
                                                {x+1}</option>
                                        ))} 
                                    </Form.Control>
                                </Col>
                            </Row>
                      </ListGroup.Item>
                    )}

                        <ListGroup.Item>
                        <div className='mt-3'> 
                            <Button 
                            onClick={addToCartHandler}
                            className='btn-block'
                            type='button'
                            disabled ={product.countInStock === 0}
                            >
                                追加                            </Button>
                            </div>
                        </ListGroup.Item>

                    </ListGroup>
                </Card>
            </Col>
        </Row>
    )}
    </>
)
}

export default ProductScreen
