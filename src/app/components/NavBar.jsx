"use client";
//NOTE ACTIVE LINK CODE DOESN'T SEEM TO WORK
import ActiveLink from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar({ href }) {
  const pathname = usePathname(); //usePathname returns a string of the current URL's pathname
  const isActive = pathname === href;

  return (
    <nav>
      <ActiveLink href="/" className={isActive ? "text-orange-400" : ""}>
        Home
      </ActiveLink>
      <ActiveLink href="/slow" className={isActive ? "text-orange-400" : ""}>
        Slow page
      </ActiveLink>
      <ActiveLink href="/fast" className={isActive ? "text-orange-400" : ""}>
        Fast page
      </ActiveLink>
    </nav>
  );
}
