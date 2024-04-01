'use client'

import FormInput from "@/components/form-Input";
import FormButton from "@/components/form-btn";
import SocialLogin from "@/components/social-login";

export default function Login() {
    const onClick = async () => {
        const response = await fetch('apis/users', {
            method: 'POST',
            body: JSON.stringify({
                username: 'nico',
                password: '1234'
            })
        });
        console.log(response)
    }

    return (
        <main className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">Email Login</h1>
                <h2 className="text-xl">Login with Email and Password</h2>
            </div>
            <form className="flex flex-col gap-3">
                <FormInput type="email" placeholder="Email" required={true} errors={[]} />
                <FormInput type="password" placeholder="Password" required={true} errors={[]} />
            </form>
            <span onClick={onClick}>
                <FormButton text="Login" loading={false} />
            </span>
            <SocialLogin />
        </main>
    );
}
