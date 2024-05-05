export function timeConvert(time: string) {
  let convertedTime: (string | number)[] = time
    .toString()
    .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (convertedTime.length > 1) {
    convertedTime = convertedTime.slice(1);
    convertedTime[0] = +convertedTime[0] % 12 || 12;
  }
  return convertedTime.join('');
}
