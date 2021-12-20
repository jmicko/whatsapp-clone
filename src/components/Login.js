import React, { useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

export default function Login({onIdSubmit}) {

  const idRef = useRef()


  function handleSubmit(e) {
    e.preventDefault()

    // this will save it in the state in the app component
    onIdSubmit(idRef.current.value)
  }

  return (
    <Container className='align-items-center d-flex' style={{height: '100vh'}}>
      <Form onSubmit={handleSubmit} className='w-100' >
        <Form.Group>
          <Form.Label>Enter Your ID</Form.Label>
          <Form.Control type="text" ref={idRef} required ></Form.Control>
        </Form.Group>
        <Button type='submit' className="m-2" >Login</Button>
        <Button variant="secondary" >Create A New Id</Button>
      </Form>
    </Container>
  )
}
