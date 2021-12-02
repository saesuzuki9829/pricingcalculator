import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer} from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap'



const Header = () => {
    const dispatch =useDispatch()
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <header><Navbar bg='light' variant='light' expand='lg' collapseOnSelect>
        <Container>
            <LinkContainer to='/'>
                <Navbar.Brand>SensorCorpus IC 感染症対策</Navbar.Brand>
            </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto'>
       
            <Button variant='primary' size="sm" onClick={()=> handleClick()} width={click ? 40 : 100} height={click ? 40 : 100} fill='currentColor' >資料ダウンロード</Button> 

                
            </Nav>
          </Navbar.Collapse>
        </Container>
 
      </Navbar></header>
    )
}

export default Header
