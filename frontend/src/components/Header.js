import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer} from 'react-router-bootstrap'
import {  Nav, Container, NavDropdown, Button } from 'react-bootstrap'
import NavbarHome from './Navbars/NavbarHome'

const Header = () => {
    const dispatch =useDispatch()
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <header class="sticky-top">
      <NavbarHome />
      
      </header>
    )
}

export default Header
