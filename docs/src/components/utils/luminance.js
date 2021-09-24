/**
 * https://stackoverflow.com/a/9733420/3695983
 * https://www.w3.org/WAI/GL/wiki/Relative_luminance
 */
const luminance = (r, g, b) => {
	var a = [r, g, b].map(function (v) {
		v /= 255;
		return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
	});
	return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

export default luminance;
