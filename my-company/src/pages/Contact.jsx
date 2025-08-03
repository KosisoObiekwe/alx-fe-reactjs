import { useState } from "react";

function Contact() {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("Your message has been sent!");
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ color: "teal", fontSize: "24px" }}>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your message"
                    style={{
                        padding: "10px",
                        marginRight: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                    }}
                />
                <button
                    type="submit"
                    style={{
                        backgroundColor: "green",
                        color: "white",
                        padding: "10px",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >
                    Send
                </button>
            </form>
            {message && (
                <p style={{ marginTop: "15px", color: "blue" }}>{message}</p>
            )}
        </div>
    );
}

export default Contact;
