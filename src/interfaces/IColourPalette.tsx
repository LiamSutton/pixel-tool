import { Dispatch, SetStateAction } from "react";

export interface IColourPalette {
    updateColour:Dispatch<SetStateAction<string>>
}