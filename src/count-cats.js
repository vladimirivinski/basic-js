module.exports = function countCats(matrix) {
  const res = matrix.flat().filter((word) => word == "^^").length;
  return res;
};

// let catCounter;
// matrix.map((cal1, a) => {
//   cal1.map((cal2, b) => {
//     if (cal2 === "^^") catCounter++;
//   });
// });
// return catCounter;