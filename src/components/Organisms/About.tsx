import { VFC } from "react";
import tw, { css } from "twin.macro";

const About: VFC = () => {
	const content = css`
		${tw`w-screen`}
	`;

	const wrap = css`
		${tw`flex flex-col items-center`}
	`;

	const ttl = css`
		${tw`font-semibold mt-28 dark:text-white`}
		font-size: 2rem;
		font-size: clamp(2rem, 1.35rem + 2.6666666666666665vw, 3.75rem);
	`;
	return (
		<div css={content}>
			<div css={wrap}>
				<h2 css={ttl}>about.</h2>
			</div>
		</div>
	);
};

export default About;
