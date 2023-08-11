import Breadcrumbs from "@/components/custom/Breadcrumbs";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Plus } from "lucide-react";

const page = () => {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Email", href: "/email" }]} />
      <div className="h-4" />
      <div className="flex justify-between items-center">
        <h1 className="text-3xl  font-extrabold">Email</h1>
        <Link
          href="/email/create"
          className={cn(buttonVariants({ size: "sm" }))}
        >
          <Plus className="h-4 w-4 mr-2" /> Create Email
        </Link>
      </div>
      <div className="h-4" />
      <div></div>
    </div>
  );
};

export default page;
