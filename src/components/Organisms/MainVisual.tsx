import { VFC } from "react";
import tw, { css } from "twin.macro";

const MainVisual: VFC = () => {
	const mvWrap = css`
		${tw`w-screen h-screen flex flex-col justify-center items-center`}
		h1 {
			${tw`font-semibold text-primary letter-spacing[0.12em]`}
			font-size: 3rem;
			font-size: clamp(3rem, 1.8857142857142857rem + 4.571428571428571vw, 6rem);
		}
	`;
	return (
		<div css={mvWrap}>
			<h1>just simplify.</h1>
		</div>
	);
};

export default MainVisual;
