import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AuthPage from "./pages/AuthPage"
import Dashboard from "./pages/Dashboard"
import CreateAgent from "./pages/CreateAgent"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<AuthPage />} />
        <Route path='/create-agent' element={<CreateAgent />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
