export const countdownDate = (date) => {
  const testDate = new Date(date).getTime();
  const now = new Date().getTime();
  const distance = testDate - now;
  let day = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((distance % (1000 * 60)) / 1000);
  return {
    day: day,
    hour: hour,
    minute: minute,
    second: second,
    distance: distance,
  }
}