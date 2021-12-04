import React, { useState } from 'react'
import styled from 'styled-components'
import { Form, Button, ProgressBar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { savePersonalInformation } from '../actions/cartActions'


const FormScreen = ({ history }) => {

 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [title, setTitle] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')


    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePersonalInformation({name, email, company, title, phoneNumber}))
        history.push('/payment')
    }
    return (

        <>
       
        <FormContainer>
            <Form onSubmit = {submitHandler}>
            <h1>会社情報入力</h1>

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
