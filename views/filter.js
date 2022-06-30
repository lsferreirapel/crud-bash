const { terminal } = require("terminal-kit");

const db = require("../services");

const { header, renderListTable, input } = require("../components");
const { continueQuestion, loading, formatString } = require("../utils");

async function filter() {
  header("FILTRAGEM DE USUÁRIOS", "yellow");

  const options = ["Nome", "Email", "Idade"];
  const fields = ["name", "email", "age"];

  terminal.yellow.bold("Selecione o campo de procura\n");
  const response = await terminal.singleLineMenu(options).promise;

  const field = fields[response.selectedIndex];

  const search = await input(
    `\n\nPesquisa por ${formatString(response.selectedText)}: `
  );
  terminal.nextLine();

  await loading();
  terminal.clear();

  const result = db.filter(field, search);

  await renderListTable(result, "USUÁRIOS ENCONTRADOS", "yellow");
  await continueQuestion();
}

module.exports = {
  filter,
};
