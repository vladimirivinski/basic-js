const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  throw new CustomError("Not implemented");

  let catCounter = 0; // объявляем переменную для счетчика
  matrix.map((cal1, val) => {
    // проходим по данному в условии массиву и вызываем
    cal1.map((cal2, val) => {
      // map  в получунном callback с условием, если значение
      if (cal2 === "^^") catCounter++; // равно, +1 к счетчику
    });
  });
  return catCounter;
};
