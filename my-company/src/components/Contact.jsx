function Contact() {
    const handleClick = () => {
        alert("Thanks for contacting us!");
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2 style={{ color: "blue" }}>Contact Us</h2>
            <button onClick={handleClick} style={{ padding: "10px", backgroundColor: "lightgreen", border: "none" }}>
                Click to Contact
            </button>
        </div>
    );
}

export default Contact;
