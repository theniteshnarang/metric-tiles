export function kebabToCapitalized(text: string) {
  return text
    .replace(/(^|-)(\w)/g, (_, __, letter) => ' ' + letter.toUpperCase())
    .trim();
}

export function capitalizeAnyString(text: string) {
  return text
    .replace(/(^|[\s_\-]+)(\w)/g, (_, __, letter) => ' ' + letter.toUpperCase())
    .trim();
}

export function camelToLowerCase(str: string) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2') // Insert space before uppercase letters
    .toLowerCase(); // Convert to lowercase
}
