export const shuffleCard = (cards) => {
  if (!cards) {
    return cards;
  }
  const shuffledCard = [...cards].sort(() => Math.random() - 0.5);
  return shuffledCard;
};
