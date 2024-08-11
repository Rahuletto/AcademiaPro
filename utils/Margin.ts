export function calculateMargin(present: number, total: number) {
  const p_min = 75;
  if ((present / total) * 100 >= p_min) {
    return Math.floor((present - 0.75 * total) / 0.75);
  } else {
    let requiredClassesToAttend = 0;
    while (
      ((present + requiredClassesToAttend) /
        (total + requiredClassesToAttend)) *
        100 <
      p_min
    ) {
      requiredClassesToAttend++;
    }
    return -requiredClassesToAttend;
  }
}
