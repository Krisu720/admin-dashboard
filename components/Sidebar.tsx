'use client'

import { Home, Paperclip } from "lucide-react";
import { Button } from "./ui/button";
import ThemeDropdown from "./ThemeDropdown";
import { Settings, LogOut, Package } from "lucide-react";
import Link from "next/link";
interface Nav {
  name: string;
  Icon: JSX.Element;
  href: string;
}

const nav: Nav[] = [
  {
    name: "Dashboard",
    href: "/",
    Icon: <Home className="h-6 w-6 mr-2" />,
  },
  {
    name: "Products",
    href: "/products",
    Icon: <Package className="h-6 w-6 mr-2" />,
  },
];

const Sidebar = ({ closeSidebar }: { closeSidebar?: () => void }) => {
  return (
    <div className="flex-col h-full flex">
      <div className="border-b h-28 p-6">
        <h1 className="flex items-center text-4xl mx-auto select-none my-auto">
          <Paperclip className="h-8 w-8 mr-2" />
          LOGO
        </h1>
      </div>
      <div className="flex flex-col p-2">
        {nav.map(({ name, href, Icon }) => (
          <Link href={href} key={name} onClick={closeSidebar && closeSidebar}>
            <Button
              variant="ghost"
              className="flex justify-start items-center w-full"
            >
              {Icon}
              {name}
            </Button>
          </Link>
        ))}
      </div>
      <div className="mt-auto flex p-2 gap-2">
        <Button variant="outline" size="icon" className="mr-auto">
          <LogOut className="h-6 w-6" />
        </Button>
        <div className="flex gap-2">
          <ThemeDropdown />
          <Button variant="outline" size="icon">
            <Settings className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
