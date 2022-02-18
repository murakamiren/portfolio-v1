import { VFC } from "react";
import tw, { css } from "twin.macro";

const MainVisual: VFC = () => {
	const mvWrap = css`
		${tw`w-screen h-screen pt-[80px] bg-red-300`}
		p {
			${tw`place-items-center`}
		}
	`;
	return (
		<div css={mvWrap}>
			<p>hello</p>
		</div>
	);
};

export default MainVisual;
