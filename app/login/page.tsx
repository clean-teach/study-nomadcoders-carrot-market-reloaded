"use client";

import FormInput from "@/components/form-Input";
import FormButton from "@/components/form-btn";
import SocialLogin from "@/components/social-login";
import { handleForm } from "./actions";
import { useFormState } from "react-dom";

export default function Login() {
    const [state, action] = useFormState(handleForm, null)

    return (
        <main className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">Email Login</h1>
                <h2 className="text-xl">Login with Email and Password</h2>
            </div>
            <form action={action} className="flex flex-col gap-3">
                <FormInput name="email" type="email" placeholder="Email" required={true} />
                <FormInput name="password" type="password" placeholder="Password" required={true} />
                <FormButton text="Login" />
            </form>
            <SocialLogin />
        </main>
    );
}
