type Loan = {
  amount: number;
  termMonths: number;
  applicantAge: number;
  creditScore: number;
  employmentType: "employed" | "self_employed" | "unemployed";
  hasCollateral: boolean;
  existingDebt: number;
  monthlyIncome: number;
};

// Complexidade ciclomática: ~15. Impossível de testar todos os caminhos.
export function evaluateLoan(loan: Loan): { approved: boolean; reason: string; rate: number } {
  if (loan.applicantAge < 18) {
    return { approved: false, reason: "Applicant must be at least 18", rate: 0 };
  }
  if (loan.amount <= 0) {
    return { approved: false, reason: "Loan amount must be positive", rate: 0 };
  }
  if (loan.employmentType === "unemployed") {
    if (!loan.hasCollateral) {
      return { approved: false, reason: "Unemployed applicants require collateral", rate: 0 };
    }
    if (loan.creditScore < 700) {
      return { approved: false, reason: "Insufficient credit score for unemployed applicant", rate: 0 };
    }
  }
  const debtRatio = loan.existingDebt / loan.monthlyIncome;
  if (debtRatio > 0.5) {
    return { approved: false, reason: "Debt-to-income ratio too high", rate: 0 };
  }
  let rate = 0.12;
  if (loan.creditScore >= 800) rate = 0.07;
  else if (loan.creditScore >= 700) rate = 0.09;
  else if (loan.creditScore >= 600) rate = 0.11;
  else {
    if (!loan.hasCollateral) {
      return { approved: false, reason: "Low credit score requires collateral", rate: 0 };
    }
    rate = 0.15;
  }
  if (loan.employmentType === "self_employed") rate += 0.01;
  if (loan.termMonths > 60) rate += 0.005;
  if (loan.amount > 100000 && !loan.hasCollateral) {
    return { approved: false, reason: "Large loans require collateral", rate: 0 };
  }
  return { approved: true, reason: "Approved", rate };
}
