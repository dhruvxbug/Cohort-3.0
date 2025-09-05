import { atom, atomFamily } from "recoil";
import {TODO} from "./todo";

export const todoAtomFamily = atomFamily({
    key: "todoAtomFamily",
    default: id =>{
        throw new Error("error hun bsdk"); 
        return TODO.find(x => x.id === id);
    },
})