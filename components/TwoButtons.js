import styles from './twobuttons.module.scss';
//imports styles for the two buttons
const TwoButtons= ({ children }) => {
    return <div className={styles.buttongroup}>{children}</div>
}
export default TwoButtons;