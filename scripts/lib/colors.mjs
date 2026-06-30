// Thin wrapper around Node's built-in `util.styleText` (Node >= 20.12),
// replacing the picocolors dependency. Exposes only the colors used by the
// build scripts. Each helper coerces its argument to a string so it can be
// used with non-string values (counts, etc.) like the previous library.

import { styleText } from "node:util";

const make = (color) => (text) => styleText(color, String(text));

export const cyan = make("cyan");
export const green = make("green");
export const red = make("red");
export const yellow = make("yellow");
export const blue = make("blue");
export const magenta = make("magenta");

// `pc`-shaped default export so call sites can keep the `c.green(x)` form.
export default { cyan, green, red, yellow, blue, magenta };
