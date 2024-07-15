/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {useEffect,useState } from "react"
import styled from "styled-components"

import { updateName } from "../controllers/todoController"



const UpdateTodo = ({id,updatedName}) => {

  const [name, setName] = useState('')
  
  useEffect(()=> {
    setName(updatedName)
  },[])

  const handleTodoUpdate =async() => {
    try {
      const data = await updateName(id,name)
      location.reload()
    } catch(err) {
      console.error('Error: ', err)
    }
  }

  return (
    <Form onSubmit={handleTodoUpdate}>
      <label htmlFor="name"><Input type="text" id="name" name="name" autoFocus onChange={(e)=> setName(e.target.value)} value={name}   placeholder="Enter Todo" /></label>
    <Button type='submit'>Update</Button>
    <ButtonCancel onClick={()=> location.reload()}>Cancel</ButtonCancel>
  </Form>
  )
}

export default UpdateTodo

const Form = styled.form({
  marginBottom: `20px`,
  display: `flex`,
  gap: `10px`
})

const Input = styled.input({
  padding: `10px`,
  borderRadius: `5px`,
  border: `0`,
  fontSize: `20px`,
  boxShadow: `0px 0px 20px 1px #000000`
})

const Button = styled.button({
  width: `70px`,
  backgroundColor: `blue`,
  color: `white`,
  border: `2px solid white`,
  fontSize:`18px`,
  borderRadius: `5px`,
  boxShadow: `0px 0px 20px 1px #000000`
})

const ButtonCancel = styled.div({
  width: `70px`,
  backgroundColor: `blue`,
  color: `white`,
  border: `2px solid white`,
  fontSize:`18px`,
  borderRadius: `5px`,
  boxShadow: `0px 0px 20px 1px #000000`,
  cursor: `pointer`,
  textAlign: `center`,
  alignContent: `center`
})