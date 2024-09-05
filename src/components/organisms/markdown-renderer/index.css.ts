import { style, globalStyle } from "@vanilla-extract/css";

export const css = style({
	width: "100%",
});
export const blockStyle = style({
	margin: "16px 0",
});
export const h2Style = style({
	fontSize: "24px",
	fontWeight: "400",
});

/**
 * belows are adjustments for whole html remark.js rendered
 */
export const articleRoot = style({});
globalStyle(`${articleRoot} > *`, {
	marginTop: "24px",
});
globalStyle("p img", {
	maxWidth: "100%",
});
for (let i = 1; i <= 5; i++) {
	const tag = `h${i}`;
	const fontWeight = 500 - (i / 2) * 100;
	const fontSize = 28 - (i - 1) * 3;
	globalStyle(tag, {
		fontWeight,
		fontSize,
	});
}
