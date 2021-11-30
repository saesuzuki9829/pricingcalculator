import React, { useState } from 'react'
import styled from 'styled-components'
import { Form, Button, ProgressBar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
 
import { register } from '../actions/userActions'
 
const Container = styled.div`
padding: 1rem;
`
 
const FormScreen = ({ history }) => {
 
   const cart = useSelector((state) => state.cart)
   const {user} = cart
  
   const userRegister = useSelector((state) => state.userRegister)
   const  { loading, error, userInfo } = userRegister
 
   const[name, setName] =  useState('')
   const[email, setEmail] =  useState('')
   const [company, setCompany] = useState('')
   const [title, setTitle] = useState('')
   const [phoneNumber, setPhoneNumber] = useState('')
 
 
   const dispatch = useDispatch()
 
 
   const submitHandler = (e) => {
       e.preventDefault()
         dispatch(register(name, email, company, title, phoneNumber))
         history.push('/payment')
     }
   return (
 
       <>
       <div style={{display: 'flex', justifyContent: 'center'}}>
       <CheckoutSteps step2/>
       </div>
       <ProgressBar now={50} />
       <FormContainer>
           <Form onSubmit = {submitHandler}>
           <h1>会社情報入力</h1>
           <Container>
           <Form.Group countrolId='name'>
               <Form.Label>
                       ご担当者様お名前
               </Form.Label>
               <Form.Control
                       type ='text'
                       placeholder='お名前'
                       value={name}
                       onChange={(e)=> setName(e.target.value)}>
               </Form.Control>
           </Form.Group>
           <Form.Group countrolId='email'>
               <Form.Label>
               Email
               </Form.Label>
               <Form.Control
                       type ='text'
                       placeholder='Email'
                       value={email}
                       onChange={(e)=> setEmail(e.target.value)}>
               </Form.Control>
             
           </Form.Group>
           <Form.Group countrolId='company'>
               <Form.Label>
               貴社名
               </Form.Label>
               <Form.Control
                       type ='text'
                       placeholder='会社名'
                       value={company}
                       onChange={(e)=> setCompany(e.target.value)}>
               </Form.Control>
           </Form.Group>
           <Form.Group countrolId='company'>
               <Form.Label>
               所属部署名
               </Form.Label>
               <Form.Control
                       type ='text'
                       placeholder='部署名'
                       value={title}
                       onChange={(e)=> setTitle(e.target.value)}>
               </Form.Control>
           </Form.Group>
           <Form.Group countrolId='email'>
               <Form.Label>
               電話番号
               </Form.Label>
               <Form.Control
                       type ='text'
                       placeholder='電話番号'
                       value={phoneNumber}
                       onChange={(e)=> setPhoneNumber(e.target.value)}>
               </Form.Control>
             
           </Form.Group>
       </Container>
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
 
 
export default FormScreen
 
