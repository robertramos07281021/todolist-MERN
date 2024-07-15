/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components"

import { getTodos , deleteTodo } from "../controllers/todoController";
import { TodoContext } from "../contexts/TodoContext";
import { useContext, useEffect, useState } from "react";
import { FaSpinner, FaRegTrashAlt, FaEdit   } from "react-icons/fa";
import AddTodo from "../components/AddTodo";
import OnChecked from "../components/OnChecked";
import UpdateTodo from "../components/UpdateTodo";


const TodoHome = () => {
  const {todos, setTodos} = useContext(TodoContext);
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState(false)
  const [todoId, setTodoId] = useState('')
  const [name, setName] = useState('')

  useEffect(()=> {
    setTimeout(async() => {
      const data = await getTodos();
      setTodos(data.todos)
      setLoading(false)
    },100)
  
  },[])

  const handleDeleteTodo = async(id) => {
    try {
      const data = await deleteTodo(id);
    } catch (error) {
      console.error('Error: ', error)
    }
    const newTodos = todos.filter(todo => todo._id !== id)
    setTodos(newTodos)
  }

  const handleUpdate = async(id,todoName) => {
    setName(todoName);
    setTodoId(id);
    setUpdating(!updating);
  }


  return (
    <>
      {loading ? <Spinner className="spinner"><FaSpinner/></Spinner> : 
      <Main>
      <H1>To Do List</H1>
      {updating ? <UpdateTodo id={todoId} updatedName={name} /> : <AddTodo/>}
   
        {todos && todos.map((todo) => 
          <DivTodo key={todo._id}>
            <OnChecked done={todo.done} id={todo._id}/>
            <span className={todo.done ?  'done' : ''}>{todo.name}</span>
            <IconsDiv>
              <button className="actionButton" onClick={()=> handleUpdate(todo._id, todo.name)}>
                <FaEdit className="editIcon"/>
              </button>
              <button className="actionButton" onClick={()=> handleDeleteTodo(todo._id)}>
                <FaRegTrashAlt className="deleteIcon"/>
              </button>
            </IconsDiv>
          </DivTodo>
        )}
    </Main>
      }
      
    </>
  )
}

export default TodoHome

const Main = styled.main({
  
  background: `rgba(255, 255, 255, 0.5)`,
  minWidth: `550px`,
  boxShadow: `0px 0px 20px 1px  #888888`,
  minHeight: '650px',
  borderRadius: `10px`,
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`
})

const H1 = styled.h1({
  color: `black`,
  opacity: '1',
  textAlign: `center`,
  textShadow: `2px 2px 5px #000000`,
  fontSize: `50px`
})

const Spinner = styled.div({
  animation: `rotate 1.8s linear 0s infinite normal`,
  width: `90px`,
  height: `90px`,
  fontSize: `90px`,
})

const DivTodo = styled.div({

  width: `80%`,
  padding: `10px`,
  marginBottom: `15px`,
  borderRadius: `5px`,
  backgroundColor: `rgba(9,9,11, 1)`,
  color: `white`,
  display: `flex`,
  justifyContent: `space-between`,
  alignItems:`center`,
  fontSize: `20px`,
  boxShadow: `0px 0px 5px 1px #000000`
})



const IconsDiv = styled.div({
  display: `flex`,
  gap: `10px`
})


