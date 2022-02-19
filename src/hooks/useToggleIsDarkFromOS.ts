import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "~/recoil/atoms/isDarkAtom";

export const useToggleIsDarkFromOS = () => {
	const setIsDark = useSetRecoilState(isDarkAtom);

	useEffect(() => {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			setIsDark(true);
		} else {
			setIsDark(false);
		}
	}, []);
};
