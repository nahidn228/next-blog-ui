import { LoginForm } from "@/components/modules/auth/login-from";
import Logo from "@/components/shared/Navbar/logo";

import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left Section */}
      <div className="flex flex-col gap-6 p-6 md:p-10 bg-background">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <Logo />
          </Link>
        </div>

        {/* Login Form */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <LoginForm />
          </div>
        </div>
      </div>

      {/* Right Section with Image */}
      <div className="relative hidden lg:block">
        <Image
          src="/login.jpg"
          alt="Login Illustration"
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}
