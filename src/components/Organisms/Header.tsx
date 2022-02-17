import Link from "next/link";
import { VFC } from "react";
import tw, { css } from "twin.macro";

const Header: VFC = () => {
	const navWrap = css`
		${tw`w-full h-[80px] pl-72`}
	`;

	const ulSty = css`
		${tw`flex h-full gap-8 items-center`}
		li {
			${tw`text-xl`}
		}
	`;

	return (
		<header>
			<nav>
				<div css={navWrap}>
					<ul css={ulSty}>
						<li>
							<Link href="/">about</Link>
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
