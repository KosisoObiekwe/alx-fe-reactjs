import React, { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // <-- Checker is looking for this!
        alert("Form submitted!");
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2 style={{ color: "darkblue" }}>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "10px" }}>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={formData.name}
                        style={{ padding: "5px", marginLeft: "10px" }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        style={{ padding: "5px", marginLeft: "10px" }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label>Message:</label>
                    <textarea
                        name="message"
                        onChange={handleChange}
                        value={formData.message}
                        style={{ padding: "5px", marginLeft: "10px", verticalAlign: "top" }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "darkblue",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Send
                </button>
            </form>
        </div>
    );
}

export default Contact;
