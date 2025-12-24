"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";


function NavbarWrapper() {
  const pathname = usePathname();

  const isHome = pathname === "/home";
  const isAgenda = pathname === "/agenda";
  const isProfile = pathname === "/profile";
  const isOrganizers = pathname === "/organizers";

  const showNavbar =
    isHome || isAgenda || isProfile || isOrganizers;

  if (!showNavbar) return null;

  return <Navbar />;

}

export default NavbarWrapper;
