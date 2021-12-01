import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, ProgressBar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'
import CheckoutSteps from '../components/CheckoutSteps'

const RegisterScreen = ({ location, history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [title, setTitle] = useState('')
    const [company, setCompany] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const[message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister
    
    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push('/payment')
        }
        }, [history, userInfo])

        const submitHandler = (e) => {
            e.preventDefault()
            {
                dispatch(register(name, email, title, phoneNumber, company));
                setMessage(null)
            }
            
        }

    return (
        <>
          <div style={{display: 'flex', justifyContent: 'center'}}>
        <CheckoutSteps step2/>
        </div>
        <ProgressBar now={50} />
        <FormContainer>
            <h1>新規登録</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Row className='py-3'>
              
            </Row>
            <Form onSubmit={submitHandler}>
                <Form.Group countrolId='name'>
                    <Form.Label>
                        お名前
                    </Form.Label>
                    <Form.Control type ='name' placeholder='お名前' value={name} onChange={(e)=> setName(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group countrolId='email'>
                    <Form.Label>
                        Email 
                    </Form.Label>
                    <Form.Control type ='email' placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}></Form.Control>
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
                <Button type='submit' varient ='primary'>
                    新規登録
                </Button>
                
                </div>
                
            </Form>
            
        </FormContainer>
        </>
    )
}

export default RegisterScreen
