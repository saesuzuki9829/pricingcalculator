import React, { useState } from 'react'
import { Form, Button, Col, Alert, ProgressBar } from 'react-bootstrap'
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
            <ProgressBar now={60} />
        <FormContainer>
            
            <h1>注意事項</h1>
            <Form.Label as='legend'></Form.Label>
            <Alert variant='danger'>
            お見積りの金額はあくまでも概算の金額であり、お客様のご予算や、
            実際の導入時の状況によって金額は変動します
            </Alert>
            
            <Form onSubmit = {submitHandler}>
                <Form.Group>
                    
                  
              
                    <Col>
                    <Form.Check 
                        type='radio' 
                        label ='注意事項を確認しました。' 
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
