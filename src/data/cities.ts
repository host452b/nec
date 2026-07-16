import type { CityContributionPolicy } from "../social/security";

/**
 * 上海 2025 年度社保及公积金政策 (参考用户提供)
 * 有效期：2025-07-01 至 2026-06-30
 */
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

/**
 * 北京 2025 年度社保及公积金政策
 * 有效期：社保自 2025-07-01 起，公积金自 2025-09-01 起
 * 数据来源：北京市人社局、北京住房公积金管理中心
 */
export const beijingPolicy2025: CityContributionPolicy = {
  city: "Beijing",
  label: "Beijing 2025 social year policy snapshot",
  effectiveFrom: "2025-07-01",
  effectiveTo: "2026-06-30",
  socialBase: {
    lower: 7_162,
    upper: 35_811,
  },
  housingFundBase: {
    lower: 2_540, // 2025年9月1日起调整为2540元
    upper: 35_811,
  },
  employeeRates: {
    pension: 0.08,
    medical: 0.02, // 2% + 3元大病互助（通常计入个人缴费）
    unemployment: 0.005,
  },
};

/**
 * 天津 2025 年度社保及公积金政策
 * 有效期：2025-07-01 至 2026-06-30 (公积金自7月起，社保通常同步)
 * 数据来源：天津市人社局、天津市住房公积金管理中心
 */
export const tianjinPolicy2025: CityContributionPolicy = {
  city: "Tianjin",
  label: "Tianjin 2025 social year policy snapshot",
  effectiveFrom: "2025-07-01",
  effectiveTo: "2026-06-30",
  socialBase: {
    lower: 5_124,
    upper: 25_620,
  },
  housingFundBase: {
    lower: 2_320,
    upper: 27_861,
  },
  employeeRates: {
    pension: 0.08,
    medical: 0.02,
    unemployment: 0.005,
  },
};

/**
 * 重庆 2025 年度社保及公积金政策
 * 有效期：2025-01-01 至 2025-12-31 (重庆政策通常按自然年调整)
 * 数据来源：重庆市人社局、重庆市住房公积金管理中心
 */
export const chongqingPolicy2025: CityContributionPolicy = {
  city: "Chongqing",
  label: "Chongqing 2025 social year policy snapshot",
  effectiveFrom: "2025-01-01",
  effectiveTo: "2025-12-31",
  socialBase: {
    lower: 4_404,
    upper: 22_017,
  },
  housingFundBase: {
    lower: 2_330,
    upper: 30_318,
  },
  employeeRates: {
    pension: 0.08,
    medical: 0.02,
    unemployment: 0.005,
  },
};
