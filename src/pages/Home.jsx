import heroImg from "../assets/images/hero-img.svg";
import hbImg1 from "../assets/images/hero-bottom-logo1.svg";
import hbImg2 from "../assets/images/hero-bottom-logo2.svg";
import hbImg3 from "../assets/images/hero-bottom-logo3.svg";
import hbImg4 from "../assets/images/hero-bottom-logo4.svg";
import hbImg5 from "../assets/images/hero-bottom-logo5.svg";
function Home() {
    return (
        <section className="home-page">
            <div className="container hero">
                <div className="hero-top">
                    <div className="hero-left">
                        <h1>Transform Your Idea Into Reality with Finsweet</h1>
                        <p>
                            The entire Finsweet team knows what's good with
                            Webflow and you can too with 1 week and a good
                            attitude.
                        </p>
                        <button className="btn-hero">
                            Request Quote{" "}
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </button>
                    </div>
                    <img src={heroImg} alt="" />
                </div>
                <div className="hero-bottom">
                    <h1>
                        <span>Our Clients</span>
                        <br />
                        We've Worked with
                    </h1>
                    <img src={hbImg1} alt="" />
                    <img src={hbImg2} alt="" />
                    <img src={hbImg3} alt="" />
                    <img src={hbImg4} alt="" />
                    <img src={hbImg5} alt="" />
                </div>
            </div>
        </section>
    );
}

export default Home;
