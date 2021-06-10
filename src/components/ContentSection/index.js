import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  contentContainer: {
    padding: "0 24px",
    margin: "auto",
    maxWidth: "1240px",
    alignItems: "center",
  },
  subHeader: {
    color: "#E96E2A",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "26px",
  },
  mainHeader: {
    fontWeight: "bold",
    fontSize: "48px",
    lineHeight: "60px",
    marginBottom: "32px",
  },
  subText: {
    fontSize: "16px",
    lineHeight: "21px",
    letterSpacing: "0.15px",
    color: "#414141",
  },
});

export default function ContentSection({
  image,
  reverse,
  subHeader,
  header,
  text,
}) {
  const styles = useStyles();
  return (
    <div
      style={{
        backgroundColor: reverse ? "#FDFDFD" : "#FFF7F2",
      }}
    >
      <div
        className={styles.contentContainer}
        style={{
          paddingTop: "112px",
          paddingBottom: "112px",
          textAlign: reverse ? "right" : "left",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: reverse ? "row-reverse" : "row",
          }}
        >
          <div style={{ width: "607px" }}>
            <div className={styles.subHeader} style={{ marginBottom: "8px" }}>
              {subHeader}
            </div>
            <div className={styles.mainHeader}>{header}</div>
            <div
              className={styles.subText}
              style={{ width: reverse ? "auto" : "485px" }}
            >
              {text}
            </div>
          </div>
          <img
            src={image}
            alt="info"
            style={{
              margin: `0px ${reverse ? "0px" : "64px"} 0px ${
                reverse ? "64px" : "0px"
              }`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
