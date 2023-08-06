"use client";
import { Row, StepContext } from "@/app/products/create/page";
import React, { useContext } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const SecondStep = () => {
  const { formStep, setFormStep,setValue,value } = useContext(StepContext);

  const formValidation = z.object({
    price: z.string().min(1, { message: "Price is required." }),
    salePrice: z.string().nullable()
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formValidation>>({
    resolver: zodResolver(formValidation),
  });

  const checkForm:SubmitHandler<z.infer<typeof formValidation>> = (data) => {
    setValue({
        ...value,
        regularPrice: data.price,
        salePrice: data.salePrice
    })
    setFormStep(2)
  };

  return (
    <form
      onSubmit={handleSubmit(checkForm)}
      className="grid grid-cols-4 gap-4 pt-2 "
    >
      <Row
        title="Regular Price"
        description="Regular brutto price on the card."
        required
      >
        <Input type="number" {...register("price")} />
        {errors.price?.message && (
          <h1 className="text-red-500 my-1 text-sm">{errors.price.message}</h1>
        )}
      </Row>
      <Row title="Sale Price" description="Sale price with a discount">
        <Input type="number" {...register("salePrice")} />
      </Row>
      <div className="col-span-4 flex justify-between mt-6">
        <Button variant="ghost" onClick={() => setFormStep(0)}>
          <ChevronLeft className="mr-2" /> Overview
        </Button>
        <Button variant="ghost" type="submit">
          Confirmations <ChevronRight className="ml-2" />
        </Button>
      </div>
    </form>
  );
};

export default SecondStep;
