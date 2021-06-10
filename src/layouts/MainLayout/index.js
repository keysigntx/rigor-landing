import { createUseStyles } from "react-jss";
import { useHistory } from "react-router";
import { BlogLocation, RootLocation } from "../../Locations";
import logo from "./logo.svg";
import logoOutline from "./logoOutline.svg";
import twitter from "./twitter.svg";

const useStyles = createUseStyles({
  container: {
    minHeight: "100vh",
    margin: "auto",
    color: "##191919",
  },
  navbarContainer: {
    display: "flex",
    alignItems: "center",
    height: "70px",
    boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.08)",
    position: "fixed",
    backgroundColor: "#fff",
    zIndex: 10,
    width: "100%",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1240px",
    padding: "0 24px",
    margin: "auto",
    alignItems: "center",
  },

  navItemsContainer: {
    display: "flex",
    alignItems: "center",
  },
  navItem: {
    color: "#414141",
    fontSize: "14px",
    fontWeight: "bold",
    letterSpacing: "0.15px",
    cursor: "pointer",
    userSelect: "none",
  },
  footerContainer: {
    width: "100%",
    maxWidth: "1240px",
    padding: "54px 24px 32px 24px",
    margin: "auto",
    color: "#414141",
  },
  footerItemsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerItem: {
    fontSize: "16px",
    lineHeight: "21px",
    fontWeight: "bold",
    letterSpacing: "1.5px",
    cursor: "pointer",
    userSelect: "none",
  },
  footerItemSmall: {
    fontSize: "10px",
    lineHeight: "12px",
    letterSpacing: "1px",
    cursor: "pointer",
    userSelect: "none",
  },
});

export default function MainLayout({ children }) {
  const styles = useStyles();
  const history = useHistory();
  return (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbar}>
          <div>
            <img
              src={logo}
              alt="logo"
              style={{ cursor: "pointer" }}
              onClick={() => history.push(RootLocation)}
            />
          </div>
          <div className={styles.navItemsContainer}>
            <div className={styles.navItem}>How it works</div>
            <div
              className={styles.navItem}
              style={{ marginLeft: "32px" }}
              onClick={() => history.push(BlogLocation)}
            >
              Blog <span style={{ color: "#8e8e8e" }}>(Coming soon)</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "70px" }}>{children}</div>
      <div className={styles.footerContainer}>
        <div className={styles.footerItemsContainer}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={logoOutline}
              alt="rigor"
              style={{ cursor: "pointer" }}
              onClick={() => history.push(RootLocation)}
            />
            <div style={{ marginLeft: "48px" }} className={styles.footerItem}>
              HOW IT WORKS
            </div>
            <div
              className={styles.footerItem}
              style={{ marginLeft: "55px" }}
              onClick={() => history.push(BlogLocation)}
            >
              BLOG
            </div>
          </div>
          <img src={twitter} alt="twitter" style={{ cursor: "pointer" }} />
        </div>
        <div
          className={styles.footerItemsContainer}
          style={{ marginTop: "121px" }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{ marginLeft: "96px" }}
              className={styles.footerItemSmall}
            >
              Terms of Service
            </div>
            <div
              className={styles.footerItemSmall}
              style={{ marginLeft: "55px" }}
            >
              Privacy Policy
            </div>
          </div>
          <div className={styles.footerItemSmall} style={{ cursor: "auto" }}>
            © 2021, Rigor technologies, LLC. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
