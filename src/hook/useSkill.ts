import SkillSerivce from "@/service/SkillService";
import { Skill } from "@/types/skill";
import { confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";

export function useSkill() {
    const [skills, setSkills] = useState<Skill[]>([]);
    const service = SkillSerivce();
    const toast = useRef<Toast>(null);
    
    const getSkills = async () => {
        const { data } = await service.getSkills();
        data.sort((a: { date: string }, b: { date: string }) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        setSkills(data);
    };
    
    const handleDelete = async (skill: Skill) => {
        const accept = async () => {
        if (!skill.id) return;
        const res = await service.deleteSkill(skill.id);
        if (res.status === 200) {
            await getSkills();
        }
    
        toast.current?.show({
            severity: "success",
            summary: "Confirmed",
            detail: `You have deleted ${skill.title}`,
            life: 3000,
        });
        };
    
        const reject = () => {
        toast.current?.show({
            severity: "error",
            summary: "Rejected",
            detail: `You have rejected to delete ${skill.title}`,
            life: 3000,
        });
        };
    
        confirmDialog({
        message: `Do you want to delete ${skill.title} ?`,
        header: "Delete Confirmation",
        icon: "pi pi-info-circle",
        defaultFocus: "reject",
        acceptClassName: "p-button-danger",
        accept,
        reject,
        });
    };
    
    const data = {
        skills,
        toast,
    };
    
    const methods = {
        getSkills,
        handleDelete,
    };
    
    return { data, methods };
}