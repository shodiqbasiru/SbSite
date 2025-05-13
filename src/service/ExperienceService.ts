import { Experience } from "@/types/experience";

const ExperienceService = () => {
  const url = process.env.NEXT_PUBLIC_SERVER_API_URL;

  const getExperiences = async () => {
    const response = await fetch(`${url}/experiences`, {
      cache: "no-store",
    });
    return response.json();
  };

  const createExperience = async (data: Experience) => {
    const response = await fetch(`${url}/experiences`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  };

  const updateExperience = async (data: Experience) => {
    const response = await fetch(`${url}/experiences`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  };

  const deleteExperience = async (id: string) => {
    const response = await fetch(`${url}/experiences?id=${id}`, {
      method: "DELETE",
    });

    return response.json();
  };

  return {
    getExperiences,
    createExperience,
    updateExperience,
    deleteExperience,
  };
};

export default ExperienceService;
