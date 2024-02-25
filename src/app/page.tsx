"use client";
import {
  Button,
  List,
  DatePickerRef,
  Dialog,
  Form,
  Input,
  Picker,
} from "antd-mobile";
import { useRouter } from "next/navigation";
import { RefObject, useState } from "react";
import { UniversityInfoList, basicColumns } from "./constant";
import postPic from "@/assets/post.png";

import styles from "../styles/index.module.css";

export default function Home() {
  const [showUniversity, setShowUniversity] = useState(false);
  const [acceptable, setAcceptable] = useState<any[]>([]);
  const [values, setValues] = useState({} as any);

  const { push } = useRouter();

  const onFinish = (_values: any) => {
    const { name1, name2, name3, name4, combination } = _values;
    const a = Number(name1);
    const b = Number(name2);
    const c = Number(name3);
    const d = Number(name4);

    if (a + b + c + d !== 10) {
      Dialog.alert({
        content: "您提交的学考科目数量不等于10，请返回修改！",
      });
    } else {
      const _acceptable = UniversityInfoList.filter((university) => {
        const { calcuate, name, condition, major } = university;
        const points = calcuate(a, b, c, d);
        const condition1 = points > condition;
        const condition2 = major?.some((m) => {
          return m.condition(combination);
        });
        return condition1 && condition2;
      });
      setShowUniversity(true);
      setAcceptable(_acceptable);
      setValues(_values);
    }
  };

  if (showUniversity) {
    return (
      <List>
        {acceptable.map((uni, key) => {
          return (
            <List.Item
              key={uni.name}
              onClick={() => {
                const { name1, name2, name3, name4, combination, predict } =
                  values;
                push(
                  `/detail?universityName=${uni.name}&combination=${combination[0]}&a=${name1}&b=${name2}&c=${name3}&d=${name4}&predict=${predict}`
                );
              }}
              extra="点击查看详情"
            >
              {uni.name}
            </List.Item>
          );
        })}
      </List>
    );
  }

  return (
    <div className={styles.container}>
      <div
        className="post-container"
        style={{
          height: "280px",
          background: "green",
        }}
      >
        <img className={styles.postPic} src={postPic.src} />
      </div>
      <Form
        style={{
          position: "relative",
          top: "-20px",
          borderRadius: "16px",
          background: "#fff",
        }}
        requiredMarkStyle="text-required"
        name="form"
        onFinish={onFinish}
        footer={
          <Button block type="submit" color="primary" size="large">
            点击查看可报高校信息
          </Button>
        }
      >
        <Form.Header>
          <div className="header-content" style={{ padding: "8px" }}>
            <div
              className="title"
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                color: "rgba(0, 0, 0, 0.85)",
                margin: "16px 0",
              }}
            >
              填写说明
            </div>
            <div
              style={{
                color: "#999",
                fontSize: "14px",
                marginTop: "8px",
              }}
              className="description"
            >
              你猜猜猜猜猜猜猜猜猜
            </div>
          </div>
        </Form.Header>
        <Form.Item
          name="name1"
          layout="horizontal"
          label="A的个数"
          rules={[{ required: true }]}
        >
          <Input placeholder="请输入孩子学考A的个数" />
        </Form.Item>
        <Form.Item
          name="name2"
          layout="horizontal"
          label="B的个数"
          rules={[{ required: true }]}
        >
          <Input placeholder="请输入孩子学考B的个数" />
        </Form.Item>
        <Form.Item
          name="name3"
          layout="horizontal"
          label="C的个数"
          rules={[{ required: true }]}
        >
          <Input placeholder="请输入孩子学考C的个数" />
        </Form.Item>
        <Form.Item
          name="name4"
          layout="horizontal"
          label="D的个数"
          rules={[{ required: true }]}
        >
          <Input placeholder="请输入孩子学考D的个数" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true }]}
          name="combination"
          label="选科组合"
          trigger="onConfirm"
          style={{
            "--adm-font-size-7": "17px",
          } as any}
          onClick={(e, datePickerRef: RefObject<DatePickerRef>) => {
            datePickerRef.current?.open();
          }}
        >
          <Picker columns={basicColumns}>
            {(value) => (value ? value[0]?.label : "请选择")}
          </Picker>
        </Form.Item>
        <Form.Item
          name="predict"
          style={{
            "--adm-font-size-7": "17px",
          } as any}
          label="高考预估分"
          help="大概的分数"
          rules={[{ required: true }]}
        >
          <Input placeholder="请输入孩子的高考预估分" />
        </Form.Item>
      </Form>
    </div>
  );
}
