export default dateISOString => {
  const dateObject = new Date(dateISOString);
  const hour = dateObject.getHours();
  const minute = dateObject.getMinutes();

  let ethiopianHour;
  let remark; // eslint-disable-line

  if (hour >= 0 && hour <= 6) {
    ethiopianHour = hour + 6;
    if (hour === 6) {
      remark = "ከጠዋቱ";
    } else {
      remark = "ከሌሊቱ";
    }
  } else if (hour >= 7 && hour <= 18) {
    ethiopianHour = hour - 6;

    if (hour === 18) {
      remark = "ከምሽቱ";
    } else if (hour >= 13) {
      remark = "ከሰዓቱ";
    } else {
      remark = "ከጠዋቱ";
    }
  } else if (hour >= 19 && hour <= 23) {
    ethiopianHour = hour - 6 - 6 - 6;
    remark = "ከምሽቱ";
  }

  const formattedHour =
    ethiopianHour >= 10 ? `${ethiopianHour}` : `0${ethiopianHour}`;
  const formattedMinute = minute >= 10 ? `${minute}` : `0${minute}`;

  return `${formattedHour}:${formattedMinute}`;
};
