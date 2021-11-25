import React, {useState, useEffect} from 'react'
import { Form, Button, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

const ProfileScreen = ( {location, history} ) => {
        const[name, setName] =  useState('')
        const[email, setEmail] =  useState('')
        const[password, setPassword] = useState('')
        const[confirmPassword, setConfirmPassword] = useState('')
        const [profileUpdated, setProfileUpdated] = useState(false)
        const[message, setMessage] = useState(null)

        const dispatch = useDispatch()

        const userDetails = useSelector((state) => state.userDetails)
        const { loading, error, user } = userDetails

        const userLogin = useSelector((state) => state.userLogin)
        const { userInfo } = userLogin

        const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
        const { success } = userUpdateProfile
        

        useEffect(() => {
            if (!userInfo) {
              history.push('/login')
            } else {
                if (!user.name || !user.name){
                    dispatch(getUserDetails('profile'))
                    return
                } 
                
                if (success) {
                    dispatch({type: USER_UPDATE_PROFILE_RESET})
                    dispatch(getUserDetails('profile'))
                    setProfileUpdated(true)
                    return
                }
              
                setName(user.name)
                setEmail(user.email)
                
            }
          }, [dispatch, history, userInfo, user, success])

            const submitHandler = (e) => {
                e.preventDefault()
                
                setProfileUpdated(false)
                setMessage(null)

                if(password !== confirmPassword){
                    setMessage('Password do not match')
                } else{
                    dispatch(updateUserProfile({id:user._id, name, email, password}));
                    setMessage(null)

            }
        }

    return <Row>
        <Col md={3}>
        <h2>User Profile</h2>
            {message && <Message variant='danger'>{message}</Message>}
            {profileUpdated && <Message varient="success"> Profile Updated </Message>}
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
                    Update
                </Button>
                </div>
            </Form>
       
        </Col>

        <Col md={9}>
            <h2>My Orders</h2>
        </Col>
    </Row>
}

export default ProfileScreen
