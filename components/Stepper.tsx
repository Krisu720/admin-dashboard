import { CalendarCheck2, CircleDollarSign, GanttChartSquare } from "lucide-react";
import { FC } from "react";

interface StepperProps {}

const Stepper: FC<StepperProps> = ({}) => {
  return (
    <div className=" border-b col-span-4 grid lg:grid-cols-3 pb-4 gap-3">
      <div className="flex gap-2">
        <div className="h-12 w-12 bg-primary rounded-2xl text-secondary flex items-center justify-center">
          <GanttChartSquare />
        </div>
        <div className="flex flex-col ">
          <h1 className="text-muted-foreground text-sm uppercase">Step 1</h1>
          <h1>Overview</h1>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="h-12 w-12 bg-secondary rounded-2xl text-primary flex items-center justify-center">
          <CircleDollarSign />
        </div>
        <div className="flex flex-col ">
          <h1 className="text-muted-foreground text-sm uppercase">Step 2</h1>
          <h1>Pricing</h1>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="h-12 w-12 bg-secondary rounded-2xl text-primary flex items-center justify-center">
          <CalendarCheck2 />
        </div>
        <div className="flex flex-col ">
          <h1 className="text-muted-foreground text-sm uppercase">Step 3</h1>
          <h1>Confirmations</h1>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
