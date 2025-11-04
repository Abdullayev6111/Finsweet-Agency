import shapeSmall from "../assets/images/company-shape-small.svg";
import shapeBig from "../assets/images/company-shape-big.svg";
import shapeLong from "../assets/images/news-shape2.svg";

function PrivacyPolicy() {
    return (
        <section className="container privacy-policy">
            <div className="privacy-top">
                <img className="privacy-shapeS" src={shapeSmall} alt="" />
                <img className="privacy-shapeB" src={shapeBig} alt="" />
                <h1>Privacy Policy</h1>
                <p>Last Updated on 27th January 2021</p>
            </div>
            <div className="privacy-content">
                <h1>
                    Transform Your Idea Into Reality with Ether a Leading
                    Digital Agency
                </h1>
                <p>
                    Writing UX copies can be a little frustrating and confusing,
                    and sometimes we are unsure about how to get the right word.
                    To crack the code for the UX copies, we at Zeta Design
                    wanted to build a Figma plugin for the larger design
                    community. The plugin is called the Ghost UXWriter and has a
                    set of UX copies cataloged and categorized with a voice and
                    tone variation ranging from plain, casual to playful. The
                    intention to build this Figma plugin originated from our
                    Medium blog post, ‘Designing voice and tone for error
                    messages.
                </p>
                <p>
                    Writing UX copies can be a little frustrating and confusing,
                    and sometimes we are unsure about how to get the right word.
                    To crack the code for the UX copies, we at Zeta Design
                    wanted to build a Figma plugin for the larger design
                    community. The plugin is called the Ghost UXWriter and has a
                    set of UX copies cataloged.
                </p>
                <p>
                    Writing UX copies can be a little frustrating and confusing,
                    and sometimes we are unsure about how to get the right word.
                    To crack the code for the UX copies, we at Zeta Design
                    wanted to build a Figma plugin for the larger design
                    community. The plugin is called the Ghost UXWriter and has a
                    set of UX copies cataloged.
                </p>
                <p>
                    Writing UX copies can be a little frustrating and confusing,
                    and sometimes we are unsure about how to get the right word.
                    To crack the code for the UX copies, we at Zeta Design
                    wanted to build a Figma plugin for the larger design
                    community. The plugin is called the Ghost UXWriter and has a
                    set of UX copies cataloged.
                </p>
                <h2>We disclose your information in the following manner:</h2>
                <p>
                    Business partners, suppliers and sub-contractors
                    (“Affiliates”): Affiliates may use this information to help
                    provide, understand, and improve our services and
                    Affiliate’s own services for the performance of any contract
                    we enter into <br />
                    <br /> Financial Institutions and Auditors: In order to
                    complete third party financial, technical and legal audits
                    of our operations to help us operate our business, we may
                    need to share your information with financial institutions
                    and auditors. <br />
                    <br /> Advertisers and Advertising Networks: To provide you
                    with select and serv e relevant advertisements to you and
                    others, we may share your data with advertiser sand
                    advertising networks. We do not disclose your Personal
                    Information or Sensitive Personal Information to our
                    advertisers, but we may provide them with aggregate
                    information about our users (for example, we may inform them
                    that any given number of participants in a specified age
                    group who clicked on their advertisement on any given day).
                    We may also use such aggregate information to help
                    advertisers reach the kind of audience they want to target.
                </p>
                <img src={shapeLong} className="privacy-shapeL" alt="" />
            </div>
        </section>
    );
}

export default PrivacyPolicy;
