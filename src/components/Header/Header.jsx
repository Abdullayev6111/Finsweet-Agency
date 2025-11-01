import styles from "./Header.module.css";
function Header() {
    return (
        <header className={styles.headerSection}>
            <div className="container">
                <div className={styles.header}></div>
            </div>
        </header>
    );
}

export default Header;
