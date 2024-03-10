import {
  includeBio,
  includeChemical,
  includeGeography,
  includeHistory,
  includePhysicl,
  includePhysiclAndChemical,
  includePolitical,
} from "@/utils/assert";

export const basicColumns = [
  [
    { label: "物理、化学、生物", value: "PCO" },
    { label: "物理、化学、政治", value: "PCp" },
    { label: "物理、化学、历史", value: "PCH" },
    { label: "物理、化学、地理", value: "PCG" },
    { label: "物理、化学、技术", value: "PCT" },
    { label: "物理、生物、政治", value: "POp" },
    { label: "物理、生物、历史", value: "POH" },
    { label: "物理、生物、地理", value: "POG" },
    { label: "物理、生物、技术", value: "POT" },
    { label: "物理、政治、历史", value: "PpH" },
    { label: "物理、政治、地理", value: "PpG" },
    { label: "物理、政治、技术", value: "PpT" },
    { label: "物理、历史、地理", value: "PHG" },
    { label: "物理、历史、技术", value: "PHT" },
    { label: "物理、地理、技术", value: "PGT" },
    { label: "化学、生物、政治", value: "COp" },
    { label: "化学、生物、历史", value: "COH" },
    { label: "化学、生物、地理", value: "COG" },
    { label: "化学、生物、技术", value: "COT" },
    { label: "化学、政治、历史", value: "CpH" },
    { label: "化学、政治、地理", value: "CpG" },
    { label: "化学、政治、技术", value: "CpT" },
    { label: "化学、历史、地理", value: "CHG" },
    { label: "化学、历史、技术", value: "CHT" },
    { label: "化学、地理、技术", value: "CGT" },
    { label: "生物、政治、历史", value: "OpH" },
    { label: "生物、政治、地理", value: "OpG" },
    { label: "生物、政治、技术", value: "OpT" },
    { label: "生物、历史、地理", value: "OHG" },
    { label: "生物、历史、技术", value: "OHT" },
    { label: "生物、地理、技术", value: "OGT" },
    { label: "政治、历史、地理", value: "pHG" },
    { label: "政治、历史、技术", value: "pHT" },
    { label: "政治、地理、技术", value: "pGT" },
    { label: "历史、地理、技术", value: "HGT" },
  ],
];

