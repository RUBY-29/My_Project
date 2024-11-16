import React, { useState } from 'react';
import "../App.css";
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
    const [name, setName] = useState("");
    const [emailid, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "contacts"), {
                name: name,
                emailid: emailid,
                message: message,
            });
            alert('Message has been submitted');
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>Contact Form</h1>

            <label>Name</label>
            <input
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Email ID</label>
            <input
                placeholder="Email ID"
                value={emailid}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label>Message</label>
            <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default Contact;
