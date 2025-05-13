import React from "react";
import XButton from "./XButton";

const PREVIEW_URL = "/images/preview.png";

interface XInputImageProps {
  previewImage: string;
  previewImageName: string;
  handleClearPreview: () => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function XInputImage({
  previewImage,
  previewImageName,
  handleClearPreview,
  handleFileChange,
}: XInputImageProps) {
  return (
    <div className="relative flex cursor-pointer items-center justify-center rounded border-2 border-dashed border-amber-600 bg-amber-600/20 hover:bg-amber-600/50 transition duration-200">
      <div className="relative flex h-full w-full flex-col items-center justify-center p-4">
        {previewImage ? (
          <>
            <img
              src={previewImage}
              alt="preview"
              className="h-48 w-full rounded-lg object-contain"
            />

            <p className="mt-3 text-center text-lg text-gray-400">
              {previewImageName}
            </p>
            <XButton
              className="absolute right-2 top-2 z-10 h-10 w-10"
              icon="pi pi-times"
              rounded="full"
              severity="error"
              onClick={handleClearPreview}
            />
          </>
        ) : (
          <>
            <img
              src={PREVIEW_URL}
              alt="preview"
              className="h-48 w-full rounded-lg object-contain"
            />
            <p className="mt-3 text-center text-lg text-gray-400">
              Click or drag image here to upload
            </p>
          </>
        )}
      </div>
      <input
        type="file"
        name="imgUrl"
        id="imgUrl"
        className="absolute inset-0 cursor-pointer opacity-0"
        onChange={handleFileChange}
      />
    </div>
  );
}
