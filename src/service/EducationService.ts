import { Education } from "@/types/education";

const EducationService = () => {
  const url = process.env.NEXT_PUBLIC_SERVER_API_URL;

  const getEducations = async () => {
    const response = await fetch(`${url}/educations`, {
      cache: "no-store",
    });
    return response.json();
  };

  const createEducation = async (data: Education) => {
    const response = await fetch(`${url}/educations`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  };

  const updateEducation = async (data: Education) => {
    const response = await fetch(`${url}/educations`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  };

  const deleteEducation = async (id: string) => {
    const response = await fetch(`${url}/educations?id=${id}`, {
      method: "DELETE",
    });

    return response.json();
  };

  return {
    getEducations,
    createEducation,
    updateEducation,
    deleteEducation,
  };
};

export default EducationService;
