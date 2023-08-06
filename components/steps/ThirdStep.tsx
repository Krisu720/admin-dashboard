"use client";

import { Row, StepContext } from "@/app/products/create/page";
import React, { useContext } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { toast } from "../ui/use-toast";

const ThirdStep = () => {
  const { formStep, setFormStep,value } = useContext(StepContext);

  return (
    <div className="grid grid-cols-4 gap-4 pt-2 ">
      <Row title="Product Name">
        <h1 className="text-muted-foreground">{value.productName}</h1>
      </Row>
      <Row title="Product Description">
        <h1 className="text-muted-foreground">
        {value.productDesc}
        </h1>
      </Row>
      <Row title="Size Variants">
        <div className="flex flex-wrap gap-2 w-full mt-2">
          {value.sizeVariants && value.sizeVariants.map((item)=>(
            <Badge key={item} variant="secondary">{item}</Badge>
          ))}
        </div>
      </Row>
      <Row title="Price">
        <h1 className="text-muted-foreground">{value.regularPrice} PLN</h1>
      </Row>
      <div className="col-span-4 flex justify-between mt-6">
        <Button variant="ghost" onClick={() => setFormStep(1)}>
          {" "}
          <ChevronLeft className="mr-2" /> Pricing
        </Button>
        <Button onClick={()=>toast({title: "Object",description: JSON.stringify(value)})}>Confirm</Button>
      </div>
    </div>
  );
};

export default ThirdStep;
