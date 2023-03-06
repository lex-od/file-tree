const oneDay = 86400; // sec

export const setCookie = (key: string, value: string) => {
  document.cookie = `${key}=${value}; max-age=${oneDay}`;
};
