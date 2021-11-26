import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Alert} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'
import PrivacyPolicy from '../components/PrivacyPolicy'

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
            <h1>新規登録</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Row className='py-3'>
                <Col>
                登録済みですか？{' '}
                <Link to={redirect ? `/login?redirect=${redirect}`:'/login'}>ログイン</Link>
                </Col>
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

                <Form.Group countrolId='password'>
                    <Form.Label>
                        パスワード
                    </Form.Label>
                    <Form.Control type ='password' placeholder='パスワード' value={password} onChange={(e)=> setPassword(e.target.value)}></Form.Control>
                  
                </Form.Group>

                <Form.Group countrolId='confirmPassword'>
                    <Form.Label>
                        パスワード確認
                    </Form.Label>
                    <Form.Control type ='password' placeholder='パスワード' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}></Form.Control>
                </Form.Group>
            
                <Form.Group>

                
    
                
                <Form.Label>  プライバシーポリシー </Form.Label>
                
                <div key={`privacypolicy`} className="mb-3">
                <PrivacyPolicy />
                    <Form.Check
                    label={`上記内容を理解し、プライバシーポリシーに同意します`}
                    id={`privacypolicy`}
                    
                    />  
                    </div>   
                    </Form.Group>
               
                <div className='mt-3'> 
                <Button type='submit' varient ='primary'>
                    新規登録
                </Button>
                
                </div>
                
            </Form>
            
        </FormContainer>
        
    )
}

export default RegisterScreen
