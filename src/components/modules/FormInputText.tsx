import { VFC } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { formInputs } from "../../types/formType";

type InputProps = {
	placeholder: string;
	register: UseFormRegister<formInputs>;
	registerName: Path<formInputs>;
	required: boolean;
};

const FormInputText: VFC<InputProps> = ({ placeholder, register, registerName, required }) => {
	return <input type="text" placeholder={placeholder} {...register(registerName, { required })} />;
};

export default FormInputText;
