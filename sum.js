const theSum = (...numbers) => {
  return numbers.reduce((PV, CV) => PV + CV, 0);
};

module.exports = theSum;
