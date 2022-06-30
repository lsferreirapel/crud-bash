const { terminal } = require("terminal-kit");

const db = require("../services");

const { header, input } = require("../components");
const { continueQuestion } = require("../utils");

async function create() {
  header("CRIAÇÃO DE USUÁRIO", "green");

  const name = await input("Digite o seu nome: ");

  const email = await input("\nDigite o seu email: ");

  const age = await input("\nDigite o sua idade: ");

  db.create(name, email, Number(age));

  terminal.green.bold("\n\nUsuário criado com sucesso!!");
  await continueQuestion();
}

module.exports = {
  create,
};
