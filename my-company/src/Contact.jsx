import React, { useState } from "react";

function Contact() {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("Message sent!");
    };

    return (
        <div>
            <h1 style={{ color: "teal", fontSize: "24px" }}>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your message"
                    style={{ padding: "8px", marginRight: "10px" }}
                />
                <button
                    type="submit"
                    style={{
                        backgroundColor: "green",
                        color: "white",
                        padding: "8px",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Send
                </button>
            </form>
            {message && <p style={{ color: "blue", marginTop: "10px" }}>{message}</p>}
        </div>
    );
}

export default Contact;
