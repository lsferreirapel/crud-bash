const { terminal } = require("terminal-kit");
const { continueQuestion } = require("../utils");

async function renderListTable(
  data,
  title = "LISTAGEM DE USUÁRIOS",
  color = "blue"
) {
  const WIDTH = 50;
  const HEADER_PADDING = Math.floor((WIDTH - (title.length + 8)) / 2);

  terminal[color]("=".repeat(WIDTH), "\n");
  terminal[color].bold(
    " ".repeat(HEADER_PADDING),
    `--  ${title}  --`,
    " ".repeat(HEADER_PADDING),
    "\n"
  );
  terminal[color]("=".repeat(WIDTH), "\n");
  terminal.table(
    [
      ["Índice  ", "Nome", "Email", "Idade"],
      ...data?.map((user) => [`  ${user.id}`, user.name, user.email, user.age]),
    ],
    {
      hasBorder: true,
      contentHasMarkup: true,
      borderAttr: { color: color },
      borderChars: "lightRounded",
      firstColumnTextAttr: { width: 20 },
      textAttr: { bgColor: "default" },
      width: WIDTH,
      fit: true,
    }
  );
}

module.exports = {
  renderListTable,
};
