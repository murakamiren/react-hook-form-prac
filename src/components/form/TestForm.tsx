import { css } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";
import { VFC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { formInputs } from "../../types/formType";
import FormInputText from "../modules/FormInputText";
import { formDataAtom } from "../store/atoms/formDataAtom";

const TestForm: VFC = () => {
	const setFormData = useSetRecoilState<formInputs[]>(formDataAtom);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<formInputs>();

	const onSubmit: SubmitHandler<formInputs> = (d) => {
		console.log("result:", d);
		setFormData([d]);
	};
	console.log("watch ex-1", watch("ex"));
	return (
		<form css={formStyle} onSubmit={handleSubmit(onSubmit)}>
			<FormInputText placeholder="ex-1" register={register} registerName="ex" required={false} />
			<FormInputText placeholder="ex-2" register={register} registerName="exReq" required={true} />
			<AnimatePresence>
				{errors.exReq && (
					<motion.span
						css={{ color: "red" }}
						key="warnText"
						variants={warnTextAnimate}
						initial="hidden"
						animate="visible"
						exit="hidden"
					>
						please type something
					</motion.span>
				)}
			</AnimatePresence>
			<motion.div className="btn-wrap" whileHover={{ scale: 1.1 }}>
				<button type="submit">click me</button>
			</motion.div>
		</form>
	);
};

const warnTextAnimate = {
	hidden: { y: -20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

const formStyle = css`
	color: #333;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 24px;
	input {
		width: 480px;
		padding: 10px 15px;
		font-size: 16px;
		border-radius: 4px;
		border: solid 1px #333;
		box-sizing: border-box;
	}

	.btn-wrap {
		width: 160px;
		height: 40px;
		border-radius: 4px;
		background-color: #333;
		box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.25);

		button {
			width: 100%;
			height: 100%;
			display: block;
			font-size: 16px;
			text-align: center;
			color: #fff;
		}
	}
`;

export default TestForm;
