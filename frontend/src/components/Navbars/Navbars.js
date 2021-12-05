import React from 'react'
import styled from 'styled-components'
import { Link as Scroll } from 'react-scroll';
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

const Navbars = () => {
    return (
        <>
            <Navbar  bg="light" expand='lg' collapseOnSelect>
                <Container>
                <LinkContainer to='/'>
                <Navbar.Brand>
                        SensorCorpusIC 感染症対策
                    </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                    <Scroll to="function" smooth={false}>
                    <Nav.Link className="ms-3">
                           機能
                            </Nav.Link>
                        </Scroll>
                        <Scroll to="example" smooth={false}>
                    <Nav.Link className="ms-3">
                           事例
                            </Nav.Link>
                        </Scroll>
                        <Scroll to="qanda" smooth={false}>
                    <Nav.Link className="ms-3">
                          Q&A
                            </Nav.Link>
                        </Scroll>
                        <Scroll to="enquiry" smooth={false}>
                    <Nav.Link className="ms-3">
                           お問い合わせ
                            </Nav.Link>
                        </Scroll>
                        <BtnContainer >
                    <Link to="/download" >
                
               <Button variant='primary' >資料ダウンロード</Button>
                        
                        </Link>
                        </BtnContainer>
                            <Scroll to="co2Sensor" smooth={false}>
                     
                               <Button variant='warning' >オンライン見積</Button>
                
                            </Scroll>
                            
                            </Nav>
                            
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}

export default Navbars
