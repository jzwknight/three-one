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
        lowThreeOne: "628",
        combinationDesc: "不提科目要求",
        admissions: "15",
        conditionDesc: "7A3C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "652",
        minus: "24",
      },
      {
        name: "健行学院实验班（理工）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "610",
        combinationDesc: "物理+化学",
        admissions: "55",
        conditionDesc: "7A3C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "648",
        minus: "38",
      },
      {
        name: "化工与制药类（化学工程类）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "621",
        combinationDesc: "物理+化学",
        admissions: "40",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "605",
        minus: "-16",
      },
      {
        name: "化学工程与工艺（卓越工程师）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "604",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "625",
        minus: "21",
      },
      {
        name: "生物工程类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "588",
        combinationDesc: "物理+化学",
        admissions: "30",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "609",
        minus: "21",
      },
      {
        name: "药学类（“2011计划”创新实验区）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "598",
        combinationDesc: "物理+化学",
        admissions: "30",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "610",
        minus: "12",
      },
      {
        name: "环境科学与工程类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "587",
        combinationDesc: "物理+化学",
        admissions: "25",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "604",
        minus: "17",
      },
      {
        name: "材料类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "589",
        combinationDesc: "物理+化学",
        admissions: "25",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "611",
        minus: "22",
      },
      {
        name: "食品科学与工程类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "587",
        combinationDesc: "物理+化学",
        admissions: "25",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "606",
        minus: "19",
      },
      {
        name: "工商管理类",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "624",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "626",
        minus: "2",
      },
      {
        name: "金融学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "627",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "628",
        minus: "1",
      },
      {
        name: "国际经济与贸易",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "614",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "629",
        minus: "15",
      },
      {
        name: "应用心理学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "610",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "624",
        minus: "14",
      },
      {
        name: "英语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "610",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "617",
        minus: "7",
      },
      {
        name: "新闻传播学类",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "619",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "626",
        minus: "7",
      },
      {
        name: "汉语言文学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "620",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "635",
        minus: "15",
      },
      {
        name: "城乡规划",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "626",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "法学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "603",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "640",
        minus: "37",
      },
      {
        name: "公共管理类",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "572",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "622",
        minus: "50",
      },
      {
        name: "计算机类",
        condition: (values: any) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "20",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "630",
        minus: "/",
      },
      {
        name: "数据科学与大数据技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "617",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "631",
        minus: "14",
      },
      {
        name: "土木类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "614",
        combinationDesc: "物理+化学",
        admissions: "30",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "599",
        minus: "-15",
      },
      {
        name: "物理学类（物理与光电信息类）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "611",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "619",
        minus: "8",
      },
      {
        name: "数学类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "603",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "623",
        minus: "20",
      },
      {
        name: "管理科学与工程类",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "598",
        combinationDesc: "物理",
        admissions: "10",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "616",
        minus: "18",
      },
      {
        name: "机械类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "580",
        combinationDesc: "物理+化学",
        admissions: "35",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "618",
        minus: "38",
      },
      {
        name: "机械工程（卓越工程师）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "615",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "629",
        minus: "14",
      },
      {
        name: "能源与环境系统工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "621",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "机器人工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "611",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "626",
        minus: "15",
      },
      {
        name: "电气类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "606",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "625",
        minus: "19",
      },
      {
        name: "电子信息类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "616",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "628",
        minus: "12",
      },
      {
        name: "工业设计",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "604",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "619",
        minus: "15",
      },
      {
        name: "安全工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "593",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "6A4C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "616",
        minus: "23",
      },
    ],
  },
  {
    name: "杭州师范大学",
    condition: 45,
    calculate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 7 + c * 4 + d * 1;
    },
    major: [
      {
        name: "小学教育（经亨颐实验班）（师范）",
        /* 报考专业条件 */
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不提科目要求",
        admissions: "70",
        conditionDesc: "2A8B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "学前教育（经亨颐实验班）（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不提科目要求",
        admissions: "60",
        conditionDesc: "9B1C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "特殊教育（经亨颐实验班）（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不提科目要求",
        admissions: "30",
        conditionDesc: "9B1C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "护理学",
        condition: (values: string) => {
          return includeChemical(values);
        },
        lowThreeOne: "528",
        combinationDesc: "化学",
        admissions: "160",
        conditionDesc: "2B8C及以上",
        lowwest23: "34",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "597",
        minus: "69",
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
        name: "思想政治教育(师范)",
        condition: (values: any) => {
          return includePolitical(values);
        },
        lowThreeOne: "588",
        combinationDesc: "思想政治",
        admissions: "30",
        conditionDesc:
          "思想政治或历史为A等且3A7B及以上",
        lowwest23: "94",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "645",
        minus: "57",
      },
      {
        name: "小学教育(师范)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "580",
        combinationDesc: "不提科目要求",
        admissions: "40",
        conditionDesc:
          "语文或数学为A等且3A7B及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "7A2B1C",
        lowwestGaoKao23: "638",
        minus: "58",
      },
      {
        name: "汉语言文学(师范)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "606",
        combinationDesc: "不提科目要求",
        admissions: "40",
        conditionDesc:
          "语文为A等且3A7B及以上",
        lowwest23: "94",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "647",
        minus: "41",
      },
      {
        name: "英语(师范)",
        condition: (values: string) => {
          return true;
        },
        lowThreeOne: "595",
        combinationDesc: "不提科目要求",
        admissions: "26",
        conditionDesc:
          "外语和语文为A等且3A7B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "628",
        minus: "33",
      },
      {
        name: "数学与应用数学(师范)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "613",
        combinationDesc: "物理+化学",
        admissions: "25",
        conditionDesc:
          "数学或物理为A等且3A7B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "630",
        minus: "17",
      },
      {
        name: "物理学(师范)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "20",
        conditionDesc:
          "数学或物理为A等且A7B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "化学(师范)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "595",
        combinationDesc: "物理+化学",
        admissions: "35",
        conditionDesc:
          "物理或化学为A等且3A7B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "614",
        minus: "19",
      },
      {
        name: "生物科学(师范)",
        condition: (values: any) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "575",
        combinationDesc: "物理+化学",
        admissions: "35",
        conditionDesc:
          "生物学或物理或化学为A等且1A6B3C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "495",
        minus: "-80",
      },
      {
        name: "学前教育(师范)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "560",
        combinationDesc: "不提科目要求",
        admissions: "30",
        conditionDesc: "10B及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "4A4B2C",
        lowwestGaoKao23: "603",
        minus: "43",
      },
      {
        name: "特殊教育(师范)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "569",
        combinationDesc: "不提科目要求",
        admissions: "30",
        conditionDesc: "9B1C及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "2A7B1C",
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
        name: "水产养殖学（拔尖人才创新班）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "569",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "1A9B及以上",
        lowwest23: "94",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "614",
        minus: "45",
      },
      {
        name: "物理学（拔尖人才创新班)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "583",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "1A9B及以上",
        lowwest23: "94",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "620",
        minus: "37",
      },
      {
        name: "生物技术（拔尖人才创新班）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "590",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "1A9B及以上",
        lowwest23: "94",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "623",
        minus: "33",
      },
      {
        name: "机械类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "588",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "94",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "614",
        minus: "26",
      },
      {
        name: "环境工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "580",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "1A9B及以上",
        lowwest23: "94",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "604",
        minus: "24",
      },
      {
        name: "历史学",
        condition: (values: string) => {
          return true;
        },
        lowThreeOne: "591",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "94",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "627",
        minus: "36",
      },
      {
        name: "汉语言文学",
        condition: (values: string) => {
          return true;
        },
        lowThreeOne: "607",
        combinationDesc: "不提科目要求",
        admissions: "15",
        conditionDesc: "1A9B及以上",
        lowwest23: "94",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "636",
        minus: "29",
      },
      {
        name: "经济学",
        condition: (values: string) => {
          return true;
        },
        lowThreeOne: "582",
        combinationDesc: "不提科目要求",
        admissions: "15",
        conditionDesc: "1A9B及以上",
        lowwest23: "94",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "617",
        minus: "35",
      },
      {
        name: "日语",
        condition: (values: string) => {
          return true;
        },
        lowThreeOne: "570",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "94",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "609",
        minus: "39",
      },
      {
        name: "德语",
        condition: (values: string) => {
          return true;
        },
        lowThreeOne: "558",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "94",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "610",
        minus: "52",
      },
      {
        name: "物流管理",
        condition: (values: string) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "1A9B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "小学教育(师范)",
        condition: (values: string) => {
          return true;
        },
        lowThreeOne: "583",
        combinationDesc: "不提科目要求",
        admissions: "95",
        conditionDesc: "1A9B及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "5A5B",
        lowwestGaoKao23: "628",
        minus: "45",
      },
      {
        name: "学前教育(师范)",
        condition: (values: string) => {
          return true;
        },
        lowThreeOne: "577",
        combinationDesc: "不提科目要求",
        admissions: "15",
        conditionDesc: "1A9B及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "5A5B",
        lowwestGaoKao23: "616",
        minus: "39",
      },
      {
        name: "思想政治教育(师范)",
        condition: (values: string) => {
          return includePolitical(values);
        },
        lowThreeOne: "623",
        combinationDesc: "思想政治",
        admissions: "15",
        conditionDesc: "1A9B及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "5A5B",
        lowwestGaoKao23: "635",
        minus: "12",
      },
      {
        name: "汉语言文学（师范）",
        condition: (values: string) => {
          return true;
        },
        lowThreeOne: "625",
        combinationDesc: "不提科目要求",
        admissions: "15",
        conditionDesc: "1A9B及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "5A5B",
        lowwestGaoKao23: "637",
        minus: "12",
      },
      {
        name: "英语(师范)",
        condition: (values: string) => {
          return true;
        },
        lowThreeOne: "601",
        combinationDesc: "不提科目要求",
        admissions: "20",
        conditionDesc: "1A9B及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "5A5B",
        lowwestGaoKao23: "633",
        minus: "32",
      },
      {
        name: "数学与应用数学（师范）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "592",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "1A9B及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "5A5B",
        lowwestGaoKao23: "610",
        minus: "18",
      },
      {
        name: "物理学(师范)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "564",
        combinationDesc: "物理+化学",
        admissions: "20",
        conditionDesc: "1A9B及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "5A5B",
        lowwestGaoKao23: "608",
        minus: "44",
      },
      {
        name: "地理科学(师范)",
        condition: (values: string) => {
          return includeGeography(values);
        },
        lowThreeOne: "615",
        combinationDesc: "地理",
        admissions: "40",
        conditionDesc: "1A9B及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "5A5B",
        lowwestGaoKao23: "632",
        minus: "17",
      },
      {
        name: "人文地理与城乡规划（中外合作办学）（中法合作）",
        condition: (values: string) => {
          return includeGeography(values);
        },
        lowThreeOne: "582",
        combinationDesc: "地理",
        admissions: "20",
        conditionDesc: "1A9B及以上",
        lowwest23: "84",
        lowwestDegreeDesc: "2A8B",
        lowwestGaoKao23: "611",
        minus: "29",
      },
      {
        name: "旅游管理（中外合作办学）（中法合作）",
        condition: (values: string) => {
          return true;
        },
        lowThreeOne: "569",
        combinationDesc: "不提科目要求",
        admissions: "20",
        conditionDesc: "1A9B及以上",
        lowwest23: "84",
        lowwestDegreeDesc: "2A8B",
        lowwestGaoKao23: "604",
        minus: "35",
      },
    ],
  },
  {
    name: "宁波诺丁汉大学",
    condition: 0,
    calculate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 7 + c * 4;
    },
    major: [
      {
        name: "国际商务(中外合作办学)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "576",
        combinationDesc: "不提科目要求",
        admissions: "36",
        conditionDesc: "10D及以上",
        lowwest23: "82",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "621",
        minus: "45",
      },
      {
        name: "财务管理(中外合作办学)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "608",
        combinationDesc: "不提科目要求",
        admissions: "8",
        conditionDesc: "10D及以上",
        lowwest23: "82",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "624",
        minus: "16",
      },
      {
        name: "国际经济与贸易(中外合作办学)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "610",
        combinationDesc: "不提科目要求",
        admissions: "2",
        conditionDesc: "10D及以上",
        lowwest23: "82",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "630",
        minus: "20",
      },
      {
        name: "国际事务与国际关系(中外合作办学)",
        condition: (values: string) => {
          return includePolitical(values);
        },
        lowThreeOne: "590",
        combinationDesc: "思想政治",
        admissions: "20",
        conditionDesc: "10D及以上",
        lowwest23: "82",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "628",
        minus: "38",
      },
      {
        name: "传播学(中外合作办学)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "601",
        combinationDesc: "不提科目要求",
        admissions: "12",
        conditionDesc: "10D及以上",
        lowwest23: "82",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "621",
        minus: "20",
      },
      {
        name: "英语(中外合作办学)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "581",
        combinationDesc: "不提科目要求",
        admissions: "12",
        conditionDesc: "10D及以上",
        lowwest23: "82",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "619",
        minus: "38",
      },
      {
        name: "英语(中外合作办学)(2+2)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "603",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "10D及以上",
        lowwest23: "82",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "617",
        minus: "14",
      },
      {
        name: "计算机科学与技术(中外合作办学)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "625",
        combinationDesc: "物理+化学 ",
        admissions: "2",
        conditionDesc: "10D及以上",
        lowwest23: "82",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "621",
        minus: "-4",
      },
      {
        name: "数学与应用数学(中外合作办学)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "614",
        combinationDesc: "物理+化学 ",
        admissions: "2",
        conditionDesc: "10D及以上",
        lowwest23: "82",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "620",
        minus: "6",
      },
      {
        name: "电气类(中外合作办学)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "593",
        combinationDesc: "物理+化学 ",
        admissions: "42",
        conditionDesc: "10D及以上",
        lowwest23: "82",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "620",
        minus: "27",
      },
      {
        name: "电气类(中外合作办学)(2+2)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "589",
        combinationDesc: "物理+化学 ",
        admissions: "20",
        conditionDesc: "10D及以上",
        lowwest23: "82",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "617",
        minus: "28",
      },
      {
        name: "环境科学(中外合作办学)(2+2)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "580",
        combinationDesc: "物理+化学 ",
        admissions: "8",
        conditionDesc: "10D及以上",
        lowwest23: "82",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "618",
        minus: "38",
      },
      {
        name: "化学(中外合作办学)(2+2)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "605",
        combinationDesc: "物理+化学 ",
        admissions: "5",
        conditionDesc: "10D及以上",
        lowwest23: "82",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "623",
        minus: "18",
      },
      {
        name: "建筑学(中外合作办学)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "622",
        combinationDesc: "不提科目要求",
        admissions: "6",
        conditionDesc: "10D及以上",
        lowwest23: "82",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "617",
        minus: "-5",
      },
    ],
  },
  {
    name: "杭州电子科技大学",
    condition: 110,
    calculate: (a: number, b: number, c: number, d: any) => {
      return a * 15 + b * 10 + c * 5;
    },
    major: [
      {
        name: "计算机科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "25",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "软件工程",
        condition: (values: any) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "电子信息类（电子信息学院）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "608",
        combinationDesc: "物理+化学",
        admissions: "30",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "627",
        minus: "19",
      },
      {
        name: "集成电路设计与集成系统",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "626",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "635",
        minus: "9",
      },
      {
        name: "数字媒体技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "603",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "625",
        minus: "22",
      },
      {
        name: "信息安全",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "623",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "网络工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "625",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "630",
        minus: "5",
      },
      {
        name: "电子信息类（通信学院）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "604",
        combinationDesc: "物理+化学",
        admissions: "35",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "622",
        minus: "18",
      },
      {
        name: "智能科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "622",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "631",
        minus: "9",
      },
      {
        name: "电气工程及其自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "612",
        combinationDesc: "物理+化学",
        admissions: "20",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "625",
        minus: "13",
      },
      {
        name: "自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "602",
        combinationDesc: "物理+化学",
        admissions: "35",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "621",
        minus: "19",
      },
      {
        name: "机械设计制造及其自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "593",
        combinationDesc: "物理+化学",
        admissions: "20",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "车辆工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "597",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "智能制造工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "材料科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "577",
        combinationDesc: "物理+化学",
        admissions: "20",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "管理科学与工程类",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "559",
        combinationDesc: "物理",
        admissions: "30",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "619",
        minus: "60",
      },
      {
        name: "数学类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "593",
        combinationDesc: "物理+化学",
        admissions: "30",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "光电信息科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "605",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "应用物理学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "工业设计",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "594",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "工业工程",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "564",
        combinationDesc: "物理",
        admissions: "10",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "统计学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "606",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "617",
        minus: "11",
      },
      {
        name: "环境工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "508",
        combinationDesc: "物理+化学",
        admissions: "20",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "会计学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "607",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "628",
        minus: "21",
      },
      {
        name: "审计学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "604",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "627",
        minus: "23",
      },
      {
        name: "财务管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "598",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "626",
        minus: "28",
      },
      {
        name: "工商管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不提科目耍求",
        admissions: "10",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "金融学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "561",
        combinationDesc: "不提科目耍求",
        admissions: "15",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "620",
        minus: "59",
      },
      {
        name: "法学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "590",
        combinationDesc: "不提科目耍求",
        admissions: "5",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "627",
        minus: "37",
      },
      {
        name: "英语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "527",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "传播学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "483",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "7A1C2D及以上",
        lowwest23: "135",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
    ],
  },
  {
    name: "浙江工商大学",
    condition: 60,
    calculate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 8 + c * 4;
    },
    major: [
      {
        name: "工商管理类（含市场营销+人工智能双学 士学位项目，含工商管理、市场营销、人力资源管理、国际商务）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "595",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "5B5C及以上",
        lowwest23: "85",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "611",
        minus: "16",
      },
      {
        name: "数字经济",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "561",
        combinationDesc: "物理",
        admissions: "20",
        conditionDesc: "5B5C及以上",
        lowwest23: "85",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "595",
        minus: "34",
      },
      {
        name: "会计学（含会计学、财务管理、审计学、 会计学（ACCA））",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "619",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "5B5C及以上",
        lowwest23: "85",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "627",
        minus: "8",
      },
      {
        name: "金融学（普惠金融创新班）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "579",
        combinationDesc: "不提科目要求",
        admissions: "15",
        conditionDesc: "5B5C及以上",
        lowwest23: "85",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "607",
        minus: "28",
      },
      {
        name: "金融工程",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "567",
        combinationDesc: "物理",
        admissions: "5",
        conditionDesc: "5B5C及以上",
        lowwest23: "85",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "604",
        minus: "37",
      },
      {
        name: "保险学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "584",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "5B5C及以上",
        lowwest23: "85",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "611",
        minus: "27",
      },
      {
        name: "公共管理类（含慈善管理、行政管理、土地资源管理、文化产业管理）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "583",
        combinationDesc: "不提科目要求",
        admissions: "20",
        conditionDesc: "5B5C及以上",
        lowwest23: "70",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "607",
        minus: "24",
      },
      {
        name: "旅游管理类（含旅游管理、酒店管理）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "571",
        combinationDesc: "不提科目要求",
        admissions: "25",
        conditionDesc: "5B5C及以上",
        lowwest23: "70",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "外国语言文学类（含英语、商务英语）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "577",
        combinationDesc: "不提科目要求",
        admissions: "25",
        conditionDesc: "5B5C及以上",
        lowwest23: "70",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "607",
        minus: "30",
      },
      {
        name: "新闻传播学类（含网络与新媒体、新闻学、 广告学）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "579",
        combinationDesc: "不提科目要求",
        admissions: "20",
        conditionDesc: "5B5C及以上",
        lowwest23: "70",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "622",
        minus: "43",
      },
      {
        name: "城乡规划",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "594",
        combinationDesc: "不提科目要求",
        admissions: "4",
        conditionDesc: "5B5C及以上",
        lowwest23: "70",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "610",
        minus: "16",
      },
      {
        name: "社会工作",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "586",
        combinationDesc: "不提科目要求",
        admissions: "4",
        conditionDesc: "5B5C及以上",
        lowwest23: "70",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "614",
        minus: "28",
      },
      {
        name: "哲学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "606",
        combinationDesc: "不提科目要求",
        admissions: "4",
        conditionDesc: "5B5C及以上",
        lowwest23: "70",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "615",
        minus: "9",
      },
      {
        name: "汉语言文学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "618",
        combinationDesc: "不提科目要求",
        admissions: "4",
        conditionDesc: "5B5C及以上",
        lowwest23: "70",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "634",
        minus: "16",
      },
      {
        name: "法语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "587",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "5B5C及以上",
        lowwest23: "70",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "615",
        minus: "28",
      },
      {
        name: "阿拉伯语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "575",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "5B5C及以上",
        lowwest23: "70",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "日语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "556",
        combinationDesc: "不提科目要求",
        admissions: "25",
        conditionDesc: "5B5C及以上",
        lowwest23: "70",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "历史学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "612",
        combinationDesc: "不提科目要求",
        admissions: "4",
        conditionDesc: "5B5C及以上",
        lowwest23: "70",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "625",
        minus: "13",
      },
      {
        name: "电子信息类（含人工智能、电子信息工程、通信工程）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "598",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "5B5C及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "604",
        minus: "6",
      },
      {
        name: "计算机类（含计算机科学与技术、软件工程、信息安全）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "592",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "5B5C及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "608",
        minus: "16",
      },
      {
        name: "环境科学与工程类（含环境科学、环境工程）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "546",
        combinationDesc: "物理+化学",
        admissions: "30",
        conditionDesc: "5B5C及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "589",
        minus: "43",
      },
      {
        name: "食品科学与工程类（含食品科学与工程、食品质量与安全）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "554",
        combinationDesc: "物理+化学",
        admissions: "30",
        conditionDesc: "5B5C及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "591",
        minus: "37",
      },
      {
        name: "数学与应用数学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "593",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "5B5C及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "604",
        minus: "11",
      },
      {
        name: "给排水科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "589",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "5B5C及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "598",
        minus: "9",
      },
      {
        name: "生物工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "574",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "5B5C及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "591",
        minus: "17",
      },
      {
        name: "信息管理与信息系统",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "591",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "5B5C及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "601",
        minus: "10",
      },
      {
        name: "电子信息工程（中外合作办学）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "582",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "5B5C及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "592",
        minus: "10",
      },
      {
        name: "通信工程（中外合作办学）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "564",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "5B5C及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "588",
        minus: "24",
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
        lowThreeOne: "578",
        combinationDesc: "物理+化学",
        admissions: "30",
        conditionDesc: "10D及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "轻化工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "576",
        combinationDesc: "物理+化学",
        admissions: "20",
        conditionDesc: "10D及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "服装设计与工程",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "574",
        combinationDesc: "物理",
        admissions: "25",
        conditionDesc: "10D及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "598",
        minus: "24",
      },
      {
        name: "丝绸设计与工程",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "582",
        combinationDesc: "不提科目要求",
        admissions: "20",
        conditionDesc: "10D及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "生物科学类（生物技术、生物制药）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "575",
        combinationDesc: "物理+化学",
        admissions: "30",
        conditionDesc: "10D及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "600",
        minus: "25",
      },
      {
        name: "材料类（材料科学与工程、高分子材料与工程）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "584",
        combinationDesc: "物理+化学",
        admissions: "30",
        conditionDesc: "10D及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "601",
        minus: "17",
      },
      {
        name: "应用化学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "572",
        combinationDesc: "物理+化学",
        admissions: "20",
        conditionDesc: "10D及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "601",
        minus: "29",
      },
      {
        name: "数学类（数学与应用数学、信息与计算科学）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "592",
        combinationDesc: "物理+化学",
        admissions: "30",
        conditionDesc: "10D及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "600",
        minus: "8",
      },
      {
        name: "应用物理学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "587",
        combinationDesc: "物理+化学",
        admissions: "20",
        conditionDesc: "10D及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "土木类（土木工程、建筑环境与能源应用工程、工程管理）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "578",
        combinationDesc: "物理+化学",
        admissions: "30",
        conditionDesc: "10D及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "建筑类",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "574",
        combinationDesc: "不提科目要求",
        admissions: "15",
        conditionDesc: "10D及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "605",
        minus: "31",
      },
      {
        name: "机械类（机械设计制造及其自动化、机械电子工程、智能制造工程）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "595",
        combinationDesc: "物理+化学",
        admissions: "25",
        conditionDesc: "10D及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "602",
        minus: "7",
      },
      {
        name: "工业设计",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "591",
        combinationDesc: "物理+化学",
        admissions: "25",
        conditionDesc: "10D及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "601",
        minus: "10",
      },
      {
        name: "自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "601",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "10D及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "607",
        minus: "6",
      },
      {
        name: "经济与贸易类（经济学、金融学、国际经济与贸易）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "589",
        combinationDesc: "不提科目要求",
        admissions: "15",
        conditionDesc: "10D及以上",
        lowwest23: "88",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "606",
        minus: "17",
      },
      {
        name: "工商管理类（会计学、工商管理、人力资源管理）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "593",
        combinationDesc: "不提科目要求",
        admissions: "15",
        conditionDesc: "10D及以上",
        lowwest23: "88",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "608",
        minus: "15",
      },
      {
        name: "外国语言文学类（英语、日语）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "573",
        combinationDesc: "不提科目要求",
        admissions: "20",
        conditionDesc: "10D及以上",
        lowwest23: "88",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "604",
        minus: "31",
      },
      {
        name: "新闻传播学类（传播学、汉语言文学）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "598",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "10D及以上",
        lowwest23: "88",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "612",
        minus: "14",
      },
      {
        name: "行政管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "582",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "10D及以上",
        lowwest23: "88",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "608",
        minus: "26",
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
        lowThreeOne: "609",
        combinationDesc: "不提科目要求",
        admissions: "7",
        conditionDesc: "2A8B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "6A2B2C",
        lowwestGaoKao23: "624",
        minus: "15",
      },
      {
        name: "思想政治教育(师范)",
        condition: (values: string) => {
          return includePolitical(values);
        },
        lowThreeOne: "585",
        combinationDesc: "思想政治",
        admissions: "7",
        conditionDesc: "2A8B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "6A2B2C",
        lowwestGaoKao23: "620",
        minus: "35",
      },
      {
        name: "小学教育(师范)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "574",
        combinationDesc: "不提科目要求",
        admissions: "25",
        conditionDesc: "2A8B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "6A2B2C",
        lowwestGaoKao23: "617",
        minus: "43",
      },
      {
        name: "学前教育(师范)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "553",
        combinationDesc: "不提科目要求",
        admissions: "13",
        conditionDesc: "2A8B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "6A2B2C",
        lowwestGaoKao23: "599",
        minus: "46",
      },
      {
        name: "应用心理学(师范)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "546",
        combinationDesc: "不提科目要求",
        admissions: "15",
        conditionDesc: "2A8B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "6A2B2C",
        lowwestGaoKao23: "607",
        minus: "61",
      },
      {
        name: "教育技术学(师范)",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理",
        admissions: "7",
        conditionDesc: "2A8B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "527",
        minus: "/",
      },
      {
        name: "数学与应用数学(师范)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "572",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "2A8B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "6A2B2C",
        lowwestGaoKao23: "584",
        minus: "12",
      },
      {
        name: "物理学(师范)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "569",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "2A8B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "6A2B2C",
        lowwestGaoKao23: "568",
        minus: "-1",
      },
      {
        name: "化学(师范)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "571",
        combinationDesc: "物理+化学",
        admissions: "7",
        conditionDesc: "2A8B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "6A2B2C",
        lowwestGaoKao23: "548",
        minus: "-23",
      },
      {
        name: "英语(师范)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "580",
        combinationDesc: "不提科目要求",
        admissions: "7",
        conditionDesc: "2A8B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "6A2B2C",
        lowwestGaoKao23: "615",
        minus: "35",
      },
      {
        name: "历史学(师范)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "600",
        combinationDesc: "不提科目要求",
        admissions: "7",
        conditionDesc: "2A8B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "6A2B2C",
        lowwestGaoKao23: "620",
        minus: "20",
      },
      {
        name: "生物科学(师范)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "580",
        combinationDesc: "物理+化学",
        admissions: "7",
        conditionDesc: "2A8B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "6A2B2C",
        lowwestGaoKao23: "492",
        minus: "-88",
      },
      {
        name: "法学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "591",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "10B及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "614",
        minus: "23",
      },
      {
        name: "行政管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "565",
        combinationDesc: "不提科目要求",
        admissions: "7",
        conditionDesc: "10B及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "601",
        minus: "36",
      },
      {
        name: "国际经贸规则",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "574",
        combinationDesc: "不提科目要求",
        admissions: "7",
        conditionDesc: "10B及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "603",
        minus: "29",
      },
      {
        name: "电气工程及其自动化(卓工超豪示范班)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "573",
        combinationDesc: "物理+化学",
        admissions: "12",
        conditionDesc: "10B及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "591",
        minus: "18",
      },
      {
        name: "电子信息科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "555",
        combinationDesc: "物理+化学",
        admissions: "12",
        conditionDesc: "10B及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "581",
        minus: "26",
      },
      {
        name: "集成电路设计与集成系统",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "537",
        combinationDesc: "物理+化学",
        admissions: "7",
        conditionDesc: "10B及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "579",
        minus: "42",
      },
      {
        name: "材料科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "552",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "10B及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "571",
        minus: "19",
      },
      {
        name: "应用化学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "547",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "10B及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "565",
        minus: "18",
      },
      {
        name: "能源化学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "548",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "10B及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "571",
        minus: "23",
      },
      {
        name: "工业工程",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "562",
        combinationDesc: "物理",
        admissions: "10",
        conditionDesc: "10B及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "578",
        minus: "16",
      },
      {
        name: "车辆工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "541",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "10B及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "580",
        minus: "39",
      },
      {
        name: "机械工程(卓工超豪示范班)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "545",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "10B及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "582",
        minus: "37",
      },
      {
        name: "智能制造工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "532",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "10B及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "581",
        minus: "49",
      },
      {
        name: "建筑学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "535",
        combinationDesc: "不提科目要求",
        admissions: "15",
        conditionDesc: "10B及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "597",
        minus: "62",
      },
      {
        name: "土木工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "542",
        combinationDesc: "物理+化学",
        admissions: "12",
        conditionDesc: "10B及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "558",
        minus: "16",
      },
      {
        name: "城市地下空间工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "7",
        conditionDesc: "10B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "566",
        minus: "/",
      },
      {
        name: "计算机科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "560",
        combinationDesc: "物理+化学",
        admissions: "7",
        conditionDesc: "10B及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "591",
        minus: "31",
      },
      {
        name: "数据科学与大数据技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "557",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "10B及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "582",
        minus: "25",
      },
      {
        name: "人工智能",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "557",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "10B及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "582",
        minus: "25",
      },
      {
        name: "网络工程(卓工超豪示范班)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "577",
        combinationDesc: "物理+化学",
        admissions: "7",
        conditionDesc: "10B及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "588",
        minus: "11",
      },
      {
        name: "应用统计学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "544",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "10B及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "578",
        minus: "34",
      },
      {
        name: "信息与计算科学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "552",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "10B及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "584",
        minus: "32",
      },
      {
        name: "生态学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "10B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "509",
        minus: "/",
      },
      {
        name: "环境工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "545",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "10B及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "568",
        minus: "23",
      },
      {
        name: "生物技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "545",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "10B及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "492",
        minus: "-53",
      },
    ],
  },
  {
    name: "浙江财经大学",
    condition: 80,
    calculate: (a: number, b: number, c: number, d: any) => {
      return a * 15 + b * 9 + c * 3;
    },
    major: [
      {
        name: "财政学类（财政学、税收学、国际税收）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "596",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "615",
        minus: "19",
      },
      {
        name: "公共管理类（劳动与社会保障、土地资源管理、行政管理）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "561",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "610",
        minus: "49",
      },
      {
        name: "城乡规划",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "572",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "1A9B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "606",
        minus: "34",
      },
      {
        name: "会计学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "602",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "1A9B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "623",
        minus: "21",
      },
      {
        name: "财务管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "604",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "1A9B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "618",
        minus: "14",
      },
      {
        name: "审计学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "590",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "1A9B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "620",
        minus: "30",
      },
      {
        name: "金融学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "592",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "1A9B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "612",
        minus: "20",
      },
      {
        name: "投资学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "588",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "611",
        minus: "23",
      },
      {
        name: "工商管理类（工商管理、人力资源管理、市场营销、供应链管理）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "580",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "608",
        minus: "28",
      },
      {
        name: "电子商务",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "535",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "606",
        minus: "71",
      },
      {
        name: "经济学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "610",
        minus: "/",
      },
      {
        name: "国际经济与贸易（含数字贸易方向）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "607",
        minus: "/",
      },
      {
        name: "法学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "612",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "1A9B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "626",
        minus: "14",
      },
      {
        name: "社会工作",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "566",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "608",
        minus: "42",
      },
      {
        name: "外国语言文学类（英语、商务英语）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "551",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "605",
        minus: "54",
      },
      {
        name: "汉语言文学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "609",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "1A9B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "624",
        minus: "15",
      },
      {
        name: "新闻传播学类（广告学、网络与新媒体）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "589",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "612",
        minus: "23",
      },
      {
        name: "金融工程",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "584",
        combinationDesc: "物理",
        admissions: "15",
        conditionDesc: "1A9B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "581",
        minus: "-3",
      },
      {
        name: "数字经济",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "592",
        combinationDesc: "物理",
        admissions: "15",
        conditionDesc: "1A9B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "580",
        minus: "-12",
      },
      {
        name: "工程管理",
        ccondition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "565",
        combinationDesc: "物理",
        admissions: "20",
        conditionDesc: "1A9B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "578",
        minus: "13",
      },
      {
        name: "信息管理与信息系统",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "566",
        combinationDesc: "物理",
        admissions: "15",
        conditionDesc: "1A9B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "594",
        minus: "28",
      },
      {
        name: "计算机类（人工智能、软件工程、计算机科学与技术）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "582",
        combinationDesc: "物理+化学",
        admissions: "20",
        conditionDesc: "1A9B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "595",
        minus: "13",
      },
      {
        name: "应用统计学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "563",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "1A9B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "593",
        minus: "30",
      },
      {
        name: "数据科学与大数据技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "566",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "599",
        minus: "33",
      },
      {
        name: "经济统计学",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "570",
        combinationDesc: "物理",
        admissions: "15",
        conditionDesc: "1A9B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "585",
        minus: "15",
      },
      {
        name: "金融数学",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "578",
        combinationDesc: "物理",
        admissions: "20",
        conditionDesc: "1A9B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "580",
        minus: "2",
      },
      {
        name: "金融科技",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "572",
        combinationDesc: "物理",
        admissions: "20",
        conditionDesc: "1A9B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "571",
        minus: "-1",
      },
      {
        name: "金融工程（金融科创）",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "584",
        combinationDesc: "物理",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "590",
        minus: "6",
      },
      {
        name: "会计学(中外合作办学)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "591",
        combinationDesc: "不提科目要求",
        admissions: "30",
        conditionDesc: "9B及以上",
        lowwest23: "108",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "610",
        minus: "19",
      },
      {
        name: "金融学(中外合作办学)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不提科目要求",
        admissions: "30",
        conditionDesc: "9B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "605",
        minus: "/",
      },
      {
        name: "市场营销(中外合作办学)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "572",
        combinationDesc: "不提科目要求",
        admissions: "30",
        conditionDesc: "9B及以上",
        lowwest23: "108",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "603",
        minus: "31",
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
        lowThreeOne: "658",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "6A4B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "669",
        minus: "11",
      },
      {
        name: "临床医学（5+3一体化）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "653",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "6A4B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "661",
        minus: "8",
      },
      {
        name: "临床医学（5+3一体化，儿科学方向）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "636",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "6A4B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "651",
        minus: "15",
      },
      {
        name: "临床医学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "617",
        combinationDesc: "物理+化学",
        admissions: "60",
        conditionDesc: "6A4B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "636",
        minus: "19",
      },
      {
        name: "眼视光医学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "640",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "6A4B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "650",
        minus: "10",
      },
      {
        name: "口腔医学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "641",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "6A4B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "650",
        minus: "9",
      },
      {
        name: "麻醉学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "614",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "6A4B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "627",
        minus: "13",
      },
      {
        name: "医学影像学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "605",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "6A4B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "618",
        minus: "13",
      },
      {
        name: "放射医学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "596",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "6A4B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "614",
        minus: "18",
      },
      {
        name: "精神医学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "614",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "6A4B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "609",
        minus: "-5",
      },
      {
        name: "药学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "578",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "1A9B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "576",
        minus: "-2",
      },
      {
        name: "生物制药",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "582",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "1A9B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "581",
        minus: "-1",
      },
      {
        name: "临床药学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "591",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "600",
        minus: "9",
      },
      {
        name: "康复治疗学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "579",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "573",
        minus: "-6",
      },
      {
        name: "生物技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "586",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "565",
        minus: "-21",
      },
      {
        name: "生物医药工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "576",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "583",
        minus: "7",
      },
      {
        name: "医学检验技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "588",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "1A9B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "587",
        minus: "-1",
      },
      {
        name: "医学影像技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "580",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "596",
        minus: "16",
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
        lowThreeOne: "591",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "599",
        minus: "8",
      },
      {
        name: "电气工程及其自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "580",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "601",
        minus: "21",
      },
      {
        name: "机械设计制造及其自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "578",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "597",
        minus: "19",
      },
      {
        name: "机械电子工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "586",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "594",
        minus: "8",
      },
      {
        name: "测控技术与仪器",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "578",
        combinationDesc: "物理+化学",
        admissions: "20",
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "599",
        minus: "21",
      },
      {
        name: "智能感知工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "573",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "594",
        minus: "21",
      },
      {
        name: "电子信息工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "594",
        combinationDesc: "物理+化学",
        admissions: "3",
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "599",
        minus: "5",
      },
      {
        name: "通信工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "587",
        combinationDesc: "物理+化学",
        admissions: "3",
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "595",
        minus: "8",
      },
      {
        name: "计算机科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "595",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "598",
        minus: "3",
      },
      {
        name: "人工智能",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "594",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "594",
        minus: "0",
      },
      {
        name: "光电信息科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "577",
        combinationDesc: "物理+化学",
        admissions: "25",
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "595",
        minus: "18",
      },
      {
        name: "电子科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "566",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "596",
        minus: "30",
      },
      {
        name: "功能材料",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "565",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "587",
        minus: "22",
      },
      {
        name: "材料科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "570",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "588",
        minus: "18",
      },
      {
        name: "应用化学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "566",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "586",
        minus: "20",
      },
      {
        name: "能源与动力工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "576",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "600",
        minus: "24",
      },
      {
        name: "安全工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "566",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "587",
        minus: "21",
      },
      {
        name: "环境工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "569",
        combinationDesc: "物理+化学",
        admissions: "6",
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "589",
        minus: "20",
      },
      {
        name: "信息管理与信息系统",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "566",
        combinationDesc: "物理",
        admissions: "15",
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "594",
        minus: "28",
      },
      {
        name: "数学与应用数学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "566",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "596",
        minus: "30",
      },
      {
        name: "应用物理学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "569",
        combinationDesc: "物理+化学",
        admissions: "8",
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "593",
        minus: "24",
      },
      {
        name: "声学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "574",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "592",
        minus: "18",
      },
      {
        name: "食品质量与安全",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "559",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "582",
        minus: "23",
      },
      {
        name: "生物工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "552",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "581",
        minus: "29",
      },
      {
        name: "工业设计",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "564",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "591",
        minus: "27",
      },
      {
        name: "标准化工程",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "566",
        combinationDesc: "物理",
        admissions: "15",
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "588",
        minus: "22",
      },
      {
        name: "质量管理工程",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "566",
        combinationDesc: "物理",
        admissions: "20",
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "593",
        minus: "27",
      },
      {
        name: "工业工程",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "566",
        combinationDesc: "物理",
        admissions: "5",
        conditionDesc: "1A9B及以上",
        lowwest23: "140",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "596",
        minus: "30",
      },
    ],
  },
  {
    name: "浙江中医药大学",
    condition: 64,
    calculate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 7 + c * 4;
    },
    major: [
      {
        name: "中医学（5+3一体化）",
        condition: (values: string) => {
          return includeChemical(values);
        },
        lowThreeOne: "627",
        combinationDesc: "化学",
        admissions: "10",
        conditionDesc: "4A6B及以上",
        lowwest23: "94",
        lowwestDegreeDesc: "8A2B",
        lowwestGaoKao23: "638",
        minus: "11",
      },
      {
        name: "中医学",
        condition: (values: string) => {
          return includeChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "化学",
        admissions: "25",
        conditionDesc: "4A6B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "临床医学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "600",
        combinationDesc: "物理+化学",
        admissions: "40",
        conditionDesc: "4A6B及以上",
        lowwest23: "94",
        lowwestDegreeDesc: "8A2B",
        lowwestGaoKao23: "597",
        minus: "-3",
      },
      {
        name: "儿科学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "4A6B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "中药学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "544",
        combinationDesc: "物理+化学",
        admissions: "30",
        conditionDesc: "10B及以上",
        lowwest23: "79",
        lowwestDegreeDesc: "4A5B1C",
        lowwestGaoKao23: "565",
        minus: "21",
      },
      {
        name: "护理学",
        condition: (values: string) => {
          return includeChemical(values);
        },
        lowThreeOne: "555",
        combinationDesc: "化学",
        admissions: "40",
        conditionDesc: "8B2C及以上",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "547",
        minus: "-8",
      },
      {
        name: "公共事业管理",
        condition: (values: string) => {
          return true;
        },
        lowThreeOne: "564",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "8B2C及以上",
        lowwest23: "76",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "597",
        minus: "33",
      },
      {
        name: "健康服务与管理",
        condition: (values: string) => {
          return true;
        },
        lowThreeOne: "553",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "8B2C及以上",
        lowwest23: "76",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "596",
        minus: "43",
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
        lowThreeOne: "553",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "583",
        minus: "30",
      },
      {
        name: "植物保护",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "540",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "567",
        minus: "27",
      },
      {
        name: "林学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "570",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "572",
        minus: "2",
      },
      {
        name: "生物技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "554",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "565",
        minus: "11",
      },
      {
        name: "生态学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "农业资源与环境",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "568",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "558",
        minus: "-10",
      },
      {
        name: "环境科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "545",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "571",
        minus: "26",
      },
      {
        name: "测绘工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "540",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "574",
        minus: "34",
      },
      {
        name: "木材科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "539",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "571",
        minus: "32",
      },
      {
        name: "家具设计与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "542",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "561",
        minus: "19",
      },
      {
        name: "应用化学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "553",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "565",
        minus: "12",
      },
      {
        name: "高分子材料与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "548",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "577",
        minus: "29",
      },
      {
        name: "土木工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "542",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "568",
        minus: "26",
      },
      {
        name: "动物科学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "563",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "574",
        minus: "11",
      },
      {
        name: "工业设计",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "552",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "582",
        minus: "30",
      },
      {
        name: "应用统计学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "575",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "586",
        minus: "11",
      },
      {
        name: "数据科学与大数据技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "583",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "590",
        minus: "7",
      },
      {
        name: "智能科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "575",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "589",
        minus: "14",
      },
      {
        name: "物联网工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "575",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "588",
        minus: "13",
      },
      {
        name: "机械设计制造及其自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "557",
        combinationDesc: "物理+化学",
        admissions: "30",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "587",
        minus: "30",
      },
      {
        name: "电子信息工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "576",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "588",
        minus: "12",
      },
      {
        name: "食品科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "556",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "572",
        minus: "16",
      },
      {
        name: "食品质量与安全",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "555",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "569",
        minus: "14",
      },
      {
        name: "中药学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "562",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "564",
        minus: "2",
      },
      {
        name: "生物制药",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "558",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "574",
        minus: "16",
      },
      {
        name: "园艺",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "547",
        combinationDesc: "物理+化学",
        admissions: "25",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "558",
        minus: "11",
      },
      {
        name: "茶学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "536",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "561",
        minus: "25",
      },
      {
        name: "园林",
        condition: (values: string) => {
          return includeBio(values);
        },
        lowThreeOne: "547",
        combinationDesc: "生物",
        admissions: "15",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "601",
        minus: "54",
      },
      {
        name: "金融工程",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "560",
        combinationDesc: "物理",
        admissions: "10",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "5A3B2C",
        lowwestGaoKao23: "577",
        minus: "17",
      },
      {
        name: "地理信息科学",
        condition: (values: string) => {
          return includeGeography(values);
        },
        lowThreeOne: "550",
        combinationDesc: "地理",
        admissions: "15",
        conditionDesc: "8B2C及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "603",
        minus: "53",
      },
      {
        name: "风景园林",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "546",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "8B2C及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "600",
        minus: "54",
      },
      {
        name: "城乡规划",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "560",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "8B2C及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "599",
        minus: "39",
      },
      {
        name: "建筑学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "8B2C及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "598",
        minus: "/",
      },
      {
        name: "农林经济管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "556",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "8B2C及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "599",
        minus: "43",
      },
      {
        name: "国际经济与贸易",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "578",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "8B2C及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "601",
        minus: "23",
      },
      {
        name: "工商管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "559",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "8B2C及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "601",
        minus: "42",
      },
      {
        name: "英语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "540",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "8B2C及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "596",
        minus: "56",
      },
      {
        name: "文化产业管理（茶文化）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "564",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "8B2C及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "5A4B1C",
        lowwestGaoKao23: "598",
        minus: "34",
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
        lowThreeOne: "569",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "8B2C及以上",
        lowwest23: "116",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "599",
        minus: "30",
      },
      {
        name: "小学教育（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "563",
        combinationDesc: "不提科目要求",
        admissions: "30",
        conditionDesc: "8B2C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "602",
        minus: "39",
      },
      {
        name: "历史学（师范）",
        condition: (values: string) => {
          return includeHistory(values);
        },
        lowThreeOne: "558",
        combinationDesc: "历史",
        admissions: "10",
        conditionDesc: "8B2C及以上",
        lowwest23: "117",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "601",
        minus: "43",
      },
      {
        name: "数学与应用数学（师范）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "554",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "5B5C及以上",
        lowwest23: "116",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "568",
        minus: "14",
      },
      {
        name: "物理学（师范）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "551",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "5B5C及以上",
        lowwest23: "115",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "565",
        minus: "14",
      },
      {
        name: "船舶与海洋工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "537",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "5B5C及以上",
        lowwest23: "112",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "570",
        minus: "33",
      },
      {
        name: "水产养殖学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "543",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "5B5C及以上",
        lowwest23: "107",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "557",
        minus: "14",
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
        name: "计算机科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "6B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "578",
        minus: "/",
      },
      {
        name: "电气工程及其自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "20",
        conditionDesc: "6B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "577",
        minus: "/",
      },
      {
        name: "车辆工程（实验班）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "30",
        conditionDesc: "6B及以上",
        lowwest23: "120",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "计算机类（中德联合培养）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "563",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "6B及以上",
        lowwest23: "105",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "579",
        minus: "16",
      },
      {
        name: "电气类（中德联合培养）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "30",
        conditionDesc: "6B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "567",
        minus: "/",
      },
      {
        name: "机器人工程（中澳联合培养）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "553",
        combinationDesc: "物理+化学",
        admissions: "30",
        conditionDesc: "6B及以上",
        lowwest23: "105",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "*土木工程（中法合作办学）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "493",
        combinationDesc: "物理+化学",
        admissions: "30",
        conditionDesc: "6B及以上",
        lowwest23: "105",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "*数据科学与大数据技术（中法合作办学）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "30",
        conditionDesc: "6B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "561",
        minus: "/",
      },
      {
        name: "国际商务（中澳联合培养）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "540",
        combinationDesc: "不提科目要求",
        admissions: "30",
        conditionDesc: "6B及以上",
        lowwest23: "105",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "585",
        minus: "45",
      },
      {
        name: "*经济学（中美合作办学）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "537",
        combinationDesc: "不提科目要求",
        admissions: "20",
        conditionDesc: "6B及以上",
        lowwest23: "105",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "585",
        minus: "48",
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
        lowThreeOne: "543",
        combinationDesc: "不提科目要求",
        admissions: "40",
        conditionDesc: "5B及以上",
        lowwest23: "70",
        lowwestDegreeDesc: "10B",
        lowwestGaoKao23: "588",
        minus: "45",
      },
      {
        name: "学前教育（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "505",
        combinationDesc: "不提科目要求",
        admissions: "40",
        conditionDesc: "5B及以上",
        lowwest23: "70",
        lowwestDegreeDesc: "10B",
        lowwestGaoKao23: "585",
        minus: "80",
      },
      {
        name: "民族学",
        condition: (values: string) => {
          return includeHistory(values);
        },
        lowThreeOne: "517",
        combinationDesc: "历史",
        admissions: "20",
        conditionDesc: "5B及以上",
        lowwest23: "70",
        lowwestDegreeDesc: "10B",
        lowwestGaoKao23: "581",
        minus: "64",
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
        lowThreeOne: "564",
        combinationDesc: "不提科目要求",
        admissions: "20",
        conditionDesc: "1A6B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "5A直接过",
        lowwestGaoKao23: "604",
        minus: "40",
      },
      {
        name: "数学与应用数学(师范))",
        condition: (values: any) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "561",
        combinationDesc: "物理+化学",
        admissions: "20",
        conditionDesc: "1A6B及以上",
        lowwest23: "108",
        lowwestDegreeDesc: "4A5B1C",
        lowwestGaoKao23: "538",
        minus: "-23",
      },
      {
        name: "物理学(师范)",
        condition: (values: any) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "550",
        combinationDesc: "物理+化学",
        admissions: "20",
        conditionDesc: "1A6B及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "2A6B2C",
        lowwestGaoKao23: "492",
        minus: "-58",
      },
      {
        name: "化学(师范)",
        condition: (values: any) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "543",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "1A6B及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "2A6B2C",
        lowwestGaoKao23: "548",
        minus: "5",
      },
      {
        name: "教育技术学(师范)",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理",
        admissions: "15",
        conditionDesc: "1A6B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "522",
        minus: "/",
      },
      {
        name: "电气工程及其自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "534",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "5B及以上",
        lowwest23: "108",
        lowwestDegreeDesc: "3A7B",
        lowwestGaoKao23: "568",
        minus: "34",
      },
      {
        name: "计算机科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "530",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "5B及以上",
        lowwest23: "114",
        lowwestDegreeDesc: "4A6B",
        lowwestGaoKao23: "566",
        minus: "36",
      },
      {
        name: "制药工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "5B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "557",
        minus: "/",
      },
      {
        name: "生物工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "504",
        combinationDesc: "物理+化学",
        admissions: "20",
        conditionDesc: "5B及以上",
        lowwest23: "78",
        lowwestDegreeDesc: "2A4B4C",
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
        admissions: "15",
        conditionDesc: "5B及以上",
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
        lowThreeOne: "533",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "5B及以上",
        lowwest23: "96",
        lowwestDegreeDesc: "1A9B",
        lowwestGaoKao23: "565",
        minus: "32",
      },
      {
        name: "水产养殖学(卓越班)",
        condition: (values: any) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "528",
        combinationDesc: "物理+化学",
        admissions: "20",
        conditionDesc: "5B及以上",
        lowwest23: "66",
        lowwestDegreeDesc: "7B1C2D",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "护理学",
        condition: (values: any) => {
          return includeChemical(values);
        },
        lowThreeOne: "522",
        combinationDesc: "化学",
        admissions: "30",
        conditionDesc: "5B及以上",
        lowwest23: "87",
        lowwestDegreeDesc: "3A4B2C1D",
        lowwestGaoKao23: "561",
        minus: "39",
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
        lowThreeOne: "567",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "5B及以上",
        lowwest23: "76",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "学前教育（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "516",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "5B及以上",
        lowwest23: "76",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "英语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不提科目要求",
        admissions: "8",
        conditionDesc: "4B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "586",
        minus: "/",
      },
      {
        name: "日语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "544",
        combinationDesc: "不提科目要求",
        admissions: "8",
        conditionDesc: "4B及以上",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "跨境电子商务",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "553",
        combinationDesc: "不提科目要求",
        admissions: "8",
        conditionDesc: "4B及以上",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "587",
        minus: "34",
      },
      {
        name: "服装设计与工程",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "554",
        combinationDesc: "不提科目要求",
        admissions: "8",
        conditionDesc: "4B及以上",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "工程管理",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "536",
        combinationDesc: "物理",
        admissions: "8",
        conditionDesc: "4B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "药学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "8",
        conditionDesc: "4B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "563",
        minus: "/",
      },
      {
        name: "化学工程与工艺",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "537",
        combinationDesc: "物理+化学",
        admissions: "8",
        conditionDesc: "4B及以上",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "应用化学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "536",
        combinationDesc: "物理+化学",
        admissions: "8",
        conditionDesc: "4B及以上",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "工业设计",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "533",
        combinationDesc: "物理+化学",
        admissions: "8",
        conditionDesc: "4B及以上",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "工程管理",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "8",
        conditionDesc: "4B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "生物工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "4B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "纺织工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "526",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "4B及以上",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "轻化工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "514",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "4B及以上",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "高分子材料与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "544",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "4B及以上",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "非织造材料与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "535",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "4B及以上",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "建筑环境与能源应用工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "542",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "4B及以上",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "土木工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "540",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "4B及以上",
        lowwest23: "73",
        lowwestDegreeDesc: "3A5B2C",
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
        name: "思想政治教育（师范）",
        condition: (values: any) => {
          return includePolitical(values);
        },
        lowThreeOne: "550",
        combinationDesc: "思想政治",
        admissions: "10",
        conditionDesc: "6B及以上",
        lowwest23: "84",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "594",
        minus: "44",
      },
      {
        name: "小学教育（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "527",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "6B及以上",
        lowwest23: "84",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "594",
        minus: "67",
      },
      {
        name: "学前教育（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "562",
        combinationDesc: "不提科目要求",
        admissions: "15",
        conditionDesc: "6B及以上",
        lowwest23: "84",
        lowwestDegreeDesc: "3A6B1C",
        lowwestGaoKao23: "579",
        minus: "17",
      },
      {
        name: "英语（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "526",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "6B及以上",
        lowwest23: "82",
        lowwestDegreeDesc: "2A7B1C",
        lowwestGaoKao23: "590",
        minus: "64",
      },
      {
        name: "数学与应用数学（师范）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "548",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "6B及以上",
        lowwest23: "84",
        lowwestDegreeDesc: "4A4B2C",
        lowwestGaoKao23: "492",
        minus: "-56",
      },
      {
        name: "科学教育（师范）",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "546",
        combinationDesc: "物理",
        admissions: "20",
        conditionDesc: "6B及以上",
        lowwest23: "84",
        lowwestDegreeDesc: "4A4B2C",
        lowwestGaoKao23: "492",
        minus: "-54",
      },
      {
        name: "制药工程",
        condition: (values: any) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "30",
        conditionDesc: "5B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "501",
        minus: "/",
      },
      {
        name: "材料科学与工程",
        condition: (values: any) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "5B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "531",
        minus: "/",
      },
      {
        name: "计算机科学与技术",
        condition: (values: any) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "5B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "546",
        minus: "/",
      },
      {
        name: "土木工程",
        condition: (values: any) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "5B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "529",
        minus: "/",
      },
      {
        name: "电子信息工程",
        condition: (values: any) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "5B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "539",
        minus: "/",
      },
      {
        name: "环境工程",
        condition: (values: any) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "5B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "511",
        minus: "/",
      },
      {
        name: "康复治疗学",
        condition: (values: any) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "30",
        conditionDesc: "5B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "504",
        minus: "/",
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
        lowThreeOne: "526",
        combinationDesc: "物理+化学",
        admissions: "35",
        conditionDesc: "5B及以上",
        lowwest23: "79",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "地质工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "526",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "5B及以上",
        lowwest23: "79",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "纺织工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "524",
        combinationDesc: "物理+化学",
        admissions: "25",
        conditionDesc: "5B及以上",
        lowwest23: "74",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "轻化工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "525",
        combinationDesc: "物理+化学",
        admissions: "20",
        conditionDesc: "5B及以上",
        lowwest23: "74",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "高分子材料与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "522",
        combinationDesc: "物理+化学",
        admissions: "20",
        conditionDesc: "5B及以上",
        lowwest23: "83",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "新能源材料与器件",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "538",
        combinationDesc: "物理+化学",
        admissions: "20",
        conditionDesc: "5B及以上",
        lowwest23: "83",
        lowwestDegreeDesc: "/",
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
        lowThreeOne: "563",
        combinationDesc: "历史",
        admissions: "10",
        conditionDesc: "1A及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "603",
        minus: "40",
      },
      {
        name: "小学教育(师范)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "556",
        combinationDesc: "不提科目要求",
        admissions: "20",
        conditionDesc: "1A及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "598",
        minus: "42",
      },
      {
        name: "西班牙语(中外合作办学)(旅游方向)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "513",
        combinationDesc: "不提科目要求",
        admissions: "20",
        conditionDesc: "1A及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "576",
        minus: "63",
      },
      {
        name: "意大利语(中外合作办学)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "526",
        combinationDesc: "不提科目要求",
        admissions: "20",
        conditionDesc: "1A及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "575",
        minus: "49",
      },
      {
        name: "葡萄牙语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "555",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "1A及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "581",
        minus: "26",
      },
      {
        name: "俄语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "554",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "1A及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "582",
        minus: "28",
      },
      {
        name: "阿拉伯语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "547",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "1A及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "583",
        minus: "36",
      },
      {
        name: "日语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "562",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "1A及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "580",
        minus: "18",
      },
      {
        name: "朝鲜语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "556",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "1A及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "580",
        minus: "24",
      },
      {
        name: "意大利语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "555",
        combinationDesc: "不提科目要求",
        admissions: "5",
        conditionDesc: "1A及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "582",
        minus: "27",
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
        lowThreeOne: "513",
        combinationDesc: "不提科目要求",
        admissions: "15",
        conditionDesc: "5B及以上",
        lowwest23: "58",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "581",
        minus: "68",
      },
      {
        name: "工业设计",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "506",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "5B及以上",
        lowwest23: "60",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "538",
        minus: "32",
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
        name: "数学与应用数学（师范）",
        condition: (values: any) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "5B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "492",
        minus: "/",
      },
      {
        name: "小学教育（师范）",
        condition: (values: string) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不提科目要求",
        admissions: "20",
        conditionDesc: "5B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "590",
        minus: "/",
      },
      {
        name: "英语（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "510",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "5B及以上",
        lowwest23: "73",
        lowwestDegreeDesc: "2A7B1C",
        lowwestGaoKao23: "587",
        minus: "77",
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
        lowThreeOne: "525",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "10C及以上",
        lowwest23: "92",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "590",
        minus: "65",
      },
      {
        name: "护理学",
        condition: (values: string) => {
          return includeChemical(values);
        },
        lowThreeOne: "536",
        combinationDesc: "化学",
        admissions: "30",
        conditionDesc: "10C及以上",
        lowwest23: "85",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "570",
        minus: "34",
      },
      {
        name: "药学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "40",
        conditionDesc: "10C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "558",
        minus: "/",
      },
      {
        name: "土木工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "529",
        combinationDesc: "物理+化学",
        admissions: "40",
        conditionDesc: "10C及以上",
        lowwest23: "87",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "562",
        minus: "33",
      },
      {
        name: "会展经济与管理（中外合作办学）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "538",
        combinationDesc: "不提科目要求",
        admissions: "30",
        conditionDesc: "10C及以上",
        lowwest23: "79",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "580",
        minus: "42",
      },
      {
        name: "工业设计（中外合作办学）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "525",
        combinationDesc: "物理+化学",
        admissions: "50",
        conditionDesc: "10C及以上",
        lowwest23: "78",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "569",
        minus: "44",
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
        name: "经济学（中外合作办学）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "543",
        combinationDesc: "不提科目要求",
        admissions: "11",
        conditionDesc: "6B4C及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "602",
        minus: "59",
      },
      {
        name: "金融学（中外合作办学）（国际金融方向）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "543",
        combinationDesc: "不提科目要求",
        admissions: "15",
        conditionDesc: "6B4C及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "588",
        minus: "45",
      },
      {
        name: "国际商务（中外合作办学）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "560",
        combinationDesc: "不提科目要求",
        admissions: "8",
        conditionDesc: "6B4C及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "587",
        minus: "27",
      },
      {
        name: "会计学（中外合作办学）(国际会计方向)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "562",
        combinationDesc: "不提科目要求",
        admissions: "18",
        conditionDesc: "6B4C及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "590",
        minus: "28",
      },
      {
        name: "市场营销（中外合作办学）（国际方向)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "543",
        combinationDesc: "不提科目要求",
        admissions: "6",
        conditionDesc: "6B4C及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "英语（中外合作办学）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "547",
        combinationDesc: "不提科目要求",
        admissions: "8",
        conditionDesc: "6B4C及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "584",
        minus: "37",
      },
      {
        name: "心理学（中外合作办学）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "557",
        combinationDesc: "不提科目要求",
        admissions: "8",
        conditionDesc: "6B4C及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "585",
        minus: "28",
      },
      {
        name: "传播学（中外合作办学）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "551",
        combinationDesc: "不提科目要求",
        admissions: "14",
        conditionDesc: "6B4C及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "597",
        minus: "46",
      },
      {
        name: "建筑学（中外合作办学）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "547",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "6B4C及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "管理科学（中外合作办学）",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "533",
        combinationDesc: "物理",
        admissions: "7",
        conditionDesc: "6B4C及以上",
        lowwest23: "100",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "生物科学（中外合作办学）(细胞与分子方向)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "525",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "6B4C及以上",
        lowwest23: "100",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "581",
        minus: "56",
      },
      {
        name: "数学与应用数学（中外合作办学）(数据分析方向)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "555",
        combinationDesc: "物理+化学",
        admissions: "9",
        conditionDesc: "6B4C及以上",
        lowwest23: "100",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "586",
        minus: "31",
      },
      {
        name: "计算机科学与技术（中外合作办学）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "545",
        combinationDesc: "物理+化学",
        admissions: "18",
        conditionDesc: "6B4C及以上",
        lowwest23: "100",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "582",
        minus: "37",
      },
      {
        name: "化学（中外合作办学）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "549",
        combinationDesc: "物理+化学",
        admissions: "4",
        conditionDesc: "6B4C及以上",
        lowwest23: "100",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "环境科学（中外合作办学）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "541",
        combinationDesc: "物理+化学",
        admissions: "4",
        conditionDesc: "6B4C及以上",
        lowwest23: "100",
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
        lowThreeOne: "504",
        combinationDesc: "不提科目要求",
        admissions: "20",
        conditionDesc: "4B6C及以上",
        lowwest23: "79",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "560",
        minus: "56",
      },
      {
        name: "创业管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "528",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "4B6C及以上",
        lowwest23: "87",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "562",
        minus: "34",
      },
      {
        name: "物流管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "527",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "4B6C及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "561",
        minus: "34",
      },
      {
        name: "金融工程",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "529",
        combinationDesc: "物理",
        admissions: "10",
        conditionDesc: "2B8C及以上",
        lowwest23: "84",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "540",
        minus: "11",
      },
      {
        name: "电子信息工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "2B8C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "生物技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "2B8C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "492",
        minus: "/",
      },
      {
        name: "生物工程类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "480",
        combinationDesc: "物理+化学",
        admissions: "20",
        conditionDesc: "2B8C及以上",
        lowwest23: "85",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "504",
        minus: "24",
      },
      {
        name: "环境科学与工程类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "508",
        combinationDesc: "物理+化学",
        admissions: "20",
        conditionDesc: "2B8C及以上",
        lowwest23: "79",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "508",
        minus: "0",
      },
      {
        name: "食品科学与工程类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "493",
        combinationDesc: "物理+化学",
        admissions: "20",
        conditionDesc: "2B8C及以上",
        lowwest23: "79",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "522",
        minus: "29",
      },
      {
        name: "食品营养与健康",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "2B8C及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "504",
        minus: "/",
      },
      {
        name: "区块链工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "509",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "2B8C及以上",
        lowwest23: "71",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "525",
        minus: "16",
      },
      {
        name: "网络空间安全",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "506",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "2B8C及以上",
        lowwest23: "87",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "526",
        minus: "20",
      },
      {
        name: "智能影像工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "517",
        combinationDesc: "物理+化学",
        admissions: "5",
        conditionDesc: "2B8C及以上",
        lowwest23: "87",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "513",
        minus: "-4",
      },
      {
        name: "机械电子工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "512",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "2B8C及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "531",
        minus: "19",
      },
      {
        name: "供应链管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "509",
        combinationDesc: "不提科目要求",
        admissions: "40",
        conditionDesc: "10C及以上",
        lowwest23: "74",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "562",
        minus: "53",
      },
      {
        name: "国际经济与贸易（中外2+2双学位班）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "525",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "10C及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "563",
        minus: "38",
      },
      {
        name: "会展经济与管理（中德2+2双学位班）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "534",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "10C及以上",
        lowwest23: "78",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "555",
        minus: "21",
      },
      {
        name: "广告学（中德2+2双学位班）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "487",
        combinationDesc: "不提科目要求",
        admissions: "20",
        conditionDesc: "10C及以上",
        lowwest23: "73",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "559",
        minus: "72",
      },
      {
        name: "视觉传达设计（中德2+2双学位班）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "499",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "10C及以上",
        lowwest23: "76",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "艺术与科技（中德2+2双学位班）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "513",
        combinationDesc: "不提科目要求",
        admissions: "20",
        conditionDesc: "10C及以上",
        lowwest23: "75",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "广告学（中外合作办学）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "507",
        combinationDesc: "不提科目要求",
        admissions: "40",
        conditionDesc: "10C及以上",
        lowwest23: "60",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "556",
        minus: "49",
      },
      {
        name: "视觉传达设计（中外合作办学）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "476",
        combinationDesc: "不提科目要求",
        admissions: "30",
        conditionDesc: "10C及以上",
        lowwest23: "60",
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
        name: "电气工程及其自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "5B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "546",
        minus: "/",
      },
      {
        name: "计算机科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "500",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "5B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "545",
        minus: "45",
      },
      {
        name: "电子信息工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "519",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "5B及以上",
        lowwest23: "73",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "545",
        minus: "26",
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
        name: "机械设计制造及其自动化",
        condition: (values: any) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "4B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "546",
        minus: "/",
      },
      {
        name: "工业设计",
        condition: (values: any) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "502",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "4B及以上",
        lowwest23: "71",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "535",
        minus: "33",
      },
      {
        name: "化学工程与工艺",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "4B及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "532",
        minus: "/",
      },
      {
        name: "土木工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "515",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "4B及以上",
        lowwest23: "71",
        lowwestDegreeDesc: "3A5B2C",
        lowwestGaoKao23: "537",
        minus: "22",
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
        lowThreeOne: "525",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "5B及以上",
        lowwest23: "78",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "578",
        minus: "53",
      },
      {
        name: "工商管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "545",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "5B及以上",
        lowwest23: "78",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "581",
        minus: "36",
      },
      {
        name: "英语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "507",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "5B及以上",
        lowwest23: "78",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "574",
        minus: "67",
      },
      {
        name: "机械工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "518",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "5B及以上",
        lowwest23: "82",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "电子信息工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "519",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "5B及以上",
        lowwest23: "82",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "548",
        minus: "29",
      },
      {
        name: "土木工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "508",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "5B及以上",
        lowwest23: "82",
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
        lowThreeOne: "525",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "4B6C及以上",
        lowwest23: "84",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "558",
        minus: "33",
      },
      {
        name: "材料科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "536",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "4B6C及以上",
        lowwest23: "74",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "556",
        minus: "20",
      },
      {
        name: "化学工程与工艺",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "524",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "4B6C及以上",
        lowwest23: "80",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "553",
        minus: "29",
      },
      {
        name: "机械设计制造及其自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "540",
        combinationDesc: "物理+化学",
        admissions: "8",
        conditionDesc: "4B6C及以上",
        lowwest23: "95",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "563",
        minus: "23",
      },
      {
        name: "土木工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "521",
        combinationDesc: "物理+化学",
        admissions: "8",
        conditionDesc: "4B6C及以上",
        lowwest23: "78",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "551",
        minus: "30",
      },
      {
        name: "工业设计",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "531",
        combinationDesc: "物理+化学",
        admissions: "8",
        conditionDesc: "4B6C及以上",
        lowwest23: "83",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "558",
        minus: "27",
      },
      {
        name: "国际经济与贸易(中外合作办学)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不提科目要求",
        admissions: "8",
        conditionDesc: "4B6C及以上",
        lowwest23: "79",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "573",
        minus: "/",
      },
      {
        name: "金融学(中外合作办学)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不提科目要求",
        admissions: "8",
        conditionDesc: "4B6C及以上",
        lowwest23: "81",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "570",
        minus: "/",
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
        lowThreeOne: "569",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "10B及以上",
        lowwest23: "97",
        lowwestDegreeDesc: "7A3B",
        lowwestGaoKao23: "570",
        minus: "1",
      },
      {
        name: "医学信息工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "522",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "9B1D及以上",
        lowwest23: "93",
        lowwestDegreeDesc: "3A7B",
        lowwestGaoKao23: "554",
        minus: "32",
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
        lowThreeOne: "533",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "10D及以上",
        lowwest23: "76",
        lowwestDegreeDesc: "2A8B",
        lowwestGaoKao23: "558",
        minus: "25",
      },
      {
        name: "港口航道与海岸工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "498",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "10D及以上",
        lowwest23: "76",
        lowwestDegreeDesc: "2A8B",
        lowwestGaoKao23: "531",
        minus: "33",
      },
      {
        name: "给排水科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "492",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "10D及以上",
        lowwest23: "76",
        lowwestDegreeDesc: "2A8B",
        lowwestGaoKao23: "535",
        minus: "43",
      },
      {
        name: "环境生态工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "501",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "10D及以上",
        lowwest23: "76",
        lowwestDegreeDesc: "2A8B",
        lowwestGaoKao23: "530",
        minus: "29",
      },
      {
        name: "土木工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "503",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "10D及以上",
        lowwest23: "76",
        lowwestDegreeDesc: "2A8B",
        lowwestGaoKao23: "532",
        minus: "29",
      },
      {
        name: "道路桥梁与渡河工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "493",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "10D及以上",
        lowwest23: "76",
        lowwestDegreeDesc: "2A8B",
        lowwestGaoKao23: "538",
        minus: "45",
      },
      {
        name: "测绘工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "508",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "10D及以上",
        lowwest23: "76",
        lowwestDegreeDesc: "2A8B",
        lowwestGaoKao23: "536",
        minus: "28",
      },
      {
        name: "遥感科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "528",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "10D及以上",
        lowwest23: "76",
        lowwestDegreeDesc: "2A8B",
        lowwestGaoKao23: "538",
        minus: "10",
      },
      {
        name: "材料成型及控制工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "512",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "10D及以上",
        lowwest23: "76",
        lowwestDegreeDesc: "2A8B",
        lowwestGaoKao23: "542",
        minus: "30",
      },
      {
        name: "新能源科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "519",
        combinationDesc: "物理+化学",
        admissions: "10",
        conditionDesc: "10D及以上",
        lowwest23: "76",
        lowwestDegreeDesc: "2A8B",
        lowwestGaoKao23: "550",
        minus: "31",
      },
    ],
  },
  {
    name: "金华职业技术大学",
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
        lowThreeOne: "453",
        combinationDesc: "不提科目要求",
        admissions: "20",
        conditionDesc: "4C6D及以上",
        lowwest23: "224",
        lowwestDegreeDesc: "5B3C2D",
        lowwestGaoKao23: "541",
        minus: "88",
      },
    ],
  },
  {
    name: "宁波幼儿师范高等专科学院",
    condition: 190,
    calculate: (a: number, b: number, c: number, d: number) => {
      return a * 30 + b * 25 + c * 21 + d * 18;
    },
    major: [
      {
        name: "体育教育(幼教方向)（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "404",
        combinationDesc: "不提科目要求",
        admissions: "20",
        conditionDesc: "4C6D及以上",
        lowwest23: "192",
        lowwestDegreeDesc: "4C6D",
        lowwestGaoKao23: "474",
        minus: "70",
      },
      {
        name: "音乐教育(幼教方向)（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "410",
        combinationDesc: "不提科目要求",
        admissions: "25",
        conditionDesc: "4C6D及以上",
        lowwest23: "193",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "470",
        minus: "60",
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
        name: "金融学(国际班)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不提科目要求",
        admissions: "40",
        conditionDesc: "10D及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "会计学(国际班)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不提科目要求",
        admissions: "40",
        conditionDesc: "10D及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "外国语言文学类(国际班)(含英语、商务英语专业)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不提科目要求",
        admissions: "50",
        conditionDesc: "10D及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "计算机类(国际班)(含计算机科学与技术、数据科学与大数据技术专业)",
        condition: (values: any) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理+化学",
        admissions: "45",
        conditionDesc: "10D及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "新闻传播学类(国际班)(含广告学、传播学、网络与新媒体专业)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "/",
        combinationDesc: "不提科目要求",
        admissions: "40",
        conditionDesc: "10D及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "计算机类(含计算机科学与技术、数据科学与大数据技术专业)",
        condition: (values: any) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "472",
        combinationDesc: "物理+化学",
        admissions: "15",
        conditionDesc: "10D及以上",
        lowwest23: "94",
        lowwestDegreeDesc: "7B3C",
        lowwestGaoKao23: "492",
        minus: "20",
      },
      {
        name: "工商管理类(含工商管理、人力资源管理、审计学、财务管理专业)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "485",
        combinationDesc: "不提科目要求",
        admissions: "20",
        conditionDesc: "10D及以上",
        lowwest23: "90",
        lowwestDegreeDesc: "5B5C",
        lowwestGaoKao23: "531",
        minus: "46",
      },
      {
        name: "国际经济与贸易",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "478",
        combinationDesc: "不提科目要求",
        admissions: "10",
        conditionDesc: "10D及以上",
        lowwest23: "86",
        lowwestDegreeDesc: "3B7C",
        lowwestGaoKao23: "531",
        minus: "53",
      },
      {
        name: "会计学",
        condition: (values: string) => {
          return true;
        },
        lowThreeOne: "492",
        combinationDesc: "不提科目要求",
        admissions: "20",
        conditionDesc: "10D及以上",
        lowwest23: "94",
        lowwestDegreeDesc: "7B3C",
        lowwestGaoKao23: "544",
        minus: "52",
      },
      {
        name: "金融科技",
        condition: (values: string) => {
          return includePhysicl(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理",
        admissions: "20",
        conditionDesc: "10D及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
    ],
  },
  {
    name: "宁波财经学院",
    condition: 60,
    calculate: (a: number, b: number, c: number, d: number) => {
      return a * 15 + b * 9 + c * 6 + d * 4;
    },
    major: [
      {
        name: "财务管理（家族财富管理)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "484",
        combinationDesc: "不提科目要求",
        admissions: "30",
        conditionDesc: "10C及以上",
        lowwest23: "93",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "544",
        minus: "60",
      },
      {
        name: "创业管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "494",
        combinationDesc: "不提科目要求",
        admissions: "35",
        conditionDesc: "10C及以上",
        lowwest23: "81",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "532",
        minus: "38",
      },
      {
        name: "文化产业管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "476",
        combinationDesc: "不提科目要求",
        admissions: "25",
        conditionDesc: "10C及以上",
        lowwest23: "84",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "534",
        minus: "58",
      },
      {
        name: "国际经济与贸易(大宗商品交易)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "476",
        combinationDesc: "不提科目要求",
        admissions: "25",
        conditionDesc: "10C及以上",
        lowwest23: "87",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "536",
        minus: "60",
      },
      {
        name: "工业设计",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: "429",
        combinationDesc: "物理+化学",
        admissions: "25",
        conditionDesc: "10C及以上",
        lowwest23: "91",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "492",
        minus: "63",
      },
      {
        name: "广播电视编导(中韩2+2学分互认班)",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "474",
        combinationDesc: "不提科目要求",
        admissions: "30",
        conditionDesc: "10C及以上",
        lowwest23: "68",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "戏剧影视文学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "466",
        combinationDesc: "不提科目要求",
        admissions: "30",
        conditionDesc: "10C及以上",
        lowwest23: "70",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "532",
        minus: "66",
      },
    ],
  },
  {
    name: "浙江越秀外国语学院",
    specialCalculate: (a: number, b: number, c: number, d: any) => {
      return true;
    },
    major: [
      {
        name: "日语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "506",
        combinationDesc: "不提科目要求",
        admissions: "8",
        conditionDesc: "1B9D及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "526",
        minus: "20",
      },
      {
        name: "阿拉伯语",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "503",
        combinationDesc: "不提科目要求",
        admissions: "8",
        conditionDesc: "1B9D及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "525",
        minus: "22",
      },
      {
        name: "国际商务",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "491",
        combinationDesc: "不提科目要求",
        admissions: "16",
        conditionDesc: "1B9D及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "535",
        minus: "44",
      },
      {
        name: "传播学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "507",
        combinationDesc: "不提科目要求",
        admissions: "4",
        conditionDesc: "1B9D及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "539",
        minus: "32",
      },
      {
        name: "新闻学",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "515",
        combinationDesc: "不提科目要求",
        admissions: "4",
        conditionDesc: "1B9D及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "542",
        minus: "27",
      },
      {
        name: "大数据管理与应用（中外合作办学）",
        condition: (values: any) => {
          return includePhysicl(values);
        },
        lowThreeOne: "/",
        combinationDesc: "物理",
        admissions: "20",
        conditionDesc: "1B9D及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "/",
        minus: "/",
      },
      {
        name: "酒店管理",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: "477",
        combinationDesc: "不提科目要求",
        admissions: "60",
        conditionDesc: "1B9D及以上",
        lowwest23: "/",
        lowwestDegreeDesc: "/",
        lowwestGaoKao23: "528",
        minus: "51",
      },
    ],
  },
];
