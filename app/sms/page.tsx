import FormInput from "@/components/form-Input";
import FormButton from "@/components/form-btn";

export default function SMSLogin() {
    return (
        <main className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">SMS Login</h1>
                <h2 className="text-xl">Verify your Phone Number</h2>
            </div>
            <form className="flex flex-col gap-3">
                <FormInput type="number" placeholder="Phone Number" required={true} errors={[]} />
                <FormInput type="number" placeholder="Verification Code" required={true} errors={[]} />
                <FormButton text="Verify" loading={true} />
            </form>
        </main>
    );
}
