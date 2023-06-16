const addDays = require("date-fns/addDays");

function addXDate(days) {
  const start_date = new Date(2020, 07, 22);
  const newDate = addDays(start_date, days);

  const date = newDate.getDate();

  let month = newDate.getMonth() + 1;

  month = `${month < 10 ? "0" : ""}${month}`;

  const year = newDate.getFullYear();

  return `${date}-${month}-${year}`;
}

module.exports = addXDate;
