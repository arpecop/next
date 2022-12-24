function toSofiaTimeZone(date: Date): Date {
  let sofiaDate = new Date(date);
  if (date.getTimezoneOffset() === 120) {
    return date;
  }
  sofiaDate.setUTCHours(sofiaDate.getUTCHours() + 2);
  return sofiaDate;
}

const convertToTimeago = (past: Date | string): string => {
  if (!(past instanceof Date)) {
    return '';
  }
  const timeDiff =
    toSofiaTimeZone(new Date()).getTime() - toSofiaTimeZone(past).getTime();

  const timeDiffInSeconds = timeDiff / 1000;
  switch (true) {
    case timeDiffInSeconds < 60:
      return `преди ${Math.round(timeDiffInSeconds)} сек.`;
    case timeDiffInSeconds < 3600:
      return timeDiffInSeconds === 60
        ? "преди 1 минута"
        : `преди ${Math.round(timeDiffInSeconds / 60)} мин.`;
    case timeDiffInSeconds < 86400:
      return timeDiffInSeconds === 3600
        ? "преди 1 час"
        : `преди ${Math.round(timeDiffInSeconds / 3600)} часа`;
    default:
      return timeDiffInSeconds === 86400
        ? "преди 1 ден"
        : `преди ${Math.round(timeDiffInSeconds / 86400)} дни`;
  }
};

export { convertToTimeago, toSofiaTimeZone };
