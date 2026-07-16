import { describe, expect, test } from "bun:test";
import {
  calculateCumulativeWithholding,
  calculateYearEndBonusTax,
  netYearEndBonus,
} from "../src/tax/income-tax";

describe("year-end bonus separate taxation", () => {
  test("has a true discontinuity at 36000 to 36001", () => {
    expect(calculateYearEndBonusTax(36000)).toBe(1080);
    expect(calculateYearEndBonusTax(36001)).toBe(3390.1);
    expect(netYearEndBonus(36000)).toBe(34920);
    expect(netYearEndBonus(36001)).toBe(32610.9);
    expect(netYearEndBonus(36000) - netYearEndBonus(36001)).toBeCloseTo(2309.1, 2);
  });
});

describe("cumulative withholding", () => {
  test("simulates fixed monthly salary with changing monthly withholding", () => {
    const result = calculateCumulativeWithholding({
      monthlyGrossSalary: 30000,
      monthlyDeductions: 4500,
      months: 12,
    });

    expect(result.map((month) => month.taxWithheld)).toEqual([
      615, 965, 2050, 2050, 2050, 2050, 2050, 4050, 4100, 4100, 4100, 4100,
    ]);
    expect(result[0]?.netSalary).toBe(24885);
    expect(result[11]?.netSalary).toBe(21400);
  });
});
