import styles from "./status-indicator.module.css";

export const StatusIndicator = ({ children, ...props }) => {
    return <div className={styles.statusIndicator} {...props}>{children}</div>;
};
