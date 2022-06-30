const { terminal } = require("terminal-kit");

function header(title, color = "magenta") {
  const WIDTH = 30;
  const HEADER_PADDING = Math.floor((WIDTH - (title.length + 8)) / 2);

  terminal[color]("=".repeat(30), "\n");
  terminal[color].bold(
    " ".repeat(HEADER_PADDING),
    `--  ${title}  --`,
    " ".repeat(HEADER_PADDING)
  );
  terminal[color]("\n", "=".repeat(30), "\n");
}

module.exports = { header };
