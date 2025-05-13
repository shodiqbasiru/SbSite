import UserService from "@/service/UserService";
import { User } from "@/types/users";
import { Toast } from "primereact/toast";
import { useEffect, useRef, useState } from "react";

export function useUser() {
    const [user, setUser] = useState<User | null>(null);
    const service = UserService();
    const toast = useRef<Toast>(null);

    const getUser = async () => {
        const { data: users } = await service.getUsers();
        const id = users[0].id;
        console.log("id", id);
        
        const { data } = await service.getUser(id);
        console.log("data", data); // data ketemu
        setUser(data);
    }

    useEffect(() => {
        getUser();
    }, []);

    const updateUser = async (data: User) => {
        const res = await service.updateUser(data);
        if (res.status === 200) {
            toast.current?.show({
                severity: "success",
                summary: "Confirmed",
                detail: `You have updated ${data.fullName}`,
                life: 3000,
            });
        }
    }

    return {
        user,
        getUser,
        updateUser
    }
}