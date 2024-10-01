"use client";

import { cn } from "../lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps, ReactNode, useState } from "react";
import "hamburgers/dist/hamburgers.css";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ChevronDown } from "lucide-react";
import { NavigationMenuLink } from "./ui/navigation-menu";
import { Separator } from "./ui/separator";
import { ArtisanalStone } from "../../..";

import styles from "./scss/CustomerFacingNav.module.scss";

/** A reusable component for the site logo */
const Logo = () => (
  <Link href="/">
    <Image src="/logo_rocks.svg" alt="Company Logo" height={64} width={207} />
  </Link>
);

/** Mobile Nav Menu with Sheet */
const MobileNavMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <div>
          <button
            type="button"
            className={`hamburger hamburger--collapse ${isOpen ? "is-active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </SheetTrigger>

      <SheetContent hideChevron={true} className="w-[300px]">
        <nav className={styles.sheet}>
          <NavLink href="/about">About</NavLink>
          <MaterialsDropdown />
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

/** Materials Dropdown inside the Mobile Nav */
const MaterialsDropdown = () => {
  return (
    <Sheet>
      <SheetTrigger className="text-left flex flex-row items-center hover:font-bold">
        Materials
        <ChevronDown className="-rotate-90 translate-x-4" />
      </SheetTrigger>
      <SheetContent className={`${styles.materialsMenu}`} hideOverlay={true}>
        <h3 className="text-[24px] font-normal text-blackbase text-center">
          Materials
        </h3>
        <div className="py-6">
          <NavLink href="/materials">Shop all our materials</NavLink>
        </div>
        <Separator />
        <MaterialSections />
      </SheetContent>
    </Sheet>
  );
};

/** Artisanal Stone and other material sections */
const MaterialSections = () => (
  <>
    <MaterialSection
      title="STONEYARD"
      description="We are focused on artisanal stone and tile."
      items={ArtisanalStone}
    />
    <MaterialSection
      title="MRC Rock & Sand"
      description="Pending Content From Client"
    />
    <MaterialSection
      title="Santa Paula Materials"
      description="We are focused on artisanal stone and tile."
    />
  </>
);

const MaterialSection = ({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items?: string[];
}) => (
  <Sheet>
    <SheetTrigger>
      <div className="my-4">
        <div className="flex justify-between mb-2">
          <span>{title}</span>
          <Image
            src="/chevron_down.svg"
            alt="Chevron Icon"
            width={17}
            height={17}
            className="-rotate-90"
            style={{ filter: "brightness(0%)" }}
          />
        </div>
        <p>{description}</p>
      </div>
    </SheetTrigger>
    <SheetContent hideOverlay={true} className={styles.mobileSheet}>
      <h3 className="text-[20px] font-bold text-center">{title}</h3>
      {items && (
        <ul className="flex flex-col">
          {items.map((item, index) => (
            <li
              key={index}
              className="w-full text-[16px] hover:font-bold px-2 py-4"
            >
              {item}
              <Separator />
            </li>
          ))}
        </ul>
      )}
    </SheetContent>
  </Sheet>
);

/** A reusable link component for navigation items */
const NavLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link
    href={href}
    className="font-montserrat hover:font-bold border-y-[#919EA6]"
  >
    {children}
  </Link>
);

/** The main CustomerFacingNav component */
export function CustomerFacingNav({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <nav className={styles.nav}>
        {/* Desktop Navigation */}
        <div className={styles.hiddenMobile}>{children}</div>

        {/* Mobile Navigation */}
        <div className={styles.mobileNavContainer}>
          <CustomerFacingNavLink href="/cart">
            <Image
              src="/shopping_cart.svg"
              alt="shopping cart"
              width={33}
              height={33}
              className="bg-whitebase flex min-w-[33px]"
            />
          </CustomerFacingNavLink>
          <MobileNavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </nav>
    </div>
  );
}

/** A reusable customer-facing nav link component */
export function CustomerFacingNavLink(
  props: Omit<ComponentProps<typeof Link>, "className">,
) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "font-openSans m-0 px-1 w-fit rounded-lg bg-whitebase hover:font-bold",
        pathname === "/cart" && "font-bold",
      )}
    />
  );
}

/** List item component inside dropdowns or sheets */
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => (
  <li className="m-4 relative">
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-tanbase hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className,
        )}
        {...props}
      >
        <div className="flex justify-between w-full text-[20px] font-medium font-openSans">
          {title}
          <ChevronDown className="-rotate-90" />
        </div>
        <p className="text-[16px] text-muted-foreground">{children}</p>
      </a>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";
