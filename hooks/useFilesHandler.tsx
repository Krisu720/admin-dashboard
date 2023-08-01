'use client'

const useFilesHandler = () => {
  const convertFiles = (fileList: FileList) => {
    const fileArray = [...fileList];
    const fileUrlArray = fileArray.map((item) => ({file: item,url: window.URL.createObjectURL(item)}));
    return fileUrlArray
};
  return {convertFiles}
};

export default useFilesHandler;
