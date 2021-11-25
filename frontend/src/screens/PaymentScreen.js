import React, { useState } from 'react'
import { Form, Button, Col, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer' 
import CheckoutSteps  from '../components/CheckoutSteps' 
import { savePaymentMethod } from '../actions/cartActions'

const PaymentScreen = ({ history }) => {

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    
     if(!userInfo) {
        history.push('/login')
    }

    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart
    
     if(!shippingAddress) {
        history.push('/shipping')
    }


    const [ paymentMethod, setPaymentMethod,  ] = useState('Paypal')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (

        <> 
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <CheckoutSteps step3 />
            </div>
        <FormContainer>
            
            <h1>Payment Method</h1>
            <Form.Label as='legend'>Select Method</Form.Label>
            <Alert variant='danger'>We only accept payments by credit card or PayPal </Alert>
            
            <Form onSubmit = {submitHandler}>
                <Form.Group>
                    
                  
              
                    <Col>
                    <Form.Check 
                        type='radio' 
                        label ='Credit Card or PayPal' 
                        id = 'PayPal'
                        name='paymentMethod'
                        value='PayPal' 
                        checked 
                        onChange={(e) => setPaymentMethod(e.targe.value)}>

                    </Form.Check>
                    </Col>
                    </Form.Group>
                    <div className='mt-3'> 
                <Button type='submit' varient='primary'>
                    Continue
                </Button>
                </div>
            </Form>
        </FormContainer>

        </>
    )
}


export default PaymentScreen
