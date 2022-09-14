import React from 'react'
import { Form,Button } from 'react-bootstrap'

export default function LoginForm() {
    return (
        <div className='container col-8 mt-5'>
            <h1 style={{ textAlign: 'center' }}>Employee Login</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-bold'>Employee Id</Form.Label>
                    <Form.Control type="number" placeholder="Employee Id" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Employee email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="success" type="submit">
                    Submit
                </Button>
                <b> or new here<a href='/add-employee'> Sign Up </a>for free</b>
            </Form>
        </div>
    )
}
