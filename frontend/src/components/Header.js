import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer} from 'react-router-bootstrap'
import {  Nav, Container, NavDropdown, Button } from 'react-bootstrap'
import Navbars from './Navbars/Navbars'

const Header = () => {
    const dispatch =useDispatch()
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <header class="sticky-top">
      <Navbars />
      
      </header>
    )
}

export default Header
