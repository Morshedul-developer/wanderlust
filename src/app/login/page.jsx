"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    if (data) {
      redirect("/");
    }
    if (error) {
      alert("Invalid username or password...!");
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="max-w-105 mx-auto space-y-4 mt-5">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Login</h1>
        <p className="text-zinc-500">Start your adventure with Wanderlust</p>
      </div>
      <Card className=" rounded-none border">
        <Form className="flex w-96 flex-col gap-4 mx-auto" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label>Email Address</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="flex gap-2">
            <Button
              className={"bg-cyan-500 hover:bg-cyan-400 rounded-none w-full"}
              type="submit"
            >
              Login
            </Button>
          </div>
        </Form>
        <div className="flex justify-center items-center gap-3">
          <Separator className="flex-1" />
          <div className="text-zinc-500 whitespace-nowrap">Or sign up with</div>
          <Separator className="flex-1"/>
        </div>
        <div>
          <Button
            onClick={handleGoogleSignIn}
            variant="outline"
            className={"w-full rounded-none"}
          >
            <FcGoogle /> <span>Sign in with google</span>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
