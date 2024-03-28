import FormInput from "@/components/form-Input";
import FormButton from "@/components/form-btn";
import SocialLogin from "@/components/social-login";

export default function CreateAccount() {
    return (
        <main className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">안녕하세요!</h1>
                <h2 className="text-xl">Fill in the form below to join!</h2>
            </div>
            <form className="flex flex-col gap-3">
                <FormInput type="text" placeholder="UserName" required={true} errors={['Username is too short']} />
                <FormInput type="email" placeholder="Email" required={true} errors={[]} />
                <FormInput type="password" placeholder="Password" required={true} errors={[]} />
                <FormInput type="password" placeholder="Confirm Password" required={true} errors={[]} />
                <FormButton text="Create Account" loading={true} />
            </form>
            <SocialLogin />
        </main>
    );
}
