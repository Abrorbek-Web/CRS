const KEY_FOR_REFRESH_TOKEN = "refresh_token";
const KEY_FOR_ACCESS_TOKEN = "access_token";

const saveAccessToken = (value: string): void => {
  localStorage.setItem(KEY_FOR_ACCESS_TOKEN, value);
};

const saveRefreshToken = (value: string): void => {
  localStorage.setItem(KEY_FOR_REFRESH_TOKEN, value);
};

const deleteRefreshToken = (): void => {
  localStorage.removeItem(KEY_FOR_REFRESH_TOKEN);
};

const deleteAccessToken = (): void => {
  localStorage.removeItem(KEY_FOR_ACCESS_TOKEN);
};

const getAccessToken = (): string | null => {
  return localStorage.getItem(KEY_FOR_ACCESS_TOKEN);
};

const getRefreshToken = (): string | null => {
  return localStorage.getItem(KEY_FOR_REFRESH_TOKEN);
};

export {
  saveAccessToken,
  getAccessToken,
  saveRefreshToken,
  getRefreshToken,
  deleteAccessToken,
  deleteRefreshToken,
};
