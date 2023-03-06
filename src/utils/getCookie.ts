export const getCookie = (key: string) => {
  const pairs = document.cookie.split(";");

  const pair = pairs.find((currPair) => {
    const [currKey] = currPair.split("=");
    return currKey === key;
  });

  if (!pair) {
    return undefined;
  }
  const [, value] = pair.split("=");
  return value;
};
