/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { updateDone } from "../controllers/todoController";
import { TodoContext } from "../contexts/TodoContext";


const OnChecked = ({done,id}) => {
  const {todos, setTodos } = useContext(TodoContext);

  const handleDone = async(e)=> {
    e.preventDefault();
    try {
      const data = await updateDone(id,!done);
      setTodos([...data.todos]);
    } catch(error) {
      console.error('Error: ', error);
    }
  }

  return (
    <div>
      <input type="checkbox" onChange={handleDone} checked={done}/>
    </div>
  )
}

export default OnChecked
