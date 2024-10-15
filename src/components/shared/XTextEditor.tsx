import dynamic from "next/dynamic";
import React from "react";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface TextEditorProps {
  description: string;
  setDescription: (description: string) => void;
}

const XTextEditor = ({ description, setDescription }: TextEditorProps) => {
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  const module = {
    toolbar: toolbarOptions,
  };

  const handleChangeTextEditor = (content: any, editor: any) => {
    setDescription(content);
  };

  return (
    <ReactQuill
      modules={module}
      theme="snow"
      value={description}
      onChange={(content: any, delta: any, source: any, editor: any) => {
        handleChangeTextEditor(content, editor);
      }}
      className="w-full bg-gray-900 text-white"
    />
  );
};

export default XTextEditor;
