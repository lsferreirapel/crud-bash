const { terminal } = require("terminal-kit");

const db = require("../services");

const { input, renderListTable } = require("../components");
const { continueQuestion } = require("../utils");

async function update() {
  const data = db.list();
  await renderListTable(data, "ATUALIZAÇÃO DE USUÁRIO", "magenta");

  const id = await input(
    "Digite o índice do usuario que você deseja atualizar: ",
    {
      autoComplete: data.map((item) => item.id.toString()),
      autoCompleteMenu: true,
    }
  );

  const selectedItem = db.filter("id", Number(id));

  if (selectedItem.length > 0) {
    terminal.clear();
    await renderListTable(selectedItem, "USUÁRIO SELECIONADO", "magenta");

    terminal.magenta.bold("Defina os novos valores");
    const name = await input("\nNovo nome: ");
    const email = await input("\nNovo email: ");
    const age = await input("\nNova idade: ");

    db.update(Number(id), { name, email, age: Number(age) });

    terminal.green.bold("\n\nUsuário atualizado com sucesso!!");
  } else {
    terminal.red.bold("\n\nUsuário não encontrado!!");
  }

  await continueQuestion();
}

module.exports = {
  update,
};
