"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";

const MobileSidebar = ({}) => {
  const [open, setOpen] = useState<boolean>(false);

  const closeSidebar = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <ChevronRight />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <Sidebar closeSidebar={closeSidebar}/>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
