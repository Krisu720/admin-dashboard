import { TrendingDown, TrendingUp } from "lucide-react";
import { FC } from "react";

interface TradingBadgeProps {
  variant: "success" | "destructive";
  value: number;
}

const TradingBadge: FC<TradingBadgeProps> = ({ variant,value }) => {
  return (
    <div className="flex gap-2 mt-2 items-center">
      {variant === "destructive" ? (
        <div className="dark:text-red-300 dark:bg-red-700/50 text-red-700 bg-red-300/50 p-1.5 rounded-full h-7 w-7 flex-shrink-0">
          <TrendingDown className="h-full w-full" />
        </div>
      ) : (
        <div className="dark:text-green-300 dark:bg-green-700/50 text-green-700 bg-green-300/50 p-1.5 rounded-full h-7 w-7 flex-shrink-0">
          <TrendingUp className="h-full w-full" />
        </div>
      )}
      <h1>
        {variant === "destructive" ? "-" : "+"}{value.toString()}%{" "}
        <span className="text-muted-foreground text-sm">than last week</span>
      </h1>
    </div>
  );
};

export default TradingBadge;
