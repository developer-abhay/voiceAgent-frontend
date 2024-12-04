import { Link } from 'react-router-dom'
import { Bot } from 'lucide-react'
import { ModeToggle } from '../darkmode/mode-toggle'
import { Button } from '../ui/button'

const navLinks = [{ title: 'Blogs', to: '/sd#' }, { title: 'Documentation', to: '#' }, { title: 'Team', to: '#' }, { title: 'Pricing', to: '#' }, { title: 'Contact', to: '#' }]

const Header = () => {
    return (
        <header className=" px-4 lg:px-6 h-16 flex items-center justify-between border-b">
            <Link to="/" className="flex items-center gap-2 font-semibold pr-14" >
                <Bot className="h-6 w-6" />
                <span>HelloGenAI</span>
            </Link>
            <nav className="hidden md:flex gap-6 ">
                {navLinks.map(({ title, to }, index) => (
                    <Link key={index} className="text-sm font-medium hover:text-gray-700" to={to}>
                        {title}
                    </Link>

                ))}
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
