import React from 'react'
import styled from 'styled-components'
import { Link as Scroll } from 'react-scroll'
import { Button, Navbar,  Nav, Container} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

const BtnContainer= styled.div`
padding-right: 1em;
margin-left:1.5rem;

@media (max-width: 991px){

    padding-right: 0em;
    padding-bottom:1em;
}

`

const NavbarOther = () => {
    const redirectToFunction = () => {
        window.location.href = "/#features";
      };
   

    return (
        <>
            <Navbar sticky="top" bg="light" expand='lg' collapseOnSelect>
                <Container>
                <LinkContainer to='/'>
                <Navbar.Brand>
                Pricing Calculator
 
                    </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                
                    <Nav.Link className="ms-3" onClick={redirectToFunction} >
                     
                           Features
                    
                    </Nav.Link>
            
                    <LinkContainer to="/privacypolicy">
                      
                      <Nav.Link className="ms-3">
                         Privacy Policy
                          </Nav.Link>
                   
                          </LinkContainer>
                    
                            
                            </Nav>
                            
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}

export default NavbarOther
