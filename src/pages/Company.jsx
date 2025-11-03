import shapeSmall from "../assets/images/company-shape-small.svg";
import shapeBig from "../assets/images/company-shape-big.svg";
import shapeLong from "../assets/images/news-shape2.svg";
import compImg1 from "../assets/images/company-img1.png";
import compImg2 from "../assets/images/company-img2.png";
import compImg3 from "../assets/images/company-img3.png";

function Company() {
    return (
        <section className="container company">
            <img className="com-shapeS" src={shapeSmall} alt="" />
            <img className="com-shapeB" src={shapeBig} alt="" />
            <div className="company-hero company-hero-top">
                <h3>Company</h3>
                <h1>
                    Award-winning Company seen and used by millions around the
                    world.
                </h1>
                <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The Maker is a decentralized.{" "}
                </p>
            </div>
            <div className="company-hero-content">
                <img className="com-shapeL" src={shapeLong} alt="" />
                <img src={compImg1} alt="" />
                <img src={compImg2} alt="" />
                <img src={compImg3} alt="" />
            </div>
        </section>
    );
}

export default Company;
