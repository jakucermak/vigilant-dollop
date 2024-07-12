import styles from "@/styles/components/route.module.scss";

export interface RouteProps {
  text: string;
  selected: boolean;
}

const defaultProps: RouteProps = {
  text: "",
  selected: false,
};
export function Section({ text, selected = false }: RouteProps) {
  let dot;
  let content;

  if (selected) {
    dot = <span className={styles.text}>.</span>;
    content = <span className={styles.prop}>selected</span>;
  } else {
    dot = "";
    content = "";
  }

  return (
    <div className={styles.route}>
      <p style={{ display: "flex" }}>
        <span className={styles.text}>.</span>
        {text}
        <span className={styles.text}>(</span>
        <span className={styles.propBox}>
          {dot}
          {content}
        </span>
        <span className={styles.text}>)</span>
      </p>
    </div>
  );
}
