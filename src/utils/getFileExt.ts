export const getFileExt = (fileName: string) => {
  const parts = fileName.split(".");

  if (parts.length === 1 || (parts[0] === "" && parts.length === 2)) {
    return undefined;
  }
  return parts.pop()?.toLowerCase();
};
