import React from 'react'
import { Container , Navbar,Nav,NavDropdown} from 'react-bootstrap'
import { Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'



function Header() {
  const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
      dispatch(logout())
    }
  return (
    <header>
      <Navbar bg="dark" variant='dark' data-bs-theme="light"collapseOnSelect>
    <Container>
      <Link to="/" style={{textDecoration : 'none' }} >
      <Navbar.Brand>Proshop</Navbar.Brand>
      </Link>
      
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/cart"><i className='fas fa-shopping-cart'>Carte</i></Nav.Link>
        {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    
                                        <NavDropdown.Item as={Link} to='/profile'>Profile</NavDropdown.Item>
                                    
                                    
                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                   
                                    

                                </NavDropdown>
                            ) : (
                              <Nav.Link as={Link} to="/login"><i className='fas fa-user'>Login</i></Nav.Link>
                                )}
        
        
        
        
       
        
      </Nav>
    </Container>
  </Navbar></header>
  )
}

export default Header