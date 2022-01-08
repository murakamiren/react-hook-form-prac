import { css } from "@emotion/react";
import { VFC } from "react";
import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import { formInputs } from "../../types/formType";
import { formDataAtom } from "../store/atoms/formDataAtom";

const InputMap: VFC = () => {
	const formData = useRecoilValue<formInputs[]>(formDataAtom);
	return (
		<div css={wrap}>
			<h2>your data</h2>
			<ul css={list}>
				{formData.map((data, i) => (
					<motion.li key={i} variants={dataListAnimate} initial="hidden" animate="visible">
						first is: {data.ex} <br />
						second is: {data.exReq}
					</motion.li>
				))}
			</ul>
		</div>
	);
};

const dataListAnimate = {
	hidden: { y: -20, opacity: 0 },
	visible: { y: 0, opacity: 1 },
};

const wrap = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 24px;
	gap: 8px;
`;

const list = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	list-style: none;
	text-align: center;
	li {
		color: tomato;
		font-size: 16px;
	}
`;

export default InputMap;
