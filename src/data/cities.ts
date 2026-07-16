import type { CityContributionPolicy } from "../social/security";

// ==========================================
// 1. 直辖市 (Direct-controlled Municipalities)
// ==========================================

export const beijingPolicy2025: CityContributionPolicy = {
  city: "Beijing",
  label: "Beijing 2025 social year policy snapshot",
  effectiveFrom: "2025-07-01",
  effectiveTo: "2026-06-30",
  socialBase: { lower: 7162, upper: 35811 },
  housingFundBase: { lower: 2540, upper: 35811 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.005 },
};

export const shanghaiPolicy2025: CityContributionPolicy = {
  city: "Shanghai",
  label: "Shanghai 2025 social year policy snapshot",
  effectiveFrom: "2025-07-01",
  effectiveTo: "2026-06-30",
  socialBase: { lower: 7460, upper: 37302 },
  housingFundBase: { lower: 2740, upper: 37302 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.005 },
};

export const tianjinPolicy2025: CityContributionPolicy = {
  city: "Tianjin",
  label: "Tianjin 2025 social year policy snapshot",
  effectiveFrom: "2025-07-01",
  effectiveTo: "2026-06-30",
  socialBase: { lower: 5124, upper: 25620 },
  housingFundBase: { lower: 2320, upper: 27861 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.005 },
};

export const chongqingPolicy2025: CityContributionPolicy = {
  city: "Chongqing",
  label: "Chongqing 2025 social year policy snapshot",
  effectiveFrom: "2025-01-01",
  effectiveTo: "2025-12-31",
  socialBase: { lower: 4404, upper: 22017 },
  housingFundBase: { lower: 2330, upper: 30318 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.005 },
};

// ==========================================
// 2. 华东地区 (East China)
// ==========================================

export const hangzhouPolicy2025: CityContributionPolicy = {
  city: "Hangzhou",
  label: "Zhejiang/Hangzhou 2025 social year policy snapshot",
  effectiveFrom: "2025-07-01",
  effectiveTo: "2026-06-30",
  socialBase: { lower: 4986, upper: 25299 },
  housingFundBase: { lower: 2490, upper: 40694 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.005 },
};

export const nanjingPolicy2025: CityContributionPolicy = {
  city: "Nanjing",
  label: "Jiangsu/Nanjing 2025 social year policy snapshot",
  effectiveFrom: "2025-07-01",
  effectiveTo: "2026-06-30",
  socialBase: { lower: 4952, upper: 24762 },
  housingFundBase: { lower: 2490, upper: 41400 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.005 },
};

export const jinanPolicy2025: CityContributionPolicy = {
  city: "Jinan",
  label: "Shandong/Jinan 2025 social year policy snapshot",
  effectiveFrom: "2025-01-01",
  effectiveTo: "2025-12-31",
  socialBase: { lower: 4504, upper: 22518 },
  housingFundBase: { lower: 2100, upper: 32586 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.003 },
};

export const hefeiPolicy2025: CityContributionPolicy = {
  city: "Hefei",
  label: "Anhui/Hefei 2025 social year policy snapshot",
  effectiveFrom: "2025-01-01",
  effectiveTo: "2025-12-31",
  socialBase: { lower: 4311, upper: 21556 },
  housingFundBase: { lower: 2060, upper: 30540 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.005 },
};

export const fuzhouPolicy2025: CityContributionPolicy = {
  city: "Fuzhou",
  label: "Fujian/Fuzhou 2025 social year policy snapshot",
  effectiveFrom: "2025-01-01",
  effectiveTo: "2025-12-31",
  socialBase: { lower: 4043, upper: 22607 },
  housingFundBase: { lower: 1960, upper: 28000 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.005 },
};

export const nanchangPolicy2025: CityContributionPolicy = {
  city: "Nanchang",
  label: "Jiangxi/Nanchang 2025 social year policy snapshot",
  effectiveFrom: "2025-01-01",
  effectiveTo: "2025-12-31",
  socialBase: { lower: 3915, upper: 19575 },
  housingFundBase: { lower: 1850, upper: 26000 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.005 },
};

// ==========================================
// 3. 华南地区 (South China)
// ==========================================

export const guangzhouPolicy2025: CityContributionPolicy = {
  city: "Guangzhou",
  label: "Guangdong/Guangzhou 2025 social year policy snapshot",
  effectiveFrom: "2025-07-01",
  effectiveTo: "2026-06-30",
  socialBase: { lower: 5510, upper: 27549 },
  housingFundBase: { lower: 2500, upper: 39828 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.002 },
};

export const shenzhenPolicy2025: CityContributionPolicy = {
  city: "Shenzhen",
  label: "Guangdong/Shenzhen 2025 social year policy snapshot",
  effectiveFrom: "2025-07-01",
  effectiveTo: "2026-06-30",
  socialBase: { lower: 4775, upper: 27549 },
  housingFundBase: { lower: 2520, upper: 44265 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.003 },
};

