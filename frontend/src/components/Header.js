import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer} from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap'
import { logout } from '../actions/userActions'




const Header = () => {
    const dispatch =useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler= () => {
      dispatch(logout())
    }

    return (
        <header><Navbar bg='light' variant='light' expand='lg' collapseOnSelect>
        <Container>
            <LinkContainer to='/'>
                <Navbar.Brand>SensorCorpus IC 感染症対策</Navbar.Brand>
            </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto'>
            <Button variant='primary' size="sm">資料ダウンロード</Button> 
                {userInfo ? (
                    <NavDropdown title ={userInfo.name} id='username'>
                      <LinkContainer to='/profile'>
                        <NavDropdown.Item>お客様情報</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Item onClick ={logoutHandler}>ログアウト</NavDropdown.Item>
                          </NavDropdown>
                ) : <LinkContainer to='/login'>
                <Nav.Link><i className='fas fa-user'></i>ログイン</Nav.Link>
            </LinkContainer>}
                
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar></header>
    )
}

export default Header
