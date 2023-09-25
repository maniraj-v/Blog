import Image from "next/image";
import Logo from "@/assets/profile-img.png";
import Link from "next/link";
import { appNavigation, socialNavigation } from "@/constants/navigation";
import { MoonIcon, SunIcon } from "@/Icons";

const Navbar = () => {
  return (
    <nav className="fixed top-6 right-1/2 translate-x-1/2 font-medium">
      <ul className="flex items-center gap-4 border border-dark bg-light/80 backdrop-blur-sm rounded-full py-3 px-8">
        {appNavigation.map(({ name, href }) => {
          return (
            <li key={name}>
              <Link href={href}>{name}</Link>
            </li>
          );
        })}
        <li>
          <button className="w-6 h-6 p-1 flex items-center justify-center rounded-full bg-dark text-light">
            <MoonIcon />
          </button>
        </li>
      </ul>
    </nav>
  );
};

const SocialLinks = () => {
  return (
    <ul className="flex items-center gap-4 h-auto">
      {socialNavigation.map(({ name, href, icon }) => {
        return (
          <li
            key={name}
            className="w-6 h-6 hover:scale-125 transition-all duration-200"
          >
            <a href={href} title={name}>
              {icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const Header = () => {
  return (
    <header className="py-4 px-10 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="flex gap-4 items-center">
        <Image
          src={Logo}
          alt="logo"
          width={63}
          height={63}
          className="border border-dark rounded-full object-cover"
        />
        <span className="font-bold text-xl">CodeBucks</span>
      </Link>
      {/* App Navigation Links */}
      <Navbar />
      {/* Social Navigation Links */}
      <SocialLinks />
    </header>
  );
};

export default Header;
