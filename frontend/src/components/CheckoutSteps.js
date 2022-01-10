import React from 'react'
import {Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const CheckoutSteps = ({ setp1, step2, step3, step4, step5}) => {
    return (
        <Nav ClassName = 'justify-content-center mb-5'>
            <Nav.Item>
            {setp1 ? (
                <LinkContainer to='/'>
                    <Nav.Link>1. Select Products</Nav.Link>
                </LinkContainer>
            ):(
                <Nav.Link disabled>1. Select Products</Nav.Link>
            )}

            </Nav.Item>
            
            <Nav.Item>
            {step2 ? (
                <LinkContainer to='/shipping'>
                    <Nav.Link>2. Enter Personal Infomation</Nav.Link>
                </LinkContainer>
            ):(
                <Nav.Link disabled>2. Enter Personal Infomation</Nav.Link>
            )}

            </Nav.Item>
            <Nav.Item>
            {step3 ? (
                <LinkContainer to='/agree'>
                    <Nav.Link>3. Privacy Policy</Nav.Link>
                </LinkContainer>
            ):(
                <Nav.Link disabled>3. Privacy Policy</Nav.Link>
            )}

            </Nav.Item>
            <Nav.Item>
            {step4 ? (
                <LinkContainer to='/confirmation'>
                    <Nav.Link>4. Confirmation</Nav.Link>
                </LinkContainer>
            ):(
                <Nav.Link disabled>4. Confirmation</Nav.Link>
            )}

            </Nav.Item>
            <Nav.Item>
            {step5  ? (
                <LinkContainer to='/confirmation'>
                    <Nav.Link>5. Result</Nav.Link>
                </LinkContainer>
            ):(
                <Nav.Link disabled>5. Result</Nav.Link>
            )}

            </Nav.Item>
        </Nav>
    )
}

export default CheckoutSteps
