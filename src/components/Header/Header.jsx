import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
function Header() {
    return (
        <header className={styles.headerSection}>
            <div className="container">
                <div className={styles.header}>
                    <img src={Logo} alt="" />
                    <div className={styles.navbar}>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/service">Service</NavLink>
                            </li>
                            <li>
                                <NavLink to="/company">Company</NavLink>
                            </li>
                            <li>
                                <NavLink to="/career">Career</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog">Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact us</NavLink>
                            </li>
                        </ul>
                        <button>
                            Clone project{" "}
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
