import FormInput from "@/components/form-Input";
import FormButton from "@/components/form-btn";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

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
            <div className="w-full h-px bg-neutral-500" />
            <div>
                <Link href='/sms' className="primary-btn h-10 flex items-center justify-center gap-2">
                    <span><ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" /></span>
                    <span>Sign up with SMS</span>
                </Link>
            </div>
        </main>
    );
}
