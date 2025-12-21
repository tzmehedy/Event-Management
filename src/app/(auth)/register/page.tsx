import Link from "next/link";
import Logo from "../../../../public/assets/logo/Logo";
import RegisterForm from "@/components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center  min-h-dvh p-2 md:p-0 my-10">
      <div className="border-2 border-[#DC143C] p-10 shadow-2xl rounded-lg bg-white space-y-5">
        <div className="flex flex-col items-center space-y-3">
          <Link href="/">
            <Logo />
          </Link>
          <h3 className="text-2xl font-bold">Create an account</h3>
          <p className="text-muted-foreground">Join us today and start your journey</p>
        </div>

        <div>
          <RegisterForm/>
        </div>

        <div className="text-center">
          <small className="text-muted-foreground">Already have an account?,Please <Link href="/login" className="text-[#DC143C] underline">Login</Link></small>
        </div>
      </div>
    </div>
  );
}
