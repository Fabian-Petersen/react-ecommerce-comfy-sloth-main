export const formatPrice = (number) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "ZAR",
  }).format(number / 100);
};

export const getUniqueValues = () => {};
