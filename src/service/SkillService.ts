import { Skill } from "@/types/skill";

const SkillSerivce = () => {
    const url = process.env.NEXT_PUBLIC_SERVER_API_URL;

    const getSkills = async () => {
        const response = await fetch(`${url}/skills`, {
            cache: "no-store",
        });
        return response.json();
    }

    const createSkill = async (data: Skill) => {
        const response = await fetch(`${url}/skills`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.json();
    }

    return {
        getSkills,
        createSkill,
    }
} 

export default SkillSerivce;