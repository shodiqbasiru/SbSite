import ImageService from "@/service/ImageService";
import { ChangeEvent, useState } from "react";

export function useInputImage() {
  const [previewImg, setPreviewImg] = useState<string>("");
  const [previewImageName, setPreviewImageName] = useState<string>("");

  const service = ImageService();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const previewUrl = URL.createObjectURL(file);
      setPreviewImg(previewUrl);
      setPreviewImageName(file.name);
    }
  };

  const handleUpload = async (file: File, oldFilename?: string) => {
    const formData = new FormData();
    formData.append("file", file);
    if (oldFilename) {
      const filename = oldFilename.split("/").pop();
      if (!filename) return null;
      formData.append("oldFilename", filename);
    }

    try {
      const response = await service.uploadImage(formData);
      if (response.status === 201 || response.status === 200) {
        const uploadedFilePath = `/storage/${response.data.filename}`;
        return uploadedFilePath;
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  const handleClearPreview = () => {
    setPreviewImg("");
    setPreviewImageName("");
  };

  const data = {
    previewImg,
    previewImageName,
  }
  
  const dispatchAction = {
    setPreviewImg,
    setPreviewImageName,
  }

  const methods = {
    handleFileChange,
    handleClearPreview,
    handleUpload,
  }

  return { data, methods, dispatchAction };
}