export const nanningPolicy2025: CityContributionPolicy = {
  city: "Nanning",
  label: "Guangxi/Nanning 2025 social year policy snapshot",
  effectiveFrom: "2025-01-01",
  effectiveTo: "2025-12-31",
  socialBase: { lower: 4143, upper: 20715 },
  housingFundBase: { lower: 2200, upper: 28020 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.005 },
};

export const haikouPolicy2025: CityContributionPolicy = {
  city: "Haikou",
  label: "Hainan/Haikou 2025 social year policy snapshot",
  effectiveFrom: "2025-01-01",
  effectiveTo: "2025-12-31",
  socialBase: { lower: 4912, upper: 24564 },
  housingFundBase: { lower: 1870, upper: 25000 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.005 },
};

// ==========================================
// 4. 华中地区 (Central China)
// ==========================================

export const wuhanPolicy2025: CityContributionPolicy = {
  city: "Wuhan",
  label: "Hubei/Wuhan 2025 social year policy snapshot",
  effectiveFrom: "2025-07-01",
  effectiveTo: "2026-06-30",
  socialBase: { lower: 4498, upper: 22488 },
  housingFundBase: { lower: 2590, upper: 33555 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.003 },
};

export const changshaPolicy2025: CityContributionPolicy = {
  city: "Changsha",
  label: "Hunan/Changsha 2025 social year policy snapshot",
  effectiveFrom: "2025-01-01",
  effectiveTo: "2025-12-31",
  socialBase: { lower: 4072, upper: 20361 },
  housingFundBase: { lower: 2100, upper: 31291 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.005 },
};

export const zhengzhouPolicy2025: CityContributionPolicy = {
  city: "Zhengzhou",
  label: "Henan/Zhengzhou 2025 social year policy snapshot",
  effectiveFrom: "2025-07-01",
  effectiveTo: "2026-06-30",
  socialBase: { lower: 3831, upper: 19155 },
  housingFundBase: { lower: 2100, upper: 26000 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.005 },
};

// ==========================================
// 5. 华北地区 (North China)
// ==========================================

export const shijiazhuangPolicy2025: CityContributionPolicy = {
  city: "Shijiazhuang",
  label: "Hebei/Shijiazhuang 2025 social year policy snapshot",
  effectiveFrom: "2025-01-01",
  effectiveTo: "2025-12-31",
  socialBase: { lower: 4007, upper: 20034 },
  housingFundBase: { lower: 2200, upper: 22860 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.005 },
};

export const taiyuanPolicy2025: CityContributionPolicy = {
  city: "Taiyuan",
  label: "Shanxi/Taiyuan 2025 social year policy snapshot",
  effectiveFrom: "2025-01-01",
  effectiveTo: "2025-12-31",
  socialBase: { lower: 4198, upper: 20991 },
  housingFundBase: { lower: 1980, upper: 25000 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.005 },
};

export const huhehaotePolicy2025: CityContributionPolicy = {
  city: "Huhehaote",
  label: "Inner Mongolia/Huhehaote 2025 social year policy snapshot",
  effectiveFrom: "2025-01-01",
  effectiveTo: "2025-12-31",
  socialBase: { lower: 4907, upper: 24537 },
  housingFundBase: { lower: 1980, upper: 24537 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.005 },
};

// ==========================================
// 6. 西南地区 (Southwest China)
// ==========================================

export const chengduPolicy2025: CityContributionPolicy = {
  city: "Chengdu",
  label: "Sichuan/Chengdu 2025 social year policy snapshot",
  effectiveFrom: "2025-01-01",
  effectiveTo: "2025-12-31",
  socialBase: { lower: 4588, upper: 22938 },
  housingFundBase: { lower: 2100, upper: 31378 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.004 },
};

export const kunmingPolicy2025: CityContributionPolicy = {
  city: "Kunming",
  label: "Yunnan/Kunming 2025 social year policy snapshot",
  effectiveFrom: "2025-01-01",
  effectiveTo: "2025-12-31",
  socialBase: { lower: 4357, upper: 21789 },
  housingFundBase: { lower: 1990, upper: 32470 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.005 },
};

export const guiyangPolicy2025: CityContributionPolicy = {
  city: "Guiyang",
  label: "Guizhou/Guiyang 2025 social year policy snapshot",
  effectiveFrom: "2025-01-01",
  effectiveTo: "2025-12-31",
  socialBase: { lower: 4395, upper: 21975 },
  housingFundBase: { lower: 1890, upper: 25392 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.005 },
};

export const lasaPolicy2025: CityContributionPolicy = {
  city: "Lasa",
  label: "Tibet/Lasa 2025 social year policy snapshot",
  effectiveFrom: "2025-01-01",
  effectiveTo: "2025-12-31",
  socialBase: { lower: 7066, upper: 35331 },
  housingFundBase: { lower: 2360, upper: 42214 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.005 },
};

// ==========================================
// 7. 西北地区 (Northwest China)
// ==========================================

export const xianPolicy2025: CityContributionPolicy = {
  city: "Xian",
  label: "Shaanxi/Xian 2025 social year policy snapshot",
  effectiveFrom: "2025-01-01",
  effectiveTo: "2025-12-31",
  socialBase: { lower: 4650, upper: 23250 },
  housingFundBase: { lower: 2160, upper: 31761 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.003 },
};

