import React from 'react'
import { Nav } from 'react-bootstrap'
import {  Link } from 'react-router-dom';

function CheckoutSteps({ step1, step2, step3, step4 }) {

    return (
        <Nav className='justify-content-center mb-4'>
            <Nav.Item>
                {step1 ? (
                    <Nav.Link style={{color: "black"}} as={Link} to="/login">Login</Nav.Link>
                ) : (
                        <Nav.Link as={Link} to="/login" disabled>Login</Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step2 ? (

                <Nav.Link style={{color: "black"}} as={Link} to="/shipping">Shipping</Nav.Link>
                    
                ) : (
                <Nav.Link as={Link} to="/shipping" disabled>Shipping</Nav.Link>
                )}
            </Nav.Item>

            <Nav.Item>
                {step3 ? (
                    

            <Nav.Link style={{color: "black"}} as={Link} to='/payment'>Payment</Nav.Link>

                ) : (
                    <Nav.Link as={Link} to='/payment' disabled>Payment</Nav.Link>
                )}
            </Nav.Item>

            <Nav.Item>
                {step4 ? (
              <Nav.Link style={{color: "black"}} as={Link} to='/placeorder'>Place Order</Nav.Link>

                    
                ) : (
                    <Nav.Link as={Link} to='/placeorder' disabled>Place Order</Nav.Link>
                )}
            </Nav.Item>
        </Nav>
    )
}

export default CheckoutSteps