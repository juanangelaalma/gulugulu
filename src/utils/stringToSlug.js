const stringToSlug = (str, char) => {
  const value = str.toLowerCase().replace(/\s/g, char);
  return value;
}

export default stringToSlug;