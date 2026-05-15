import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="p-5 bg-white flex justify-between">
            <ul className="flex gap-4">
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/destinations'}>Destinations</Link></li>
                <li><Link href={'/my-bookings'}>My Bookings</Link></li>
            </ul>
            <div>
                <Image
                src={'/assets/Wanderlast.png'}
                width={150}
                height={150}
                alt="logo"
                />
            </div>
            <ul className="flex gap-4">
                <li><Link href={'/profile'}>Profile</Link></li>
                <li><Link href={'/login'}>Login</Link></li>
                <li><Link href={'/signup'}>Sign Up</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;