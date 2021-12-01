import React, { useState } from 'react'
import { Form, Button, Col, Alert, ProgressBar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer' 
import CheckoutSteps  from '../components/CheckoutSteps' 
import { savePaymentMethod } from '../actions/cartActions'
import PrivacyPolicy from '../components/PrivacyPolicy'

const PaymentScreen = ({ history }) => {

    const cart = useSelector((state) => state.cart)
    const { personalInfomation } = cart
    
     if(!personalInfomation) {
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
            <ProgressBar now={60} />
        <FormContainer>
            
            <h1>プライバシーポリシー</h1>
   
        
               
              <PrivacyPolicy />
            
            
            <Form onSubmit = {submitHandler}>
                <Form.Group>
                    
                  
              
                    <Col>
                    <Form.Check 
                        type='radio' 
                        label ='上記プライバシーポリシーに同意します' 
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
                    次へ
                </Button>
                </div>
            </Form>
        </FormContainer>

        </>
    )
}


export default PaymentScreen
