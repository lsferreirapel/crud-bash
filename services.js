const { formatString } = require("./utils");

let data = [];

// Add new user on DB
function create(name, email, age) {
  let id = 0;
  data.forEach((item) => {
    if (item.id >= id) id = item.id + 1;
  });

  data.push({ id, name, email, age });
}

// Filter values on db
function filter(field, value) {
  const result = data.filter((item) => {
    // Filter by id
    if (field === "id") {
      if (item.id === value) return item;
      return;
    }

    // If value is a number, filter lowers values
    if (typeof item?.[field] === "number") {
      if (item?.[field] <= Number(value)) return item;
      return;
    }
    // If value is string, filter equals values
    if (new RegExp(formatString(value)).test(formatString(item?.[field])))
      return item;
  });

  return result;
}

// Update user
function update(id, update) {
  const result = data.map((item) => {
    if (item.id === id) return { id, ...update };
    return item;
  });

  data = result;
}

// Remove user by id and return removed
function remove(id) {
  const newArr = data.filter((item) => item.id !== id);
  const removedItem = data.find((item) => item.id === id);
  data = newArr;
  return removedItem;
}

// List all users
function list() {
  return data;
}

module.exports = {
  create,
  remove,
  update,
  filter,
  list,
};
