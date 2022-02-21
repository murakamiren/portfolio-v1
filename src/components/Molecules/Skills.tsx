import { VFC } from "react";
import tw, { css } from "twin.macro";
import {
	SiReact,
	SiNextdotjs,
	SiJavascript,
	SiTypescript,
	SiTailwindcss,
	SiNodedotjs,
	SiFirebase,
	SiFlutter,
} from "react-icons/si";

const Skills: VFC = () => {
	const wrap = css`
		${tw`text-mainBlack dark:text-white lg:pl-36 px-8`}
		h3 {
			${tw`text-2xl mb-8`}
		}
		ul {
			${tw`flex gap-4`}
			li {
				${tw`text-2xl text-mainBlack dark:text-white`}
			}
		}
	`;
	return (
		<div css={wrap}>
			<h3>skills</h3>
			<ul>
				<li>
					<SiReact />
				</li>
				<li>
					<SiNextdotjs />
				</li>
				<li>
					<SiJavascript />
				</li>
				<li>
					<SiTypescript />
				</li>
				<li>
					<SiNodedotjs />
				</li>
				<li>
					<SiTailwindcss />
				</li>
				<li>
					<SiFirebase />
				</li>
				<li>
					<SiFlutter />
				</li>
			</ul>
		</div>
	);
};

export default Skills;
