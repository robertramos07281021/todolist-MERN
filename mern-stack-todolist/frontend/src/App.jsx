import { BrowserRouter, Routes, Route } from "react-router-dom"
import TodoHome from "./pages/TodoHome"


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TodoHome/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
