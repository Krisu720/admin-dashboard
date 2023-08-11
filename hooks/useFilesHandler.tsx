"use client";

import { useState } from "react";

const useFilesHandler = () => {
  const [files, setFiles] = useState<{ file: File; url: string }[] | null>([]);

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = convertFiles(e.target.files);
      setFiles(newFiles);
    }
  };

  const removeFile = (deleteFile: File) => {
    if (files) {
      const newFiles = files.filter(({ file }) => file !== deleteFile);
      setFiles(newFiles);
    }
  };

  const convertFiles = (fileList: FileList) => {
    const fileArray = [...fileList];
    const fileUrlArray = fileArray.map((item) => ({
      file: item,
      url: window.URL.createObjectURL(item),
    }));
    return fileUrlArray;
  };

  return { files, handleFiles, removeFile,setFiles };
};

export default useFilesHandler;
