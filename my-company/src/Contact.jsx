function Contact() {
    const handleClick = () => {
        alert("Thanks for contacting us!");
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2 style={{ color: "blue" }}>Contact Us</h2>
            <p style={{ fontSize: "16px" }}>
                We'd love to hear from you. Please click below to get in touch.
            </p>
            <button
                onClick={handleClick}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "lightgreen",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "bold",
                }}
            >
                Click to Contact
            </button>
        </div>
    );
}

export default Contact;
