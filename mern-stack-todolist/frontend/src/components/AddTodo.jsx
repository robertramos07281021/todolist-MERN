import { useContext, useState } from "react"
import styled from "styled-components"
import { TodoContext } from "../contexts/TodoContext"
import { addTodos } from "../controllers/todoController"


const AddTodo = () => {
  const {todos, setTodos} = useContext(TodoContext)
  const [name, setName] = useState('')

  const handleAddTodo = async(e) => {
    e.preventDefault()
    try{
      const data = await addTodos(name)
      setTodos([...todos, data.todo])
      setName('')
    }catch(err) {
      console.error('Error: ', err)
    }

  }
  return (
    <Form onSubmit={handleAddTodo}>
      <label htmlFor="name"><Input type="text" id="name" name="name" placeholder="Enter Todo" value={name} onChange={(e) => setName(e.target.value)}/></label>
      <Button type='submit'>Add</Button>
    </Form>
  )
}
export default AddTodo

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