// Single progress-bar utility shared by the build scripts.
// Returns an object with a `tick()` method; the bar is throttled so it
// repaints at most ~50 times regardless of the total count.

import { cyan, green } from "./colors.mjs";

export const createProgressBar = (total, { label = "", width = 40 } = {}) => {
  let current = 0;
  let lastUpdate = 0;
  const updateInterval = Math.max(1, Math.floor(total / 50));

  const render = () => {
    const ratio = total === 0 ? 1 : current / total;
    const percentage = Math.round(ratio * 100);
    const filled = Math.round(width * ratio);
    const empty = width - filled;
    const bar = green("█".repeat(filled)) + " ".repeat(empty);
    const prefix = label ? `${label} ` : "";

    process.stdout.write(
      `\r${prefix}${cyan("[")}${bar}${cyan("]")} ${percentage}% (${current}/${total})`
    );

    if (current >= total) {
      process.stdout.write("\n");
    }
  };

  return {
    tick: () => {
      current++;
      if (current === total || current - lastUpdate >= updateInterval) {
        lastUpdate = current;
        render();
      }
    },
  };
};
