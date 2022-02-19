import { VFC } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import tw, { css } from "twin.macro";
import { scrollTop } from "~/utils/scrollTop";

const ScrollToTopIcon: VFC = () => {
	const wrap = css`
		${tw`fixed bottom-8 right-8 text-mainBlack dark:text-white text-5xl cursor-pointer transition duration-500 ease-out hover:text-primary hover:-translate-y-3`}
	`;
	return (
		<div css={wrap} onClick={scrollTop}>
			<IoMdArrowDropup />
		</div>
	);
};

export default ScrollToTopIcon;
