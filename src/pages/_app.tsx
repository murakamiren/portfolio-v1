import type { AppProps } from "next/app";
import { Fragment } from "react";
import { RecoilRoot } from "recoil";
import { GlobalStyles } from "twin.macro";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Fragment>
			<RecoilRoot>
				<GlobalStyles />
				<Component {...pageProps} />
			</RecoilRoot>
		</Fragment>
	);
};

export default MyApp;
