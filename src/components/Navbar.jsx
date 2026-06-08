"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const handleLogout = async () => {
    await authClient.signOut();
  };
  return (
    <div className="bg-white py-3">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <ul className="flex items-center gap-4">
          <li className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-500 transition-colors duration-200">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-500 transition-colors duration-200">
            <Link href={"/destinations"}>Destinations</Link>
          </li>
          <li className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-500 transition-colors duration-200">
            <Link href={"/my-bookings"}>My Bookings</Link>
          </li>
          <li className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-500 transition-colors duration-200">
            <Link href={"/add-destination"}>Add Destination</Link>
          </li>
        </ul>
        <div className="cursor-pointer">
          <Image
            src={"/assets/Wanderlast.png"}
            width={150}
            height={150}
            alt="logo"
          />
        </div>
        <ul className="flex items-center gap-4">
          <li className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-500 transition-colors duration-200">
            <Link href={"/profile"}>Profile</Link>
          </li>
          {user ? (
            <>
              <Avatar className="cursor-pointer">
                <Avatar.Image
                  referrerPolicy="no-referrer"
                  alt={user.name}
                  src={user?.image}
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button
              size="sm"
                onClick={handleLogout}
                variant="danger"
                className={"rounded-none"}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <li className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-500 transition-colors duration-200">
                <Link href={"/login"}>Login</Link>
              </li>
              <li className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-500 transition-colors duration-200">
                <Link href={"/signup"}>Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
