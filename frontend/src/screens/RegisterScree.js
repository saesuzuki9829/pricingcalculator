import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'

const RegisterScreen = ( {location, history} ) => {
        const[name, setName] =  useState('')
        const[email, setEmail] =  useState('')
        const[password, setPassword] = useState('')
        const[confirmPassword, setConfirmPassword] = useState('')
        const[message, setMessage] = useState(null)

        const dispatch = useDispatch()

        const userRegister = useSelector((state) => state.userRegister)
        const  { loading, error, userInfo } = userRegister

        const redirect = location.search ? location.search.split('=')[1] : '/'

        useEffect(() => {
            if (userInfo) {
              history.push(redirect)
            }
          }, [history, userInfo, redirect])

            const submitHandler = (e) => {
                e.preventDefault()
                if(password !== confirmPassword){
                    setMessage('Password do not match')
                } else{
                    dispatch(register(name, email, password));
                    setMessage(null)
            }
        }

    return (
        <FormContainer>
            <h1>Sign Up</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group countrolId='name'>
                    <Form.Label>
                        Name
                    </Form.Label>
                    <Form.Control type ='name' placeholder='Enter name' value={name} onChange={(e)=> setName(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group countrolId='email'>
                    <Form.Label>
                        Email Address
                    </Form.Label>
                    <Form.Control type ='email' placeholder='Enter email' value={email} onChange={(e)=> setEmail(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group countrolId='password'>
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control type ='password' placeholder='Enter password' value={password} onChange={(e)=> setPassword(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group countrolId='confirmPassword'>
                    <Form.Label>
                        CondirmPassword
                    </Form.Label>
                    <Form.Control type ='password' placeholder='Confirm password' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <div className='mt-3'> 
                <Button type='submit' varient ='primary'>
                    Register
                </Button>
                </div>
            </Form>

            <Row className='py-3'>
                <Col>
                Have an Account?{' '}
                <Link to={redirect ? `/login?redirect=${redirect}`:'/login'}>Login</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default RegisterScreen
