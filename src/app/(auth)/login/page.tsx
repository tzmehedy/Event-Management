import Link from "next/link";
import Logo from "../../../../public/assets/logo/Logo";
import LoginForm from "@/components/LoginForm";

export default async function LoginPage({
  searchParams,
}: {
  searchParams?: Promise<{ redirect?: string }>;
}) {
  const params = (await searchParams) || {};

  return (
    <div className="flex justify-center items-center  min-h-dvh p-2 md:p-0 ">
      <div className="border-2 border-[#DC143C] p-10 shadow-2xl rounded-lg bg-white space-y-3">
        <div className="flex flex-col items-center space-y-3">
          <Link href="/">
            <Logo />
          </Link>
          <h3 className="text-2xl font-bold">Welcome Back</h3>
          <p className="text-muted-foreground">
            Enter your credentials to access your account
          </p>
        </div>

        <div>
          <LoginForm redirect={params.redirect} />
        </div>

        <div className="text-center">
          <small className="text-muted-foreground">
            Don&apos;t have an account, Please{" "}
            <Link href="/register" className="text-[#DC143C] underline">
              Register
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}
