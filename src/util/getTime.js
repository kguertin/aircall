export function getTime(dateString) {
  const date = new Date(dateString);
  const formattedDate = `${date.getHours()}:${date.getUTCMinutes()} ${
    date.getUTCHours() > 12 ? 'PM' : 'AM'
  }`;

  return formattedDate;
}
