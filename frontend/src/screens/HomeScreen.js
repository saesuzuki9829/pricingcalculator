import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button, Alert} from 'react-bootstrap'
import styled, { keyframes } from 'styled-components'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'
import { Link as Scroll } from 'react-scroll';


const pulse = keyframes`
0% {
       transform: rotate(0);
   }
89% {
       transform: rotate(0) ;
   }
90% {
       transform: rotate(20deg) ;
   }  
91% {
       transform: rotate(0) ;
   }
92% {
       transform: rotate(20deg) ;
   }
93% {
       transform: rotate(0);
   }
 
`
const Pulse= styled.div`

&>:first-child{
    animation: ${pulse} infinite 5s linear;
}
`

const Center = styled.div`
 
position: flex;
left: ${props => '50%'  };
top:${props => '10%'  }
transform: translate(-50%,-50%);

}
 
`
const Container = styled.div`
padding: 2rem;
`


const HomeScreen = () => {

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

  
    

    return (
        <>
         <section id='main'>
         <Container>
         <Center>
            <h1>CO2濃度測定による新型コロナウイルス感染症対策ソリューション</h1>
           </Center>
        </Container>
  
         <Container>
        <Scroll to="co2Sensor" smooth={false}>
            <Pulse><Button variant='success' size="lg">Webで簡単！オンライン見積り</Button></Pulse>
                    </Scroll>
                    </Container>
                    
  
      <Container>
      <Scroll to="downloadForm" smooth={false}>
      <Button variant='primary' size="lg">資料ダウンロード</Button>
      </Scroll>
    </Container>
        <Container>
            <h3>
            新型コロナウイルスの感染拡大予防のためには、 「換気の悪い密閉空間」を避けることが重要です。
            SensorCorpus IC はCO2濃度検知サービスによりその対策を支援するサービスを提供しています。​
            
            </h3>
        </Container>
        <Container>
            <Alert variant='warning'>
                <h1>CO2濃度センサー管理できていますか？</h1>
            </Alert>
        </Container>
  
            </section>
            <senction id= 'downloadForm'>

               
            </senction>
        <section id="co2Sensor">
        <Container>
        <div className="d-grid gap-2">
  <Button variant="success" size="lg">
  簡単！オンライン見積り
  </Button>
</div>
        
            <h3>まずは、CO2センサーを選んでください</h3>
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
            
            </>
    )
}

export default HomeScreen
