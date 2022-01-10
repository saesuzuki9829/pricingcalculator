import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form, Carousel, Tab, Tabs, Container} from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProductDetails } from '../actions/productActions'
import YouTube from 'react-youtube'
import style from '../Youtube.module.css'
import Header from '../components/HeaderOther'

const ProductContainer = styled.div`
padding-bottom: 1rem;
`

const Div = styled.div`
padding: 0.5rem;
margin: 0.5rem;
`


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
    <Header />
    <Container>
    {loading ? <Loader /> : error ? <Message variant ='danger'> {error} </Message> :(
    
        <Row>
            <Col   Col md={6}>
            <Carousel variant='dark'> 
            <Carousel.Item>
            <Image 
            className= 'd-block w-100 h-100'
            src={product.image} alt={product.name} fluid/>

            </Carousel.Item>
            <Carousel.Item>
            <Image 
            className= 'd-block w-100 h-100'
            src={product.secondImage} alt={product.name} fluid/>

            </Carousel.Item>
            <Carousel.Item>
            <Image 
            className= 'd-block w-100 h-100'
            src={product.thirdImage} alt={product.name} fluid/>

            </Carousel.Item>
           
            </Carousel>
          
            </Col>
            <Col md={6}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                  
                    <ListGroup.Item>Company: {product.brand} 
                    </ListGroup.Item>

                <ProductContainer>
                <Div>
                <Card style={{ width: '18rem' }} >
                    <ListGroup variant='flush'>
                        
                        

                    {product.countInStock > 0 && (
                        <ListGroup.Item>
                            <Row>
                                <Col>Quantity</Col>
                                <Col>
                                    <Form.Control 
                                        as ='select' 
                                        value ={qty} 
                                        onChange={(e) =>setQty(e.target.value)}>{
                                        
                                        [...Array(product.countInStock).keys()].map((x)=> (
                                            <option key={x +1} value = {x +1}>
                                                {x+1}</option>
                                        ))} 
                                    </Form.Control>
                                </Col>
                                </Row>
                      </ListGroup.Item>
                    )}

                        <ListGroup.Item className='ms-auto'>
                        <div > 
                            <Button 
                            onClick={addToCartHandler}
                            className='btn-block'
                            type='button'
                            disabled ={product.countInStock === 0}
                            >
                                Add                          </Button>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                    
                </Card>
                </Div>
                </ProductContainer>
                    <Tabs defaultActiveKey="function" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="function" title="function">
                    {product.description}
                    </Tab>
                    <Tab eventKey="shiyo" title="specification">
                    <Image 
                                className= 'd-block w-100 h-100'
                                src={product.shiyoImage} alt={product.name} fluid/>

                    </Tab>
                    <Tab eventKey="network" title="network">
                    {product.network}
                    </Tab>
                    
                    <Tab eventKey="video" title="video">
                    <YouTube videoId={product.youtubeVideoId} className={style.iframe} containerClassName={style.youtube} />
                    </Tab>
                    </Tabs>
                    
                </ListGroup>
               
            </Col>
            <Col>
        
            </Col>
          
          
        </Row>
      
    )}


<Link className ='btn btn-light my-3' to='/'>
        Back
    </Link>
    </Container>
     </>
)
}

export default ProductScreen
