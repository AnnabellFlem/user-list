export const getGender = (userId: number) =>
  userId % 2 === 0 ? 'men' : 'women'
