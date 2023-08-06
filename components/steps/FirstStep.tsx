"use client";

import React, { useContext } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import useFilesHandler from "@/hooks/useFilesHandler";
import useSizesHandler from "@/hooks/useSizesHandler";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Row, StepContext } from "@/app/products/create/page";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { ChevronRight, Plus, Trash2, XCircle } from "lucide-react";
import { Badge } from "../ui/badge";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

const FirstStep = () => {
  const { setFormStep,setValue,value } = useContext(StepContext);
  const { sizeRef, sizes, addSize, removeSize } = useSizesHandler();
  const { files, handleFiles, removeFile } = useFilesHandler();
  const [animateRef] = useAutoAnimate<HTMLDivElement>();

  const formValidation = z.object({
    name: z
      .string()
      .min(3, { message: "Minimum 3 characters." })
      .max(30, { message: "Max 30 characters." }),
    description: z.string().min(1, { message: "Description is required." }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formValidation>>({
    resolver: zodResolver(formValidation),
  });

  const checkForm:SubmitHandler<z.infer<typeof formValidation>> = ({name,description}) => {
    setValue({
      ...value,
      productName: name,
      productDesc: description,
      sizeVariants: sizes,
      productImages: files,
    })
    setFormStep(1);
  };


  return (
    <form
      onSubmit={handleSubmit(checkForm)}
      className="grid grid-cols-4 gap-4 pt-2 "
    >
      <Row
        title="Product Name"
        description="Add product title that buyers would likely use to search."
        required
      >
        <Input {...register("name")} />
        {errors.name?.message && (
          <h1 className="text-red-500 my-1 text-sm">{errors.name.message}</h1>
        )}
      </Row>
      <Row
        title="Product Description"
        description="Add product title that buyers would likely use to search."
        required
      >
        <Textarea {...register("description")} />
        {errors.description?.message && (
          <h1 className="text-red-500 my-1 text-sm">
            {errors.description.message}
          </h1>
        )}
      </Row>
      <Row
        title="Size Variant"
        description="Add product title that buyers would likely use to search."
      >
        <div className="flex w-full items-center space-x-2">
          <Input ref={sizeRef} />
          <Button type="button" size="sm" onClick={() => addSize()}>
            <Plus className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
        <div ref={animateRef} className="flex flex-wrap gap-2 w-full mt-2">
          {sizes?.map((item) => (
            <button key={item} type="button" onClick={() => removeSize(item)}>
              <Badge key={item} className="cursor-default select-none">
                {" "}
                <XCircle className="h-4 w-4 mr-1" />
                {item}
              </Badge>
            </button>
          ))}
        </div>
      </Row>
      <Row
        title="Product Images "
        description="Add product title that buyers would likely use to search."
      >
        <Input type="file" multiple onChange={(e) => handleFiles(e)} />
        <div ref={animateRef} className="flex flex-wrap gap-2 mt-2">
          {files?.map((item, index) => (
            <button
              type="button"
              key={item.url}
              onClick={() => removeFile(item.file)}
              className="overflow-hidden h-16 w-16 rounded-xl group relative"
            >
              <div className="group-hover:opacity-50 flex items-center justify-center transition-opacity bg-red-500 absolute top-0 left-0 h-full w-full z-10 opacity-0">
                <Trash2 className="h-8 w-8" />
              </div>
              <AspectRatio
                ratio={1 / 1}
                className="group-hover:scale-125 transition-transform"
              >
                <Image
                  key={index}
                  src={item.url}
                  fill
                  alt="preview image"
                  className="object-cover"
                />
              </AspectRatio>
            </button>
          ))}
        </div>
      </Row>
      <div className="col-span-4 flex justify-end mt-6">
        <Button variant="ghost" type="submit">
          {" "}
          Pricing <ChevronRight className="ml-2" />
        </Button>
      </div>
    </form>
  );
};

export default FirstStep;
