import { VFC } from "react";
import tw, { css } from "twin.macro";

const Bio: VFC = () => {
	const bioText: string[] = [
		"name - 村上 蓮",
		"age - 21",
		"born - 2000/12/13",
		"live - Japan - Osaka",
		"school - ECCコンピュータ専門学校",
		"expected to graduate - 24年度卒",
	];

	const wrap = css`
		${tw`text-mainBlack dark:text-white lg:pl-36 px-8 mb-14`}
		h3 {
			${tw`text-2xl mb-8`}
		}
		ul {
			${tw`flex flex-col gap-2`}
			li {
				${tw`text-sm font-normal`}
			}
		}
	`;
	return (
		<div css={wrap}>
			<h3>bio</h3>
			<ul>
				{bioText.map((txt, i) => (
					<li key={i}>{txt}</li>
				))}
			</ul>
		</div>
	);
};

export default Bio;
