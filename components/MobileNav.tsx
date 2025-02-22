import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Chainlink, HambergerMenu } from "iconsax-react";
import Link from "next/link";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="border flex justify-between px-[18px] py-4 w-full md:hidden">
        <Link
          href="/"
          className="flex items-center gap-x-[26px] font-plus-jakarta-sans mr-[134px]"
        >
          <Chainlink size="24" color="#000000" variant="Bold" />
          <span className="text-base font-bold">Fintech</span>
        </Link>
        <HambergerMenu size="24" color="#292D32" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription>
            <ul className="flex flex-col gap-y-10 *:font-inter *:text-[#343434] *:text-base *:font-medium">
              <li>
                <Link href="#">Demos</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Pages</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
