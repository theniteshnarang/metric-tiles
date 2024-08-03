export const roundANumber = (n: number) =>
  Math.round((n + Number.EPSILON) * 100) / 100;

export const formatANumber = (number: number): string => {
  if (number >= 1e9) {
    return (number / 1e9).toFixed(2) + 'B'; // Billions
  } else if (number >= 1e6) {
    return (number / 1e6).toFixed(2) + 'M'; // Millions
  } else if (number >= 1e3) {
    return (number / 1e3).toFixed(2) + 'K'; // Thousands
  } else {
    return number.toString(); // Less than 1000
  }
};
