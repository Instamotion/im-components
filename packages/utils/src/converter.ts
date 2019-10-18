export const kilowattsToHorsePower = (kilowatts: number) => {
  return Math.round((kilowatts * 1000) / 735.49875);
};