export const lanzhouPolicy2025: CityContributionPolicy = {
  city: "Lanzhou",
  label: "Gansu/Lanzhou 2025 social year policy snapshot",
  effectiveFrom: "2025-01-01",
  effectiveTo: "2025-12-31",
  socialBase: { lower: 4403, upper: 22014 },
  housingFundBase: { lower: 2200, upper: 28422 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.005 },
};

export const xiningPolicy2025: CityContributionPolicy = {
  city: "Xining",
  label: "Qinghai/Xining 2025 social year policy snapshot",
  effectiveFrom: "2025-01-01",
  effectiveTo: "2025-12-31",
  socialBase: { lower: 5289, upper: 26448 },
  housingFundBase: { lower: 2080, upper: 30534 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.005 },
};

export const yinchuanPolicy2025: CityContributionPolicy = {
  city: "Yinchuan",
  label: "Ningxia/Yinchuan 2025 social year policy snapshot",
  effectiveFrom: "2025-01-01",
  effectiveTo: "2025-12-31",
  socialBase: { lower: 4955, upper: 24774 },
  housingFundBase: { lower: 1950, upper: 32484 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.005 },
};

export const urumqiPolicy2025: CityContributionPolicy = {
  city: "Urumqi",
  label: "Xinjiang/Urumqi 2025 social year policy snapshot",
  effectiveFrom: "2025-01-01",
  effectiveTo: "2025-12-31",
  socialBase: { lower: 5069, upper: 25344 },
  housingFundBase: { lower: 1900, upper: 33480 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.005 },
};

// ==========================================
// 8. 东北地区 (Northeast China)
// ==========================================

export const shenyangPolicy2025: CityContributionPolicy = {
  city: "Shenyang",
  label: "Liaoning/Shenyang 2025 social year policy snapshot",
  effectiveFrom: "2025-01-01",
  effectiveTo: "2025-12-31",
  socialBase: { lower: 4359, upper: 21792 },
  housingFundBase: { lower: 2100, upper: 29523 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.005 },
};

export const changchunPolicy2025: CityContributionPolicy = {
  city: "Changchun",
  label: "Jilin/Changchun 2025 social year policy snapshot",
  effectiveFrom: "2025-01-01",
  effectiveTo: "2025-12-31",
  socialBase: { lower: 4521, upper: 22605 },
  housingFundBase: { lower: 1970, upper: 28949 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.005 },
};

export const harbinPolicy2025: CityContributionPolicy = {
  city: "Harbin",
  label: "Heilongjiang/Harbin 2025 social year policy snapshot",
  effectiveFrom: "2025-01-01",
  effectiveTo: "2025-12-31",
  socialBase: { lower: 4383, upper: 21915 },
  housingFundBase: { lower: 2080, upper: 26462 },
  employeeRates: { pension: 0.08, medical: 0.02, unemployment: 0.005 },
};

// ==========================================
// 9. 特别行政区及台湾省
// ==========================================

/**
 * 香港 2025 年度强积金政策 (数值已转换为人民币 RMB)
 * 汇率参考：1 HKD ≈ 0.92 RMB
 */
export const hongKongPolicy2025: CityContributionPolicy = {
  city: "HongKong",
  label: "Hong Kong 2025 MPF policy snapshot (Converted to RMB)",
  effectiveFrom: "2025-01-01",
  effectiveTo: "2025-12-31",
  socialBase: { lower: 6532, upper: 27600 }, // 原 7100/30000 HKD
  housingFundBase: { lower: 0, upper: 0 },
  employeeRates: { pension: 0.05, medical: 0, unemployment: 0 },
};

/**
 * 澳门 2025 年度社会保障政策 (数值已转换为人民币 RMB)
 * 汇率参考：1 MOP ≈ 0.89 RMB
 */
export const macaoPolicy2025: CityContributionPolicy = {
  city: "Macao",
  label: "Macao 2025 FSS policy snapshot (Converted to RMB)",
  effectiveFrom: "2025-01-01",
  effectiveTo: "2025-12-31",
  socialBase: { lower: 0, upper: 0 }, // 澳门为定额供款(个人30MOP ≈ 26.7RMB)
  housingFundBase: { lower: 0, upper: 0 },
  employeeRates: { pension: 0, medical: 0, unemployment: 0 },
};

/**
 * 台湾/台北 2025 年度社会保险政策 (数值已转换为人民币 RMB)
 * 汇率参考：1 TWD ≈ 0.22 RMB
 */
export const taipeiPolicy2025: CityContributionPolicy = {
  city: "Taipei",
  label: "Taiwan/Taipei 2025 social insurance snapshot (Converted to RMB)",
  effectiveFrom: "2025-01-01",
  effectiveTo: "2025-12-31",
  socialBase: { lower: 6290, upper: 10076 }, // 原 28590/45800 TWD
  housingFundBase: { lower: 0, upper: 0 },
  employeeRates: { pension: 0.125, medical: 0.05, unemployment: 0.01 },
};
