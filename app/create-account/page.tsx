"use client"

import FormInput from "@/components/form-Input";
import FormButton from "@/components/form-btn";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";

export default function CreateAccount() {
    const [state, dispatch] = useFormState(createAccount, null);

    return (
        <main className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">안녕하세요!</h1>
                <h2 className="text-xl">Fill in the form below to join!</h2>
            </div>
            <form action={dispatch} className="flex flex-col gap-3">
                <FormInput name="username" type="text" placeholder="UserName" required={true} errors={state?.fieldErrors.username} />
                <FormInput name="email" type="email" placeholder="Email" required={true} errors={state?.fieldErrors.email} />
                <FormInput name="password" type="password" placeholder="Password" required={true} errors={state?.fieldErrors.password} />
                <FormInput name="confirm_password" type="password" placeholder="Confirm Password" required={true} errors={state?.fieldErrors.confirm_password} />
                <FormButton text="Create Account" />
            </form>
            <SocialLogin />
        </main>
    );
}
