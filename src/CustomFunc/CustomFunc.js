const formatCurrency = (data) => {
  if (data === null) return "";
  if (data === "") return "0đ";
  if (data) return data.toLocaleString().replaceAll(",", ".") + "đ";
};

export { formatCurrency };
