export const setStorageByKey = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorageByKey = (key: string) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};
