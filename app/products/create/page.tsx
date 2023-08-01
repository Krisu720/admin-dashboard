"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import useFilesHandler from "@/hooks/useFilesHandler";
import {
  Plus,
  Trash2,
  XCircle,
} from "lucide-react";
import Image from "next/image";
import {  ReactNode, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Textarea } from "@/components/ui/textarea";
import Card from "@/components/Card";
import Stepper from "@/components/Stepper";
const page = ({}) => {
  const [sizes, setSizes] = useState<string[]>([]);
  const [sizeInput, setSizeInput] = useState<string>("");
  const [files, setFiles] = useState<{ file: File; url: string }[]>([]);
  const { convertFiles } = useFilesHandler();
  const [animateRef] = useAutoAnimate<HTMLDivElement>();

  const addSize = () => {
    if (sizeInput.length > 0) {
      setSizes((prev) => [...prev, sizeInput]);
      setSizeInput("");
    } else {
      toast({
        title: "Error",
        description: "Size is not provided.",
        variant: "destructive",
      });
    }
  };

  const removeSize = (name: string) => {
    setSizes((prev) => {
      const newArray = prev.filter((val) => val !== name);
      return newArray;
    });
  };

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = convertFiles(e.target.files);
      setFiles(newFiles);
    }
  };

  const removeFile = (deleteFile: File) => {
    const newFiles = files.filter(({ file }) => file !== deleteFile);
    setFiles(newFiles);
  };

  return (
    <div>
      <Breadcrumbs
        items={[
          { name: "Products", href: "/products" },
          { name: "Create product", href: "/products/create" },
        ]}
      />
      <div className="h-4" />
      <h1 className="text-3xl font-bold">Create Product</h1>
      <div className="h-4" />
      <div className="grid lg:grid-cols-4 gap-4">
        <Card className="lg:col-span-3">
          <div className=" grid grid-cols-4 gap-4">
            <Stepper/>
            <Row
              title="Product Name"
              description="Add product title that buyers would likely use to search."
            >
              <Input />
            </Row>
            <Row
              title="Product Description"
              description="Add product title that buyers would likely use to search."
            >
              <Textarea />
            </Row>
            <Row
              title="Size Variant"
              description="Add product title that buyers would likely use to search."
            >
              <div className="flex w-full items-center space-x-2">
                <Input
                  onChange={(e) => setSizeInput(e.target.value)}
                  value={sizeInput}
                />
                <Button size="sm" onClick={() => addSize()}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add
                </Button>
              </div>
              <div
                ref={animateRef}
                className="flex flex-wrap gap-2 w-full mt-2"
              >
                {sizes.map((item) => (
                  <Badge
                    key={item}
                    onClick={() => removeSize(item)}
                    className="cursor-default select-none"
                  >
                    {" "}
                    <XCircle className="h-4 w-4 mr-1" />
                    {item}
                  </Badge>
                ))}
              </div>
            </Row>
            <Row
              title="Product Images "
              description="Add product title that buyers would likely use to search."
            >
              <Input type="file" multiple onChange={(e) => handleFiles(e)} />
              <div ref={animateRef} className="flex flex-wrap gap-2 mt-2">
                {files.map((item, index) => (
                  <button
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
          </div>
        </Card>
      </div>
    </div>
  );
};

export default page;

const Row = ({
  children,
  title,
  description,
}: {
  children: ReactNode;
  title: string;
  description?: string;
}) => {
  return (
    <>
      <div className="hidden lg:block lg:col-span-1">
        <h1 className="text-lg">
          {title}
          <span className="text-red-500">*</span>
        </h1>
        {description && (
          <h1 className="text-sm text-muted-foreground">{description}</h1>
        )}
      </div>
      <div className="col-span-4 lg:col-span-3">
        <div className="lg:hidden mb-2">
          <h1 className="text-lg">
            {title}
            <span className="text-red-500">*</span>
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
