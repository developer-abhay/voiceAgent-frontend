import { Link } from 'react-router-dom'
import { Bot } from 'lucide-react'
import { ModeToggle } from '../darkmode/mode-toggle'
import { Button } from '../ui/button'

const Header = () => {
    return (
        <header className=" px-4 lg:px-6 h-16 flex items-center justify-between border-b">
            <Link to="/" className="flex items-center gap-2 font-semibold" >
                <Bot className="h-6 w-6" />
                <span>HelloGenAI</span>
            </Link>
            <nav className="hidden md:flex gap-6">
                <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
                    Blog
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
                    Documentation
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
                    Pricing
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
                    Contact
                </Link>
            </nav>

            <div className="flex gap-4">
                <ModeToggle />
                <Link to="/login">
                    <Button variant="ghost">Sign In</Button>
                </Link>
                <Link to="/register">
                    <Button>Sign Up</Button>
                </Link>
            </div>
        </header>)
}

export default Header
