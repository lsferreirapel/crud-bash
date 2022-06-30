const { terminal } = require("terminal-kit");

const db = require("../services");

const { renderListTable, input } = require("../components");
const { continueQuestion } = require("../utils");

async function remove() {
  const data = db.list();
  await renderListTable(data, "REMOÇÃO DE USUÁRIOS", "red");

  const id = await input(
    "Digite o índice do usuario que você deseja remover: ",
    {
      autoComplete: data.map((item) => item.id.toString()),
      autoCompleteMenu: true,
    }
  );

  terminal.nextLine();

  const removedItem = db.remove(Number(id));
  if (!!removedItem) {
    terminal.red.bold("\n\nUsuário excluido com sucesso!!");
  } else {
    terminal.red.bold("\n\nUsuário não encontrado!!");
  }

  await continueQuestion();
}

module.exports = {
  remove,
};
