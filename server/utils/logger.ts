/* eslint-disable no-console */
export const info = (...params: unknown[]): void => {
  console.log(...params);
};

export const error = (...params: unknown[]): void => {
  console.error(...params);
};

export default { info, error };
