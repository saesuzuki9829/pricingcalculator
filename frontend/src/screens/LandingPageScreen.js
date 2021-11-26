import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
0% {
       transform: rotate(0);
   }
89% {
       transform: rotate(0) ;
   }
90% {
       transform: rotate(20deg) ;
   }  
91% {
       transform: rotate(0) ;
   }
92% {
       transform: rotate(20deg) ;
   }
93% {
       transform: rotate(0);
   }
 
`
const Pulse= styled.div`

&>:first-child{
    animation: ${pulse} infinite 5s linear;
}
`

const LandingPageScreen = () => {
    return (
    <Link to='/home'>
        <Pulse><Button variant='success' size="lg">簡単！オンライン見積り</Button></Pulse>
</Link>
    )
}

export default LandingPageScreen
