import { roundCurrency } from "../tax/income-tax";

export type CityContributionPolicy = {
  city: string;
  label: string;
  effectiveFrom: string;
  effectiveTo: string;
  socialBase: {
    lower: number;
    upper: number;
  };
  housingFundBase: {
    lower: number;
    upper: number;
  };
  employeeRates: {
    pension: number;
    medical: number;
    unemployment: number;
  };
};

export type EmployeeContributionInput = {
  grossSalary: number;
  policy: CityContributionPolicy;
  housingFundRate: number;
};

export type EmployeeContributionResult = {
  socialBase: number;
  housingFundBase: number;
  pension: number;
  medical: number;
  unemployment: number;
  housingFund: number;
  socialTotal: number;
  total: number;
  isSocialFloored: boolean;
  isSocialCapped: boolean;
  isHousingFundFloored: boolean;
  isHousingFundCapped: boolean;
};

export function calculateEmployeeContributions(
  input: EmployeeContributionInput,
): EmployeeContributionResult {
  if (input.housingFundRate < 0 || input.housingFundRate > 0.12) {
    throw new Error("Housing fund rate must be between 0 and 0.12.");
  }

  const socialBase = clamp(
    input.grossSalary,
    input.policy.socialBase.lower,
    input.policy.socialBase.upper,
  );
  const housingFundBase = clamp(
    input.grossSalary,
    input.policy.housingFundBase.lower,
    input.policy.housingFundBase.upper,
  );

  const pension = roundCurrency(socialBase * input.policy.employeeRates.pension);
  const medical = roundCurrency(socialBase * input.policy.employeeRates.medical);
  const unemployment = roundCurrency(socialBase * input.policy.employeeRates.unemployment);
  const housingFund = roundCurrency(housingFundBase * input.housingFundRate);
  const socialTotal = roundCurrency(pension + medical + unemployment);

  return {
    socialBase,
    housingFundBase,
    pension,
    medical,
    unemployment,
    housingFund,
    socialTotal,
    total: roundCurrency(socialTotal + housingFund),
    isSocialFloored: input.grossSalary < input.policy.socialBase.lower,
    isSocialCapped: input.grossSalary > input.policy.socialBase.upper,
    isHousingFundFloored: input.grossSalary < input.policy.housingFundBase.lower,
    isHousingFundCapped: input.grossSalary > input.policy.housingFundBase.upper,
  };
}

function clamp(value: number, lower: number, upper: number): number {
  return Math.min(Math.max(value, lower), upper);
}
