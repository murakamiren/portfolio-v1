import Link from "next/link";
import { VFC } from "react";
import tw, { css } from "twin.macro";

const Header: VFC = () => {
	const nav = css`
		${tw`w-screen absolute top-0`}
	`;
	const navWrap = css`
		${tw`w-full h-[80px] pl-72`}
	`;

	const ulSty = css`
		${tw`flex h-full items-center`}
		gap: clamp(2rem, -1rem + 3.3333333333333335vw, 3rem);
		li {
			font-size: 1.25rem;
			font-size: clamp(1.25rem, 0.5rem + 0.8333333333333334vw, 1.5rem);
		}
	`;

	return (
		<header css={nav}>
			<nav>
				<div css={navWrap}>
					<ul css={ulSty}>
						<li>
							<Link href="/">home</Link>
						</li>
						<li>
							<Link href="/about">about</Link>
						</li>
						<li>
							<Link href="/">works</Link>
						</li>
						<li>
							<Link href="/">contact</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
