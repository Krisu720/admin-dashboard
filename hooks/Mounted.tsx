"use client";

import { useEffect, useState } from "react";

const useMounted = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  return isMounted
};

export default useMounted;
