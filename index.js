const { terminal } = require("terminal-kit");

const { create, list, filter, remove, update } = require("./views");

const { header } = require("./components");
const { exit } = require("./utils");

terminal.on("key", (name, matches, data) => {
  // Detect CTRL-C and exit 'manually'
  if (name === "CTRL_C") {
    exit();
  }
});

async function run() {
  terminal.clear();
  while (true) {
    header("CRUD DE USUARIOS");

    const options = [
      "a. Criar usuário",
      "b. Listar usuários",
      "c. Pesquisar",
      "d. Atualizar usuário",
      "e. Deletar usuário",
      "f. Finalizar",
    ];

    const actions = {
      a: create,
      b: list,
      c: filter,
      d: update,
      e: remove,
      f: exit,
    };

    const response = await terminal.singleColumnMenu(options).promise;

    terminal.clear();
    await actions[response.selectedText[0]]();
  }
}

run();
