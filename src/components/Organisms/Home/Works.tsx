import { VFC } from "react";
import tw, { css } from "twin.macro";
import Title from "~/components/Molecules/Title";

const Works: VFC = () => {
	const wrap = css`
		${tw`w-screen flex flex-col items-center`}
	`;
	return (
		<div>
			<div css={wrap}>
				<Title ttl="works." />
			</div>
		</div>
	);
};

export default Works;
