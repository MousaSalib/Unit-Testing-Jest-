function validateTheName(name) {
  if (name === undefined) {
    name = "Unknown";
  }
  if ((name.startsWith = " " || name.endsWith(" "))) {
    name = name.trim();
  }
  if (name.length > 12) {
    name = name.substring(0, 12);
  }
  if (name.startsWith("_")) {
    name = name.substring(1);
  }
  return name;
}

module.exports = validateTheName;
