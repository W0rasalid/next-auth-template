"use client";

import LoginBtn from "@/components/login-btn";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <LoginBtn />
        {status === "authenticated" ? (
          <div className="mt-6 p-4 border rounded bg-gray-50 dark:bg-gray-800">
            <div>
              Signed in as: <b>{session?.user?.name}</b>
            </div>
            <div>Email: {session?.user?.email}</div>
            {session?.user?.image && (
              <Image
                src={session.user.image}
                alt="avatar"
                width={48}
                height={48}
                className="rounded-full"
              />
            )}
            <button
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </div>
        ) : (
          <div className="mt-6">ยังไม่ได้เข้าสู่ระบบ</div>
        )}
      </main>
    </div>
  );
}
