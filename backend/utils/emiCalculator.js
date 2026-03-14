export const calculateEMI = (principal, tenure, interestRate) => {
  const monthlyRate = interestRate / 12 / 100;

  if (interestRate === 0) {
    return Math.round(principal / tenure);
  }

  const emi =
    (principal *
      monthlyRate *
      Math.pow(1 + monthlyRate, tenure)) /
    (Math.pow(1 + monthlyRate, tenure) - 1);

  return Math.round(emi);
};