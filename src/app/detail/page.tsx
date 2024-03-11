"use client";
import styles from "./index.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { UniversityInfoList } from "../constant";
import { Button, Grid, SideBar } from "antd-mobile";
import { useState } from "react";

export default function Detail() {
  const params = useSearchParams();
  const universityName = params.get("universityName");
  const combination = params.get("combination");
  const a = params.get("a");
  const b = params.get("b");
  const c = params.get("c");
  const d = params.get("d");
  const predict = params.get("predict") || 0;
  const { push } = useRouter();

  const univerity = UniversityInfoList.find((uni) => {
    return uni.name === universityName;
  });

  const [currentMajorName, setCurrentMajorName] = useState(
    univerity?.major?.[0].name
  );

  const currentMajor: any = univerity?.major?.find(
    (m) => m.name === currentMajorName
  );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.side}>
          <SideBar onChange={(name) => setCurrentMajorName(name)}>
            {univerity?.major?.map((major) => (
              <SideBar.Item key={major.name} title={major.name} />
            ))}
          </SideBar>
        </div>
        <div className={styles.main}>
          <Grid columns={2} gap={8}>
            <Grid.Item className={`${styles.item} ${styles["item-key"]}`}>
              <div>专业是否匹配</div>
            </Grid.Item>
            <Grid.Item className={`${styles.item} ${styles["item-value"]}`}>
              <div>
                {currentMajor?.condition(combination) ? "匹配" : "不匹配"}
              </div>
            </Grid.Item>
            <Grid.Item className={`${styles.item} ${styles["item-key"]}`}>
              <div>报考意见</div>
            </Grid.Item>
            <Grid.Item className={`${styles.item} ${styles["item-value"]}`}>
              <div>
                {predict > currentMajor?.lowThreeOne &&
                  currentMajor?.condition(combination)
                  ? "建议报考"
                  : "不建议报考（高考预估分小于23年三一最低分或专业不匹配）"}
              </div>
            </Grid.Item>
            <Grid.Item className={`${styles.item} ${styles["item-key"]}`}>
              <div>2024选科要求</div>
            </Grid.Item>
            <Grid.Item className={`${styles.item} ${styles["item-value"]}`}>
              <div>{currentMajor.combinationDesc}</div>
            </Grid.Item>
            <Grid.Item className={`${styles.item} ${styles["item-key"]}`}>
              <div>招生计划</div>
            </Grid.Item>
            <Grid.Item className={`${styles.item} ${styles["item-value"]}`}>
              <div>{currentMajor.admissions}</div>
            </Grid.Item>
            <Grid.Item className={`${styles.item} ${styles["item-key"]}`}>
              <div>报考条件</div>
            </Grid.Item>
            <Grid.Item className={`${styles.item} ${styles["item-value"]}`}>
              <div>{currentMajor.conditionDesc}</div>
            </Grid.Item>
            <Grid.Item className={`${styles.item} ${styles["item-key"]}`}>
              <div>23初审最低分</div>
            </Grid.Item>
            <Grid.Item className={`${styles.item} ${styles["item-value"]}`}>
              <div>{currentMajor.lowwest23}</div>
            </Grid.Item>
            <Grid.Item className={`${styles.item} ${styles["item-key"]}`}>
              <div>对应学考等级</div>
            </Grid.Item>
            <Grid.Item className={`${styles.item} ${styles["item-value"]}`}>
              <div>{currentMajor?.lowwestDegreeDesc}</div>
            </Grid.Item>
            <Grid.Item className={`${styles.item} ${styles["item-key"]}`}>
              <div>对应学考等级</div>
            </Grid.Item>
            <Grid.Item className={`${styles.item} ${styles["item-value"]}`}>
              <div>{currentMajor?.lowwestDegreeDesc}</div>
            </Grid.Item>
            <Grid.Item className={`${styles.item} ${styles["item-key"]}`}>
              <div>23三一最低分</div>
            </Grid.Item>
            <Grid.Item className={`${styles.item} ${styles["item-value"]}`}>
              <div>{currentMajor?.lowThreeOne}</div>
            </Grid.Item>
            <Grid.Item className={`${styles.item} ${styles["item-key"]}`}>
              <div>23高考最低分</div>
            </Grid.Item>
            <Grid.Item className={`${styles.item} ${styles["item-value"]}`}>
              <div>{currentMajor?.lowwestGaoKao23}</div>
            </Grid.Item>
            <Grid.Item className={`${styles.item} ${styles["item-key"]}`}>
              <div>降分幅度</div>
            </Grid.Item>
            <Grid.Item className={`${styles.item} ${styles["item-value"]}`}>
              <div>{currentMajor?.minus}</div>
            </Grid.Item>
          </Grid>
        </div>
      </div>
      <Button
        color="primary"
        block
        onClick={() => {
          push(
            `/?combination=${combination}&a=${a}&b=${b}&c=${c}&d=${d}&predict=${predict}`
          );
        }}
      >
        返回上一页
      </Button>
    </>
  );
}
