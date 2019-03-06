const shortMonthName = month => {
  const shortNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  return shortNames[month];
};

// may 25 2018
export default date => {
  const value = new Date(date);
  const isDate = value instanceof Date;
  if (!date || !isDate) {
    return "";
  }
  const year = value.getFullYear();
  const month = shortMonthName(value.getMonth());
  const day = value.getDate();
  return `${month} ${day}, ${year}`;
};
