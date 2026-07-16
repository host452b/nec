import type { CityContributionPolicy } from "../social/security";

export const shanghaiPolicy2025: CityContributionPolicy = {
  city: "Shanghai",
  label: "Shanghai 2025 social year policy snapshot",
  effectiveFrom: "2025-07-01",
  effectiveTo: "2026-06-30",
  socialBase: {
    lower: 7_460,
    upper: 37_302,
  },
  housingFundBase: {
    lower: 2_740,
    upper: 37_302,
  },
  employeeRates: {
    pension: 0.08,
    medical: 0.02,
    unemployment: 0.005,
  },
};
