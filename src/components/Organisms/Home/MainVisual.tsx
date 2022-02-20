import { VFC } from "react";
import tw, { css } from "twin.macro";

const MainVisual: VFC = () => {
	const mvWrap = css`
		${tw`w-screen h-screen flex flex-col justify-center items-center`}
		h1 {
			${tw`font-semibold text-primary letter-spacing[0.12em]`}
			font-size: 1.5rem;
			font-size: clamp(1.5rem, 0.9428571428571428rem + 2.2857142857142856vw, 3rem);
			span {
				${tw`text-mainBlack dark:text-white`}
			}
		}
	`;
	return (
		<div css={mvWrap}>
			<h1>
				<span>just</span> simplify.
			</h1>
		</div>
	);
};

export default MainVisual;
