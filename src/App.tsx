import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AuthPage from "./pages/AuthPage"
import Dashboard from "./pages/Dashboard"
import CreateAgent from "./pages/CreateAgent"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<AuthPage />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/create-agent' element={<CreateAgent />} />
      </Routes>
    </Router>
  )
}

export default App
