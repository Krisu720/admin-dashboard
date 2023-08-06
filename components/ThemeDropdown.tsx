"use client";

import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Sun, Moon, Computer } from "lucide-react";
import { useTheme } from "next-themes";
import useMounted from "@/hooks/useMounted";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
interface ThemeDropdownProps {}

const ThemeDropdown: FC<ThemeDropdownProps> = ({}) => {
  const { theme, setTheme } = useTheme();
  const isMounted = useMounted();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild id="trigger" >
        <Button variant="outline" size="icon">
          {isMounted && theme === "light" ? (
            <Sun className="h-6 w-6" />
          ) : isMounted && theme === "dark" ? (
            <Moon className="h-6 w-6" />
          ) : isMounted && theme === "system" ? (
            <Computer className="h-6 w-6" />
          ) : (
            <></>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="h-6 w-6 mr-2" /> Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="h-6 w-6 mr-2" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Computer className="h-6 w-6 mr-2" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeDropdown;
