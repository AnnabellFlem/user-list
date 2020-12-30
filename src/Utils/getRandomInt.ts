export const getRandomNumber = (min: number, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
