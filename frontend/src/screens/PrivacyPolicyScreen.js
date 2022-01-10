import React from 'react'
import PrivacyPolicy from '../components/PrivacyPolicy'
import { Container } from 'react-bootstrap'
import Header from '../components/HeaderOther'
import styled from 'styled-components'

const Div= styled.div`
padding: 1em;
margin:1.5rem;

@media (max-width: 991px){

    padding-right: 0em;
    padding-bottom:1em;
}

`

const PrivacyPolicyScreen = () => {
    return (
        <>
                <Header />
        <Container>
        <Div>

            <PrivacyPolicy />
            </Div>
            </Container>
        </>
    )
}

export default PrivacyPolicyScreen
