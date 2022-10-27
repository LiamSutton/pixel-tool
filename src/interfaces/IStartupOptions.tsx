import { Dispatch, SetStateAction } from "react";

export interface IStartupOptions {
    updateHeight: Dispatch<SetStateAction<number>>
    updateWidth: Dispatch<SetStateAction<number>>
    updateShowOptions: Dispatch<SetStateAction<boolean>>
}