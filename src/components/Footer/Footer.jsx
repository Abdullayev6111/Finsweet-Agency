import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import newsShape1 from "../../assets/images/news-shape1.svg";
import newsShape2 from "../../assets/images/news-shape2.svg";
import Logo from "../../assets/images/Logo-black.svg";
import instagram from "../../assets/images/instagram.svg";
import facebook from "../../assets/images/facebook.svg";
import linkedin from "../../assets/images/linkedin.svg";
import twitter from "../../assets/images/twitter.svg";
import fcShape1 from "../../assets/images/fc-shape1.svg";
import fcShape2 from "../../assets/images/fc-shape2.svg";
import styles from "./Footer.module.css";

function Footer() {
    const location = useLocation();
    const noNewsletter = ["/team", "/contact", "/privacypolicy"];
    const hideBlueBlock = noNewsletter.includes(location.pathname);

    return (
        <footer className={styles.footerSection}>
            <div className="container">
                {!hideBlueBlock && (
                    <div className={styles.newsletter}>
                        <p>NEWSLETTER</p>
                        <h3>
                            Subscribe our News Letter to get Latest Updates.
                        </h3>
                        <input type="email" placeholder="Paresh@Pixeto.com" />
                        <img
                            className={styles.shape1}
                            src={newsShape1}
                            alt=""
                        />
                        <img
                            className={styles.shape2}
                            src={newsShape2}
                            alt=""
                        />
                    </div>
                )}

                <div className={styles.footerContent}>
                    <div className={styles.fcLeft}>
                        <img src={fcShape1} alt="" />
                        <h1>Let's make something special</h1>
                        <h3>Let's talk! 🤙 </h3>
                        <h4>020 7993 2905</h4>
                        <h4>hi@finsweet.com</h4>
                        <p>
                            DLF Cybercity, Bhubaneswar,
                            <br /> India, &52050
                        </p>
                    </div>
                    <div className={styles.fcRight}>
                        <div>
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
                                    <NavLink to="/">News</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <NavLink to="/service">Service</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Technical support</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Testing</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Development</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">AWS/Azure</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Consulting</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">
                                        Information Technology
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <NavLink to="/">Resourses</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">About Us</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Testimonial</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/privacypolicy">
                                        Privacy Policy
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/team">Terms of use</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blog">Blog</NavLink>
                                </li>
                            </ul>
                        </div>
                        <img src={fcShape2} alt="" />
                        <button>
                            Contact Us{" "}
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div className="container">
                    <div className={styles.mainFooter}>
                        <div style={{ display: "flex" }}>
                            <img className={styles.logo} src={Logo} alt="" />
                            <h4>©2021 Finsweet</h4>
                        </div>
                        <div style={{ display: "flex", gap: "27px" }}>
                            <img src={instagram} alt="" />
                            <img src={facebook} alt="" />
                            <img src={linkedin} alt="" />
                            <img src={twitter} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
