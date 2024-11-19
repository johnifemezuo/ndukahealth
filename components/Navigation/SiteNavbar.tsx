import {
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";
import { Logo } from "../Logo/Logo";



export default function SiteNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "About", "Features", "Testimonials"];

  const { pathname } = useRouter();

  return (
    <nav className="fixed h-20 inset-0 z-50 w-full lg:top-5 mx-auto max-w-[1340px] bg-transparent">
    <Navbar
      maxWidth="2xl"
      className="!bg-transparent mt-5 rounded-full "
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <Logo />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8 " justify="center">
        <NavbarItem>
          <Link  className={`w-full ${pathname === "/" ? "text-green-600" : "text-zinc-700"} text-lg`} href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link className={`w-full text-lg ${pathname === "/#about" ? "text-green-600" : "text-zinc-700"}`}   href="/#about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={`w-full text-lg ${pathname === "/#features" ? "text-green-600" : "text-zinc-700"}`}  href="/#features">Our Features </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={`w-full text-lg ${pathname === "/#testimonials" ? "text-green-600" : "text-zinc-700"}`}  color="foreground" href="#testimonials">
            Testimonial
          </Link>
        </NavbarItem>
      </NavbarContent>

<div>
        <NavbarContent justify="end">
          <div className="flex items-center space-x-2  sm:space-x-0 ">
            {/* <p className="!text-black font-medium sm:hidden">Menu</p> */}
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden !text-gray-800 h-6 w-8"
              title="Menu"
            />
          </div>
        </NavbarContent>
        </div>
      {/* Mobile Menu */}
      <NavbarMenu className="mt-4 ">
        {menuItems.map((item, index) => (
          <NavbarMenuItem onClick={() => setIsMenuOpen(false)} key={`${item}-${index}`} className="space-y-5 mt-6 z-40">
            <Link
              
              className="w-full text-2xl text-zinc-700"
              href={`/#${item.toLowerCase()}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}

{/* <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="absolute z-0 !text-gray-800 h-screen !bg-transparent w-[400px]"
              title="Menu"
            /> */}
      </NavbarMenu>
    </Navbar>
    </nav>
  );
};
