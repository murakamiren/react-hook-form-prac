import { atom } from "recoil";
import { formInputs } from "../../../types/formType";

export const formDataAtom = atom<formInputs[]>({
	key: "formAtom",
	default: [],
});
