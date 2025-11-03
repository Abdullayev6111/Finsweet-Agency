import shapeBig from "../assets/images/company-shape-big.svg";
import careerImg from "../assets/images/career-img.png";
function Career() {
    return (
        <section className="container career-hero">
            <img className="career-shapeB" src={shapeBig} alt="" />
            <div className="career-hero-top">
                <h3>CAREER AT FINSWEET</h3>
                <h1>
                    We hired people who are Always Passionate about what they do
                </h1>
                <p>
                    Through True Rich Attended does no end it his mother since
                    real had half every him case in packages enquire we up
                    ecstatic unsatiable saw .
                </p>
            </div>
            <img className="career-hero-img" src={careerImg} alt="" />
            <h2>
                See Our open positions <br /> 👇
            </h2>
        </section>
    );
}

export default Career;
