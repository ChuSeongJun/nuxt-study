export const verifyPassword = (plainPassword: string, hash: string) => {
  return plainPassword === hash;
};
