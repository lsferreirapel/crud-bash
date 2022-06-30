const { terminal } = require("terminal-kit");

function exit() {
  terminal.bold.red("\nFinalizando...\n");
  process.exit();
}

async function continueQuestion() {
  terminal.green(
    "\n\nPressione ENTER para continuar...\n^Rou CTRL+C para sair\n"
  );

  const response = await terminal.yesOrNo({ yes: ["ENTER"], no: ["n"] })
    .promise;
  if (!response) continueQuestion();
  else terminal.clear();
}

function formatString(value) {
  return value?.toString().trim().toLowerCase();
}

async function loading() {
  return await new Promise(async (resolve) => {
    terminal.nextLine();
    const spinner = await terminal.spinner();
    terminal.yellow.bold(" Loading... ");

    setTimeout(() => {
      spinner.hide();
      resolve();
    }, 1000);
  });
}

module.exports = {
  exit,
  continueQuestion,
  formatString,
  loading,
};
