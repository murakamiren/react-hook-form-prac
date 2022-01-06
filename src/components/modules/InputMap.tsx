import { css } from "@emotion/react";
import { VFC } from "react";
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
					<li key={i}>
						first is: {data.ex} <br />
						second is: {data.exReq}
					</li>
				))}
			</ul>
		</div>
	);
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
