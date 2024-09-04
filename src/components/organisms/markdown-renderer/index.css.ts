import { style, globalStyle } from "@vanilla-extract/css";

export const css = style({
	width: "100%",
});
export const blockStyle = style({
	margin: '16px 0',
});
export const h2Style = style({
  fontSize: "24px",
	fontWeight: "400",
})

/**
 * belows are adjustments for whole html remark.js rendered
 */
globalStyle("p img", {
	maxWidth: "100%",
});
