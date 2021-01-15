module.exports = function createDreamTeam(members) {
  const result = [];
  if (Array.isArray(members)) {
    members.forEach((element) => {
      if (typeof element === "string") {
        result.push(element.trim().charAt(0).toUpperCase());
      }
    });
    return result.sort().join("");
  } else {
    return false;
  }
};
