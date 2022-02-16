import "twin.macro";
import styledImport from "@emotion/styled";
import { css as cssImport } from "@emotion/react";
import { CSSInterpolation } from "@emotion/css";

declare module "twin.macro" {
	const styled: typeof styledImport;
	const css: typeof cssImport;
}

declare module "react" {
	// The css prop
	interface HTMLAttributes<T> extends DOMAttributes<T> {
		css?: CSSInterpolation;
	}
	// The inline svg css prop
	interface SVGProps<T> extends SVGProps<SVGSVGElement> {
		css?: CSSInterpolation;
	}
}
