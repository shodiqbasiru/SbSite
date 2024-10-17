const ImageService = () => {
  const url = process.env.NEXT_PUBLIC_SERVER_API_URL;
  const uploadImage = async (formData: FormData) => {
    const response = await fetch(`${url}/upload`, {
      method: "POST",
      body: formData,
    });
    return response.json();
  };

  const deleteImage = async (filename: string) => {
    const response = await fetch(`${url}/upload?filename=${filename}`, {
      method: "DELETE",
    });
    return response.json();
  };

  return {
    uploadImage,
    deleteImage,
  };
};

export default ImageService;
