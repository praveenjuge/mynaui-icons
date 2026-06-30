// Minimal ANSI color helpers for build-script output, replacing the
// picocolors dependency with a tiny zero-dependency implementation.
// Each helper coerces its argument to a string so it can be used with
// non-string values (counts, etc.) like the previous library.
//
// Colors are emitted only when output is a TTY (or FORCE_COLOR is set) and
// NO_COLOR is unset, matching the conventions picocolors followed. This keeps
// CI logs clean and avoids the ExperimentalWarning that `util.styleText`
// prints throughout the Node 20.x LTS line.

const enabled =
  !('NO_COLOR' in process.env) &&
  (process.env.FORCE_COLOR != null || Boolean(process.stdout.isTTY));

const wrap = (open, close) => (text) => {
  const str = String(text);
  return enabled ? `\x1b[${open}m${str}\x1b[${close}m` : str;
};

export const cyan = wrap(36, 39);
export const green = wrap(32, 39);
export const red = wrap(31, 39);
export const yellow = wrap(33, 39);
export const blue = wrap(34, 39);
export const magenta = wrap(35, 39);

// `pc`-shaped default export so call sites can keep the `c.green(x)` form.
export default { cyan, green, red, yellow, blue, magenta };
