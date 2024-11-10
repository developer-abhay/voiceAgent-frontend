import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AuthPage from "./pages/AuthPage"
import Dashboard from "./pages/Dashboard"

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<AuthPage />} />
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
