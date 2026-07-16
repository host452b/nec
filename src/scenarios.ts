import {
  calculateCumulativeWithholding,
  calculateYearEndBonusTax,
  netYearEndBonus,
  roundCurrency,
} from "./tax/income-tax";
import { shanghaiPolicy2025 } from "./data/cities";
import { calculateEmployeeContributions } from "./social/security";

export function buildScenarioReport(): string {
  const bonus36000 = {
    gross: 36_000,
    tax: calculateYearEndBonusTax(36_000),
    net: netYearEndBonus(36_000),
  };
  const bonus36001 = {
    gross: 36_001,
    tax: calculateYearEndBonusTax(36_001),
    net: netYearEndBonus(36_001),
  };

  const withholding = calculateCumulativeWithholding({
    monthlyGrossSalary: 30_000,
    monthlyDeductions: 4_500,
    months: 12,
  });

  const salaries = [8_000, 25_000, 45_000].map((grossSalary) => ({
    grossSalary,
    contributions: calculateEmployeeContributions({
      grossSalary,
      policy: shanghaiPolicy2025,
      housingFundRate: 0.12,
    }),
  }));

  const lowSalary = calculateEmployeeContributions({
    grossSalary: 3_500,
    policy: shanghaiPolicy2025,
    housingFundRate: 0.12,
  });

  return [
    "NEC Tax Test Harness",
    "",
    "1. Year-end bonus true discontinuity",
    `   36000 tax=${bonus36000.tax}, net=${bonus36000.net}`,
    `   36001 tax=${bonus36001.tax}, net=${bonus36001.net}`,
    `   Net loss for one extra yuan=${roundCurrency(bonus36000.net - bonus36001.net)}`,
    "",
    "2. Cumulative withholding for monthly gross 30000, deductions 4500",
    ...withholding.map(
      (row) =>
        `   M${String(row.month).padStart(2, "0")} tax=${row.taxWithheld}, net=${row.netSalary}, cumulativeTaxable=${row.cumulativeTaxableIncome}`,
    ),
    "",
    `3. Shanghai policy snapshot ${shanghaiPolicy2025.effectiveFrom} to ${shanghaiPolicy2025.effectiveTo}`,
    ...salaries.map(
      ({ grossSalary, contributions }) =>
        `   gross=${grossSalary}, total=${contributions.total}, socialBase=${contributions.socialBase}, housingBase=${contributions.housingFundBase}, socialCapped=${contributions.isSocialCapped}`,
    ),
    "",
    "4. Low-income social base floor example",
    `   gross=3500, total=${lowSalary.total}, socialBase=${lowSalary.socialBase}, housingBase=${lowSalary.housingFundBase}, socialFloored=${lowSalary.isSocialFloored}`,
  ].join("\n");
}
