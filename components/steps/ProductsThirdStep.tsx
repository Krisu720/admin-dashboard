"use client";

import { Row, StepContext } from "@/app/products/create/page";
import React, { useContext } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { toast } from "../ui/use-toast";
import Image from "next/image";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

const ProductsThirdStep = () => {
  const { formStep, setFormStep, value } = useContext(StepContext);

  return (
    <div className="grid grid-cols-4 gap-4 pt-2 ">
      <Row title="Product Name">
        <h1 className="text-muted-foreground">{value.productName}</h1>
      </Row>
      <Row title="Product Description">
        <h1 className="text-muted-foreground">{value.productDesc}</h1>
      </Row>
      <Row title="Size Variants">
        <div className="flex flex-wrap gap-2 w-full mt-2 text-muted-foreground">
          {value.sizeVariants &&
            value.sizeVariants.map((item) => <h1 key={item}>{item}</h1>)}
        </div>
      </Row>
      <Row title="Price">
        {value.salePrice ? (
          <>
            <h1 className="text-muted-foreground line-through">
              {value.regularPrice} PLN
            </h1>
            <h1 className="text-muted-foreground">{value.salePrice} PLN</h1>
          </>
        ) : (
          <h1 className="text-muted-foreground">{value.regularPrice} PLN</h1>
        )}
      </Row>
      <Row title="Images">
        <div className="flex gap-2">

        {value.productImages &&
          value.productImages.map(({ url},index) => (
            <div
              key={url}
              className="overflow-hidden h-16 w-16 rounded-xl group relative opacity-75"
            >
              <AspectRatio
                ratio={1 / 1}
                className="group-hover:scale-125 transition-transform"
              >
                <Image
                  key={index}
                  src={url}
                  fill
                  alt="preview image"
                  className="object-cover"
                />
              </AspectRatio>
            </div>
          ))}
        </div>

      </Row>
      <div className="col-span-4 flex justify-between mt-6">
        <Button variant="ghost" onClick={() => setFormStep(1)}>
          {" "}
          <ChevronLeft className="mr-2" /> Pricing
        </Button>
        <Button
          onClick={() =>
            toast({ title: "Object", description: JSON.stringify(value) })
          }
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default ProductsThirdStep;
