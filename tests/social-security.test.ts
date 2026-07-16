import { describe, expect, test } from "bun:test";
import { shanghaiPolicy2025 } from "../src/data/cities";
import { calculateEmployeeContributions } from "../src/social/security";

describe("employee-side social security and housing fund", () => {
  test("clamps Shanghai salary above the policy upper base", () => {
    const result = calculateEmployeeContributions({
      grossSalary: 45000,
      policy: shanghaiPolicy2025,
      housingFundRate: 0.12,
    });

    expect(result.socialBase).toBe(37302);
    expect(result.housingFundBase).toBe(37302);
    expect(result.total).toBeCloseTo(8392.95, 2);
    expect(result.isSocialCapped).toBe(true);
  });

  test("uses lower base when salary is below the Shanghai social security floor", () => {
    const result = calculateEmployeeContributions({
      grossSalary: 3500,
      policy: shanghaiPolicy2025,
      housingFundRate: 0.12,
    });

    expect(result.socialBase).toBe(7460);
    expect(result.housingFundBase).toBe(3500);
    expect(result.total).toBeCloseTo(1203.3, 2);
    expect(result.isSocialFloored).toBe(true);
  });
});
