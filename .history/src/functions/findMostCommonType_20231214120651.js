export const findMostCommonType = (typeOccurrences) => {
  return Object.entries(typeOccurrences).sort(
    ([typeA, numberOfOccurrencesA], [typeB, numberOfOccurrencesB]) =>
      numberOfOccurrencesB - numberOfOccurrencesA
  )[0][0];
};
