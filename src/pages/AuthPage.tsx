import { useEffect, useState } from "react"
import { Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useLocation, useNavigate } from "react-router-dom"
import useAuth from "@/hooks/useAuth"
import { LoadingSpinner } from "@/components/loader"

export default function AuthPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isLogin, setIsLogin] = useState(location.pathname === "/login")

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { handleLogin, handleRegister, loading, error } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isLogin) {
      await handleLogin(email, password)
    } else {
      await handleRegister({ name, email, password })
    }
  }

  const toggleAuthMode = () => {
    // Toggle between login and register views
    if (isLogin) {
      navigate("/register")
    } else {
      navigate("/login")
    }
  }

  useEffect(() => {
    // Update isLogin state based on URL
    setIsLogin(location.pathname === "/login")
  }, [location.pathname])

  return (
    <div key={location.pathname} className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center gap-2">
            <Bot className="h-8 w-8" />
            <CardTitle className="text-2xl">HelloGenAI</CardTitle>
          </div>
          <CardDescription className="text-center">
            {isLogin ? "Login to your account" : "Create a new account"}
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full" type="submit">
              {/* {isLogin ? "Login" : "Register"} */}

              {loading ? <LoadingSpinner /> : (isLogin ? "Login" : "Register")}
            </Button>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <div className="text-center text-sm">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <Button
                className="p-0 text-primary underline"
                // onClick={() => setIsLogin(!isLogin)}
                onClick={toggleAuthMode}
                variant="link"
              >
                {isLogin ? "Register" : "Login"}
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}