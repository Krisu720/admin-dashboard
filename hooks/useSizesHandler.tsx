"use client";

import { toast } from "@/components/ui/use-toast";
import { useRef, useState } from "react";

const useSizesHandler = () => {
  const [sizes, setSizes] = useState<string[] | null>([]);
  const sizeRef = useRef<HTMLInputElement>(null);

  const addSize = () => {
    if (sizeRef.current?.value && sizeRef.current.value.length > 0) {
      const value = sizeRef.current.value;
      sizeRef.current.value = "";
      if (sizes) {
        const theSameValue = sizes.filter((item) => item === value);
        if (theSameValue.length >= 1) {
          toast({
            title: "This size already exists.",
            variant: "destructive",
          });
        } else {
          setSizes((prev) => {
            if (prev) {
              return [...prev, value];
            } else {
              return prev;
            }
          });
        }
      } 
    } else {
      toast({
        title: "Size is not provided.",
        variant: "destructive",
      });
    }
  };

  const removeSize = (name: string) => {
    setSizes((prev) => {
      if (prev) {
        const newArray = prev.filter((val) => val !== name);
        return newArray;
      } else {
        return prev;
      }
    });
  };

  return { sizeRef, sizes, addSize, removeSize,setSizes};
};

export default useSizesHandler;
