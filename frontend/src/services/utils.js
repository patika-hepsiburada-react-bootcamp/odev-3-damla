export const toArray = (value) => {
  if (!value) return false;

  value = value?.split(",");
  return value.map((val) => Number(val));
};
