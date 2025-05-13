import { User } from "@/types/users";

const UserService = () => {
    const url = process.env.NEXT_PUBLIC_SERVER_API_URL;

    const getUser = async (id:string) => {
        const response = await fetch(`${url}/users?id=${id}`, {
            cache: "no-store",
        });
        return response.json();
    }

    const getUsers = async () => {
        const response = await fetch(`${url}/users`, {
            cache: "no-store",
        });
        return response.json();
    }

    const updateUser = async (data: User) => {
        const response = await fetch(`${url}/users`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.json();
    }
    
    return {
        getUsers,
        getUser,
        updateUser
    }
}

export default UserService;