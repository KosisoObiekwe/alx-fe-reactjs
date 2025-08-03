import React, { useState } from "react";

function Contact() {
    const [messageSent, setMessageSent] = useState(false);

    const handleClick = () => {
        setMessageSent(true);
    };

    return (
        <div style={{ padding: "20px", backgroundColor: "#f2f2f2" }}>
            <h2 style={{ color: "#333" }}>Contact Us</h2>
            <p style={{ marginBottom: "10px" }}>We’d love to hear from you!</p>
            <button
                onClick={handleClick}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                Send Message
            </button>
            {messageSent && (
                <p style={{ color: "green", marginTop: "10px" }}>
                    Message sent successfully!
                </p>
            )}
        </div>
    );
}

export default Contact;
