export function camelCaseToTitleCase(str) {
  // Handle empty string or non-string input
  if (typeof str !== "string" || str.length === 0) {
    return "";
  }

  // Replace each capital letter with a space followed by the capital letter
  // Then capitalize the first letter of the resulting string
  return str.replace(/([A-Z])/g, " $1").replace(/^./, function (s) {
    return s.toUpperCase();
  });
}
