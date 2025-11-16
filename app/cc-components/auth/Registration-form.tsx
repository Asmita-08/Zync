"use client";
import z from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGoogle, FaGithub } from "react-icons/fa6";


const userRegistrationScheme = z.object({
    fullname: z.string("Fullname is needed"),
    username: z.string("Username is needed!"),
    email: z.email("Please enter a valid email!"),
    password: z.string().min(8, "Password is required!")
})

type UserRegistrationForm = z.infer<typeof userRegistrationScheme>;

export function RegistrationForm() {
    const router = useRouter();

    const regForm = useForm<UserRegistrationForm>({
        resolver: zodResolver(userRegistrationScheme),
        defaultValues: {
            fullname: "",
            username: "",
            email: "",
            password: ""
        }
    })

    const onSubmit = async (values: UserRegistrationForm) => {
        console.log(values)
    }

    const isPendingSumbit = regForm.formState.isSubmitting;

    return(
        <div className="flex flex-col gap-6">
            <Card>
                <CardHeader className="text-center">
                    <CardTitle>
                        Hi, Welcome to Zync
                    </CardTitle>
                    <CardDescription>
                        Register below for more
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...regForm}>
                        <form onSubmit={regForm.handleSubmit(onSubmit)}>
                            <div className="grid gap-5">
                                <div className="flex flex-col gap-5">
                                    <Button variant="outline" className="w-full flex items-center justify-center gap-2" disabled={isPendingSumbit}>
                                        <FaGithub className="h-4 w-4" />
                                        Continue with Github
                                    </Button>
                                    <Button variant="outline" className="w-full flex items-center justify-center gap-2" type="button" disabled={isPendingSumbit}>
                                        <FaGoogle className="h-4 w-4"/>
                                        Continue with Google
                                    </Button>
                                </div>
                                <div className="grid gap-6">
                                    <FormField control={regForm.control} name="fullname" render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Fullname</FormLabel>
                                            <FormControl>
                                                <Input type="fullname" placeholder="Fullname" {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}/>

                                    <FormField control={regForm.control} name="username" render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Username</FormLabel>
                                            <FormControl>
                                                <Input type="username" placeholder="Username" {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}/>

                                    <FormField control={regForm.control} name="email" render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="example@email.com" {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}/>

                                    <FormField control={regForm.control} name="password" render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input type="password" placeholder="**********" {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}/>


                                    <Button type="submit" className="w-full" disabled={isPendingSumbit}>Sign Up</Button>
                                    <div>
                                        <div className="text-center text-sm">
                                            Already have an account? {" "}
                                            <Link href="/login" className="underline underline-offset-4">
                                                Sign in
                                            </Link>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )

    
}