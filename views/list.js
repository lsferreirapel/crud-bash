const db = require("../services");

const { renderListTable } = require("../components");
const { continueQuestion } = require("../utils");

async function list() {
  const data = db.list();
  await renderListTable(data);
  await continueQuestion();
}

module.exports = {
  list,
};
