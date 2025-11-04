import shapeSmall from "../assets/images/company-shape-small.svg";
import shapeLong from "../assets/images/news-shape2.svg";
import instagram from "../assets/images/instagram-white.svg";
import facebook from "../assets/images/facebook-white.svg";
import linkedin from "../assets/images/linkedin-white.svg";
import twitter from "../assets/images/twitter-white.svg";
import MapComponent from "../components/MapComponent";

function Contact() {
    return (
        <section className="container">
            <div className="contact-hero">
                <div className="contact-hero-left">
                    <img className="contact-shapeS" src={shapeSmall} alt="" />
                    <h3>CONTACT US</h3>
                    <h1>
                        Have a Question ?<br /> Let’s Get in Touch with us 👋
                    </h1>
                    <p>
                        Fill up the Form and ou team will get back to within 24
                        hrs
                    </p>
                    <form className="contact-form">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Paresh Srichandan"
                        />
                        <label style={{ marginTop: "24px" }} htmlFor="email">
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Paresh@pixeto.com"
                        />
                        <label style={{ marginTop: "24px" }} htmlFor="subject">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            placeholder="For web design work Enquire "
                        />
                        <label style={{ marginTop: "24px" }} htmlFor="message">
                            Messege
                        </label>
                        <textarea
                            id="message"
                            placeholder="Type your Messege"
                        ></textarea>
                        <button type="submit">
                            Send Messege{" "}
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </button>
                    </form>
                </div>
                <div className="contact-hero-right">
                    <img src={shapeLong} className="contact-shapeL" alt="" />
                    <div className="contact-hero-card">
                        <h5>Location</h5>
                        <h2>DLF Cybercity, Bhubaneswar, India, &52050</h2>
                    </div>
                    <div className="contact-hero-card">
                        <h5>Working Hour</h5>
                        <h2>Monday To Friday 9:00 AM to 8:00 PM</h2>
                        <p>Our Support Team is available 24Hrs</p>
                    </div>
                    <div className="contact-hero-card">
                        <h5>Contact Us</h5>
                        <h2>020 7993 2905</h2>
                        <p>Hello@ether.com</p>
                    </div>
                    <div style={{ display: "flex", gap: "27px" }}>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={instagram} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                </div>
            </div>
            <MapComponent />
        </section>
    );
}

export default Contact;
