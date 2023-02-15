import Image from "next/image";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import useAuth from "hooks/useAuth";
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout } = useAuth();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="header-link">Home</li>
          <li className="header-link">TV Shows</li>
          <li className="header-link">Movies</li>
          <li className="header-link">New & Popular</li>
          <li className="header-link">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <MagnifyingGlassIcon className=" hidden sm:inline w-6 h-6" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="w-6 h-6" />
        {/* <Link href="/account"> */}
        <Image
          onClick={logout}
          src="/images/defaultAvatar.png"
          alt="Avatar"
          width={32}
          height={32}
          className="cursor-pointer rounded"
        />
        {/* </Link> */}
      </div>
    </header>
  );
}

export default Header;
