import React from "react";
import { createUseStyles } from "react-jss";
import ContentSection from "../../components/ContentSection";
import MainLayout from "../../layouts/MainLayout";
import infographic1 from "./infographic1.svg";
import infographic2 from "./infographic2.svg";
import infographic3 from "./infographic3.png";
import contractors from "./contractors.svg";
import homebuilders from "./homebuilders.svg";
import investors from "./investors.svg";

const useStyles = createUseStyles({
  section1: { display: "flex", paddingBottom: "680px", paddingTop: "186px" },
  mainHeader: {
    fontWeight: "bold",
    fontSize: "48px",
    lineHeight: "60px",
  },
  infographic1: {
    position: "absolute",
    top: "-106px",
  },
  ellipse: {
    background:
      "linear-gradient(90deg, rgba(249, 212, 35, 0.5) 0%, rgba(255, 78, 80, 0.5) 100%)",
    filter: "blur(500px)",
    width: "399px",
    height: "399px",
    position: "absolute",
    top: "339px",
  },
  subText: {
    fontSize: "16px",
    lineHeight: "21px",
    letterSpacing: "0.15px",
    color: "#414141",
  },
  inputContainer: {
    width: "595px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px",
    borderRadius: "40px",
    boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.08)",
  },
  input: {
    margin: "16px 24px 16px 40px",
    border: "none",
    fontWeight: "bold",
    color: "#8E8E8E",
    fontSize: "20px",
    lineHeight: "26px",
    backgroundColor: "#F5F5F5",
    "&::placeholder": {
      color: "#8E8E8E",
    },
  },
  CTA: {
    backgroundColor: "#EE7D3E",
    color: "#F5F5F5",
    padding: "18px 14px",
    borderRadius: "35px",
    fontWeight: "bold",
    cursor: "pointer",
    userSelect: "none",
    fontSize: "16px",
    lineHeight: "21px",
    letterSpacing: "1.5px",
  },
  contentContainer: {
    padding: "0 24px",
    margin: "auto",
    maxWidth: "1240px",
    alignItems: "center",
  },
  earlyAccessContainer: {
    border: "1px solid #E8E8E8",
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
    backdropFilter: "blur(40px)",
    borderRadius: "48px",
    height: "470px",
    width: "100%",
    position: "absolute",
    top: "-548px",
  },
  earlyAccessBadge: {
    backgroundColor: "#EE7D3E",
    color: "#F5F5F5",
    fontWeight: "bold",
    borderRadius: "24px",
    padding: "8px",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.15px",
    marginTop: "64px",
  },
  earlyAccessHeader: {
    marginTop: "16px",
    fontWeight: "bolder",
    letterSpacing: "-0.5px",
    textAlign: "center",
    fontSize: "60px",
    lineHeight: "72px",
  },
  earlyAccessCTA: {
    backgroundColor: "#409DF3",
    color: "#F5F5F5",
    fontWeight: "bold",
    borderRadius: "32px",
    padding: "18px 22px",
    fontSize: "16px",
    lineHeight: "21px",
    letterSpacing: "1.5px",
    marginTop: "40px",
    cursor: "pointer",
    userSelect: "none",
  },
  subHeader: {
    color: "#E96E2A",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "26px",
  },
  infographic2: {
    position: "absolute",
    top: "-32px",
    left: "0px",
    filter: "drop-shadow(0px 20px 50px rgba(0, 0, 0, 0.08))",
  },
  numberBadge: {
    backgroundColor: "#409DF3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: "bolder",
    width: "48px",
    height: "48px",
    fontSize: "24px",
    lineHeight: "32px",
    borderRadius: "48px",
    marginRight: "24px",
    flexShrink: 0,
  },
  stepHeader: {
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "26px",
    marginBottom: "8px",
  },
  section2: {
    marginTop: "112px",
    display: "flex",
    marginBottom: "164px",
  },
  updateInputContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "66px",
  },
  infographic3: {
    width: "100%",
    height: "233px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
});

