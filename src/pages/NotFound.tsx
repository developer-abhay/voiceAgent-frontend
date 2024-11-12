import { Bot, Home, Search } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background">
            <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
                <Bot className="h-16 w-16 text-primary" />
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">404 - Page Not Found</h1>
                <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                    Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
                </p>
                <div className="flex gap-4">
                    <Link to="/">
                        <Button>
                            <Home className="mr-2 h-4 w-4" />
                            Back to Dashboard
                        </Button>
                    </Link>
                    <Link to="/">
                        <Button variant="outline">
                            Go to Homepage
                        </Button>
                    </Link>
                </div>
                <div className="mt-8 w-full max-w-md">
                    <form className="flex items-center space-x-2" onSubmit={(e) => e.preventDefault()}>
                        <Input type="search" placeholder="Search for pages..." className="flex-1" />
                        <Button type="submit">
                            <Search className="h-4 w-4" />
                            <span className="sr-only">Search</span>
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}