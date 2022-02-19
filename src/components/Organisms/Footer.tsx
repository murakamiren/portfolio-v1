import { VFC } from "react";
import tw, { css } from "twin.macro";

const Footer: VFC = () => {
	const wrap = css`
		${tw`w-screen py-6`}
		p {
			${tw`text-center`}
			small {
				${tw`text-sm`}
			}
		}
	`;
	return (
		<footer>
			<div css={wrap}>
				<p>
					<small>&copy; just simplify - ren murakami</small>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
