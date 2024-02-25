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
    name: "杭州师范大学",
    /* 判断分 */
    condition: 20,
    calcuate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 5 + c * 2;
    },
    major: [
      {
        name: "学前教育（师范）",
        /* 报考专业条件 */
        condition: (values: any) => {
          return true;
        },
        /* 23三一最低分 */
        lowThreeOne: 551,
        /* 选科要求说明 */
        combinationDesc: "不限",
        /* 招生计划 */
        admissions: 60,
        /* 条件说明 */
        conditionDesc: "≥3A，且A+B≥5",
        /* 23初审最低分 */
        lowwest23: 62,
        /* 对应学考等级 */
        lowwestDegreeDesc: "3A6B1C",
        /* 23高考最低分 */
        lowwestGaoKao23: "603",
        /* 降分幅度 */
        minus: "52",
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
      {
        name: "小学教育（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: 604,
        combinationDesc: "不限",
        admissions: 70,
        conditionDesc: "≥6A",
        lowwest23: 80,
        lowwestDegreeDesc: "6A4B",
        lowwestGaoKao23: "635",
        minus: "31",
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
        lowwestGaoKao23: "仅三一招生",
        minus: "/",
      },
      {
        name: "物理学（物理学+教育技术学本硕衔接实验班）（师范）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
        lowThreeOne: 614,
        combinationDesc: "物理+化学",
        admissions: 40,
        conditionDesc: "7A，物理为A，外语不低于B",
        lowwest23: 90,
        lowwestDegreeDesc: "8A2B",
        lowwestGaoKao23: "仅三一招生",
        minus: "/",
      },
      {
        name: "历史学（历史学+思想政治教育本硕衔接实验班）（师范）",
        condition: (values: any) => {
          return true;
        },
        lowThreeOne: 629,
        combinationDesc: "不限",
        admissions: 40,
        conditionDesc: "7A，历史为A，外语不低于B",
        lowwest23: 90,
        lowwestDegreeDesc: "8A2B",
        lowwestGaoKao23: "仅三一招生",
        minus: "/",
      },
    ],
  },
  {
    name: "浙江师范大学",
    condition: 76,
    calcuate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 8 + c * 4;
    },
    major: [
      {
        name: "小学教育（师范）}",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "生物科学（师范）}",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "汉语言文学（师范）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "化学（师范）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "思想政治教育（师范）",
        condition: (values: string) => {
          return includePolitical(values);
        },
      },
      {
        name: "英语（师范）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "学前教育（师范）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "特殊教育（师范）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "地理科学（地理科学+思想政治本硕衔接实验班）（师范）",
        condition: (values: string) => {
          return includeGeography(values);
        },
      },
      {
        name: "化学（化学+生物科学本硕衔接试验班）（师范）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
    ],
  },
  {
    name: "宁波大学",
    condition: 82,
    calcuate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 8 + c * 4;
    },
    major: [
      {
        name: "工程力学(拔尖人才创新班) ",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "历史学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "机械类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "通信工程(拔尖人才创新班)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "生物技术(拔尖人才创新班)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "水产养殖学(拔尖人才创新班)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "物理学(拔尖人才创新班)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "数学与应用数学(拔尖人才创新班)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "环境工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "汉语言文学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "经济学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "地理科学（师范）",
        condition: (values: string) => {
          return includeGeography(values);
        },
      },
      {
        name: "小学教育（师范）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "学前教育（师范）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "思想政治教育（师范）",
        condition: (values: string) => {
          return includePolitical(values);
        },
      },
      {
        name: "物理学（师范）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "数学与应用数学（师范）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "英语（师范）要求高考成绩≥115",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "汉语言文学（师范）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "人文地理与城乡规划（中外合作办学）（中法合作）",
        condition: (values: string) => {
          return includeGeography(values);
        },
      },
      {
        name: "旅游管理（中外合作办学）（中法合作）",
        condition: (values: any) => {
          return true;
        },
      },
    ],
  },
  {
    name: "宁波诺丁汉大学",
    condition: 0,
    calcuate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 7 + c * 4;
    },
    maior: [
      {
        name: "国际商务",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "财务管理",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "经济学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "国际经济与贸易",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "国际事务与国际关系",
        condition: (values: string) => {
          return includePolitical(values);
        },
      },
      {
        name: "传播学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "英语",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "计算机科学与技术",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "数学与应用数学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "电气类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "电气类（2+2）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "化工与制药类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "化工与制药类（2+2）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "环境科学（2+2）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "统计学（2+2）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "建筑学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "化学（2+2）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
    ],
  },
  {
    name: "杭州电子科技大学",
    condition: 110,
    calcuate: (a: number, b: number, c: number, d: any) => {
      return a * 15 + b * 10 + c * 5;
    },
    maior: [
      {
        name: "理工类实验班",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "经管类实验班",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "智能科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "计算机类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "信息安全",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "集成电路设计与集成系统",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "网络工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "数字媒体技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "电子信息类（电子信息学院）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "会计学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "审计学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "电子信息类（通信学院）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "电气工程及其自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "机械设计制造及其自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "车辆工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "经济与贸易类",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "金融学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "财务管理",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "光电信息科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "测控技术与仪器",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "统计学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "医学信息工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "法学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "工业设计",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "工商管理类",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "数学类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "管理科学与工程类",
        condition: (values: string) => {
          return includePhysicl(values);
        },
      },
      {
        name: "英语",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "工业工程",
        condition: (values: string) => {
          return includePhysicl(values);
        },
      },
      {
        name: "电子商务",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "传播学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "环境工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "材料科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
    ],
  },
  {
    name: "浙江工商大学",
    condition: 60,
    calcuate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 5 + c * 0;
    },
    major: [
      {
        name: "工商管理类(含工商管理、市场营销、人力资源管理、国际商务)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "应用统计学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "会计学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "经济统计学",
        condition: (values: string) => {
          return includePhysicl(values);
        },
      },
      {
        name: "经济学类(含经济学、国际经济与贸易)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "金融学类(含金融学、投资学、金融工程)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "法学类(含法学、知识产权)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "保险学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "历史学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "法语",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "外国语言文学类(含英语、商务英语)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "旅游管理类(含旅游管理、酒店管理)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "公共管理类(含行政管理、土地资源管理、文化产业管理)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "汉语言文学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "哲学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "日语",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "阿拉伯语",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "广告学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "新闻学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "社会工作",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "信息管理与信息系统",
        condition: (values: string) => {
          return includePhysicl(values);
        },
      },
      {
        name: "电子商务类(含电子商务、物流管理)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "给排水科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "电子信息类(含电子信息工程、通信工程)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "环境科学与工程类(含环境科学、环境工程)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "计算机类(含计算机科学与技术、软件工程、信息安全)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "生物工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "食品科学与工程类(含食品科学与工程、食品质量与安全)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "城乡规划",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "数学与应用数学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
    ],
  },
  {
    name: "浙江理工大学",
    condition: 0,
    calcuate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 8 + c * 4;
    },
    major: [
      {
        name: "纺织类(纺织工程、非织造材料与工公程)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "生物科学类(生物技术、生物制药)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "化学类(应用化学、材料化学)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "材料类(材料科学与工程、高分子材料与工程)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "丝绸设计与工程",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "应用心理学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "建筑类(建筑学、风景园林)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "服装设计与工程",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "轻化工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "土木类(土木工程、建筑环境与能源应用工程、工程管理)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "新能源材料与器件",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "数学类(按数理类培养，含数学与应用数学、信息与计算科学、应用物理学专业)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "能源与动力工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "测控技术与仪器",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "工业设计",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "电气类(自动化、电气工程及其自动化、机器人工程)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "机械类(机械设计制造及其自动化、机械电子工程、智能制造工程)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "电子信息类(电子信息工程、通信工程)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "信息管理与信息系统",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "计算机类(计算机科学与技术、智能科学与技术、数字媒体技术)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "公共管理类(行政管理、社会工作)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "经济与贸易类(经济学、金融学、国际经济与贸易)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "新闻传播学类(传播学、汉语言文学)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "外国语言文学类(英语、日语)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "法学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "工商管理类(会计学、工商管理、人力资源管理)",
        condition: (values: any) => {
          return true;
        },
      },
    ],
  },
  {
    name: "温州大学",
    condition: 100,
    calcuate: (a: number, b: number, c: number, d: any) => {
      return a * 15 + b * 10 + c * 5;
    },
    major: [
      {
        name: "学前教育(师范)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "思想政治教育(师范)",
        condition: (values: string) => {
          return includePolitical(values);
        },
      },
      {
        name: "教育技术学(师范)",
        condition: (values: string) => {
          return includePhysicl(values);
        },
      },
      {
        name: "历史学(师范)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "物理学(师范)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "应用心理学(师范)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "小学教育(师范)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "化学(师范)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "生物科学(师范)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "汉语言文学(师范)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "英语(师范)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "数学与应用数学(师范)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "法学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "国际贸易规则",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "集成电路设计与集成系统",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "城市地下空间工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "信息与计算科学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "环境工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "车辆工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "土木工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "能源化学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "电气工程及其自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "智能制造工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "工业工程",
        condition: (values: string) => {
          return includePhysicl(values);
        },
      },
      {
        name: "机械工程(卓工超豪示范班)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "生态学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "电子信息科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "材料科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "建筑学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "生物技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "应用化学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "数据科学与大数据技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "行政管理",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "人工智能",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "计算机科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "网络工程(卓工超豪示范班)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "应用统计学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
    ],
  },
  {
    name: "浙江财经大学",
    condition: 85,
    calcuate: (a: number, b: number, c: number, d: any) => {
      return a * 15 + b * 9 + c * 3;
    },
    major: [
      {
        name: "公共管理类(劳动与社会保障、土地资源管理、行政管理、城市管理)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "统计学类(经济统计学、应用统计学、金融数学)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "建筑类(城乡规划)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "工商管理类(财会类)(会计学、财务管理、审计学、资产评估)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "新闻传播学类(广告学、网络与新媒体)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "工商管理类(工商管理、人力资源管理、市场营销、供应链管理)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "电子商务类(电子商务)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "经济与贸易类(国际经济与贸易、经济学、数字经济)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "外国语言文学类(英语、日语、商务英语)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "财政学类(财政学、税收学)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "中国语言文学类(汉语言文学、汉语国际教育)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "法学类(法学、社会工作)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "金融学类(金融学、信用管理、金融工程、保险学、投资学)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "计算机类(大数据)(数据科学与大数据技术)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "计算机类(人工智能、软件工程、信息管理与信息系统)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "管理科学与工程类(工程管理)",
        condition: (values: string) => {
          return includePhysicl(values);
        },
      },
      {
        name: "市场营销(中外合作办学)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "金融学(中外合作办学)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "会计学(中外合作办学)",
        condition: (values: any) => {
          return true;
        },
      },
    ],
  },
  {
    name: "温州医科大学",
    condition: 91,
    calcuate: (a: number, b: number, c: number, d: number) => {
      return a * 10 + b * 9 + c * 7 + d * 4;
    },
    major: [
      {
        name: "精神医学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "临床医学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "医学影像学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "麻醉学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "临床医学（5+3一体化）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "眼视光医学（5+3一体化）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "临床医学（5+3一体化，儿科学方向）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "眼视光医学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "生物医学工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "生物技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "药学类（含药学、中药学、生物制药）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "医学检验技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "临床药学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "医学影像技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "康复治疗学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "应用心理学",
        condition: (values: any) => {
          return true;
        },
      },
    ],
  },
  {
    name: "中国计量大学",
    condition: 110,
    calcuate: (a: number, b: number, c: number, d: any) => {
      return a * 20 + b * 10 + c * 0;
    },
    major: [
      {
        name: "自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "电气工程及其自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "机械设计制造及其自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "机械电子工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "人工智能",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "工业设计",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "材料科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "功能材料",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "应用化学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "信息管理与信息系统",
        condition: (values: string) => {
          return includePhysicl(values);
        },
      },
      {
        name: "物理学类(应用物理学、声学)",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "质量管理工程（卓越工程师）",
        condition: (values: string) => {
          return includePhysicl(values);
        },
      },
      {
        name: "安全工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "环境工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "生物工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "智能感知工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "工业工程",
        condition: (values: string) => {
          return includePhysicl(values);
        },
      },
      {
        name: "数学与应用数学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "能源与动力工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "光电信息科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "测控技术与仪器",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "电子信息类(电子信息工程、通信工程）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "电子科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "食品质量与安全",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "计算机科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
    ],
  },
  {
    name: "浙江中医药大学",
    condition: 61,
    calcuate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 7 + c * 4;
    },
    major: [
      {
        name: "中医学（5+3一体化）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "中医康复学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "数据科学与大数据技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "中草药栽培与鉴定",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "公共事业管理",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "护理学",
        condition: (values: string) => {
          return includeChemical(values);
        },
      },
    ],
  },
  {
    name: "浙江农林大学",
    condition: 90,
    calcuate: (a: number, b: number, c: number, d: any) => {
      return a * 15 + b * 10 + c * 5;
    },
    major: [
      {
        name: "计算机科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "电子信息工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "智能科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "物联网工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "数据科学与大数据技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "机械设计制造及其自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "土木工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "工业设计",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "园林",
        condition: (values: string) => {
          return includeBio(values);
        },
      },
      {
        name: "农学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "植物保护",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "林学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "生物技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "农业资源与环境",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "应用统计学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "食品科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "食品质量与安全",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "中药学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "生物制药",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "园艺",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "茶学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "环境科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "木材科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "应用化学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "动物科学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "家具设计与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "风景园林",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "高分子材料与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "地理信息科学",
        condition: (values: string) => {
          return includeGeography(values);
        },
      },
      {
        name: "建筑学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "城乡规划",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "测绘工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "法学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "英语",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "农林经济管理",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "工商管理",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "电子商务",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "金融工程",
        condition: (values: string) => {
          return includePhysicl(values);
        },
      },
      {
        name: "国际经济与贸易",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "文化产业管理（茶文化）",
        condition: (values: any) => {
          return true;
        },
      },
    ],
  },
  {
    name: "浙江海洋大学",
    condition: 80,
    calcuate: (a: number, b: number, c: number, d: number) => {
      return a * 15 + b * 10 + c * 6 + d * 1;
    },
    major: [
      {
        name: "数学与应用数学(师范)",
        condition: (values: string) => {
          return includePhysicl(values);
        },
      },
      {
        name: "物理学(师范)",
        condition: (values: string) => {
          return includePhysicl(values);
        },
      },
      {
        name: "船舶与海洋工程",
        condition: (values: string) => {
          return includePhysicl(values);
        },
      },
      {
        name: "水产养殖学",
        condition: (values: string) => {
          return (
            includePhysicl(values) ||
            includeChemical(values) ||
            includeBio(values)
          );
        },
      },
      {
        name: "英语(师范)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "汉语言文学(师范)",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "历史学(师范)",
        condition: (values: string) => {
          return includeHistory(values) || includeGeography(values);
        },
      },
      {
        name: "小学教育(师范)",
        condition: (values: any) => {
          return true;
        },
      },
    ],
  },
  {
    name: "浙江科技大学",
    condition: 50,
    calcuate: (a: number, b: number, c: number, d: any) => {
      return a * 15 + b * 10 + c * 5;
    },
    major: [
      {
        name: "车辆工程",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "机器人工程（中澳联合培养）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "电气类（中德联合培养）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "土木类（中德联合培养）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "计算机类（中德联合培养）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "土木工程（中法合作办学）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "数据科学与大数据技术（中法合作办学）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "土木工程（中德合作办学）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "国际商务（中澳联合培养）",
        condition: (values: any) => {
          return true;
        },
      },
    ],
  },
  {
    name: "丽水学院",
    condition: 35,
    calcuate: (a: number, b: number, c: number, d: number) => {
      return a * 10 + b * 7 + c * 4 + d * 1;
    },
    major: [
      {
        name: "学前教育（师范）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "民族学",
        condition: (values: string) => {
          return includeHistory(values);
        },
      },
      {
        name: "小学教育（师范）",
        condition: (values: any) => {
          return true;
        },
      },
    ],
  },
  {
    name: "嘉兴大学",
    condition: 28,
    calcuate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 7 + c * 4;
    },
    major: [
      {
        name: "小学教育",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "学前教育",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "机械设计制造及其自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "建筑环境与能源应用工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "车辆工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "工业设计",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "工程管理",
        condition: (values: string) => {
          return includePhysicl(values);
        },
      },
      {
        name: "材料成型及控制工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "土木工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "信息管理与信息系统",
        condition: (values: string) => {
          return includePhysicl(values);
        },
      },
      {
        name: "化学工程与工艺",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "应用化学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "纺织工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "轻化工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "服装设计与工程",
        condition: (values: any) => {
          return true;
        },
      },
    ],
  },
  {
    name: "台州学院",
    condition: 48,
    calcuate: (a: number, b: number, c: number, d: number) => {
      return a * 10 + b * 8 + c * 6 + d * 4;
    },
    major: [
      {
        name: "小学教育（师范）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "思想政治教育（师范）",
        condition: (values: string) => {
          return includePolitical(values);
        },
      },
      {
        name: "汉语言文学（师范）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "学前教育（师范）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "历史学（师范）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "科学教育（师范）",
        condition: (values: string) => {
          return includePhysicl(values);
        },
      },
      {
        name: "数学与应用数学（师范）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "英语（师范）",
        condition: (values: any) => {
          return true;
        },
      },
    ],
  },
  {
    name: "绍兴文理学院",
    condition: 40,
    calcuate: (a: number, b: number, c: number, d: number) => {
      return a * 10 + b * 8 + c * 6 + d * 4;
    },
    major: [
      {
        name: "智能制造工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "机械电子工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "土木类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "工程管理",
        condition: (values: string) => {
          return includePhysicl(values);
        },
      },
      {
        name: "轻化工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "纺织工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "高分子材料与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "新能源材料与器件",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
    ],
  },
  {
    name: "宁波工程学院",
    condition: 30,
    calcuate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 5 + c * 3;
    },
    major: [
      {
        name: "建筑学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "工业设计",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
    ],
  },
  {
    name: "衢州学院",
    condition: 35,
    calcuate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 7 + c * 4;
    },
    major: [
      {
        name: "小学教育（师范）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "英语（师范）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "数学与应用数学（师范）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "学前教育（师范）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "汉语言文学（师范）",
        condition: (values: string) => {
          return includeHistory(values);
        },
      },
    ],
  },
  {
    name: "浙大城院（语数外中若有A，在右侧得分基础上单门再加5分）",
    condition: 60,
    calcuate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 8 + c * 6;
    },
    major: [
      {
        name: "金融学（中外合作办学）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "会展经济与管理（中外合作办学）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "工业设计（中外合作办学）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "护理学",
        condition: (values: string) => {
          return includeChemical(values);
        },
      },
    ],
  },
  {
    name: "温州肯恩大学",
    condition: 80,
    calcuate: (a: number, b: number, c: number, d: any) => {
      return a * 15 + b * 10 + c * 5;
    },
    major: [
      {
        name: "经济学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "金融学（国际金融方向）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "国际商务",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "会计学（国际会计方向）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "市场营销（国际方向）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "英语",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "心理学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "传播学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "生物科学（细胞与分子方向）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "建筑学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "管理科学",
        condition: (values: string) => {
          return includePhysicl(values);
        },
      },
      {
        name: "数学与应用数学（数据分析方向）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "计算机科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
    ],
  },
  {
    name: "浙江万里学院",
    condition: 60,
    calcuate: (a: number, b: number, c: number, d: number) => {
      return a * 12 + b * 9 + c * 6 + d * 4;
    },
    major: [
      {
        name: "计算机类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "建筑学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "环境科学与工程类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "金融学类",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "生物技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "日语",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "生物工程类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "新闻传播学类",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "社会工作",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "电子商务类",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "国际经济与贸易",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "电子信息类",
        condition: (values: string) => {
          return includePhysicl(values);
        },
      },
      {
        name: "广告学（中德2+2双学位班）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "食品科学与工程类",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "艺术与科技",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "物流管理",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "艺术与科技（中德2+2双学位班）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "统计学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "视觉传达设计（中德2+2双学位班）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "会展经济与管理（中德2+2双学位班）",
        condition: (values: any) => {
          return true;
        },
      },
    ],
  },
  {
    name: "湖州学院",
    condition: 35,
    calcuate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 7 + c * 4;
    },
    major: [
      {
        name: "电子信息工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "计算机科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "软件工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
    ],
  },
  {
    name: "嘉兴南湖学院",
    condition: 28,
    calcuate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 7 + c * 3;
    },
    major: [
      {
        name: "法学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "金融学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "会计学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "工程管理",
        condition: (values: string) => {
          return includePhysicl(values);
        },
      },
      {
        name: "电气工程及其自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "工业设计",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "化学工程与工艺",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "计算机科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "高分子材料与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
    ],
  },
  {
    name: "温州理工学院",
    condition: 40,
    calcuate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 8 + c * 4;
    },
    major: [
      {
        name: "英语",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "国际经济与贸易",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "工商管理",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "计算机科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "机械类（机械工程、车辆工程）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "土木工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "电子信息工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
    ],
  },
  {
    name: "浙大宁波理工学院（语数外中若有A，在右侧得分基础上单门再加5分）",
    condition: 62,
    calcuate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 8 + c * 5;
    },
    major: [
      {
        name: "化学工程与工艺",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "高分子材料与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "机械设计制造及其自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "土木工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "工业设计",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "国际经济与贸易（中外合办）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "金融学（中外合办）",
        condition: (values: any) => {
          return true;
        },
      },
    ],
  },
  {
    name: "杭州医学院",
    condition: 85,
    calcuate: (a: number, b: number, c: number, d: number) => {
      return a * 10 + b * 9 + c * 7 + d * 4;
    },
    major: [
      {
        name: "临床医学",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "医学信息工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
    ],
  },
  {
    name: "宁波大学科技学院",
    condition: 0,
    calcuate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 7 + c * 3;
    },
    major: [
      {
        name: "英语（空中乘务特色班）",
        condition: (values: any) => {
          return true;
        },
      },
    ],
  },
  {
    name: "浙江水利水电学院",
    condition: 0,
    calcuate: (a: number, b: number, c: number, d: any) => {
      return a * 10 + b * 7 + c * 4;
    },
    major: [
      {
        name: "水利水电工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "农业水利工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "水文与水资源工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "港口航道与海岸工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "环境生态工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "测绘工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "道路桥梁与渡河工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "给排水科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "遥感科学与技术",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "新能源科学与工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "机械设计制造及其自动化",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "材料成型及控制工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "车辆工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "土木工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "建筑环境与能源应用工程",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
    ],
  },
  {
    name: "金华职业技术学院",
    condition: 192,
    calcuate: (a: number, b: number, c: number, d: number) => {
      return a * 30 + b * 25 + c * 21 + d * 18;
    },
    major: [
      {
        name: "学前教育（师范）",
        condition: (values: any) => {
          return true;
        },
      },
    ],
  },
  {
    name: "宁波幼儿师范高等学院",
    condition: 210,
    calcuate: (a: number, b: number, c: number, d: number) => {
      return a * 30 + b * 25 + c * 21 + d * 18;
    },
    major: [
      {
        name: "学前教育（师范）",
        condition: (values: any) => {
          return true;
        },
      },
    ],
  },
  {
    name: "温州商学院",
    condition: 0,
    calcuate: (a: number, b: number, c: number, d: number) => {
      return a * 12 + b * 10 + c * 8 + d * 6;
    },
    major: [
      {
        name: "工商管理类（含工商管理、人力资源管理、市场营销、审计学、财务管理专业）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "国际经济与贸易",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "会计学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "计算机类(含计算机科学与技术、数据科学与大数据技术专业）",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "金融学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "税收学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "创业管理",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "外国语言文学类（含英语、商务英语专业）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "新闻传播学类（含广告学、传播学、网络与新媒体专业）",
        condition: (values: any) => {
          return true;
        },
      },
    ],
  },
  {
    name: "宁波财经学院",
    condition: 0,
    calcuate: (a: number, b: number, c: number, d: number) => {
      return a * 15 + b * 9 + c * 6 + d * 4;
    },
    major: [
      {
        name: "财务管理（家族财富管理）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "工业设计",
        condition: (values: string) => {
          return includePhysiclAndChemical(values);
        },
      },
      {
        name: "创业管理",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "文化产业管理（文遗保护与利用）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "财务管理（中美2+2学分互认班）",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "国际经济与贸易（大宗商品交易）",
        condition: (values: any) => {
          return true;
        },
      },
    ],
  },
  {
    name: "浙江越秀外国语学院",
    condition: 8,
    calcuate: (a: number, b: number, c: number, d: number) => {
      return a * 10 + b * 8 + c * 6 + d * 4;
    },
    major: [
      {
        name: "酒店管理",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "传播学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "国际商务",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "泰语",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "印度尼西亚语",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "新闻学",
        condition: (values: any) => {
          return true;
        },
      },
      {
        name: "网络与新媒体",
        condition: (values: any) => {
          return true;
        },
      },
    ],
  },
];
