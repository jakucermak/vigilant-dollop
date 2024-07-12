import styles from "@/styles/components/logo.module.scss";
export default function Logo() {
  return (
    <div className={styles.logo}>
      <div className={styles.img}>
        <span className={styles.chevron}>{"<"}</span>
        <span id={styles.slash}>{"/"}</span>
        <span className={styles.chevron}>{">"}</span>
      </div>
      <span className={styles.text}>dvlpr_jc</span>
    </div>
  );
}
