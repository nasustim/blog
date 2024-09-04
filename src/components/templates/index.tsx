import "@acab/reset.css";

import type { FC, ReactNode } from "react";
import { containerCss, headerStyle, innerCss } from "./index.css";
import { Header } from "@/components/organisms/header";
import { themeClass } from "@/style.css";
import { clsx } from "clsx";

export const Template: FC<{
	children: ReactNode;
}> = ({ children }) => (
	<div className={clsx(themeClass, containerCss)}>
		<div className={headerStyle}>
			<div className={innerCss}>
				<Header />
			</div>
		</div>
		<div className={innerCss}>{children}</div>
	</div>
);
