import React from "react";
import { createUseStyles } from "react-jss";
import MainLayout from "../../layouts/MainLayout";

const useStyles = createUseStyles({
  comingSoon: {
    fontWeight: "bolder",
    margin: "112px",
    fontSize: "24px",
    textAlign: "center",
  },
});

export default function BlogView() {
  const styles = useStyles();
  return (
    <MainLayout>
      <div className={styles.comingSoon}>Coming soon...</div>
    </MainLayout>
  );
}
