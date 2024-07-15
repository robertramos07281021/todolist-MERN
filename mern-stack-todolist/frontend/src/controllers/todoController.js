const getTodos = async() => {
  const res = await fetch('/api/todos');
  const data = await res.json();
  if(!res.ok){
    throw Error(data.error)
  }
  return data;
}

const addTodos = async(name) => {
  if(!name) {
    throw Error('Todos Name is required!')
  }
  const res = await fetch('/api/add', {
    method: 'POST',
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({name}),
  })
  const data = await res.json()
  if(!res.ok) {
    throw Error(data.error)
  }
  return data
 
}

const deleteTodo = async(id) => {
  const deleteTodo = await fetch(`/api/delete/${id}`,{
    method : "DELETE"
  }) 
  const data = await deleteTodo.json()

  if(!deleteTodo.ok) {
    throw Error(data.error)
  }
  return data
}



const updateDone = async(id, done) => {
  const updateDoneTodo = await fetch(`/api/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({ done})
  })
  const data = await updateDoneTodo.json();
  if(!updateDoneTodo.ok) {
    throw Error(data.error)
  }

  return data;
}


const updateName = async(id, name) => {
  const updateNameTodo = await fetch(`/api/update/${id}`, {
    method: "PATCH",
    headers: {
       "Content-Type" : "application/json"
    },
    body: JSON.stringify({name})
  })
  const data = await updateNameTodo.json()
  if(!updateNameTodo.ok) {
    throw Error(data.error)
  }
  return data;
}

export { getTodos, addTodos, deleteTodo, updateDone, updateName};