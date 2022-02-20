import { VFC } from "react";
import tw, { css } from "twin.macro";
import Title from "~/components/Molecules/Title";

const Works: VFC = () => {
	const wrap = css`
		${tw`w-screen flex flex-col items-center`}
	`;

	const worksWrap = css`
		${tw`w-full grid mt-16`}
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		div {
			${tw`flex flex-col items-center justify-center h-[400px] text-mainBlack dark:text-white hover:cursor-pointer`}
			h3 {
				${tw`text-3xl tracking-widest transition duration-500 ease-out`}
			}
			&:hover h3 {
				${tw`text-primary`}
			}
		}
	`;

	return (
		<div>
			<div css={wrap}>
				<Title ttl="recent works." />
				<div css={worksWrap}>
					<div>
						<h3>MICE</h3>
					</div>
					<div>
						<h3>Refino</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Works;
