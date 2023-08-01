import { TrendingDown, TrendingUp } from "lucide-react";
import { FC } from "react";

interface TradingBadgeProps {
  variant: "success" | "destructive";
  value: number;
}

const TradingBadge: FC<TradingBadgeProps> = ({ variant,value }) => {
  return (
    <div className="flex gap-1 mt-2 items-center">
      {variant === "destructive" ? (
        <div className="text-red-300 bg-red-700/50 p-1.5 rounded-full h-7 w-7">
          <TrendingDown className="h-full w-full" />
        </div>
      ) : (
        <div className="text-green-300 bg-green-700/50 p-1.5 rounded-full h-7 w-7">
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
