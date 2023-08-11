"use client";

import "react-quill/dist/quill.snow.css";
import useMounted from "@/hooks/useMounted";
import React, { Dispatch, SetStateAction } from "react";
import ReactQuill, { QuillOptions } from "react-quill";
import "react-quill/dist/quill.snow.css";

export const Editor = ({state,setState}:{state: string,setState: Dispatch<SetStateAction<string>>}) => {
  const mounted = useMounted()

  const handleChange = (value: string) => {
    setState(value);
  };

  // documentation: https://quilljs.com/docs/modules/toolbar/
  const config: QuillOptions = {
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'header': [1, 2, 3, 4,false ,5, 6, ] }],
        
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        
        ['blockquote', 'code-block'],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        
        [{ 'direction': 'rtl' }],                         // text direction
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'align': [] }],
        
        // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'font': [] }],
        ['clean']                                         // remove formatting button
      ]
    }
  }

  return (
    <div className="text-editor">
     {mounted && <ReactQuill
        modules={config.modules}
        theme="snow"
        value={state}
        onChange={handleChange}
        placeholder="Write something here..."
      />}
    </div>
  );
};

export default Editor;
