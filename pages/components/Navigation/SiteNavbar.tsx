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

  const menuItems = ["Home", "About", "Our Features", "Testimonials"];

  const { pathname } = useRouter();

  return (
    <nav className="fixed inset-0 z-50 w-full top-5 mx-auto max-w-[1500px]">
    <Navbar
      maxWidth="2xl"
      className="!bg-transparent mt-5 rounded-full "
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <Logo />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8 " justify="center">
        <NavbarItem className="!text-xl " isActive={pathname === "/"}>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/About"}>
          <Link color="foreground" href="/About">
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/Our Features"}>
          <Link href="/Our Features">Our Features </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/Testimonial"}>
          <Link color="foreground" href="/Testimonial">
            Testimonial
          </Link>
        </NavbarItem>
      </NavbarContent>

      <div className="">
        <NavbarContent justify="end">
          <div className="flex items-center space-x-2  sm:space-x-0 ">
            <p className="!text-black font-medium sm:hidden">Menu</p>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden !text-gray-800 "
              title="Menu"
            />
          </div>
        </NavbarContent>
      </div>

      {/* Mobile Menu */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    </nav>
  );
};
