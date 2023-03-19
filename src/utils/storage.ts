export const setStorageByKey = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorageByKey = (key: string) => JSON.parse(localStorage.getItem(key) || '');
