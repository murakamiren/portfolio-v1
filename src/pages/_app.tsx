import type { AppProps } from "next/app";
import { Fragment } from "react";
import { GlobalStyles } from "twin.macro";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Fragment>
			<GlobalStyles />
			<Component {...pageProps} />
		</Fragment>
	);
};

export default MyApp;
