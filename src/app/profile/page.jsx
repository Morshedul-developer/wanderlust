"use client";

import Image from "next/image";
import Link from "next/link";
import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const MyProfile = () => {
  const session = authClient.useSession();
  const user = session.data?.user;

  if (!user) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="w-full max-w-md rounded-3xl border border-zinc-200 bg-white p-10 text-center shadow-xl">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-zinc-100">
            <span className="text-4xl">👤</span>
          </div>

          <h2 className="mt-6 text-3xl font-bold text-zinc-900">
            You're Not Logged In
          </h2>

          <p className="mt-3 text-zinc-500">
            Please login to access your profile information.
          </p>

          <Button
            as={Link}
            href="/login"
            size="lg"
            radius="lg"
            className="mt-8 w-full bg-black text-white"
          >
            Login Now
          </Button>
        </div>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        {/* Cover */}
        <div className="h-52 bg-linear-to-r from-amber-400 via-yellow-400 to-orange-400" />

        {/* Profile Content */}
        <div className="relative px-8 pb-10">
          {/* Avatar */}
          <div className="relative -mt-16">
            <Avatar
              src={user?.image}
              name={user?.name}
              className="h-32 w-32 border-4 border-white shadow-[0_15px_35px_rgba(0,0,0,0.15)]"
            />
          </div>

          {/* User Info */}
          <div className="mt-6">
            <h1 className="text-4xl font-bold text-zinc-900">{user.name}</h1>

            <p className="mt-2 text-zinc-500">{user.email}</p>

            <span className="mt-4 inline-flex rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-700">
              Customer Account
            </span>
          </div>

          {/* Information Card */}
          <div className="mt-10 rounded-3xl border border-zinc-200 p-8">
            <h2 className="mb-6 text-2xl font-bold">Personal Information</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm text-zinc-500">Full Name</p>

                <p className="mt-1 text-lg font-semibold">{user.name}</p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Email Address</p>

                <p className="mt-1 text-lg font-semibold">{user.email}</p>
              </div>
            </div>

            {/* <Button
              as={Link}
              href="/update-profile"
              size="lg"
              radius="lg"
              className="mt-8 bg-black text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)]"
            >
              Update Information
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
