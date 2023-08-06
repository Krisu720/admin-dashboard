import { FC } from "react";

interface StepperProps {
  active: number;
  steps: {
    icon: JSX.Element;
    name: string;
  }[];
}


const Stepper: FC<StepperProps> = ({ active, steps }) => {
  return (
    <div className=" border-b col-span-4 grid lg:grid-cols-3 pb-4 gap-3">
      {steps.map(({ icon, name },index) => (
        <div key={name} className="flex gap-2">
          <div className={`h-12 w-12 ${active === index ? "bg-primary text-secondary" : "bg-secondary text-primary"} rounded-2xl  flex items-center justify-center transition-colors`}>
            {icon}
          </div>
          <div className="flex flex-col ">
            <h1 className="text-muted-foreground text-sm uppercase">Step {index+1}</h1>
            <h1>{name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
