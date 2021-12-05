import React, { useEffect, useState } from 'react'
import { Row, Col, Button} from 'react-bootstrap'
import Product from '../../components/Product'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../actions/productActions'

const Border =styled.div  `
  position: relative;
  padding: 10px 10px;
  background: #efb73e;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);

`

const H1 = styled.h1`
color: #fff;
font-size: 25px;
text-align: center;

@media (max-width: 768px){
  font-size: 20px;
}


@media (max-width: 400px){
  font-size: 19px;
}
`

const Container = styled.div`
padding: 2rem;
`

const H2 =styled.h1`
  position: relative;
  padding: 0.5rem 0.5rem;
  border: 3px solid #d8d8d8;
  border-radius: 10px;
  background: #f9f9f9;
  font-size:15px;
  width:310px;
:before {
  position: absolute;
  bottom: -14px;
  left: 1em;
  width: 0;
  height: 0;
  content: '';
  border-width: 14px 12px 0 12px;
  border-style: solid;
  border-color: #d8d8d8 transparent transparent transparent;
};

:after {
  position: absolute;
  bottom: -10px;
  left: 1em;
  width: 0;
  height: 0;
  content: '';
  border-width: 14px 12px 0 12px;
  border-style: solid;
  border-color: #f9f9f9 transparent transparent transparent;
}

@media (max-width: 768px){
  font-size:12px;
  width:250px;
}
@media (max-width: 425px){
  font-size:11px;
  width:230px;
}

@media (max-width: 375px){
  font-size:10px;
  width:215px;
}

`


const Co2SensorSection = () => {

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
      <section id="co2Sensor">
        <Container>
             <div className="d-grid gap-2">
  <Border>
<H1>Webで簡単！オンライン見積り</H1>
  </Border>
</div>

<Container>
<H2>まずは、CO2センサーを選んでください！</H2></Container>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ):(
                <Row>
                {products.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
            )
        }
        </Container>
        </section>
    )
}

export default Co2SensorSection
