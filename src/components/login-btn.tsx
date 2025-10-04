"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function LoginBtn() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
      <button
        onClick={() => signIn("github")}
        className="flex items-center justify-center gap-3 px-6 py-3 rounded-lg transition-colors duration-200 border-2 hover:cursor-pointer"
      >
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
          alt="GitHub"
          width={48}
          height={48}
        />
        Login with GitHub
      </button>
      <button
        onClick={() => signIn("google")}
        className="flex items-center justify-center gap-3 px-6 py-3 rounded-lg transition-colors duration-200 border-2 hover:cursor-pointer"
      >
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
          alt="Google"
          width={36}
          height={36}
        />
        Login with Google
      </button>
    </div>
  );
}