export default function HomeView() {
  const styles = useStyles();
  return (
    <MainLayout>
      <div style={{ color: "#191919", overflowX: "hidden" }}>
        <div style={{ backgroundColor: "#F5F5F5" }}>
          <div className={styles.contentContainer}>
            <div className={styles.section1}>
              <div>
                <div className={styles.mainHeader}>
                  DeFi for Home Construction
                </div>
                <div className={styles.subText} style={{ marginTop: "16px" }}>
                  Rigor is a community finance network for residential
                  construction.
                  <br />
                  Powered by Build Protocol.
                </div>
                <div
                  className={styles.inputContainer}
                  style={{ marginTop: "38px" }}
                >
                  <input
                    className={styles.input}
                    placeholder={"Enter your email"}
                  />
                  <div className={styles.CTA} style={{ fontSize: "15px" }}>
                    SUBSCRIBE FOR UPDATES
                  </div>
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <img
                  className={styles.infographic1}
                  src={infographic1}
                  alt="info"
                />
                <div className={styles.ellipse} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#FFF" }}>
          <div
            className={styles.contentContainer}
            style={{ position: "relative" }}
          >
            <div className={styles.earlyAccessContainer}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className={styles.earlyAccessBadge}>Private Beta</div>
              </div>
              <div className={styles.earlyAccessHeader}>100 Homes Program</div>
              <div
                className={styles.subText}
                style={{ marginTop: "40px", textAlign: "center" }}
              >
                This Summer, Rigor is being used to coordinate the financing and
                construction of 100 new homes. <br />
                Rigor’s technology disintermediates traditional banks, brings
                liquidity directly to private homebuilders
                <br /> and aligns the entire construction supply chain.
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className={styles.earlyAccessCTA}>
                  REQUEST EARLY ACCESS
                </div>
              </div>
            </div>
            <div className={styles.section2}>
              <div style={{ width: "560px" }}>
                <div className={styles.subHeader}>How it works</div>
                <div className={styles.mainHeader} style={{ marginTop: "8px" }}>
                  Connecting investors
                  <br /> with homebuilders
                </div>
                <div style={{ display: "flex", marginTop: "64px" }}>
                  <div className={styles.numberBadge}>1</div>
                  <div>
                    <div className={styles.stepHeader}>Create a community</div>
                    <div className={styles.subText}>
                      Homebuilders and Investors create and grow their own
                      communities.
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", marginTop: "64px" }}>
                  <div className={styles.numberBadge}>2</div>
                  <div>
                    <div className={styles.stepHeader}>Publish a project</div>
                    <div className={styles.subText}>
                      Builders create planned construction projects, deposit
                      their own equity and then publish their projects to any
                      community, all at their own terms.
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", marginTop: "64px" }}>
                  <div className={styles.numberBadge}>3</div>
                  <div>
                    <div className={styles.stepHeader}>Share liquidity</div>
                    <div className={styles.subText}>
                      Communities support projects by sharing liquidity.
                      Repayments are coodinated directly betwen the builder and
                      liquidity providers.
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <img
                  src={infographic2}
                  alt="info"
                  className={styles.infographic2}
                />
              </div>
            </div>
          </div>
        </div>
        <ContentSection
          image={investors}
          subHeader={"For Investors"}
          text={
            "Create and grow your own communities and access P2P opportunties. Help meet homebuilders’ historically high demand for capital."
          }
          header={"Home construction as a cryptoasset"}
        />
        <ContentSection
          image={homebuilders}
          reverse
          subHeader={"For Homebuilders"}
          text={
            <div>
              Finance projects on your own terms and manage your entire supply{" "}
              <br /> chain. So you can dump your legacy bank and build more
              homes.
            </div>
          }
          header={
            <div>
              Direct acccess to <br />
              project liquidity
            </div>
          }
        />
        <ContentSection
          image={contractors}
          subHeader={"For Contractors"}
          text={
            "Rigor puts deal flow, project mangment and payment automation all together in your pocket.  So you can outrun the competition and build more homes."
          }
          header={
            <div>
              Grow aligned
              <br /> economies that scale
            </div>
          }
        />
        <div style={{ backgroundColor: "#F5F5F5" }}>
          <div
            className={styles.contentContainer}
            style={{ paddingTop: "112px" }}
          >
            <div className={styles.mainHeader} style={{ textAlign: "center" }}>
              Stay updated
            </div>
            <div className={styles.updateInputContainer}>
              <div
                className={styles.inputContainer}
                style={{
                  backgroundColor: "#FDFDFD",
                  marginTop: "55px",
                  width: "595px",
                }}
              >
                <input
                  className={styles.input}
                  style={{ backgroundColor: "#FDFDFD" }}
                  placeholder={"Enter your email"}
                />
                <div className={styles.CTA} style={{ padding: "18px 65px" }}>
                  SUBSCRIBE
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  backgroundImage: `url(${infographic3})`,
                }}
                className={styles.infographic3}
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
