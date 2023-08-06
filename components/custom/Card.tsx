import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface CardProps {
  className?: string;
  children: ReactNode;
}

const Card: FC<CardProps> = ({ className, children }) => {
  return (
    <div className={cn(className, "p-6 border rounded-xl")}>{children}</div>
  );
};

export default Card;
