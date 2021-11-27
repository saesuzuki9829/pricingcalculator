import React, { useState } from 'react'
import { Form, Button, Alert, ProgressBar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import {  savePersonalInformation } from '../actions/cartActions'

const ShippingScreen = ({ history }) => {

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    
     if(!userInfo) {
        history.push('/login')
    }

    const cart = useSelector((state) => state.cart)
    const { personalInfomation } = cart
 
    const [name, setName] = useState(personalInfomation.name)
    const [email, setEmail] = useState(personalInfomation.email)
    const [company, setCompany] = useState(personalInfomation.company)
    const [title, setTitle] = useState(personalInfomation.title)


    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePersonalInformation({name, email, company, title}))
       
        history.push('/payment')
    }
    return (

        <>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <CheckoutSteps step2/>
        </div>
        <ProgressBar now={50} />
        <FormContainer>
            
           
            <Alert variant='danger'>配送料は別途いただいております</Alert>
            <Form onSubmit = {submitHandler}>
            <h1>ご担当者様情報入力</h1>
            <Form.Group countrolId='name'>
            <Form.Label>
                        お名前
                    </Form.Label>
                    <Form.Control 
                        type ='text' 
                        placeholder='お名前' 
                        value={postCode} 
                        onChange={(e)=> setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            <h1>会社情報入力</h1>
            <h3>会社名</h3>
            <h3>お電話番号</h3>
            <h3>ご住所</h3>
                <Form.Group countrolId='postCode'>
                    <Form.Label>
                        郵便番号
                    </Form.Label>
                    <Form.Control 
                        type ='text' 
                        placeholder='郵便番号' 
                        value={postCode} 
                        onChange={(e)=> setPostCode(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group countrolId='prefecture'>
                    <Form.Label>
                       都道府県
                    </Form.Label>
                    <Form.Control 
                        type ='text' 
                        placeholder='都道府県' 
                        value={prefecture} 
                        onChange={(e)=> setPrefecture(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group countrolId='townOrCity'>
                    <Form.Label>
                        市区町村
                    </Form.Label>
                    <Form.Control 
                        type ='text' 
                        placeholder='市区町村' 
                        value={townOrCity} 
                        onChange={(e)=> setTownOrCity(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group countrolId='addressLine'>
                    <Form.Label>
                        丁目•番地•号•建物名等
                    </Form.Label>
                    <Form.Control 
                        type ='text' 
                        placeholder='丁目•番地•号•建物名等' 
                        value={addressLine} 
                        onChange={(e)=> setAddressLine(e.target.value)}>
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
