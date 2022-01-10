import React, { useState } from 'react'
import styled from 'styled-components'
import { Form, Button, ProgressBar,Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePersonalInformation } from '../actions/cartActions'
import Header from '../components/HeaderOther'

const ShippingScreen = ({ history }) => {


    const cart = useSelector((state) => state.cart)
    const { personalInfomation } = cart
 
    const [name, setName] = useState(personalInfomation.name)
    const [email, setEmail] = useState(personalInfomation.email)
    const [company, setCompany] = useState(personalInfomation.company)
    const [title, setTitle] = useState(personalInfomation.title)
    const [phoneNumber, setPhoneNumber] = useState(personalInfomation.phoneNumber)


    const dispatch = useDispatch()
    const [validated, setValidated] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault()
        const form = e.currentTarget;
        if (form.checkValidity() === false) 
        {
            e.preventDefault();
            e.stopPropagation();
          }else{
        dispatch(savePersonalInformation({name, email, company, title, phoneNumber}))
        history.push('/agree')
        }
    }
    return (
<>
<Header />
        <Container>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <CheckoutSteps step2/>
        </div>
        <ProgressBar now={50} />
        <FormContainer>
            <Form onSubmit = {submitHandler}>
            <h1>Personal Infomation</h1>

           

            <Form.Group countrolId='name'>
                <Form.Label>
                        Name
                </Form.Label>
                <Form.Control 
                        required
                        type ='text' 
                        placeholder='Name' 
                        value={name} 
                        onChange={(e)=> setName(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group countrolId='title'>
                <Form.Label>
                Title
                </Form.Label>

                <Form.Select 
                        required
                        type ='text' 
                        placeholder='Title' 
                        value={title} 
                        onChange={(e)=> setTitle(e.target.value)}>
                             <option>Select title</option>
                             <option value="Ms">Ms</option>
                             <option value="Mr">Mr</option>
                           
                             <option value="Mrs">Mrs</option>
                             <option value="Miss">Miss</option>
                             
                </Form.Select>
            </Form.Group>
            <Form.Group countrolId='email'>
                <Form.Label>
                Email
                </Form.Label>
                <Form.Control 
                        required
                        type ='email' 
                        placeholder='Email' 
                        value={email} 
                        onChange={(e)=> setEmail(e.target.value)}>
                </Form.Control>
               
            </Form.Group>
            <Form.Group countrolId='company'>
                <Form.Label>
                Company Name
                </Form.Label>
                <Form.Control 
                        required
                        type ='text' 
                        placeholder='Company Name' 
                        value={company} 
                        onChange={(e)=> setCompany(e.target.value)}>
                </Form.Control>
            </Form.Group>
            
            <Form.Group countrolId='email'>
                <Form.Label>
                Phone Number
                </Form.Label>
                <Form.Control 
                        required
                        type ='text' 
                        placeholder='Phone Number' 
                        value={phoneNumber} 
                        onChange={(e)=> setPhoneNumber(e.target.value)}>
                </Form.Control>
               
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


export default ShippingScreen
