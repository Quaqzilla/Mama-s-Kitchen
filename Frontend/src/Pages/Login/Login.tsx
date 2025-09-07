import { Button } from "@/Components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import {useAuthControls} from "./../../../Firebase/functions";

export function Login() {
    const {
        emailAddress,
        setEmailAddress,
        password,
        setPassword,
        isLogged,
        googleSignIn,
        emailSignIn,
    } = useAuthControls();

  return (
    <div className="flex flex-col justify-evenly bg-sidebar-accent-foreground h-screen">

        <div className="flex justify-center text-white">
            <img src="" alt="Mama's Logo" />
        </div>

        <div className="ml-2 mr-2">
            <Card className="w-full max-w-sm  bg-sidebar-accent-foreground text-accent">
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                    Enter your email below to login to your account
                    </CardDescription>
                    <CardAction>
                    <Button variant="link">Sign Up</Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form onSubmit={emailSignIn}>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            value={emailAddress}
                            onChange={e => setEmailAddress(e.target.value)}
                            required
                        />
                        </div>
                        <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <a
                            href="#"
                            className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                            >
                            Forgot your password?
                            </a>
                        </div>
                        <Input 
                        id="password" 
                        type="password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required />
                        </div>
                    </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button 
                    type="submit" 
                    className="w-full bg-muted-foreground"
                    onClick={emailSignIn}
                    >
                    Login
                    </Button>
                    <Button 
                    variant="outline" 
                    className="w-full text-black"
                    onClick={googleSignIn}
                    >
                    Login with Google
                    </Button>
                </CardFooter>
            </Card>
        </div>
    </div>
  )
}
