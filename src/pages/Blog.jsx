import shapeSmall from "../assets/images/company-shape-small.svg";
import shapeBig from "../assets/images/company-shape-big.svg";
import shapeLong from "../assets/images/news-shape2.svg";
import cardImg1 from "../assets/images/blog-hero-img1.png";
import cardImg2 from "../assets/images/blog-hero-img2.png";
import cardImg3 from "../assets/images/blog-hero-img3.png";
import heroMainImg from "../assets/images/blog-hero-left-img.png";

function Blog() {
    return (
        <section className="container blog-hero">
            <img className="blog-shapeS" src={shapeSmall} alt="" />
            <img className="blog-shapeB" src={shapeBig} alt="" />
            <div className="blog-hero-left">
                <h3>TREnding</h3>
                <h1>Breaking the code How did we build our Figma plugin </h1>
                <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The Maker is a decentralized. We aim to attain
                    the.
                </p>
                <button>
                    Read More <i className="fa-solid fa-arrow-right-long"></i>
                </button>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                        marginBottom: "48px",
                    }}
                >
                    <img src={cardImg3} alt="" />
                    <p style={{ opacity: "87%" }}>Andrew Jonson</p>
                    <p style={{ opacity: "60%" }}>
                        Posted on 27th January 2021
                    </p>
                </div>
                <img src={heroMainImg} alt="" />
                <img className="blog-shapeL" src={shapeLong} alt="" />
            </div>
            <div className="blog-hero-right">
                <div className="blog-hero-card">
                    <h1>
                        Great design expectations prejudice in digital products
                        in Next Year
                    </h1>
                    <div style={{ display: "flex", gap: "12px" }}>
                        <img src={cardImg3} alt="" />
                        <div>
                            <h2>Andrew Jonson</h2>
                            <h3>Jan 19, 2021</h3>
                        </div>
                    </div>
                </div>
                <div className="blog-hero-card">
                    <h1>
                        Great design expectations prejudice in digital products
                        in Next Year
                    </h1>
                    <div style={{ display: "flex", gap: "12px" }}>
                        <img src={cardImg2} alt="" />
                        <div>
                            <h2>Mathew Jasele</h2>
                            <h3>Jan 19, 2021</h3>
                        </div>
                    </div>
                </div>
                <div className="blog-hero-card">
                    <h1>
                        Great design expectations prejudice in digital products
                        in Next Year
                    </h1>
                    <div
                        style={{
                            display: "flex",
                            gap: "12px",
                            alignItems: "center",
                        }}
                    >
                        <img src={cardImg1} alt="" />
                        <div>
                            <h2>Hussen Abakas</h2>
                            <h3>Jan 19, 2021</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;
