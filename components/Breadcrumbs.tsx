import { FC } from "react";
import { Separator } from "@/components/ui/separator";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

interface BreadcrumbsProps {
  items?: {
    name: string;
    href: string;
  }[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <div className="flex space-x-2 items-center">
      <Link href="/" className="hover:opacity-60 transition-opacity">
        <HomeIcon />
      </Link>
      {items &&
        items.map(({ name, href }, index) => {
          if (index === items.length - 1)
            return (
              <>
                <Separator orientation="vertical" className="h-4" />
                <h1 className="select-none">{name}</h1>
              </>
            );
          else
            return (
              <>
                <Separator orientation="vertical" className="h-4" />
                <Link
                  href={href}
                  className="text-muted-foreground hover:underline"
                >
                  {name}
                </Link>
              </>
            );
        })}
    </div>
  );
};

export default Breadcrumbs;
