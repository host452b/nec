export type TaxBracket = {
  upper: number;
  rate: number;
  quickDeduction: number;
};

export type CumulativeWithholdingInput = {
  monthlyGrossSalary: number;
  monthlyDeductions: number;
  months?: number;
  monthlyBasicDeduction?: number;
};

export type MonthlyWithholding = {
  month: number;
  cumulativeTaxableIncome: number;
  cumulativeTaxDue: number;
  taxWithheld: number;
  netSalary: number;
};

export const annualComprehensiveTaxBrackets: TaxBracket[] = [
  { upper: 36_000, rate: 0.03, quickDeduction: 0 },
  { upper: 144_000, rate: 0.1, quickDeduction: 2_520 },
  { upper: 300_000, rate: 0.2, quickDeduction: 16_920 },
  { upper: 420_000, rate: 0.25, quickDeduction: 31_920 },
  { upper: 660_000, rate: 0.3, quickDeduction: 52_920 },
  { upper: 960_000, rate: 0.35, quickDeduction: 85_920 },
  { upper: Number.POSITIVE_INFINITY, rate: 0.45, quickDeduction: 181_920 },
];

export const yearEndBonusMonthlyTaxBrackets: TaxBracket[] = [
  { upper: 3_000, rate: 0.03, quickDeduction: 0 },
  { upper: 12_000, rate: 0.1, quickDeduction: 210 },
  { upper: 25_000, rate: 0.2, quickDeduction: 1_410 },
  { upper: 35_000, rate: 0.25, quickDeduction: 2_660 },
  { upper: 55_000, rate: 0.3, quickDeduction: 4_410 },
  { upper: 80_000, rate: 0.35, quickDeduction: 7_160 },
  { upper: Number.POSITIVE_INFINITY, rate: 0.45, quickDeduction: 15_160 },
];

export function calculateProgressiveTax(taxableIncome: number, brackets: TaxBracket[]): number {
  if (taxableIncome <= 0) {
    return 0;
  }

  const bracket = brackets.find((candidate) => taxableIncome <= candidate.upper);
  if (!bracket) {
    throw new Error("No tax bracket found for taxable income.");
  }

  return roundCurrency(taxableIncome * bracket.rate - bracket.quickDeduction);
}

export function calculateAnnualComprehensiveTax(taxableIncome: number): number {
  return calculateProgressiveTax(taxableIncome, annualComprehensiveTaxBrackets);
}

export function calculateYearEndBonusTax(bonus: number): number {
  if (bonus <= 0) {
    return 0;
  }

  const monthlyEquivalent = bonus / 12;
  const bracket = yearEndBonusMonthlyTaxBrackets.find(
    (candidate) => monthlyEquivalent <= candidate.upper,
  );

  if (!bracket) {
    throw new Error("No year-end bonus tax bracket found.");
  }

  return roundCurrency(bonus * bracket.rate - bracket.quickDeduction);
}

export function netYearEndBonus(bonus: number): number {
  return roundCurrency(bonus - calculateYearEndBonusTax(bonus));
}

export function calculateCumulativeWithholding(
  input: CumulativeWithholdingInput,
): MonthlyWithholding[] {
  const months = input.months ?? 12;
  const monthlyBasicDeduction = input.monthlyBasicDeduction ?? 5_000;
  const rows: MonthlyWithholding[] = [];
  let previousCumulativeTaxDue = 0;

  for (let month = 1; month <= months; month += 1) {
    const cumulativeTaxableIncome = Math.max(
      0,
      (input.monthlyGrossSalary - input.monthlyDeductions - monthlyBasicDeduction) * month,
    );
    const cumulativeTaxDue = calculateAnnualComprehensiveTax(cumulativeTaxableIncome);
    const taxWithheld = roundCurrency(cumulativeTaxDue - previousCumulativeTaxDue);
    const netSalary = roundCurrency(input.monthlyGrossSalary - input.monthlyDeductions - taxWithheld);

    rows.push({
      month,
      cumulativeTaxableIncome: roundCurrency(cumulativeTaxableIncome),
      cumulativeTaxDue,
      taxWithheld,
      netSalary,
    });

    previousCumulativeTaxDue = cumulativeTaxDue;
  }

  return rows;
}

export function roundCurrency(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}
