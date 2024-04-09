"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { logIn } from "./actions";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function Login() {
    const [state, dispatch] = useFormState(logIn, null)

    return (
        <main className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">Email Login</h1>
                <h2 className="text-xl">Login with Email and Password</h2>
            </div>
            <form action={dispatch} className="flex flex-col gap-3">
                <Input name="email" type="email" placeholder="Email" required={true} errors={state?.fieldErrors.email} />
                <Input name="password" type="password" placeholder="Password" required={true} minLength={PASSWORD_MIN_LENGTH} errors={state?.fieldErrors.password} />
                <Button text="Login" />
            </form>
            <SocialLogin />
        </main>
    );
}
