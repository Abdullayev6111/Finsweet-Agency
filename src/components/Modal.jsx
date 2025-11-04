function Modal({ onClose }) {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-modal" onClick={onClose}>
                    <i className="fa-solid fa-rectangle-xmark"></i>
                </button>
                <h1>
                    Have a Question ?<br /> Let’s Get in Touch with us 👋
                </h1>
                <p>
                    Fill up the Form and ou team will get back to within 24 hrs
                </p>
                <form className="modal-form">
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
        </div>
    );
}

export default Modal;
