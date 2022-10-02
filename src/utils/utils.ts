export function convertHoursStringToMinutes(hoursString: string) {
  const [hours, minutes] = hoursString.split(':').map(Number);

  return (hours * 60) + minutes;
}

export function convertMinutesToHourString(minutesAmount: number) {
  const hours = Math.floor(minutesAmount / 60);
  const minutes = minutesAmount % 60;

  return `${String(hours).padStart(2, '0')}:${String(minutes).padEnd(2, '0')}`;
}