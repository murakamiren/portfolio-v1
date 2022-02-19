import { VFC } from "react";
import tw, { css } from "twin.macro";
import Title from "~/components/Molecules/Title";
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

const Contact: VFC = () => {
	const wrap = css`
		${tw`w-screen flex flex-col items-center`}
	`;

	const email = css`
		${tw`text-mainBlack dark:text-white text-center text-base mt-16 leading-10 mb-16`}
		span {
			${tw`font-semibold tracking-wider`}
			font-size: 1.5rem;
			font-size: clamp(1.5rem, 0.5714285714285714rem + 3.8095238095238098vw, 4rem);
		}
	`;

	const snsWrap = css`
		${tw`w-full flex flex-col items-center mb-16`}
		h3 {
			${tw`text-mainBlack dark:text-white text-base mb-8`}
		}
		ul {
			${tw`flex justify-center gap-6`}
			li {
				${tw`text-4xl text-mainBlack dark:text-white hover:text-primary transition duration-500 ease-out`}
			}
		}
	`;
	return (
		<div>
			<div css={wrap}>
				<Title ttl="contact." />
				<p css={email}>
					contact me <br />
					<span>renmurakami1213@gmail.com</span>
				</p>
				<div css={snsWrap}>
					<h3>sns</h3>
					<ul>
						<li>
							<a href="https://github.com/murakamiren" target="_blank" rel="noopener noreferrer">
								<AiOutlineGithub />
							</a>
						</li>
						<li>
							<a href="https://twitter.com/blxxmren" target="_blank" rel="noopener noreferrer">
								<AiOutlineTwitter />
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/ren_m12/" target="_blank" rel="noopener noreferrer">
								<AiOutlineInstagram />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Contact;
