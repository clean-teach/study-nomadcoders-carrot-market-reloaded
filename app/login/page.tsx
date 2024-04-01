import FormInput from "@/components/form-Input";
import FormButton from "@/components/form-btn";
import SocialLogin from "@/components/social-login";

export default function Login() {
    // const onClick = async () => {
    //     const response = await fetch('apis/users', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             username: 'nico',
    //             password: '1234'
    //         })
    //     });
    //     console.log(response)
    // }

    // const handleForm = async () => {} // 표현식 방법 (아래 선언식 방법과 같은 의미이다.)
    async function handleForm(formData: FormData) {
        'use server'
        await new Promise((resolve) => {
            setTimeout(resolve, 5000);
        })
        console.log('Logged in!!', formData);
    }

    return (
        <main className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">Email Login</h1>
                <h2 className="text-xl">Login with Email and Password</h2>
            </div>
            <form action={handleForm} className="flex flex-col gap-3">
                <FormInput name="email" type="email" placeholder="Email" required={true} errors={[]} />
                <FormInput name="password" type="password" placeholder="Password" required={true} errors={[]} />
                <FormButton text="Login" />
            </form>
            <SocialLogin />
        </main>
    );
}
