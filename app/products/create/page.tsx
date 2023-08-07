"use client";

import Breadcrumbs from "@/components/custom/Breadcrumbs";
import {
  CalendarCheck2,
  CircleDollarSign,
  GanttChartSquare,
} from "lucide-react";
import { ReactNode, createContext, useState } from "react";
import Card from "@/components/custom/Card";
import Stepper from "@/components/custom/Stepper";
import FirstStep from "@/components/steps/FirstStep";
import SecondStep from "@/components/steps/SecondStep";
import ThirdStep from "@/components/steps/ThirdStep";

const steps = [
  {
    icon: <GanttChartSquare />,
    name: "Overview",
  },
  {
    icon: <CircleDollarSign />,
    name: "Pricing",
  },
  {
    icon: <CalendarCheck2 />,
    name: "Confirmations",
  },
];

type StepValue = {
  productName: string;
  productDesc: string;
  sizeVariants: string[] | null;
  productImages:
    | {
        file: File;
        url: string;
      }[]
    | null;
  regularPrice: string;
  salePrice: string | null;
};

type StepContext = {
  formStep: number;
  setFormStep: (value: number) => void;
  value: StepValue;
  setValue: (value: StepValue) => void;
}

export const StepContext = createContext<StepContext>({ formStep: 0, setFormStep: () => {}, value: {
  productName: "",
  productDesc: "",
  sizeVariants: null,
  productImages: null,
  regularPrice: "",
  salePrice: null,
}, setValue: () => {} });

const Page = ({}) => {

  const [formStep, setFormStep] = useState<number>(0);
  const [value, setFormValue] = useState<StepValue>({
    productName: "",
    productDesc: "",
    sizeVariants: null,
    productImages: null,
    regularPrice: "",
    salePrice: null,
  });

  const setValue = (data: StepValue) => {
    setFormValue(data);
  };

  return (
    <StepContext.Provider value={{ formStep, setFormStep, setValue, value }}>
      <Breadcrumbs
        items={[
          { name: "Products", href: "/products" },
          { name: "Create product", href: "/products/create" },
        ]}
      />
      <div className="h-4" />
      <h1 className="text-3xl font-bold">Create Product</h1>
      <div className="h-4" />
      <Card className="lg:col-span-3 overflow-hidden">
        <Stepper active={formStep} steps={steps} />
        {formStep === 0 && <FirstStep />}

        {formStep === 1 && <SecondStep />}

        {formStep === 2 && <ThirdStep />}
      </Card>
    </StepContext.Provider>
  );
};

export default Page;

export const Row = ({
  children,
  title,
  description,
  required,
}: {
  children: ReactNode;
  title: string;
  description?: string;
  required?: true;
}) => {
  return (
    <>
      <div className="hidden lg:block lg:col-span-1">
        <div className="flex gap-2 items-center">
          <h1 className="text-lg">
            {title}
            {required && <span className="text-red-500">*</span>}
          </h1>
        </div>
        {description && (
          <h1 className="text-sm text-muted-foreground">{description}</h1>
        )}
      </div>
      <div className="col-span-4 lg:col-span-3">
        <div className="lg:hidden mb-2">
          <h1 className="text-lg">
            {title}
            {required && <span className="text-red-500">*</span>}
          </h1>
          {description && (
            <h1 className="text-sm text-muted-foreground">{description}</h1>
          )}
        </div>
        {children}
      </div>
    </>
  );
};
