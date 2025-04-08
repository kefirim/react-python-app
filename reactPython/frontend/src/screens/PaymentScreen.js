import React, { useState} from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import {  useNavigate } from 'react-router-dom';

import { savePaymentMethod } from '../actions/cartActions'

function PaymentScreen() {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart
    const navigate = useNavigate();
    

    const dispatch = useDispatch()

    const [paymentMethod, setPaymentMethod] = useState('PayPal')
    
    

    const submitHandler = (e) => {
        if (!shippingAddress.address) {
            navigate('/shipping')
        }
        e.preventDefault()
       
        dispatch(savePaymentMethod(paymentMethod))
        console.log(shippingAddress.address)
        console.log(paymentMethod)

        navigate('/placeorder')
    }
    console.log(paymentMethod)
  return (
    <FormContainer>
    <CheckoutSteps step1 step2 step3 />

    <Form onSubmit={submitHandler}>
        <Form.Group>
            <Form.Label as='legend'>Select Method</Form.Label>
            <Col>
                <Form.Check
                    type='radio'
                    label='PayPal or Credit Card'
                    id='paypal'
                    name='paymentMethod'
                    value='PayPal'
                    checked={paymentMethod === 'PayPal'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    style={{
                        accentColor: 'blue !important', // Permet d'avoir une couleur bleu personnalisée
                        fontSize: '18px',
                         // Taille du texte
                    }}
                    
                >

                </Form.Check>
            </Col>
        </Form.Group>

        <Button style={ {backgroundColor: 'rgb(60, 60, 60)', border: '2px solid rgb(60, 60, 60)',}} type='submit' variant='primary'>
            Continue
        </Button>
    </Form>
</FormContainer>
  )
}

export default PaymentScreen