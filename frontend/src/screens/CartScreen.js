import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card , ProgressBar} from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'
import { Container } from 'react-bootstrap'
import Header from '../components/HeaderOther'
import styled from 'styled-components'

const Div = styled.div`
padding: 0.5rem;
margin: 0.5rem;
`

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push('/shipping')
  }

  return (
    <>
    <Header />
    <Container>

    <Row>
      <Col md={8}>
        <h1>Products</h1>
        {cartItems.length === 0 ? (
          <Message>
            No product is selected. <Link to='/'>Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={3}>{item.brand}</Col>
                  <Col md={2}>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
   
      <Col md={4}>
     <Div>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
              Quantity：{cartItems.reduce((acc, item) => acc + item.qty, 0)}
                
              </h2>
              
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Next
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
        </Div>
      </Col>   
    </Row>
    <Link className ='btn btn-light my-3' to='/'>
        Back
    </Link>
    </Container>
    </>
  )
}

export default CartScreen