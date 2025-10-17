import { useState } from 'react'
import './App.css'
import EmployeeList from './components/EmployeeList'
import EmployeeForm from './components/EmployeeForm'
import EmployeeDetails from './components/EmployeeDetails'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
  <Router>
    <div className="app-container" style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route  path="/" element={<h2>Welcome to EMS Dashboard</h2>} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/employees/add" element = {<EmployeeForm/>} />
        </Routes>
      </div>
    </div>
  </Router>
   
    
  )
}

export default App
