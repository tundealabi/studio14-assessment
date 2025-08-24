export const getImageUrl = (name: string) => {
  return new URL(`/src/assets/${name}`, import.meta.url).href;
};

export const pxToRem = (px: number, baseFontSize: number = 16) => {
  const remValue = px / baseFontSize;
  return `${Math.round(remValue * 1000) / 1000}rem`;
};
