import React, { useState } from 'react'
import { Form, Button, Alert, ProgressBar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'

const ShippingScreen = ({ history }) => {

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    
     if(!userInfo) {
        history.push('/login')
    }

    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart

    const [ addressLine1, setAddressLine1 ] = useState(shippingAddress.addressLine2)
    const [ addressLine2, setAddressLine2 ] = useState(shippingAddress.addressLine1)
    const [ townOrCity, setTownOrCity ] = useState(shippingAddress.townOrCity)
    const [ county, setCounty ] = useState(shippingAddress.county)
    const [ postCode, setPostCode ] = useState(shippingAddress.postCode)

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({addressLine1, addressLine2, townOrCity, county, postCode}))
        history.push('/payment')
    }
    return (

        <>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <CheckoutSteps step2/>
        </div>
        <ProgressBar now={50} />
        <FormContainer>
            
            <h1>会社情報入力</h1>
            <h3>会社名</h3>
            <h3>お電話番号</h3>
            <h3>ご住所</h3>
            <Alert variant='danger'>配送料は別途いただいております</Alert>
            <Form onSubmit = {submitHandler}>
                <Form.Group countrolId='addressLine1'>
                    <Form.Label>
                        Address Line 1
                    </Form.Label>
                    <Form.Control 
                        type ='text' 
                        placeholder='Enter Address Line 1' 
                        value={addressLine1} 
                        onChange={(e)=> setAddressLine1(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group countrolId='addressLine2'>
                    <Form.Label>
                        Address Line 2
                    </Form.Label>
                    <Form.Control 
                        type ='text' 
                        placeholder='Enter Address Line 2' 
                        value={addressLine2} 
                        onChange={(e)=> setAddressLine2(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group countrolId='townOrCity'>
                    <Form.Label>
                        Town or City
                    </Form.Label>
                    <Form.Control 
                        type ='text' 
                        placeholder='Enter Town or City' 
                        value={townOrCity} 
                        onChange={(e)=> setTownOrCity(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group countrolId='county'>
                    <Form.Label>
                        County
                    </Form.Label>
                    <Form.Control 
                        type ='text' 
                        placeholder='Enter County' 
                        value={county} 
                        onChange={(e)=> setCounty(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group countrolId='postCode'>
                    <Form.Label>
                        Post Code
                    </Form.Label>
                    <Form.Control 
                        type ='text' 
                        placeholder='Enter pPst Code' 
                        value={postCode} 
                        onChange={(e)=> setPostCode(e.target.value)}>
                    </Form.Control>
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


export default ShippingScreen
