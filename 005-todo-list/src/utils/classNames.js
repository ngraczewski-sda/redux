export const classNames = (...classNames) =>
  classNames.filter((className) => !!className).join(" ");