export const UniversityInfoList = [
  {
    name: "浙江工业大学",
    specialCalculate: (a: number, b: number, c: number, d: any) => {
      return a >= 6 && d === 0;
    },
    major: [
      {
        name: "健行学院实验班（人文社科）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "622",
        combinationDesc: "不限",
        admissions: 15,
        conditionDesc: "7A3C及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "7A1B",
        lowwestGaoKao23: "651",
        minus: "29",
      },
      {
        name: "健行学院实验班（理工）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "615",
        combinationDesc: "物理+化学",
        admissions: 55,
        conditionDesc: "7A3C及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "7A1B",
        lowwestGaoKao23: "650",
        minus: "35",
      },
      {
        name: "环境科学与工程类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "587",
        combinationDesc: "物理+化学",
        admissions: 20,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "609",
        minus: "22",
      },
      {
        name: "材料类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "580",
        combinationDesc: "物理+化学",
        admissions: 25,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "610",
        minus: "30",
      },
      {
        name: "化工与制药类（化学工程类）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "590",
        combinationDesc: "物理+化学",
        admissions: 40,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "611",
        minus: "21",
      },
      {
        name: "化学工程与工艺（卓越工程师）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "613",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "628",
        minus: "15",
      },
      {
        name: "生物工程类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "593",
        combinationDesc: "物理+化学",
        admissions: 20,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "616",
        minus: "23",
      },
      {
        name: "食品科学与工程类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "585",
        combinationDesc: "物理+化学",
        admissions: 20,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "614",
        minus: "29",
      },
      {
        name: "药学类（“2011计划”创新实验区）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "606",
        combinationDesc: "物理+化学",
        admissions: 30,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "620",
        minus: "14",
      },
      {
        name: "建筑类",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "617",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "620",
        minus: "3",
      },
      {
        name: "应用心理学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "602",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "621",
        minus: "19",
      },
      {
        name: "法学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "624",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "635",
        minus: "11",
      },
      {
        name: "新闻传播学类",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "623",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "625",
        minus: "2",
      },
      {
        name: "汉语言文学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "629",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "632",
        minus: "3",
      },
      {
        name: "金融学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "622",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "626",
        minus: "4",
      },
      {
        name: "国际经济与贸易",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "614",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "626",
        minus: "12",
      },
      {
        name: "工商管理类",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "613",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "622",
        minus: "9",
      },
      {
        name: "英语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "611",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "612",
        minus: "1",
      },
      {
        name: "日语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "607",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "609",
        minus: "2",
      },
      {
        name: "公共管理类",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "601",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "617",
        minus: "16",
      },
      {
        name: "计算机类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "617",
        combinationDesc: "物理+化学",
        admissions: 30,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "634",
        minus: "17",
      },
      {
        name: "数据科学与大数据技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "615",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "634",
        minus: "19",
      },
      {
        name: "物理学类（物理与光电信息类）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "602",
        combinationDesc: "物理+化学",
        admissions: 15,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "625",
        minus: "23",
      },
      {
        name: "数学类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "605",
        combinationDesc: "物理+化学",
        admissions: 15,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "626",
        minus: "21",
      },
      {
        name: "管理科学与工程类",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "599",
        combinationDesc: "物理",
        admissions: 10,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "620",
        minus: "21",
      },
      {
        name: "土木类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "590",
        combinationDesc: "物理+化学",
        admissions: 25,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "614",
        minus: "24",
      },
      {
        name: "机械类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "594",
        combinationDesc: "物理+化学",
        admissions: 50,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "621",
        minus: "27",
      },
      {
        name: "机械工程（卓越工程师）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "619",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "630",
        minus: "11",
      },
      {
        name: "电气类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "613",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "627",
        minus: "14",
      },
      {
        name: "电子信息类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "613",
        combinationDesc: "物理+化学",
        admissions: 15,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "631",
        minus: "18",
      },
      {
        name: "机器人工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "629",
        minus: "/",
      },
      {
        name: "工业设计",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "615",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "626",
        minus: "11",
      },
      {
        name: "安全工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "614",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "6A4C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A1B",
        lowwestGaoKao23: "621",
        minus: "7",
      },
    ],
  },
  {
    name: "杭州师范大学",
    /* 判断分 */
    specialCalculate: (a: number, b: number, c: number, d: any) => {
      return a >= 2;
    },
    major: [
      {
        name: "小学教育（师范）",
        /* 报考专业条件 */
        condition: (values: any) => {
          return true;
        },
        /* 23三一最低分 */
        lowThreeOne: 604,
        /* 选科要求说明 */
        combinationDesc: "不限",
        /* 招生计划 */
        admissions: 70,
        /* 条件说明 */
        conditionDesc: "≥6A",
        /* 23初审最低分 */
        lowwest23: 80,
        /* 对应学考等级 */
        lowwestDegreeDesc: "6A4B",
        /* 23高考最低分 */
        lowwestGaoKao23: "635",
        /* 降分幅度 */
        minus: "31",
      },
      {
        name: "学前教育（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: 551,
        combinationDesc: "不限",
        admissions: 60,
        conditionDesc: "≥3A且A+B≥5",
        lowwest23: 62,
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "603",
        minus: "52",
      },
      {
        name: "特殊教育（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: 570,
        combinationDesc: "不限",
        admissions: 30,
        conditionDesc: "≥3A",
        lowwest23: 55,
        lowwestDegreeDesc: "1A9B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "护理学",
        condition: (values: string) => {
          return includeChemical(values);
        },
        lowThreeOne: 546,
        combinationDesc: "化学",
        admissions: 160,
        conditionDesc: "≥2A",
        lowwest23: 54,
        lowwestDegreeDesc: "2A6B2C",
        lowwestGaoKao23: "605",
        minus: "59",
      },
    ],
  },
  {
    name: "浙江师范大学",
    condition: 76,
    calculate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 8 + c * 4;
    },
    major: [
      {
        name: "小学教育（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "593",
        combinationDesc: "不限",
        admissions: 50,
        conditionDesc: "语文或数学为A等，5A5B及以上",
        lowwest23: "92",
        lowwestDegreeDesc: "8A1B1C",
        lowwestGaoKao23: "643",
        minus: "50",
      },
      {
        name: "汉语言文学（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "607",
        combinationDesc: "不限",
        admissions: 40,
        conditionDesc: "语文为A等，5A5B及以上",
        lowwest23: "96",
        lowwestDegreeDesc: "8A2B",
        lowwestGaoKao23: "650",
        minus: "43",
      },
      {
        name: "英语（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "603",
        combinationDesc: "不限",
        admissions: 26,
        conditionDesc: "外语和语文为A等，5A5B及以上",
        lowwest23: "92",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "生物科学（师范）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "597",
        combinationDesc: "物理+化学",
        admissions: 35,
        conditionDesc: "生物学或物理或化学为A等，5A5B及以上",
        lowwest23: "94",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "化学（师范）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "601",
        combinationDesc: "物理+化学",
        admissions: 30,
        conditionDesc: "物理或化学为A等，5A5B及以上",
        lowwest23: "92",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "629",
        minus: "28",
      },
      {
        name: "思想政治教育（师范）",
        condition: (values: string) => {
          return includePolitical(values);
        },
        lowThreeOne: "606",
        combinationDesc: "思想政治",
        admissions: 30,
        conditionDesc: "思想政治或历史为A等，5A5B及以上",
        lowwest23: "94",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "644",
        minus: "38",
      },
      {
        name: "数学与应用数学（师范）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "数学或物理为A等，5A5B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "639",
        minus: "/",
      },
      {
        name: "学前教育（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "560",
        combinationDesc: "不限",
        admissions: 60,
        conditionDesc: "10B及以上",
        lowwest23: "82",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "597",
        minus: "37",
      },
      {
        name: "特殊教育（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "540",
        combinationDesc: "不限",
        admissions: 30,
        conditionDesc: "9B1C及以上",
        lowwest23: "82",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
    ],
  },
  {
    name: "宁波大学",
    condition: 82,
    calculate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 8 + c * 4;
    },
    major: [
      {
        name: "工程力学(拔尖人才创新班) ",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        /* 23三一最低分 */
        lowThreeOne: 602,
        /* 选科要求说明 */
        combinationDesc: "物理+化学",
        /* 招生计划 */
        admissions: 5,
        /* 条件说明 */
        conditionDesc: "1A9B及以上",
        /* 23初审最低分 */
        lowwest23: 94,
        /* 对应学考等级 */
        lowwestDegreeDesc: "7A3B",
        /* 23高考最低分 */
        lowwestGaoKao23: "637",
        /* 降分幅度 */
        minus: "35",
      },
      {
        name: "水产养殖学(拔尖人才创新班)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        /* 23三一最低分 */
        lowThreeOne: 597,
        /* 选科要求说明 */
        combinationDesc: "物理+化学",
        /* 招生计划 */
        admissions: 5,
        /* 条件说明 */
        conditionDesc: "1A9B及以上",
        /* 23初审最低分 */
        lowwest23: 94,
        /* 对应学考等级 */
        lowwestDegreeDesc: "7A3B",
        /* 23高考最低分 */
        lowwestGaoKao23: "622",
        /* 降分幅度 */
        minus: "25",
      },
      {
        name: "数学与应用数学(拔尖人才创新班)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        /* 23三一最低分 */
        lowThreeOne: 578,
        /* 选科要求说明 */
        combinationDesc: "物理+化学",
        /* 招生计划 */
        admissions: 110,
        /* 条件说明 */
        conditionDesc: "1A9B及以上",
        /* 23初审最低分 */
        lowwest23: 94,
        /* 对应学考等级 */
        lowwestDegreeDesc: "7A3B",
        /* 23高考最低分 */
        lowwestGaoKao23: "630",
        /* 降分幅度 */
        minus: "52",
      },
      {
        name: "物理学(拔尖人才创新班)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        /* 23三一最低分 */
        lowThreeOne: 589,
        /* 选科要求说明 */
        combinationDesc: "物理+化学",
        /* 招生计划 */
        admissions: 8,
        /* 条件说明 */
        conditionDesc: "1A9B及以上",
        /* 23初审最低分 */
        lowwest23: 94,
        /* 对应学考等级 */
        lowwestDegreeDesc: "7A3B",
        /* 23高考最低分 */
        lowwestGaoKao23: "625",
        /* 降分幅度 */
        minus: "36",
      },
      {
        name: "生物技术(拔尖人才创新班)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        /* 23三一最低分 */
        lowThreeOne: 582,
        /* 选科要求说明 */
        combinationDesc: "物理+化学",
        /* 招生计划 */
        admissions: 5,
        /* 条件说明 */
        conditionDesc: "1A9B及以上",
        /* 23初审最低分 */
        lowwest23: 94,
        /* 对应学考等级 */
        lowwestDegreeDesc: "7A3B",
        /* 23高考最低分 */
        lowwestGaoKao23: "628",
        /* 降分幅度 */
        minus: "46",
      },
      {
        name: "机械类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        /* 23三一最低分 */
        lowThreeOne: 572,
        /* 选科要求说明 */
        combinationDesc: "物理+化学",
        /* 招生计划 */
        admissions: 110,
        /* 条件说明 */
        conditionDesc: "1A9B及以上",
        /* 23初审最低分 */
        lowwest23: 94,
        /* 对应学考等级 */
        lowwestDegreeDesc: "7A3B",
        /* 23高考最低分 */
        lowwestGaoKao23: "617",
        /* 降分幅度 */
        minus: "45",
      },
      {
        name: "环境工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        /* 23三一最低分 */
        lowThreeOne: "/",
        /* 选科要求说明 */
        combinationDesc: "物理+化学",
        /* 招生计划 */
        admissions: 5,
        /* 条件说明 */
        conditionDesc: "1A9B及以上",
        /* 23初审最低分 */
        lowwest23: 94,
        /* 对应学考等级 */
        lowwestDegreeDesc: "7A3B",
        /* 23高考最低分 */
        lowwestGaoKao23: "613",
        /* 降分幅度 */
        minus: "/",
      },
      {
        name: "历史学",
        condition: (values: string) => {
          return true;
        },
        /* 23三一最低分 */
        lowThreeOne: 581,
        /* 选科要求说明 */
        combinationDesc: "不限",
        /* 招生计划 */
        admissions: 110,
        /* 条件说明 */
        conditionDesc: "1A9B及以上",
        /* 23初审最低分 */
        lowwest23: 94,
        /* 对应学考等级 */
        lowwestDegreeDesc: "7A3B",
        /* 23高考最低分 */
        lowwestGaoKao23: "626",
        /* 降分幅度 */
        minus: "45",
      },
      {
        name: "汉语言文学",
        condition: (values: string) => {
          return true;
        },
        /* 23三一最低分 */
        lowThreeOne: 598,
        /* 选科要求说明 */
        combinationDesc: "不限",
        /* 招生计划 */
        admissions: 115,
        /* 条件说明 */
        conditionDesc: "1A9B及以上",
        /* 23初审最低分 */
        lowwest23: 94,
        /* 对应学考等级 */
        lowwestDegreeDesc: "7A3B",
        /* 23高考最低分 */
        lowwestGaoKao23: "635",
        /* 降分幅度 */
        minus: "37",
      },
      {
        name: "经济学",
        condition: (values: string) => {
          return true;
        },
        /* 23三一最低分 */
        lowThreeOne: 582,
        /* 选科要求说明 */
        combinationDesc: "不限",
        /* 招生计划 */
        admissions: 115,
        /* 条件说明 */
        conditionDesc: "1A9B及以上",
        /* 23初审最低分 */
        lowwest23: 94,
        /* 对应学考等级 */
        lowwestDegreeDesc: "7A3B",
        /* 23高考最低分 */
        lowwestGaoKao23: "/",
        /* 降分幅度 */
        minus: "/",
      },
      {
        name: "日语",
        condition: (values: string) => {
          return true;
        },
        /* 23三一最低分 */
        lowThreeOne: "/",
        /* 选科要求说明 */
        combinationDesc: "不限",
        /* 招生计划 */
        admissions: 110,
        /* 条件说明 */
        conditionDesc: "1A9B及以上",
        /* 23初审最低分 */
        lowwest23: "/",
        /* 对应学考等级 */
        lowwestDegreeDesc: "/",
        /* 23高考最低分 */
        lowwestGaoKao23: "603",
        /* 降分幅度 */
        minus: "/",
      },
      {
        name: "德语",
        condition: (values: string) => {
          return true;
        },
        /* 23三一最低分 */
        lowThreeOne: "/",
        /* 选科要求说明 */
        combinationDesc: "不限",
        /* 招生计划 */
        admissions: 110,
        /* 条件说明 */
        conditionDesc: "1A9B及以上",
        /* 23初审最低分 */
        lowwest23: "/",
        /* 对应学考等级 */
        lowwestDegreeDesc: "/",
        /* 23高考最低分 */
        lowwestGaoKao23: "604",
        /* 降分幅度 */
        minus: "/",
      },
      {
        name: "小学教育（师范）",
        condition: (values: string) => {
          return true;
        },
        /* 23三一最低分 */
        lowThreeOne: 594,
        /* 选科要求说明 */
        combinationDesc: "不限",
        /* 招生计划 */
        admissions: 110,
        /* 条件说明 */
        conditionDesc: "1A9B及以上",
        /* 23初审最低分 */
        lowwest23: 90,
        /* 对应学考等级 */
        lowwestDegreeDesc: "5A5B",
        /* 23高考最低分 */
        lowwestGaoKao23: "631",
        /* 降分幅度 */
        minus: "37",
      },
      {
        name: "学前教育（师范）",
        condition: (values: string) => {
          return true;
        },
        /* 23三一最低分 */
        lowThreeOne: 584,
        /* 选科要求说明 */
        combinationDesc: "不限",
        /* 招生计划 */
        admissions: 35,
        /* 条件说明 */
        conditionDesc: "1A9B及以上",
        /* 23初审最低分 */
        lowwest23: 90,
        /* 对应学考等级 */
        lowwestDegreeDesc: "5A5B",
        /* 23高考最低分 */
        lowwestGaoKao23: "614",
        /* 降分幅度 */
        minus: "30",
      },
      {
        name: "思想政治教育（师范）",
        condition: (values: string) => {
          return includePolitical(values);
        },
        /* 23三一最低分 */
        lowThreeOne: 631,
        /* 选科要求说明 */
        combinationDesc: "思想政治",
        /* 招生计划 */
        admissions: 10,
        /* 条件说明 */
        conditionDesc: "1A9B及以上",
        /* 23初审最低分 */
        lowwest23: 90,
        /* 对应学考等级 */
        lowwestDegreeDesc: "5A5B",
        /* 23高考最低分 */
        lowwestGaoKao23: "634",
        /* 降分幅度 */
        minus: "3",
      },
      {
        name: "汉语言文学（师范）",
        condition: (values: string) => {
          return true;
        },
        /* 23三一最低分 */
        lowThreeOne: 625,
        /* 选科要求说明 */
        combinationDesc: "不限",
        /* 招生计划 */
        admissions: 15,
        /* 条件说明 */
        conditionDesc: "1A9B及以上",
        /* 23初审最低分 */
        lowwest23: 90,
        /* 对应学考等级 */
        lowwestDegreeDesc: "5A5B",
        /* 23高考最低分 */
        lowwestGaoKao23: "636",
        /* 降分幅度 */
        minus: "11",
      },
      {
        name: "英语（师范）要求高考成绩≥115",
        condition: (values: string) => {
          return true;
        },
        /* 23三一最低分 */
        lowThreeOne: 613,
        /* 选科要求说明 */
        combinationDesc: "不限",
        /* 招生计划 */
        admissions: 22,
        /* 条件说明 */
        conditionDesc: "1A9B及以上",
        /* 23初审最低分 */
        lowwest23: 90,
        /* 对应学考等级 */
        lowwestDegreeDesc: "5A5B",
        /* 23高考最低分 */
        lowwestGaoKao23: "633",
        /* 降分幅度 */
        minus: "20",
      },
      {
        name: "数学与应用数学（师范）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        /* 23三一最低分 */
        lowThreeOne: 596,
        /* 选科要求说明 */
        combinationDesc: "物理+化学",
        /* 招生计划 */
        admissions: 15,
        /* 条件说明 */
        conditionDesc: "1A9B及以上",
        /* 23初审最低分 */
        lowwest23: 90,
        /* 对应学考等级 */
        lowwestDegreeDesc: "5A5B",
        /* 23高考最低分 */
        lowwestGaoKao23: "/",
        /* 降分幅度 */
        minus: "/",
      },
      {
        name: "物理学（师范）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        /* 23三一最低分 */
        lowThreeOne: 593,
        /* 选科要求说明 */
        combinationDesc: "物理+化学",
        /* 招生计划 */
        admissions: 30,
        /* 条件说明 */
        conditionDesc: "1A9B及以上",
        /* 23初审最低分 */
        lowwest23: 90,
        /* 对应学考等级 */
        lowwestDegreeDesc: "5A5B",
        /* 23高考最低分 */
        lowwestGaoKao23: "620",
        /* 降分幅度 */
        minus: "27",
      },
      {
        name: "地理科学（师范）",
        condition: (values: string) => {
          return includeGeography(values);
        },
        /* 23三一最低分 */
        lowThreeOne: 611,
        /* 选科要求说明 */
        combinationDesc: "地理",
        /* 招生计划 */
        admissions: 25,
        /* 条件说明 */
        conditionDesc: "1A9B及以上",
        /* 23初审最低分 */
        lowwest23: 90,
        /* 对应学考等级 */
        lowwestDegreeDesc: "5A5B",
        /* 23高考最低分 */
        lowwestGaoKao23: "632",
        /* 降分幅度 */
        minus: "21",
      },
      {
        name: "人文地理与城乡规划（中外合作办学）（中法合作）",
        condition: (values: string) => {
          return includeGeography(values);
        },
        /* 23三一最低分 */
        lowThreeOne: 563,
        /* 选科要求说明 */
        combinationDesc: "地理",
        /* 招生计划 */
        admissions: 15,
        /* 条件说明 */
        conditionDesc: "1A9B及以上",
        /* 23初审最低分 */
        lowwest23: 82,
        /* 对应学考等级 */
        lowwestDegreeDesc: "1A9B",
        /* 23高考最低分 */
        lowwestGaoKao23: "606",
        /* 降分幅度 */
        minus: "43",
      },
      {
        name: "旅游管理（中外合作办学）（中法合作）",
        condition: (values: string) => {
          return true;
        },
        /* 23三一最低分 */
        lowThreeOne: 551,
        /* 选科要求说明 */
        combinationDesc: "不限",
        /* 招生计划 */
        admissions: 15,
        /* 条件说明 */
        conditionDesc: "1A9B及以上",
        /* 23初审最低分 */
        lowwest23: 82,
        /* 对应学考等级 */
        lowwestDegreeDesc: "1A9B",
        /* 23高考最低分 */
        lowwestGaoKao23: "595",
        /* 降分幅度 */
        minus: "44",
      },
    ],
  },
  {
    name: "宁波诺丁汉大学",
    condition: 0,
    calculate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 7 + c * 4;
    },
    maior: [
      {
        name: "国际商务(中外合作办学)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 62,
        conditionDesc: "10D及以上",
        lowwest23: "79分",
        lowwestDegreeDesc: "3A7B",
        lowwestGaoKao23: "609",
        minus: "/",
      },
      {
        name: "财务管理(中外合作办学)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 12,
        conditionDesc: "10D及以上",
        lowwest23: "79分",
        lowwestDegreeDesc: "3A7B",
        lowwestGaoKao23: "611",
        minus: "/",
      },
      {
        name: "经济学(中外合作办学)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 1,
        conditionDesc: "10D及以上",
        lowwest23: "79分",
        lowwestDegreeDesc: "3A7B",
        lowwestGaoKao23: "621",
        minus: "/",
      },
      {
        name: "国际经济与贸易(中外合作办学)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 3,
        conditionDesc: "10D及以上",
        lowwest23: "79分",
        lowwestDegreeDesc: "3A7B",
        lowwestGaoKao23: "619",
        minus: "/",
      },
      {
        name: "国际事务与国际关系(中外合作办学)",
        condition: (values: string) => {
          return includePolitical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "政治",
        admissions: 17,
        conditionDesc: "10D及以上",
        lowwest23: "79分",
        lowwestDegreeDesc: "3A7B",
        lowwestGaoKao23: "614",
        minus: "/",
      },
      {
        name: "传播学(中外合作办学)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 12,
        conditionDesc: "10D及以上",
        lowwest23: "79分",
        lowwestDegreeDesc: "3A7B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "英语(中外合作办学)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 9,
        conditionDesc: "10D及以上",
        lowwest23: "79分",
        lowwestDegreeDesc: "3A7B",
        lowwestGaoKao23: "609",
        minus: "/",
      },
      {
        name: "英语(中外合作办学)(2+2)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 2,
        conditionDesc: "10D及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "609",
        minus: "/",
      },
      {
        name: "计算机科学与技术(中外合作办学)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 3,
        conditionDesc: "10D及以上",
        lowwest23: "79分",
        lowwestDegreeDesc: "3A7B",
        lowwestGaoKao23: "618",
        minus: "/",
      },
      {
        name: "数学与应用数学(中外合作办学)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 3,
        conditionDesc: "10D及以上",
        lowwest23: "79分",
        lowwestDegreeDesc: "3A7B",
        lowwestGaoKao23: "618",
        minus: "/",
      },
      {
        name: "电气类(中外合作办学)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 45,
        conditionDesc: "10D及以上",
        lowwest23: "79分",
        lowwestDegreeDesc: "3A7B",
        lowwestGaoKao23: "615",
        minus: "/",
      },
      {
        name: "电气类(中外合作办学)(2+2)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 17,
        conditionDesc: "10D及以上",
        lowwest23: "79分",
        lowwestDegreeDesc: "3A7B",
        lowwestGaoKao23: "613",
        minus: "/",
      },
      {
        name: "环境科学(中外合作办学)(2+2)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 8,
        conditionDesc: "10D及以上",
        lowwest23: "79分",
        lowwestDegreeDesc: "3A7B",
        lowwestGaoKao23: "616",
        minus: "/",
      },
      {
        name: "化学(中外合作办学)(2+2)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 4,
        conditionDesc: "10D及以上",
        lowwest23: "79分",
        lowwestDegreeDesc: "3A7B",
        lowwestGaoKao23: "630",
        minus: "/",
      },
      {
        name: "建筑学(中外合作办学)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 2,
        conditionDesc: "10D及以上",
        lowwest23: "79分",
        lowwestDegreeDesc: "3A7B",
        lowwestGaoKao23: "609",
        minus: "/",
      },
    ],
  },
  {
    name: "杭州电子科技大学",
    condition: 110,
    calculate: (a: number, b: number, c: number, d: any) => {
      return a * 15 + b * 10 + c * 5;
    },
    maior: [
      {
        name: "理工类实验班",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "636",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "651",
        minus: "15",
      },
      {
        name: "经管类实验班",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "636",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "644",
        minus: "8",
      },
      {
        name: "智能科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "615",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "637",
        minus: "22",
      },
      {
        name: "计算机类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "619",
        combinationDesc: "物理+化学",
        admissions: 40,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "641",
        minus: "22",
      },
      {
        name: "电子信息类（电子信息学院）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "610",
        combinationDesc: "物理+化学",
        admissions: 30,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "631",
        minus: "21",
      },
      {
        name: "集成电路设计与集成系统",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "619",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "636",
        minus: "17",
      },
      {
        name: "数字媒体技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "615",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "631",
        minus: "16",
      },
      {
        name: "信息安全",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "614",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "网络工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "627",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "635",
        minus: "8",
      },
      {
        name: "电子信息类（通信学院）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "607",
        combinationDesc: "物理+化学",
        admissions: 35,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "627",
        minus: "20",
      },
      {
        name: "电气工程及其自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "607",
        combinationDesc: "物理+化学",
        admissions: 20,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "629",
        minus: "22",
      },
      {
        name: "自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "612",
        combinationDesc: "物理+化学",
        admissions: 35,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "626",
        minus: "14",
      },
      {
        name: "机械设计制造及其自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "601",
        combinationDesc: "物理+化学",
        admissions: 20,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "车辆工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "593",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "材料科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "561",
        combinationDesc: "物理+化学",
        admissions: 15,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "管理科学与工程类",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "570",
        combinationDesc: "物理",
        admissions: 30,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "621",
        minus: "51",
      },
      {
        name: "数学类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "590",
        combinationDesc: "物理+化学",
        admissions: 35,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "光电信息科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "600",
        combinationDesc: "物理+化学",
        admissions: 20,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "工业设计",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "608",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "工业工程",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "592",
        combinationDesc: "物理",
        admissions: 10,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "统计学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "602",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "622",
        minus: "20",
      },
      {
        name: "环境工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "555",
        combinationDesc: "物理+化学",
        admissions: 25,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "会计学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "612",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "625",
        minus: "13",
      },
      {
        name: "审计学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "610",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "624",
        minus: "14",
      },
      {
        name: "财务管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "594",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "621",
        minus: "27",
      },
      {
        name: "工商管理类",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "588",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "611",
        minus: "23",
      },
      {
        name: "经济学类",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "575",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "金融学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "577",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "613",
        minus: "36",
      },
      {
        name: "电子商务",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "595",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "法学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "599",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "622",
        minus: "23",
      },
      {
        name: "英语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "595",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "607",
        minus: "12",
      },
      {
        name: "传播学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "552",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "2A8B及以上",
        lowwest23: "130",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
    ],
  },
  {
    name: "浙江工商大学",
    condition: 60,
    calculate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 5;
    },
    major: [
      {
        name: "经济学类（含经济学、国际经济与贸易）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "584",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "2A8B及以上",
        lowwest23: "85",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "605",
        minus: "21",
      },
      {
        name: "数字经济",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理",
        admissions: 5,
        conditionDesc: "2A8B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "工商管理类（含市场营销+人工智能双学士学位项目，含工商管理、市场营销、人力资源管理、国际商务）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "574",
        combinationDesc: "不限",
        admissions: 15,
        conditionDesc: "2A8B及以上",
        lowwest23: "85",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "602",
        minus: "28",
      },
      {
        name: "会计学（含会计学、财务管理、审计学、会计学(ACCA)）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "2A8B及以上",
        lowwest23: "85",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "623",
        minus: "/",
      },
      {
        name: "金融学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "2A8B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "613",
        minus: "/",
      },
      {
        name: "金融学（普惠金融创新班）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 15,
        conditionDesc: "2A8B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "596",
        minus: "/",
      },
      {
        name: "金融工程",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理",
        admissions: 5,
        conditionDesc: "2A8B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "保险学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "564",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "2A8B及以上",
        lowwest23: "85",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "604",
        minus: "40",
      },
      {
        name: "公共管理类（含慈善管理、行政管理、土地资源管理、文化产业管理）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "585",
        combinationDesc: "不限",
        admissions: 30,
        conditionDesc: "2A8B及以上",
        lowwest23: "65",
        lowwestDegreeDesc: "4A5B或3A7B",
        lowwestGaoKao23: "594",
        minus: "9",
      },
      {
        name: "旅游管理类（含旅游管理、酒店管理）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "566",
        combinationDesc: "不限",
        admissions: 25,
        conditionDesc: "2A8B及以上",
        lowwest23: "65",
        lowwestDegreeDesc: "4A5B或3A7B",
        lowwestGaoKao23: "594",
        minus: "28",
      },
      {
        name: "城乡规划",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "582",
        combinationDesc: "不限",
        admissions: 4,
        conditionDesc: "2A8B及以上",
        lowwest23: "70",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "605",
        minus: "23",
      },
      {
        name: "社会工作",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "600",
        combinationDesc: "不限",
        admissions: 4,
        conditionDesc: "2A8B及以上",
        lowwest23: "65",
        lowwestDegreeDesc: "4A5B或3A7B",
        lowwestGaoKao23: "608",
        minus: "8",
      },
      {
        name: "外国语言文学类（含英语、商务英语）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "598",
        combinationDesc: "不限",
        admissions: 25,
        conditionDesc: "2A8B及以上",
        lowwest23: "65",
        lowwestDegreeDesc: "4A5B或3A7B",
        lowwestGaoKao23: "596",
        minus: "-2",
      },
      {
        name: "新闻传播学类（含网络与新媒体、新闻学、广告学）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 30,
        conditionDesc: "2A8B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "617",
        minus: "/",
      },
      {
        name: "哲学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "592",
        combinationDesc: "不限",
        admissions: 4,
        conditionDesc: "2A8B及以上",
        lowwest23: "65",
        lowwestDegreeDesc: "4A5B或3A7B",
        lowwestGaoKao23: "610",
        minus: "18",
      },
      {
        name: "汉语言文学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "616",
        combinationDesc: "不限",
        admissions: 4,
        conditionDesc: "2A8B及以上",
        lowwest23: "65",
        lowwestDegreeDesc: "4A5B或3A7B",
        lowwestGaoKao23: "630",
        minus: "14",
      },
      {
        name: "法语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "594",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "2A8B及以上",
        lowwest23: "65",
        lowwestDegreeDesc: "4A5B或3A7B",
        lowwestGaoKao23: "609",
        minus: "15",
      },
      {
        name: "阿拉伯语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "587",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "2A8B及以上",
        lowwest23: "65",
        lowwestDegreeDesc: "4A5B或3A7B",
        lowwestGaoKao23: "594",
        minus: "7",
      },
      {
        name: "日语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "586",
        combinationDesc: "不限",
        admissions: 25,
        conditionDesc: "2A8B及以上",
        lowwest23: "65",
        lowwestDegreeDesc: "4A5B或3A7B",
        lowwestGaoKao23: "585",
        minus: "-1",
      },
      {
        name: "历史学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "609",
        combinationDesc: "不限",
        admissions: 4,
        conditionDesc: "2A8B及以上",
        lowwest23: "65",
        lowwestDegreeDesc: "4A5B或3A7B",
        lowwestGaoKao23: "625",
        minus: "16",
      },
      {
        name: "电子信息类（含人工智能、电子信息工程、通信工程）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "583",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "2A8B及以上",
        lowwest23: "70",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "611",
        minus: "28",
      },
      {
        name: "计算机类（含计算机科学与技术、软件工程、信息安全）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "573",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "2A8B及以上",
        lowwest23: "70",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "615",
        minus: "42",
      },
      {
        name: "环境科学与工程类（含环境科学、环境工程）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "560",
        combinationDesc: "物理+化学",
        admissions: 20,
        conditionDesc: "2A8B及以上",
        lowwest23: "70",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "597",
        minus: "37",
      },
      {
        name: "食品科学与工程类（含食品科学与工程、食品质量与安全）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "559",
        combinationDesc: "物理+化学",
        admissions: 20,
        conditionDesc: "2A8B及以上",
        lowwest23: "70",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "600",
        minus: "41",
      },
      {
        name: "电子商务类（含电子商务、物流管理）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "550",
        combinationDesc: "不限",
        admissions: 25,
        conditionDesc: "2A8B及以上",
        lowwest23: "70",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "597",
        minus: "47",
      },
      {
        name: "数学与应用数学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "582",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "2A8B及以上",
        lowwest23: "70",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "612",
        minus: "30",
      },
      {
        name: "给排水科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "573",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "2A8B及以上",
        lowwest23: "70",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "607",
        minus: "34",
      },
      {
        name: "生物工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "576",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "2A8B及以上",
        lowwest23: "70",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "598",
        minus: "22",
      },
      {
        name: "信息管理与信息系统",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "585",
        combinationDesc: "物理",
        admissions: 5,
        conditionDesc: "2A8B及以上",
        lowwest23: "70",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "608",
        minus: "23",
      },
      {
        name: "电子信息工程（中外合作办学）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "2A8B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "593",
        minus: "/",
      },
      {
        name: "通信工程（中外合作办学）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "2A8B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "589",
        minus: "/",
      },
    ],
  },
  {
    name: "浙江理工大学",
    condition: 0,
    calculate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 8 + c * 4;
    },
    major: [
      {
        name: "纺织类（纺织工程、非织造材料与工程）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 30,
        conditionDesc: "10D及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "10B",
        lowwestGaoKao23: "602",
        minus: "/",
      },
      {
        name: "轻化工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 20,
        conditionDesc: "10D及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "10B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "服装设计与工程",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理",
        admissions: 20,
        conditionDesc: "10D及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "10B",
        lowwestGaoKao23: "601",
        minus: "/",
      },
      {
        name: "丝绸设计与工程",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 20,
        conditionDesc: "10D及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "10B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "生物科学类（生物技术、生物制药）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 30,
        conditionDesc: "10D及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "10B",
        lowwestGaoKao23: "602",
        minus: "/",
      },
      {
        name: "材料类（材料科学与工程、高分子材料与工程）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 30,
        conditionDesc: "10D及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "10B",
        lowwestGaoKao23: "602",
        minus: "/",
      },
      {
        name: "化学类（应用化学、材料化学）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 20,
        conditionDesc: "10D及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "10B",
        lowwestGaoKao23: "604",
        minus: "/",
      },
      {
        name: "数学类（数学与应用数学、信息与计算科学）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 25,
        conditionDesc: "10D及以上",
        lowwest23: "88",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "608",
        minus: "/",
      },
      {
        name: "应用物理学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 20,
        conditionDesc: "10D及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "土木类（土木工程、建筑环境与能源应用工程、工程管理）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 30,
        conditionDesc: "10D及以上",
        lowwest23: "88",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "601",
        minus: "/",
      },
      {
        name: "建筑类（建筑学、风景园林）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 20,
        conditionDesc: "10D及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "10B",
        lowwestGaoKao23: "600",
        minus: "/",
      },
      {
        name: "机械类（机械设计制造及其自动化、机械电子工程、智能制造工程）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 25,
        conditionDesc: "10D及以上",
        lowwest23: "88",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "605",
        minus: "/",
      },
      {
        name: "工业设计",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 20,
        conditionDesc: "10D及以上",
        lowwest23: "88",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "610",
        minus: "/",
      },
      {
        name: "电气类（自动化、电气工程及其自动化）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "10D及以上",
        lowwest23: "88",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "611",
        minus: "/",
      },
      {
        name: "经济与贸易类（经济学、金融学、国际经济与贸易）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 15,
        conditionDesc: "10D及以上",
        lowwest23: "88",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "595",
        minus: "/",
      },
      {
        name: "工商管理类（会计学、工商管理、人力资源管理）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 15,
        conditionDesc: "10D及以上",
        lowwest23: "88",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "599",
        minus: "/",
      },
      {
        name: "外国语言文学类（英语、日语）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 20,
        conditionDesc: "10D及以上",
        lowwest23: "88",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "593",
        minus: "/",
      },
      {
        name: "新闻传播学类（传播学、汉语言文学）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "10D及以上",
        lowwest23: "88",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "609",
        minus: "/",
      },
      {
        name: "行政管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "10D及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "599",
        minus: "/",
      },
      {
        name: "社会工作",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "10D及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "598",
        minus: "/",
      },
    ],
  },
  {
    name: "温州大学",
    condition: 100,
    calculate: (a: number, b: number, c: number, d: any) => {
      return a * 15 + b * 10 + c * 5;
    },
    major: [
      {
        name: "汉语言文学(师范)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "602",
        combinationDesc: "不限",
        admissions: 7,
        conditionDesc: "2A8B及以上",
        lowwest23: "125",
        lowwestDegreeDesc: "6A3B1C",
        lowwestGaoKao23: "623",
        minus: "21",
      },
      {
        name: "思想政治教育(师范)",
        condition: (values: string) => {
          return includePolitical(values);
        },
        lowThreeOne: "590",
        combinationDesc: "思想政治",
        admissions: 7,
        conditionDesc: "2A8B及以上",
        lowwest23: "125",
        lowwestDegreeDesc: "6A3B1C",
        lowwestGaoKao23: "618",
        minus: "28",
      },
      {
        name: "小学教育(师范)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "569",
        combinationDesc: "不限",
        admissions: 25,
        conditionDesc: "2A8B及以上",
        lowwest23: "125",
        lowwestDegreeDesc: "6A3B1C",
        lowwestGaoKao23: "618",
        minus: "49",
      },
      {
        name: "学前教育(师范)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "557",
        combinationDesc: "不限",
        admissions: 16,
        conditionDesc: "2A8B及以上",
        lowwest23: "125",
        lowwestDegreeDesc: "6A3B1C",
        lowwestGaoKao23: "592",
        minus: "35",
      },
      {
        name: "应用心理学(师范)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "563",
        combinationDesc: "不限",
        admissions: 15,
        conditionDesc: "2A8B及以上",
        lowwest23: "125",
        lowwestDegreeDesc: "6A3B1C",
        lowwestGaoKao23: "599",
        minus: "36",
      },
      {
        name: "教育技术学(师范)",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理",
        admissions: 7,
        conditionDesc: "2A8B及以上",
        lowwest23: "125",
        lowwestDegreeDesc: "6A3B1C",
        lowwestGaoKao23: "596",
        minus: "/",
      },
      {
        name: "数学与应用数学(师范)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "595",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "2A8B及以上",
        lowwest23: "125",
        lowwestDegreeDesc: "6A3B1C",
        lowwestGaoKao23: "603",
        minus: "8",
      },
      {
        name: "物理学(师范)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "577",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "2A8B及以上",
        lowwest23: "125",
        lowwestDegreeDesc: "6A3B1C",
        lowwestGaoKao23: "596",
        minus: "19",
      },
      {
        name: "化学(师范)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "564",
        combinationDesc: "物理+化学",
        admissions: 7,
        conditionDesc: "2A8B及以上",
        lowwest23: "125",
        lowwestDegreeDesc: "6A3B1C",
        lowwestGaoKao23: "594",
        minus: "30",
      },
      {
        name: "英语(师范)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "584",
        combinationDesc: "不限",
        admissions: 7,
        conditionDesc: "2A8B及以上",
        lowwest23: "125",
        lowwestDegreeDesc: "6A3B1C",
        lowwestGaoKao23: "612",
        minus: "28",
      },
      {
        name: "历史学(师范)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "604",
        combinationDesc: "不限",
        admissions: 7,
        conditionDesc: "2A8B及以上",
        lowwest23: "125",
        lowwestDegreeDesc: "6A3B1C",
        lowwestGaoKao23: "617",
        minus: "13",
      },
      {
        name: "生物科学(师范)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "561",
        combinationDesc: "物理+化学",
        admissions: 7,
        conditionDesc: "2A8B及以上",
        lowwest23: "125",
        lowwestDegreeDesc: "6A3B1C",
        lowwestGaoKao23: "606",
        minus: "45",
      },
      {
        name: "法学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "587",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "606",
        minus: "19",
      },
      {
        name: "行政管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "552",
        combinationDesc: "不限",
        admissions: 7,
        conditionDesc: "10B及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "590",
        minus: "38",
      },
      {
        name: "国际经贸规则",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 7,
        conditionDesc: "10B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "592",
        minus: "/",
      },
      {
        name: "电气工程及其自动化(卓工超豪示范班)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 12,
        conditionDesc: "10B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "591",
        minus: "/",
      },
      {
        name: "电子信息科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "560",
        combinationDesc: "物理+化学",
        admissions: 12,
        conditionDesc: "10B及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "587",
        minus: "27",
      },
      {
        name: "集成电路设计与集成系统",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "566",
        combinationDesc: "物理+化学",
        admissions: 7,
        conditionDesc: "10B及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "584",
        minus: "18",
      },
      {
        name: "材料科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "534",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "574",
        minus: "40",
      },
      {
        name: "应用化学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "539",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "577",
        minus: "38",
      },
      {
        name: "能源化学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "544",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "578",
        minus: "34",
      },
      {
        name: "工业工程",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "551",
        combinationDesc: "物理",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "587",
        minus: "36",
      },
      {
        name: "车辆工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "539",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "584",
        minus: "45",
      },
      {
        name: "机械工程(卓工超豪示范班)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "534",
        combinationDesc: "物理+化学",
        admissions: 15,
        conditionDesc: "10B及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "585",
        minus: "51",
      },
      {
        name: "智能制造工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "558",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "587",
        minus: "29",
      },
      {
        name: "建筑学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "541",
        combinationDesc: "不限",
        admissions: 15,
        conditionDesc: "10B及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "590",
        minus: "49",
      },
      {
        name: "土木工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "539",
        combinationDesc: "物理+化学",
        admissions: 12,
        conditionDesc: "10B及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "578",
        minus: "39",
      },
      {
        name: "城市地下空间工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "532",
        combinationDesc: "物理+化学",
        admissions: 7,
        conditionDesc: "10B及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "577",
        minus: "45",
      },
      {
        name: "计算机科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "571",
        combinationDesc: "物理+化学",
        admissions: 7,
        conditionDesc: "10B及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "597",
        minus: "26",
      },
      {
        name: "数据科学与大数据技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "552",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "590",
        minus: "38",
      },
      {
        name: "人工智能",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "564",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "588",
        minus: "24",
      },
      {
        name: "网络工程(卓工超豪示范班)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "572",
        combinationDesc: "物理+化学",
        admissions: 7,
        conditionDesc: "10B及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "594",
        minus: "22",
      },
      {
        name: "应用统计学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "558",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "589",
        minus: "31",
      },
      {
        name: "信息与计算科学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "555",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "590",
        minus: "35",
      },
      {
        name: "生态学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "532",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "582",
        minus: "50",
      },
      {
        name: "环境工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "538",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "585",
        minus: "47",
      },
      {
        name: "生物技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "547",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "584",
        minus: "37",
      },
    ],
  },
  {
    name: "浙江财经大学",
    condition: 85,
    calculate: (a: number, b: number, c: number, d: any) => {
      return a * 15 + b * 9 + c * 3;
    },
    major: [
      {
        name: "财政学类（财政学、税收学）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "585",
        combinationDesc: "不限",
        admissions: 20,
        conditionDesc: "10B及以上",
        lowwest23: "114分",
        lowwestDegreeDesc: "4A6B;语数2A，外语B",
        lowwestGaoKao23: "610",
        minus: "25",
      },
      {
        name: "公共管理类（劳动与社会保障、土地资源管理、行政管理、城市管理）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "560",
        combinationDesc: "不限",
        admissions: 20,
        conditionDesc: "10B及以上",
        lowwest23: "114分",
        lowwestDegreeDesc: "4A6B;语数2A，外语B",
        lowwestGaoKao23: "603",
        minus: "43",
      },
      {
        name: "城乡规划",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "会计学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "财务管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "审计学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "金融学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "投资学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "工商管理类（工商管理、人力资源管理、市场营销、供应链管理）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "552",
        combinationDesc: "不限",
        admissions: 25,
        conditionDesc: "10B及以上",
        lowwest23: "114分",
        lowwestDegreeDesc: "4A6B;语数2A，外语B",
        lowwestGaoKao23: "595",
        minus: "43",
      },
      {
        name: "电子商务",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "经济与贸易类（国际经济与贸易、经济学）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "582",
        combinationDesc: "不限",
        admissions: 30,
        conditionDesc: "10B及以上",
        lowwest23: "114分",
        lowwestDegreeDesc: "4A6B;语数2A，外语B",
        lowwestGaoKao23: "596",
        minus: "14",
      },
      {
        name: "法学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "624",
        minus: "/",
      },
      {
        name: "社会工作",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 15,
        conditionDesc: "10B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "597",
        minus: "/",
      },
      {
        name: "外国语言文学类（英语、商务英语、日语）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 30,
        conditionDesc: "10B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "592",
        minus: "/",
      },
      {
        name: "汉语言文学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "623",
        minus: "/",
      },
      {
        name: "新闻传播学类（广告学、网络与新媒体）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "569",
        combinationDesc: "不限",
        admissions: 20,
        conditionDesc: "10B及以上",
        lowwest23: "114分",
        lowwestDegreeDesc: "4A6B;语数2A，外语B",
        lowwestGaoKao23: "610",
        minus: "41",
      },
      {
        name: "金融科技",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "604",
        minus: "/",
      },
      {
        name: "金融工程",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "数字经济",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "工程管理",
        ccondition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理",
        admissions: 15,
        conditionDesc: "10B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "信息管理与信息系统",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "计算机类（人工智能、软件工程）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "569",
        combinationDesc: "物理+化学",
        admissions: 15,
        conditionDesc: "10B及以上",
        lowwest23: "120分",
        lowwestDegreeDesc: "5A5B；语、数2B或1A1C,外语C",
        lowwestGaoKao23: "602",
        minus: "33",
      },
      {
        name: "应用统计学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "数据科学与大数据技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "经济统计学",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "金融数学",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "会计学(中外合作办学)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "574",
        combinationDesc: "不限",
        admissions: 25,
        conditionDesc: "10B及以上",
        lowwest23: "102分",
        lowwestDegreeDesc: "2A8B；语、数1A1B；外语A",
        lowwestGaoKao23: "600",
        minus: "26",
      },
      {
        name: "市场营销(中外合作办学)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "570",
        combinationDesc: "不限",
        admissions: 15,
        conditionDesc: "10B及以上",
        lowwest23: "102分",
        lowwestDegreeDesc: "2A8B；语、数1A1B；外语A",
        lowwestGaoKao23: "594",
        minus: "24",
      },
    ],
  },
  {
    name: "温州医科大学",
    condition: 91,
    calculate: (a: number, b: number, c: number, d: number) => {
      return a * 10 + b * 9 + c * 7 + d * 4;
    },
    major: [
      {
        name: "眼视光医学（5+3一体化）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "653",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "6A4B及以上",
        lowwest23: "96",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "667",
        minus: "14",
      },
      {
        name: "临床医学（5+3一体化）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "645",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "6A4B及以上",
        lowwest23: "96",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "661",
        minus: "16",
      },
      {
        name: "临床医学（5+3一体化，儿科学方向）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "642",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "6A4B及以上",
        lowwest23: "96",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "653",
        minus: "11",
      },
      {
        name: "临床医学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "618",
        combinationDesc: "物理+化学",
        admissions: 60,
        conditionDesc: "6A4B及以上",
        lowwest23: "96",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "639",
        minus: "21",
      },
      {
        name: "眼视光医学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "644",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "6A4B及以上",
        lowwest23: "96",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "653",
        minus: "9",
      },
      {
        name: "口腔医学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "6A4B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "657",
        minus: "/",
      },
      {
        name: "麻醉学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "618",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "6A4B及以上",
        lowwest23: "96",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "635",
        minus: "17",
      },
      {
        name: "医学影像学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "609",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "6A4B及以上",
        lowwest23: "96",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "627",
        minus: "18",
      },
      {
        name: "放射医学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "6A4B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "621",
        minus: "/",
      },
      {
        name: "精神医学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "620",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "6A4B及以上",
        lowwest23: "96",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "619",
        minus: "-1",
      },
      {
        name: "应用心理学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "588",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "1A9B及以上",
        lowwest23: "91",
        lowwestDegreeDesc: "1A9B或2A8B或3A6B1C",
        lowwestGaoKao23: "603",
        minus: "15",
      },
      {
        name: "药学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "1A9B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "599",
        minus: "/",
      },
      {
        name: "生物制药",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "1A9B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "临床药学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "592",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "1A9B及以上",
        lowwest23: "91",
        lowwestDegreeDesc: "1A9B或2A8B或3A6B1C",
        lowwestGaoKao23: "616",
        minus: "24",
      },
      {
        name: "康复治疗学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "587",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "1A9B及以上",
        lowwest23: "91",
        lowwestDegreeDesc: "1A9B或2A8B或3A6B1C",
        lowwestGaoKao23: "594",
        minus: "7",
      },
      {
        name: "生物技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "578",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "1A9B及以上",
        lowwest23: "91",
        lowwestDegreeDesc: "1A9B或2A8B或3A6B1C",
        lowwestGaoKao23: "596",
        minus: "18",
      },
      {
        name: "生物医药工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "1A9B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "597",
        minus: "/",
      },
      {
        name: "医学检验技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "595",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "1A9B及以上",
        lowwest23: "91",
        lowwestDegreeDesc: "1A9B或2A8B或3A6B1C",
        lowwestGaoKao23: "609",
        minus: "14",
      },
      {
        name: "医学影像技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "584",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "1A9B及以上",
        lowwest23: "91",
        lowwestDegreeDesc: "1A9B或2A8B或3A6B1C",
        lowwestGaoKao23: "612",
        minus: "28",
      },
    ],
  },
  {
    name: "中国计量大学",
    condition: 110,
    calculate: (a: number, b: number, c: number, d: any) => {
      return a * 20 + b * 10;
    },
    major: [
      {
        name: "自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "588",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "601",
        minus: "13",
      },
      {
        name: "电气工程及其自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "581",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "602",
        minus: "21",
      },
      {
        name: "机械设计制造及其自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "564",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "599",
        minus: "35",
      },
      {
        name: "机械电子工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "559",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "598",
        minus: "39",
      },
      {
        name: "测控技术与仪器",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "575",
        combinationDesc: "物理+化学",
        admissions: 20,
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "601",
        minus: "26",
      },
      {
        name: "能源与动力工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "559",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "605",
        minus: "46",
      },
      {
        name: "智能感知工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "565",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "599",
        minus: "34",
      },
      {
        name: "电子信息工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 3,
        conditionDesc: "1A9B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "通信工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 2,
        conditionDesc: "1A9B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "计算机科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "583",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "602",
        minus: "19",
      },
      {
        name: "人工智能",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "571",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "599",
        minus: "28",
      },
      {
        name: "光电信息科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "566",
        combinationDesc: "物理+化学",
        admissions: 25,
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "599",
        minus: "33",
      },
      {
        name: "电子科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "551",
        combinationDesc: "物理+化学",
        admissions: 20,
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "601",
        minus: "50",
      },
      {
        name: "功能材料",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "543",
        combinationDesc: "物理+化学",
        admissions: 8,
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "590",
        minus: "47",
      },
      {
        name: "材料科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "568",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "588",
        minus: "20",
      },
      {
        name: "应用化学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "565",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "590",
        minus: "25",
      },
      {
        name: "质量管理工程",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理",
        admissions: 20,
        conditionDesc: "1A9B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "工业工程",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "551",
        combinationDesc: "物理",
        admissions: 10,
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "601",
        minus: "50",
      },
      {
        name: "安全工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 8,
        conditionDesc: "1A9B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "592",
        minus: "/",
      },
      {
        name: "环境工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "570",
        combinationDesc: "物理+化学",
        admissions: 8,
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "593",
        minus: "23",
      },
      {
        name: "信息管理与信息系统",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "565",
        combinationDesc: "物理",
        admissions: 15,
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "599",
        minus: "34",
      },
      {
        name: "数学与应用数学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "548",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "601",
        minus: "53",
      },
      {
        name: "应用物理学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 8,
        conditionDesc: "1A9B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "声学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "1A9B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "食品质量与安全",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "557",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "589",
        minus: "32",
      },
      {
        name: "生物工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "572",
        combinationDesc: "物理+化学",
        admissions: 15,
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "591",
        minus: "19",
      },
      {
        name: "工业设计",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "566",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "598",
        minus: "32",
      },
      {
        name: "标准化工程",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理",
        admissions: 8,
        conditionDesc: "1A9B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "592",
        minus: "/",
      },
    ],
  },
  {
    name: "浙江中医药大学",
    condition: 61,
    calculate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 7 + c * 4;
    },
    major: [
      {
        name: "中医学（5+3一体化）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "595",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "4A6B及以上",
        lowwest23: "94分",
        lowwestDegreeDesc: "8A2B",
        lowwestGaoKao23: "645",
        minus: "50",
      },
      {
        name: "临床医学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 20,
        conditionDesc: "4A6B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "609",
        minus: "/",
      },
      {
        name: "中医康复学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "552",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "4A6B及以上",
        lowwest23: "82分",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "601",
        minus: "49",
      },
      {
        name: "中药学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 20,
        conditionDesc: "10B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "588",
        minus: "/",
      },
      {
        name: "中草药栽培与鉴定",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "546",
        combinationDesc: "物理+化学",
        admissions: 20,
        conditionDesc: "10B及以上",
        lowwest23: "76分",
        lowwestDegreeDesc: "2A7B",
        lowwestGaoKao23: "587",
        minus: "41",
      },
      {
        name: "数据科学与大数据技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "544",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "10B及以上",
        lowwest23: "79分",
        lowwestDegreeDesc: "3A7B",
        lowwestGaoKao23: "588",
        minus: "44",
      },
      {
        name: "护理学",
        condition: (values: string) => {
          return includeChemical(values);
        },
        lowThreeOne: "551",
        combinationDesc: "化学",
        admissions: 40,
        conditionDesc: "7B3C及以上",
        lowwest23: "76分",
        lowwestDegreeDesc: "2A7B",
        lowwestGaoKao23: "582",
        minus: "31",
      },
      {
        name: "公共事业管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "537",
        combinationDesc: "不限",
        admissions: 20,
        conditionDesc: "7B3C及以上",
        lowwest23: "76分",
        lowwestDegreeDesc: "2A7B",
        lowwestGaoKao23: "584",
        minus: "47",
      },
      {
        name: "健康服务与管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 20,
        conditionDesc: "7B3C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "581",
        minus: "/",
      },
      {
        name: "国际商务",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "7B3C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "579",
        minus: "/",
      },
    ],
  },
  {
    name: "浙江农林大学",
    condition: 90,
    calculate: (a: number, b: number, c: number, d: any) => {
      return a * 15 + b * 10 + c * 5;
    },
    major: [
      {
        name: "农学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "4A4B2C",
        lowwestGaoKao23: "589",
        minus: "/",
      },
      {
        name: "植物保护",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "4A4B2C",
        lowwestGaoKao23: "582",
        minus: "/",
      },
      {
        name: "林学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "4A4B2C",
        lowwestGaoKao23: "586",
        minus: "/",
      },
      {
        name: "生物技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "4A4B2C",
        lowwestGaoKao23: "587",
        minus: "/",
      },
      {
        name: "农业资源与环境",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "4A4B2C",
        lowwestGaoKao23: "582",
        minus: "/",
      },
      {
        name: "环境科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "4A4B2C",
        lowwestGaoKao23: "581",
        minus: "/",
      },
      {
        name: "测绘工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "5A3B1C",
        lowwestGaoKao23: "589",
        minus: "/",
      },
      {
        name: "木材科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "4A4B2C",
        lowwestGaoKao23: "583",
        minus: "/",
      },
      {
        name: "家具设计与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "4A4B2C",
        lowwestGaoKao23: "580",
        minus: "/",
      },
      {
        name: "应用化学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "4A4B2C",
        lowwestGaoKao23: "583",
        minus: "/",
      },
      {
        name: "高分子材料与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "4A4B2C",
        lowwestGaoKao23: "585",
        minus: "/",
      },
      {
        name: "土木工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "4A5B1C",
        lowwestGaoKao23: "579",
        minus: "/",
      },
      {
        name: "动物科学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "4A4B2C",
        lowwestGaoKao23: "582",
        minus: "/",
      },
      {
        name: "动物医学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "8B2C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "587",
        minus: "/",
      },
      {
        name: "工业设计",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 15,
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "4A5B1C",
        lowwestGaoKao23: "589",
        minus: "/",
      },
      {
        name: "应用统计学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "4A4B2C",
        lowwestGaoKao23: "593",
        minus: "/",
      },
      {
        name: "数据科学与大数据技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "4A5B1C",
        lowwestGaoKao23: "596",
        minus: "/",
      },
      {
        name: "计算机科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "4A5B1C",
        lowwestGaoKao23: "597",
        minus: "/",
      },
      {
        name: "智能科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "4A5B1C",
        lowwestGaoKao23: "594",
        minus: "/",
      },
      {
        name: "物联网工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "4A5B1C",
        lowwestGaoKao23: "594",
        minus: "/",
      },
      {
        name: "机械设计制造及其自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 30,
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "4A5B1C",
        lowwestGaoKao23: "588",
        minus: "/",
      },
      {
        name: "电子信息工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "4A5B1C",
        lowwestGaoKao23: "592",
        minus: "/",
      },
      {
        name: "食品科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "4A4B2C",
        lowwestGaoKao23: "587",
        minus: "/",
      },
      {
        name: "食品质量与安全",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "4A4B2C",
        lowwestGaoKao23: "586",
        minus: "/",
      },
      {
        name: "中药学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "4A4B2C",
        lowwestGaoKao23: "588",
        minus: "/",
      },
      {
        name: "生物制药",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "4A4B2C",
        lowwestGaoKao23: "589",
        minus: "/",
      },
      {
        name: "园艺",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "4A4B2C",
        lowwestGaoKao23: "580",
        minus: "/",
      },
      {
        name: "茶学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "4A4B2C",
        lowwestGaoKao23: "580",
        minus: "/",
      },
      {
        name: "园林",
        condition: (values: string) => {
          return includeBio(values);
        },
        lowThreeOne: "/",
        combinationDesc: "生物",
        admissions: 15,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "4A4B2C",
        lowwestGaoKao23: "591",
        minus: "/",
      },
      {
        name: "金融工程",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理",
        admissions: 5,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "5A3B1C",
        lowwestGaoKao23: "587",
        minus: "/",
      },
      {
        name: "地理信息科学",
        condition: (values: string) => {
          return includeGeography(values);
        },
        lowThreeOne: "/",
        combinationDesc: "地理",
        admissions: 15,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "5A3B1C",
        lowwestGaoKao23: "594",
        minus: "/",
      },
      {
        name: "风景园林",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "4A4B2C",
        lowwestGaoKao23: "592",
        minus: "/",
      },
      {
        name: "城乡规划",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "5A3B1C",
        lowwestGaoKao23: "590",
        minus: "/",
      },
      {
        name: "建筑学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "5A3B1C",
        lowwestGaoKao23: "591",
        minus: "/",
      },
      {
        name: "农林经济管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "5A3B1C",
        lowwestGaoKao23: "586",
        minus: "/",
      },
      {
        name: "国际经济与贸易",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "5A3B1C",
        lowwestGaoKao23: "588",
        minus: "/",
      },
      {
        name: "工商管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "5A3B1C",
        lowwestGaoKao23: "588",
        minus: "/",
      },
      {
        name: "电子商务",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "5A3B1C",
        lowwestGaoKao23: "586",
        minus: "/",
      },
      {
        name: "法学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 20,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "5A3B1C",
        lowwestGaoKao23: "603",
        minus: "/",
      },
      {
        name: "英语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "5A3B1C",
        lowwestGaoKao23: "584",
        minus: "/",
      },
      {
        name: "文化产业管理（茶文化）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "8B2C及以上",
        lowwest23: "110",
        lowwestDegreeDesc: "5A3B1C",
        lowwestGaoKao23: "586",
        minus: "/",
      },
    ],
  },
  {
    name: "浙江海洋大学",
    condition: 80,
    calculate: (a: number, b: number, c: number, d: number) => {
      return a * 15 + b * 10 + c * 6 + d * 1;
    },
    major: [
      {
        name: "英语（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "567",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "8B2C及以上",
        lowwest23: "116",
        lowwestDegreeDesc: "4A5B1C",
        lowwestGaoKao23: "590",
        minus: "23",
      },
      {
        name: "汉语言文学（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "576",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "8B2C及以上",
        lowwest23: "121",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "595",
        minus: "19",
      },
      {
        name: "小学教育（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "548",
        combinationDesc: "不限",
        admissions: 30,
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "3A7B",
        lowwestGaoKao23: "597",
        minus: "49",
      },
      {
        name: "历史学（师范）",
        condition: (values: string) => {
          return includeHistory(values);
        },
        lowThreeOne: "573",
        combinationDesc: "历史",
        admissions: 10,
        conditionDesc: "8B2C及以上",
        lowwest23: "116",
        lowwestDegreeDesc: "4A5B1C",
        lowwestGaoKao23: "594",
        minus: "21",
      },
      {
        name: "数学与应用数学（师范）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "526",
        combinationDesc: "物理+化学",
        admissions: 15,
        conditionDesc: "5B5C及以上",
        lowwest23: "116",
        lowwestDegreeDesc: "4A5B1C",
        lowwestGaoKao23: "582",
        minus: "56",
      },
      {
        name: "物理学（师范）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "516",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "5B5C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "3A7B",
        lowwestGaoKao23: "576",
        minus: "60",
      },
      {
        name: "船舶与海洋工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "516",
        combinationDesc: "物理+化学",
        admissions: 15,
        conditionDesc: "5B5C及以上",
        lowwest23: "111",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "576",
        minus: "60",
      },
      {
        name: "水产养殖学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "507",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "5B5C及以上",
        lowwest23: "112",
        lowwestDegreeDesc: "4A4B2C",
        lowwestGaoKao23: "573",
        minus: "66",
      },
    ],
  },
  {
    name: "浙江科技大学",
    // 不一样的计算方式
    specialCalculate: (a: number, b: number, c: number, d: any) => {
      return a + b >= 6;
    },
    major: [
      {
        name: "车辆工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "541",
        combinationDesc: "物理+化学",
        admissions: 30,
        conditionDesc: "A+B≥6",
        lowwest23: "105",
        lowwestDegreeDesc: "1A9B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "生物工程类（中德联合培养）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "A+B≥6",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "562",
        minus: "/",
      },
      {
        name: "机械类（中德联合培养）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 20,
        conditionDesc: "A+B≥6",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "571",
        minus: "/",
      },
      {
        name: "计算机类（中德联合培养）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "557",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "A+B≥6",
        lowwest23: "95",
        lowwestDegreeDesc: "9B1C",
        lowwestGaoKao23: "580",
        minus: "23",
      },
      {
        name: "土木类（中德联合培养）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "535",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "A+B≥6",
        lowwest23: "95",
        lowwestDegreeDesc: "9B1C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "机器人工程（中澳联合培养）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "549",
        combinationDesc: "物理+化学",
        admissions: 30,
        conditionDesc: "A+B≥6",
        lowwest23: "95",
        lowwestDegreeDesc: "9B1C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "*土木工程（中法合作办学）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "521",
        combinationDesc: "物理+化学",
        admissions: 55,
        conditionDesc: "A+B≥6",
        lowwest23: "95",
        lowwestDegreeDesc: "9B1C",
        lowwestGaoKao23: "561",
        minus: "40",
      },
      {
        name: "*土木工程（中德合作办学）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "524",
        combinationDesc: "物理+化学",
        admissions: 30,
        conditionDesc: "A+B≥6",
        lowwest23: "95",
        lowwestDegreeDesc: "9B1C",
        lowwestGaoKao23: "561",
        minus: "37",
      },
      {
        name: "国际商务（中澳联合培养）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "504",
        combinationDesc: "不限",
        admissions: 30,
        conditionDesc: "A+B≥6",
        lowwest23: "100",
        lowwestDegreeDesc: "10B",
        lowwestGaoKao23: "569",
        minus: "65",
      },
      {
        name: "*经济学（中美合作办学）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 20,
        conditionDesc: "A+B≥6",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "560",
        minus: "/",
      },
    ],
  },
  {
    name: "丽水学院",
    specialCalculate: (a: number, b: number, c: number, d: any) => {
      return a + b >= 5;
    },
    major: [
      {
        name: "小学教育（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "552",
        combinationDesc: "不限",
        admissions: 60,
        conditionDesc: "A+B≥5",
        lowwest23: "70",
        lowwestDegreeDesc: "10B",
        lowwestGaoKao23: "580",
        minus: "28",
      },
      {
        name: "学前教育（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "511",
        combinationDesc: "不限",
        admissions: 45,
        conditionDesc: "A+B≥5",
        lowwest23: "70",
        lowwestDegreeDesc: "10B",
        lowwestGaoKao23: "571",
        minus: "60",
      },
      {
        name: "民族学",
        condition: (values: string) => {
          return includeHistory(values);
        },
        lowThreeOne: "520",
        combinationDesc: "历史",
        admissions: 15,
        conditionDesc: "A+B≥5",
        lowwest23: "70",
        lowwestDegreeDesc: "10B",
        lowwestGaoKao23: "562",
        minus: "42",
      },
    ],
  },
  {
    name: "湖州师范学院",
    specialCalculate: (a: number, b: number, c: number, d: any) => {
      return a + b >= 5;
    },
    major: [
      {
        name: "小学教育(师范)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "566",
        combinationDesc: "不限",
        admissions: 20,
        conditionDesc: "A+B≥7(A≥2)",
        lowwest23:
          "（学考A等5门及以上）考生超过该组计划数6倍，按实际直接获得综合测试资格人数确定",
        lowwestDegreeDesc:
          "（学考A等5门及以上）考生超过该组计划数6倍，按实际直接获得综合测试资格人数确定",
        lowwestGaoKao23: "607",
        minus: "41",
      },
      {
        name: "历史学（师范)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "567",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "A+B≥7(A≥1)",
        lowwest23:
          "（学考A等5门及以上）考生超过该组计划数6倍，按实际直接获得综合测试资格人数确定",
        lowwestDegreeDesc:
          "（学考A等5门及以上）考生超过该组计划数6倍，按实际直接获得综合测试资格人数确定",
        lowwestGaoKao23: "596",
        minus: "29",
      },
      {
        name: "英语(师范)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "569",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "A+B≥7(A≥1)",
        lowwest23:
          "（学考A等5门及以上）考生超过该组计划数6倍，按实际直接获得综合测试资格人数确定",
        lowwestDegreeDesc:
          "（学考A等5门及以上）考生超过该组计划数6倍，按实际直接获得综合测试资格人数确定",
        lowwestGaoKao23: "587",
        minus: "18",
      },
      {
        name: "学前教育（师范)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "537",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "A+B≥7(A≥1)",
        lowwest23: "90",
        lowwestDegreeDesc: "3A4B3C",
        lowwestGaoKao23: "590",
        minus: "53",
      },
      {
        name: "数学与应用数学（师范）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "576",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "A+B≥7(A≥1)",
        lowwest23: "0",
        lowwestDegreeDesc: "0",
        lowwestGaoKao23: "584",
        minus: "8",
      },
      {
        name: "物理学（师范)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "553",
        combinationDesc: "物理+化学",
        admissions: 15,
        conditionDesc: "A+B≥7(A≥1)",
        lowwest23: "108",
        lowwestDegreeDesc: "3A7B",
        lowwestGaoKao23: "577",
        minus: "24",
      },
      {
        name: "化学（师范)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "559",
        combinationDesc: "物理+化学",
        admissions: 15,
        conditionDesc: "A+B≥7(A≥1)",
        lowwest23: "0",
        lowwestDegreeDesc: "0",
        lowwestGaoKao23: "586",
        minus: "27",
      },
      {
        name: "水产养殖学(卓越班)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "513",
        combinationDesc: "物理+化学",
        admissions: 20,
        conditionDesc: "A+B≥5",
        lowwest23: "78",
        lowwestDegreeDesc: "2A4B4C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "计算机科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "536",
        combinationDesc: "物理+化学",
        admissions: 15,
        conditionDesc: "A+B≥5",
        lowwest23: "96",
        lowwestDegreeDesc: "2A7B1C",
        lowwestGaoKao23: "579",
        minus: "43",
      },
      {
        name: "数据科学与大数据技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "530",
        combinationDesc: "物理+化学",
        admissions: 15,
        conditionDesc: "A+B≥5",
        lowwest23: "0",
        lowwestDegreeDesc: "0",
        lowwestGaoKao23: "578",
        minus: "48",
      },
      {
        name: "电气工程及其自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "534",
        combinationDesc: "物理+化学",
        admissions: 15,
        conditionDesc: "A+B≥5",
        lowwest23: "78",
        lowwestDegreeDesc: "1A6B3C",
        lowwestGaoKao23: "574",
        minus: "40",
      },
      {
        name: "生物工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 15,
        conditionDesc: "A+B≥5",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "569",
        minus: "/",
      },
      {
        name: "护理学",
        condition: (values: string) => {
          return includeChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "化学",
        admissions: 20,
        conditionDesc: "A+B≥5",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "569",
        minus: "/",
      },
      {
        name: "建筑学",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理",
        admissions: 15,
        conditionDesc: "A+B≥5",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "568",
        minus: "/",
      },
      {
        name: "旅游管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "A+B≥5",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "568",
        minus: "/",
      },
      {
        name: "电子商务",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "A+B≥5",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "568",
        minus: "/",
      },
      {
        name: "国际经济与贸易",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "A+B≥5",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "569",
        minus: "/",
      },
    ],
  },
  {
    name: "嘉兴大学",
    specialCalculate: (a: number, b: number, c: number, d: any) => {
      return a + b >= 4 || a >= 2;
    },
    major: [
      {
        name: "小学教育（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "570",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "A≥3或A+B≥5",
        lowwest23: "76",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "586",
        minus: "16",
      },
      {
        name: "学前教育（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "457",
        combinationDesc: "不限",
        admissions: 14,
        conditionDesc: "A≥3或A+B≥5",
        lowwest23: "76",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "573",
        minus: "116",
      },
      {
        name: "日语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 7,
        conditionDesc: "A≥2或A+B≥4",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "564",
        minus: "/",
      },
      {
        name: "市场营销",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 7,
        conditionDesc: "A≥2或A+B≥4",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "566",
        minus: "/",
      },
      {
        name: "物流管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 7,
        conditionDesc: "A≥2或A+B≥4",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "567",
        minus: "/",
      },
      {
        name: "国际经济与贸易",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 7,
        conditionDesc: "A≥2或A+B≥4",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "567",
        minus: "/",
      },
      {
        name: "跨境电子商务",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 7,
        conditionDesc: "A≥2或A+B≥4",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "567",
        minus: "/",
      },
      {
        name: "服装设计与工程",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "533",
        combinationDesc: "不限",
        admissions: 7,
        conditionDesc: "A≥2或A+B≥4",
        lowwest23: "67",
        lowwestDegreeDesc: "1A7B2C",
        lowwestGaoKao23: "566",
        minus: "33",
      },
      {
        name: "化学工程与工艺",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "537",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "A≥2或A+B≥4",
        lowwest23: "67",
        lowwestDegreeDesc: "1A7B2C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "应用化学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "545",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "A≥2或A+B≥4",
        lowwest23: "67",
        lowwestDegreeDesc: "1A7B2C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "纺织工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "531",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "A≥2或A+B≥4",
        lowwest23: "67",
        lowwestDegreeDesc: "1A7B2C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "轻化工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "516",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "A≥2或A+B≥4",
        lowwest23: "67",
        lowwestDegreeDesc: "1A7B2C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "高分子材料与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "A≥2或A+B≥4",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "非织造材料与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "A≥2或A+B≥4",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "工程管理",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "537",
        combinationDesc: "物理",
        admissions: 7,
        conditionDesc: "A≥2或A+B≥4",
        lowwest23: "70",
        lowwestDegreeDesc: "2A6B2C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "工业设计",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "539",
        combinationDesc: "物理+化学",
        admissions: 7,
        conditionDesc: "A≥2或A+B≥4",
        lowwest23: "70",
        lowwestDegreeDesc: "2A6B2C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "车辆工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "544",
        combinationDesc: "物理+化学",
        admissions: 7,
        conditionDesc: "A≥2或A+B≥4",
        lowwest23: "70",
        lowwestDegreeDesc: "2A6B2C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "建筑环境与能源应用工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "529",
        combinationDesc: "物理+化学",
        admissions: 7,
        conditionDesc: "A≥2或A+B≥4",
        lowwest23: "70",
        lowwestDegreeDesc: "2A6B2C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "土木工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "528",
        combinationDesc: "物理+化学",
        admissions: 16,
        conditionDesc: "A≥2或A+B≥4",
        lowwest23: "70",
        lowwestDegreeDesc: "2A6B2C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
    ],
  },
  {
    name: "台州学院",
    specialCalculate: (a: number, b: number, c: number, d: any) => {
      return a + b >= 6;
    },
    major: [
      {
        name: "汉语言文学（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "570",
        combinationDesc: "不限",
        admissions: 20,
        conditionDesc: "A+B≥6",
        lowwest23: "84",
        lowwestDegreeDesc: "2A8B",
        lowwestGaoKao23: "590",
        minus: "20",
      },
      {
        name: "小学教育（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "532",
        combinationDesc: "不限",
        admissions: 60,
        conditionDesc: "A+B≥6",
        lowwest23: "84",
        lowwestDegreeDesc: "2A8B",
        lowwestGaoKao23: "590",
        minus: "58",
      },
      {
        name: "学前教育（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "529",
        combinationDesc: "不限",
        admissions: 30,
        conditionDesc: "A+B≥6",
        lowwest23: "84",
        lowwestDegreeDesc: "2A8B",
        lowwestGaoKao23: "569",
        minus: "40",
      },
      {
        name: "历史学（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "554",
        combinationDesc: "不限",
        admissions: 15,
        conditionDesc: "A+B≥6",
        lowwest23: "84",
        lowwestDegreeDesc: "2A8B",
        lowwestGaoKao23: "586",
        minus: "32",
      },
      {
        name: "思想政治教育（师范）",
        condition: (values: string) => {
          return includePolitical(values);
        },
        lowThreeOne: "556",
        combinationDesc: "思想政治",
        admissions: 15,
        conditionDesc: "A+B≥6",
        lowwest23: "84",
        lowwestDegreeDesc: "2A8B",
        lowwestGaoKao23: "587",
        minus: "31",
      },
      {
        name: "数学与应用数学（师范）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "555",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "A+B≥6",
        lowwest23: "86",
        lowwestDegreeDesc: "5A4B",
        lowwestGaoKao23: "566",
        minus: "11",
      },
      {
        name: "科学教育（师范）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "558",
        combinationDesc: "物理",
        admissions: 20,
        conditionDesc: "A+B≥6",
        lowwest23: "86",
        lowwestDegreeDesc: "5A4B",
        lowwestGaoKao23: "576",
        minus: "18",
      },
      {
        name: "英语（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "520",
        combinationDesc: "不限",
        admissions: 20,
        conditionDesc: "A+B≥6",
        lowwest23: "82",
        lowwestDegreeDesc: "3A5B",
        lowwestGaoKao23: "580",
        minus: "60",
      },
    ],
  },
  {
    name: "绍兴文理学院",
    specialCalculate: (a: number, b: number, c: number, d: any) => {
      return a === 3 || a + b >= 5;
    },
    major: [
      {
        name: "土木工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 20,
        conditionDesc: "3A或A+B≥5",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "地质工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 15,
        conditionDesc: "3A或A+B≥5",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "工程管理",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理",
        admissions: 15,
        conditionDesc: "3A或A+B≥5",
        lowwest23: "81分",
        lowwestDegreeDesc: "1A9B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "纺织工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 25,
        conditionDesc: "3A或A+B≥5",
        lowwest23: "79分",
        lowwestDegreeDesc: "1A8B1C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "轻化工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 20,
        conditionDesc: "3A或A+B≥5",
        lowwest23: "79分",
        lowwestDegreeDesc: "1A8B1C",
        lowwestGaoKao23: "564",
        minus: "/",
      },
      {
        name: "高分子材料与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 20,
        conditionDesc: "3A或A+B≥5",
        lowwest23: "79分",
        lowwestDegreeDesc: "1A8B1C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "新能源材料与器件",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 20,
        conditionDesc: "3A或A+B≥5",
        lowwest23: "79分",
        lowwestDegreeDesc: "1A8B1C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
    ],
  },
  {
    name: "浙江外国语学院",
    specialCalculate: (a: number, b: number, c: number, d: any) => {
      return a >= 1;
    },
    major: [
      {
        name: "汉语言文学(师范)",
        condition: (values: string) => {
          return includeHistory(values);
        },
        lowThreeOne: "/",
        combinationDesc: "历史",
        admissions: "35",
        conditionDesc: "1A及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23598: "/",
        minus: "/",
      },
      {
        name: "小学教育(师范)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "556",
        combinationDesc: "不限",
        admissions: 20,
        conditionDesc: "1A及以上",
        lowwest23: "96",
        lowwestDegreeDesc: "1A9B",
        lowwestGaoKao23: "595",
        minus: "39",
      },
      {
        name: "西班牙语(中外合作办学)(旅游方向)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "534",
        combinationDesc: "不限",
        admissions: 20,
        conditionDesc: "1A及以上",
        lowwest23: "66",
        lowwestDegreeDesc: "6B4C",
        lowwestGaoKao23: "560",
        minus: "26",
      },
      {
        name: "意大利语(中外合作办学)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "532",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "1A及以上",
        lowwest23: "60",
        lowwestDegreeDesc: "5B5C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "阿拉伯语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "1A及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "564",
        minus: "/",
      },
      {
        name: "日语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "1A及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "566",
        minus: "/",
      },
      {
        name: "朝鲜语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "1A及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "562",
        minus: "/",
      },
      {
        name: "意大利语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "1A及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "567",
        minus: "/",
      },
      {
        name: "葡萄牙语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "1A及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "567",
        minus: "/",
      },
      {
        name: "俄语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "1A及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "561",
        minus: "/",
      },
    ],
  },
  {
    name: "宁波工程学院",
    specialCalculate: (a: number, b: number, c: number, d: any) => {
      return a >= 2 || a + b >= 5;
    },
    major: [
      {
        name: "建筑学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "501",
        combinationDesc: "不限",
        admissions: 15,
        conditionDesc: "A≥2或者A+B≥5",
        lowwest23: "55",
        lowwestDegreeDesc: "1A9B，A为非语数外或1A6B3C，A为语数外",
        lowwestGaoKao23: "570",
        minus: "69",
      },
      {
        name: "工业设计",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "506",
        combinationDesc: "物理+化学",
        admissions: 15,
        conditionDesc: "A≥2或者A+B≥5",
        lowwest23: "51",
        lowwestDegreeDesc: "1A7B2C，A为非语数外或1A4B5C，A为语数外",
        lowwestGaoKao23: "554",
        minus: "48",
      },
    ],
  },
  {
    name: "衢州学院",
    specialCalculate: (a: number, b: number, c: number, d: any) => {
      return a >= 3 || a + b >= 5;
    },
    major: [
      {
        name: "学前教育（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "507",
        combinationDesc: "不限",
        admissions: 15,
        conditionDesc: "A≥3或者A+B≥5",
        lowwest23: "67",
        lowwestDegreeDesc: "2A5B3C或1A7B2C",
        lowwestGaoKao23: "570",
        minus: "63",
      },
      {
        name: "汉语言文学（师范）",
        condition: (values: string) => {
          return includeHistory(values);
        },
        lowThreeOne: "539",
        combinationDesc: "历史",
        admissions: 20,
        conditionDesc: "A≥3或者A+B≥5",
        lowwest23: "73",
        lowwestDegreeDesc: "4A3B3C或3A5B2C",
        lowwestGaoKao23: "583",
        minus: "44",
      },
      {
        name: "英语（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "542",
        combinationDesc: "不限",
        admissions: 15,
        conditionDesc: "A≥3或者A+B≥5",
        lowwest23: "67",
        lowwestDegreeDesc: "2A5B3C或1A7B2C",
        lowwestGaoKao23: "575",
        minus: "33",
      },
    ],
  },
  {
    name: "浙大城市学院",
    condition: 60,
    calculate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 8 + c * 6;
    },
    major: [
      {
        name: "英语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 20,
        conditionDesc: "10C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "579",
        minus: "/",
      },
      {
        name: "护理学",
        condition: (values: string) => {
          return includeChemical(values);
        },
        lowThreeOne: "538",
        combinationDesc: "化学",
        admissions: 40,
        conditionDesc: "10C及以上",
        lowwest23: "84",
        lowwestDegreeDesc: "2A8B",
        lowwestGaoKao23: "590",
        minus: "52",
      },
      {
        name: "土木工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 20,
        conditionDesc: "10C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "579",
        minus: "/",
      },
      {
        name: "金融学（中外合作办学）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "534",
        combinationDesc: "不限",
        admissions: 30,
        conditionDesc: "10C及以上",
        lowwest23: "85",
        lowwestDegreeDesc: "1A8B1C",
        lowwestGaoKao23: "569",
        minus: "35",
      },
      {
        name: "会展经济与管理（中外合作办学）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "527",
        combinationDesc: "不限",
        admissions: 40,
        conditionDesc: "10C及以上",
        lowwest23: "79",
        lowwestDegreeDesc: "1A8B1C",
        lowwestGaoKao23: "569",
        minus: "42",
      },
      {
        name: "工业设计（中外合作办学）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "528",
        combinationDesc: "物理+化学",
        admissions: 50,
        conditionDesc: "10C及以上",
        lowwest23: "75",
        lowwestDegreeDesc: "8B2C",
        lowwestGaoKao23: "573",
        minus: "45",
      },
    ],
  },
  {
    name: "温州肯恩大学",
    condition: 80,
    calculate: (a: number, b: number, c: number, d: any) => {
      return a * 15 + b * 10 + c * 5;
    },
    major: [
      {
        name: "经济学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "538",
        combinationDesc: "不限",
        admissions: 11,
        conditionDesc: "6B4C及以上",
        lowwest23: "90分",
        lowwestDegreeDesc: "8B2C",
        lowwestGaoKao23: "591",
        minus: "53",
      },
      {
        name: "金融学(国际金融方向)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "544",
        combinationDesc: "不限",
        admissions: 17,
        conditionDesc: "6B4C及以上",
        lowwest23: "90分",
        lowwestDegreeDesc: "8B2C",
        lowwestGaoKao23: "574",
        minus: "30",
      },
      {
        name: "国际商务",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "551",
        combinationDesc: "不限",
        admissions: 8,
        conditionDesc: "6B4C及以上",
        lowwest23: "90分",
        lowwestDegreeDesc: "8B2C",
        lowwestGaoKao23: "572",
        minus: "21",
      },
      {
        name: "会计学(国际会计方向)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "548",
        combinationDesc: "不限",
        admissions: 19,
        conditionDesc: "6B4C及以上",
        lowwest23: "90分",
        lowwestDegreeDesc: "8B2C",
        lowwestGaoKao23: "572",
        minus: "24",
      },
      {
        name: "市场营销（国际方向)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "541",
        combinationDesc: "不限",
        admissions: 6,
        conditionDesc: "6B4C及以上",
        lowwest23: "90分",
        lowwestDegreeDesc: "8B2C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "英语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "517",
        combinationDesc: "不限",
        admissions: 8,
        conditionDesc: "6B4C及以上",
        lowwest23: "90分",
        lowwestDegreeDesc: "8B2C",
        lowwestGaoKao23: "570",
        minus: "53",
      },
      {
        name: "心理学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "555",
        combinationDesc: "不限",
        admissions: 8,
        conditionDesc: "6B4C及以上",
        lowwest23: "90分",
        lowwestDegreeDesc: "8B2C",
        lowwestGaoKao23: "570",
        minus: "15",
      },
      {
        name: "传播学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "548",
        combinationDesc: "不限",
        admissions: 14,
        conditionDesc: "6B4C及以上",
        lowwest23: "90分",
        lowwestDegreeDesc: "8B2C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "建筑学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "543",
        combinationDesc: "不限",
        admissions: 7,
        conditionDesc: "6B4C及以上",
        lowwest23: "90分",
        lowwestDegreeDesc: "8B2C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "管理科学",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "523",
        combinationDesc: "物理",
        admissions: 7,
        conditionDesc: "6B4C及以上",
        lowwest23: "90分",
        lowwestDegreeDesc: "8B2C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "生物科学(细胞与分子方向)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "528",
        combinationDesc: "物理+化学",
        admissions: 9,
        conditionDesc: "6B4C及以上",
        lowwest23: "90分",
        lowwestDegreeDesc: "8B2C",
        lowwestGaoKao23: "574",
        minus: "46",
      },
      {
        name: "数学与应用数学(数据分析方向)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "561",
        combinationDesc: "物理+化学",
        admissions: 9,
        conditionDesc: "6B4C及以上",
        lowwest23: "90分",
        lowwestDegreeDesc: "8B2C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "计算机科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "532",
        combinationDesc: "物理+化学",
        admissions: 21,
        conditionDesc: "6B4C及以上",
        lowwest23: "90分",
        lowwestDegreeDesc: "8B2C",
        lowwestGaoKao23: "582",
        minus: "50",
      },
      {
        name: "化学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 3,
        conditionDesc: "6B4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "环境科学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 3,
        conditionDesc: "6B4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
    ],
  },
  {
    name: "浙江万里学院",
    condition: 60,
    calculate: (a: number, b: number, c: number, d: number) => {
      return a * 12 + b * 9 + c * 6 + d * 4;
    },
    major: [
      {
        name: "日语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "522",
        combinationDesc: "不限",
        admissions: 20,
        conditionDesc: "4B6C及以上",
        lowwest23: "73",
        lowwestDegreeDesc: "5B3C1D",
        lowwestGaoKao23: "540",
        minus: "18",
      },
      {
        name: "社会工作",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "536",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "4B6C及以上",
        lowwest23: "82",
        lowwestDegreeDesc: "8B1C1D",
        lowwestGaoKao23: "547",
        minus: "11",
      },
      {
        name: "物流管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "506",
        combinationDesc: "不限",
        admissions: 15,
        conditionDesc: "4B6C及以上",
        lowwest23: "81",
        lowwestDegreeDesc: "7B3C",
        lowwestGaoKao23: "539",
        minus: "33",
      },
      {
        name: "金融工程",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理",
        admissions: 10,
        conditionDesc: "4B6C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "电子信息类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "515",
        combinationDesc: "物理+化学",
        admissions: 20,
        conditionDesc: "2B8C及以上",
        lowwest23: "84",
        lowwestDegreeDesc: "8B2C",
        lowwestGaoKao23: "543",
        minus: "28",
      },
      {
        name: "生物工程类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "494",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "2B8C及以上",
        lowwest23: "87",
        lowwestDegreeDesc: "9B1C",
        lowwestGaoKao23: "542",
        minus: "48",
      },
      {
        name: "环境科学与工程类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "512",
        combinationDesc: "物理+化学",
        admissions: 20,
        conditionDesc: "2B8C及以上",
        lowwest23: "79",
        lowwestDegreeDesc: "7B2C1D",
        lowwestGaoKao23: "540",
        minus: "28",
      },
      {
        name: "食品科学与工程类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "514",
        combinationDesc: "物理+化学",
        admissions: 20,
        conditionDesc: "2B8C及以上",
        lowwest23: "84",
        lowwestDegreeDesc: "8B2C",
        lowwestGaoKao23: "541",
        minus: "27",
      },
      {
        name: "区块链工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "2B8C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "540",
        minus: "/",
      },
      {
        name: "网络空间安全",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "2B8C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "541",
        minus: "/",
      },
      {
        name: "创业管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "2B8C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "540",
        minus: "/",
      },
      {
        name: "智能影像工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "2B8C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "547",
        minus: "/",
      },
      {
        name: "机械电子工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "2B8C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "542",
        minus: "/",
      },
      {
        name: "供应链管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 40,
        conditionDesc: "10C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "542",
        minus: "/",
      },
      {
        name: "国际经济与贸易（中外2+2双学位班）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "10C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "543",
        minus: "/",
      },
      {
        name: "会展经济与管理（中德2+2双学位班）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "531",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "10C及以上",
        lowwest23: "75",
        lowwestDegreeDesc: "7B3D",
        lowwestGaoKao23: "541",
        minus: "10",
      },
      {
        name: "广告学（中德2+2双学位班）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "522",
        combinationDesc: "不限",
        admissions: 20,
        conditionDesc: "10C及以上",
        lowwest23: "74",
        lowwestDegreeDesc: "6B2C2D",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "视觉传达设计（中德2+2双学位班）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "528",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "10C及以上",
        lowwest23: "74",
        lowwestDegreeDesc: "6B2C2D",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "艺术与科技（中德2+2双学位班）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "520",
        combinationDesc: "不限",
        admissions: 20,
        conditionDesc: "10C及以上",
        lowwest23: "73",
        lowwestDegreeDesc: "5B3C1D",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "广告学（中外合作办学）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 40,
        conditionDesc: "10C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "539",
        minus: "/",
      },
      {
        name: "视觉传达设计（中外合作办学）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 30,
        conditionDesc: "10C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
    ],
  },
  {
    name: "湖州学院",
    specialCalculate: (a: number, b: number, c: number, d: any) => {
      return a + b >= 5;
    },
    major: [
      {
        name: "计算机科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "A+B≥5",
        lowwest23: "70",
        lowwestDegreeDesc: "10B",
        lowwestGaoKao23: "557",
        minus: "/",
      },
      {
        name: "电子信息工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "A+B≥5",
        lowwest23: "70",
        lowwestDegreeDesc: "10B",
        lowwestGaoKao23: "554",
        minus: "/",
      },
      {
        name: "软件工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "A+B≥5",
        lowwest23: "70",
        lowwestDegreeDesc: "10B",
        lowwestGaoKao23: "556",
        minus: "/",
      },
    ],
  },
  {
    name: "嘉兴南湖学院",
    specialCalculate: (a: number, b: number, c: number, d: any) => {
      return a >= 2 || a + b >= 4;
    },
    major: [
      {
        name: "英语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "A≥2或A+B≥4",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "560",
        minus: "/",
      },
      {
        name: "经济学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "A≥2或A+B≥4",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "558",
        minus: "/",
      },
      {
        name: "电气工程及其自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "A≥2或A+B≥4",
        lowwest23: "67",
        lowwestDegreeDesc: "3A4B3C",
        lowwestGaoKao23: "559",
        minus: "/",
      },
      {
        name: "计算机科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "A≥2或A+B≥4",
        lowwest23: "67",
        lowwestDegreeDesc: "3A4B3C",
        lowwestGaoKao23: "558",
        minus: "/",
      },
      {
        name: "工业设计",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "A≥2或A+B≥4",
        lowwest23: "67",
        lowwestDegreeDesc: "3A4B3C",
        lowwestGaoKao23: "553",
        minus: "/",
      },
      {
        name: "生物工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 15,
        conditionDesc: "A≥2或A+B≥4",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "557",
        minus: "/",
      },
      {
        name: "土木工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 15,
        conditionDesc: "A≥2或A+B≥4",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "548",
        minus: "/",
      },
    ],
  },
  {
    name: "温州理工学院",
    specialCalculate: (a: number, b: number, c: number, d: any) => {
      return a + b >= 5;
    },
    major: [
      {
        name: "创业管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "A+B≥5",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "557",
        minus: "/",
      },
      {
        name: "工商管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "A+B≥5",
        lowwest23: "80",
        lowwestDegreeDesc: "10B",
        lowwestGaoKao23: "562",
        minus: "/",
      },
      {
        name: "英语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "A+B≥5",
        lowwest23: "80",
        lowwestDegreeDesc: "10B",
        lowwestGaoKao23: "554",
        minus: "/",
      },
      {
        name: "机械类（机械工程、新能源汽车工程）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "A+B≥5",
        lowwest23: "74",
        lowwestDegreeDesc: "9B1C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "电子信息工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "A+B≥5",
        lowwest23: "74",
        lowwestDegreeDesc: "9B1C",
        lowwestGaoKao23: "553",
        minus: "/",
      },
      {
        name: "土木工程（智能建造）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "A+B≥5",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
    ],
  },
  {
    name: "浙大宁波理工学院",
    condition: 60,
    calculate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 8 + c * 5;
    },
    major: [
      {
        name: "高分子材料与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "535",
        combinationDesc: "物理+化学",
        admissions: 10,
        conditionDesc: "4B6C及以上",
        lowwest23: "77",
        lowwestDegreeDesc: "3A4B3C",
        lowwestGaoKao23: "566",
        minus: "31",
      },
      {
        name: "材料科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: 8,
        conditionDesc: "4B6C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "565",
        minus: "/",
      },
      {
        name: "化学工程与工艺",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "550",
        combinationDesc: "物理+化学",
        admissions: 8,
        conditionDesc: "4B6C及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "6A2B2C",
        lowwestGaoKao23: "566",
        minus: "16",
      },
      {
        name: "机械设计制造及其自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "554",
        combinationDesc: "物理+化学",
        admissions: 8,
        conditionDesc: "4B6C及以上",
        lowwest23: "87",
        lowwestDegreeDesc: "6A3B1C",
        lowwestGaoKao23: "571",
        minus: "17",
      },
      {
        name: "土木工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "542",
        combinationDesc: "物理+化学",
        admissions: 8,
        conditionDesc: "4B6C及以上",
        lowwest23: "81",
        lowwestDegreeDesc: "5A2B3C",
        lowwestGaoKao23: "563",
        minus: "21",
      },
      {
        name: "工业设计",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "545",
        combinationDesc: "物理+化学",
        admissions: 8,
        conditionDesc: "4B6C及以上",
        lowwest23: "81",
        lowwestDegreeDesc: "5A2B3C",
        lowwestGaoKao23: "566",
        minus: "21",
      },
      {
        name: "国际经济与贸易(中外合作办学)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "520",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "4B6C及以上",
        lowwest23: "77",
        lowwestDegreeDesc: "3A4B3C",
        lowwestGaoKao23: "556",
        minus: "36",
      },
      {
        name: "金融学(中外合作办学)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "528",
        combinationDesc: "不限",
        admissions: 10,
        conditionDesc: "4B6C及以上",
        lowwest23: "79",
        lowwestDegreeDesc: "4A3B3C",
        lowwestGaoKao23: "555",
        minus: "27",
      },
    ],
  },
  {
    name: "杭州医学院",
    condition: 85,
    calculate: (a: number, b: number, c: number, d: number) => {
      return a * 10 + b * 9 + c * 7 + d * 4;
    },
    major: [
      {
        name: "临床医学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "572",
        combinationDesc: "物理+化学",
        admissions: 15,
        conditionDesc: "10B及以上",
        lowwest23: "95",
        lowwestDegreeDesc: "7A2B1C",
        lowwestGaoKao23: "591",
        minus: "19",
      },
      {
        name: "医学信息工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "520",
        combinationDesc: "物理+化学",
        admissions: 15,
        conditionDesc: "9B1D及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "4A4B2C",
        lowwestGaoKao23: "566",
        minus: "46",
      },
    ],
  },
  {
    name: "宁波大学科技学院",
    condition: 0,
    calculate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 7 + c * 3;
    },
    major: [
      {
        name: "英语（空中乘务特色班）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 50,
        conditionDesc: "/",
        lowwest23: "43",
        lowwestDegreeDesc: "4B6C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
    ],
  },
  {
    name: "浙江水利水电学院",
    condition: 0,
    calculate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 7 + c * 4;
    },
    major: [
      {
        name: "水利水电工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "536",
        combinationDesc: "物理+化学",
        admissions: 8,
        conditionDesc: "≥10D",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "568",
        minus: "32",
      },
      {
        name: "农业水利工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "541",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "≥10D",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "554",
        minus: "13",
      },
      {
        name: "水文与水资源工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "526",
        combinationDesc: "物理+化学",
        admissions: 8,
        conditionDesc: "≥10D",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "560",
        minus: "34",
      },
      {
        name: "港口航道与海岸工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "536",
        combinationDesc: "物理+化学",
        admissions: 8,
        conditionDesc: "≥10D",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "553",
        minus: "17",
      },
      {
        name: "环境生态工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "522",
        combinationDesc: "物理+化学",
        admissions: 8,
        conditionDesc: "≥10D",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "562",
        minus: "40",
      },
      {
        name: "测绘工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "505",
        combinationDesc: "物理+化学",
        admissions: 7,
        conditionDesc: "≥10D",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "554",
        minus: "49",
      },
      {
        name: "道路桥梁与渡河工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "492",
        combinationDesc: "物理+化学",
        admissions: 9,
        conditionDesc: "≥10D",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "549",
        minus: "57",
      },
      {
        name: "给排水科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "493",
        combinationDesc: "物理+化学",
        admissions: 9,
        conditionDesc: "≥10D",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "548",
        minus: "55",
      },
      {
        name: "遥感科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "517",
        combinationDesc: "物理+化学",
        admissions: 4,
        conditionDesc: "≥10D",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "550",
        minus: "33",
      },
      {
        name: "地理信息科学",
        condition: (values: string) => {
          return includeGeography(values);
        },
        lowThreeOne: "/",
        combinationDesc: "地理",
        admissions: 4,
        conditionDesc: "≥10D",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "568",
        minus: "/",
      },
      {
        name: "新能源科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "514",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "≥10D",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "557",
        minus: "43",
      },
      {
        name: "自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "529",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "≥10D",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "560",
        minus: "31",
      },
      {
        name: "机械设计制造及其自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "535",
        combinationDesc: "物理+化学",
        admissions: 4,
        conditionDesc: "≥10D",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "556",
        minus: "21",
      },
      {
        name: "材料成型及控制工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "503",
        combinationDesc: "物理+化学",
        admissions: 3,
        conditionDesc: "≥10D",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "552",
        minus: "49",
      },
      {
        name: "车辆工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "499",
        combinationDesc: "物理+化学",
        admissions: 3,
        conditionDesc: "≥10D",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "554",
        minus: "55",
      },
      {
        name: "土木工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "535",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "≥10D",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "548",
        minus: "13",
      },
      {
        name: "建筑环境与能源应用工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "518",
        combinationDesc: "物理+化学",
        admissions: 5,
        conditionDesc: "≥10D",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "548",
        minus: "30",
      },
    ],
  },
  {
    name: "金华职业技术学院",
    condition: 192,
    calculate: (a: number, b: number, c: number, d: number) => {
      return a * 30 + b * 25 + c * 21 + d * 18;
    },
    major: [
      {
        name: "学前教育（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 25,
        conditionDesc: "4C6D及以上",
        lowwest23: "230",
        lowwestDegreeDesc: "7B1C2D",
        lowwestGaoKao23: "525",
        minus: "/",
      },
    ],
  },
  {
    name: "宁波幼儿师范高等学院",
    condition: 190,
    calculate: (a: number, b: number, c: number, d: number) => {
      return a * 30 + b * 25 + c * 21 + d * 18;
    },
    major: [
      {
        name: "体育教育（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 20,
        conditionDesc: "4C6D及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "488",
        minus: "/",
      },
      {
        name: "音乐教育（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 25,
        conditionDesc: "4C6D及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "488",
        minus: "/",
      },
    ],
  },
  {
    name: "温州商学院",
    condition: 0,
    calculate: (a: number, b: number, c: number, d: number) => {
      return a * 12 + b * 10 + c * 8 + d * 6;
    },
    major: [
      {
        name: "金融学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "483",
        combinationDesc: "不限",
        admissions: 30,
        conditionDesc: "10D及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "3B7C",
        lowwestGaoKao23: "513",
        minus: "30",
      },
      {
        name: "税收学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "466",
        combinationDesc: "不限",
        admissions: 15,
        conditionDesc: "10D及以上",
        lowwest23: "78",
        lowwestDegreeDesc: "1B7C2D",
        lowwestGaoKao23: "517",
        minus: "51",
      },
      {
        name: "国际经济与贸易",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "484",
        combinationDesc: "不限",
        admissions: 20,
        conditionDesc: "10D及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "1B8C1D",
        lowwestGaoKao23: "512",
        minus: "28",
      },
      {
        name: "工商管理类(含工商管理、人力资源管理、审计学、财务管理专业)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "459",
        combinationDesc: "不限",
        admissions: 40,
        conditionDesc: "10D及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "3B7C",
        lowwestGaoKao23: "511",
        minus: "52",
      },
      {
        name: "会计学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "491",
        combinationDesc: "不限",
        admissions: 30,
        conditionDesc: "10D及以上",
        lowwest23: "92",
        lowwestDegreeDesc: "7B2C1D",
        lowwestGaoKao23: "521",
        minus: "30",
      },
      {
        name: "市场营销",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 20,
        conditionDesc: "10D及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "无",
        minus: "/",
      },
      {
        name: "外国语言文学类(含英语、商务英语专业)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "475",
        combinationDesc: "不限",
        admissions: 50,
        conditionDesc: "10D及以上",
        lowwest23: "74",
        lowwestDegreeDesc: "7C3D",
        lowwestGaoKao23: "509",
        minus: "34",
      },
      {
        name: "新闻传播学类(含广告学、传播学、网络与新媒体专业)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "483",
        combinationDesc: "不限",
        admissions: 45,
        conditionDesc: "10D及以上",
        lowwest23: "88",
        lowwestDegreeDesc: "4B6C",
        lowwestGaoKao23: "512",
        minus: "29",
      },
      {
        name: "计算机类(含计算机科学与技术数据科学与大数据技术专业)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "453",
        combinationDesc: "物理+化学",
        admissions: 50,
        conditionDesc: "10D及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "6B3C1D",
        lowwestGaoKao23: "507",
        minus: "54",
      },
    ],
  },
  {
    name: "宁波财经学院",
    condition: 40,
    calculate: (a: number, b: number, c: number, d: number) => {
      return a * 15 + b * 9 + c * 6 + d * 4;
    },
    major: [
      {
        name: "财务管理（家族财富管理)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "492",
        combinationDesc: "不限",
        admissions: 15,
        conditionDesc: "10C及以上",
        lowwest23: "87",
        lowwestDegreeDesc: "9B1C",
        lowwestGaoKao23: "526",
        minus: "34",
      },
      {
        name: "财务管理(中美2+2学分互认班)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "479",
        combinationDesc: "不限",
        admissions: 15,
        conditionDesc: "10C及以上",
        lowwest23: "73",
        lowwestDegreeDesc: "5B4C1D",
        lowwestGaoKao23: "522",
        minus: "43",
      },
      {
        name: "创业管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "485",
        combinationDesc: "不限",
        admissions: 35,
        conditionDesc: "10C及以上",
        lowwest23: "78",
        lowwestDegreeDesc: "6B4C",
        lowwestGaoKao23: "514",
        minus: "29",
      },
      {
        name: "文化产业管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 25,
        conditionDesc: "10C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "516",
        minus: "/",
      },
      {
        name: "国际经济与贸易(大宗商品交易)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "469",
        combinationDesc: "不限",
        admissions: 25,
        conditionDesc: "10C及以上",
        lowwest23: "82",
        lowwestDegreeDesc: "7B3C",
        lowwestGaoKao23: "517",
        minus: "48",
      },
      {
        name: "工业设计",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "485",
        combinationDesc: "物理+化学",
        admissions: 25,
        conditionDesc: "10C及以上",
        lowwest23: "84",
        lowwestDegreeDesc: "8B2C",
        lowwestGaoKao23: "513",
        minus: "28",
      },
      {
        name: "广播电视编导(中韩2+2学分互认班)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 30,
        conditionDesc: "10C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "520",
        minus: "/",
      },
      {
        name: "戏剧影视文学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 30,
        conditionDesc: "10C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "515",
        minus: "/",
      },
    ],
  },
  {
    name: "浙江越秀外国语学院",
    specialCalculate: (a: number, b: number, c: number, d: any) => {
      return b >= 1;
    },
    major: [
      {
        name: "日语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "1B9D及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "508",
        minus: "/",
      },
      {
        name: "阿拉伯语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "1B9D及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "506",
        minus: "/",
      },
      {
        name: "泰语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "471",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "1B9D及以上",
        lowwest23: "54",
        lowwestDegreeDesc: "7C3D",
        lowwestGaoKao23: "509",
        minus: "38",
      },
      {
        name: "印度尼西亚语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "470",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "1B9D及以上",
        lowwest23: "50",
        lowwestDegreeDesc: "5C5D",
        lowwestGaoKao23: "509",
        minus: "39",
      },
      {
        name: "国际商务",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "490",
        combinationDesc: "不限",
        admissions: 20,
        conditionDesc: "1B9D及以上",
        lowwest23: "72",
        lowwestDegreeDesc: "6B4C",
        lowwestGaoKao23: "519",
        minus: "29",
      },
      {
        name: "传播学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "498",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "1B9D及以上",
        lowwest23: "74",
        lowwestDegreeDesc: "7B3C",
        lowwestGaoKao23: "523",
        minus: "25",
      },
      {
        name: "新闻学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "515",
        combinationDesc: "不限",
        admissions: 5,
        conditionDesc: "1B9D及以上",
        lowwest23: "74",
        lowwestDegreeDesc: "7B3C",
        lowwestGaoKao23: "526",
        minus: "11",
      },
      {
        name: "酒店管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "469",
        combinationDesc: "不限",
        admissions: 70,
        conditionDesc: "1B9D及以上",
        lowwest23: "48",
        lowwestDegreeDesc: "4C6D",
        lowwestGaoKao23: "511",
        minus: "42",
      },
    ],
  },
];
