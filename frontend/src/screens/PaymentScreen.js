import React, { useState } from 'react'
import { Form, Button, Col, Alert, ProgressBar, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer' 
import CheckoutSteps  from '../components/CheckoutSteps' 
import { savePaymentMethod } from '../actions/cartActions'
import PrivacyPolicy from '../components/PrivacyPolicy'
import Header from '../components/HeaderOther'

const PaymentScreen = ({ history }) => {

    const cart = useSelector((state) => state.cart)
    const { personalInfomation } = cart
    
     if(!personalInfomation) {
        history.push('/shipping')
    }


    const [ paymentMethod, setPaymentMethod,  ] = useState('agreed')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/confirmation')
    }

    return (
<> <Header />
        <Container> 
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <CheckoutSteps step3 />
            </div>
            <ProgressBar now={60} />
        <FormContainer>
            
            <h1>Privacy Policy</h1>
   
        
               
              <PrivacyPolicy />
            
            
            <Form onSubmit = {submitHandler}>
                <Form.Group>
                    
                  
              
                    <Col>
                    <Form.Check 
                        type='radio' 
                        label ='I agree to the privacy policy' 
                        id = 'agreed'
                        name='paymentMethod'
                        value='agreed' 
                        checked 
                        onChange={(e) => setPaymentMethod(e.targe.value)}>

                    </Form.Check>
                    </Col>
                    </Form.Group>
                    <div className='mt-3'> 
                <Button type='submit' varient='primary'>
                    Next
                </Button>
                </div>
            </Form>
        </FormContainer>

        </Container>
        </>
    )
}


export default PaymentScreen
