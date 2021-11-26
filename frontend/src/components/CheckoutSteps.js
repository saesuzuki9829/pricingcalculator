import React from 'react'
import {Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const CheckoutSteps = ({ setp1, step2, step3, step4, step5}) => {
    return (
        <Nav ClassName = 'justify-content-center mb-5'>
            <Nav.Item>
            {setp1 ? (
                <LinkContainer to='/home'>
                    <Nav.Link>1. O2センサー選択</Nav.Link>
                </LinkContainer>
            ):(
                <Nav.Link disabled>1. CO2センサー選択</Nav.Link>
            )}

            </Nav.Item>
            
            <Nav.Item>
            {step2 ? (
                <LinkContainer to='/shipping'>
                    <Nav.Link>2. 会社情報入力</Nav.Link>
                </LinkContainer>
            ):(
                <Nav.Link disabled>2. 会社情報入力</Nav.Link>
            )}

            </Nav.Item>
            <Nav.Item>
            {step3 ? (
                <LinkContainer to='/payment'>
                    <Nav.Link>3. 注意事項</Nav.Link>
                </LinkContainer>
            ):(
                <Nav.Link disabled>3. 注意事項</Nav.Link>
            )}

            </Nav.Item>
            <Nav.Item>
            {step4 ? (
                <LinkContainer to='/placeorder'>
                    <Nav.Link>4. 確認</Nav.Link>
                </LinkContainer>
            ):(
                <Nav.Link disabled>4. 確認</Nav.Link>
            )}

            </Nav.Item>
            <Nav.Item>
            {step5  ? (
                <LinkContainer to='/placeorder'>
                    <Nav.Link>5. 概算見積り</Nav.Link>
                </LinkContainer>
            ):(
                <Nav.Link disabled>5. 概算見積り</Nav.Link>
            )}

            </Nav.Item>
        </Nav>
    )
}

export default CheckoutSteps
