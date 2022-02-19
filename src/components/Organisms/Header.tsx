import Link from "next/link";
import { VFC } from "react";
import tw, { css } from "twin.macro";

const Header: VFC = () => {
	const nav = css`
		${tw`w-screen absolute top-0 h-[80px]`}
	`;
	const navWrap = css`
		${tw`w-full h-[80px] px-32`}
	`;

	const navList = css`
		${tw`flex h-full gap-16 text-xl items-center justify-end`}
	`;
	return (
		<header css={nav}>
			<nav>
				<div css={navWrap}>
					<ul css={navList}>
						<li>
							<Link href="/">home.</Link>
						</li>
						<li>
							<Link href="/about">about.</Link>
						</li>
						<li>
							<Link href="/works">works.</Link>
						</li>
						<li>
							<Link href="/contact">contact.</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
