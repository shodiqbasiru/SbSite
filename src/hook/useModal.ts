import { useState } from "react";

export function useModal() {
    const [visible, setVisible] = useState<boolean>(false);

    const showDialog = (visible:boolean) => {
        setVisible(visible);
    };


    return {
        visible,
        setVisible,
        showDialog,
    };
}
