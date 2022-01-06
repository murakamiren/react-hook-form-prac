import { css } from "@emotion/react";
import { VFC } from "react";
import TestForm from "../form/TestForm";
import InputMap from "../modules/InputMap";

const FormPage: VFC = () => {
	return (
		<div>
			<header>
				<h1 css={pageTtlStyle}>React Hook Form</h1>
			</header>
			<main css={{ margin: "32px" }}>
				<h2 css={formTtlStyle}>form</h2>
				<TestForm />
				<InputMap />
			</main>
			<footer css={footerStyle}>
				<h2>react hook form practice</h2>
			</footer>
		</div>
	);
};

const pageTtlStyle = css({
	fontSize: "32px",
	textAlign: "center",
	color: "#333",
});

const formTtlStyle = css`
	font-size: 24px;
	color: #333;
	text-align: center;
	margin-bottom: 32px;
`;

const footerStyle = css`
	width: 100%;
	height: 8vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	left: 50%;
	bottom: 0;
	transform: translateX(-50%);
	background-color: #333;
	h2 {
		font-size: 16px;
		color: #fff;
	}
`;

export default FormPage;
