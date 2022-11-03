import { useState } from "react";
import Footer from "../Footer/Footer";
import "./Contact.css"

const Contact = () => {
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "Send me a message and I'll reply you as soon as possible...",
        verify: false
    });

    const onChange = (e) => {
        const { value, name, type, checked } = e.target;

        setFormValues({
            ...formValues,
            [name] : type === "checkbox" ? checked : value
        })
    }

    return (
        <>
            <section className="contact">
                <header>
                    <h1>Contact Me</h1>
                    <p>Hi there, contact me to ask me about anything you have in mind.</p>
                </header>
                <div className="form-fields">
                    <form>
                        <div className="full-name">
                        <label htmlFor="first-name">
                            First Name
                            <input 
                                type="text" 
                                id="first_name"
                                name="firstName"
                                placeholder="Enter your first name"
                                value={formValues.firstName}
                                onChange={onChange}
                                required
                            />
                        </label>
                        <label htmlFor="last-name">
                            Last Name
                            <input 
                                type="text" 
                                id="last_name"
                                name="lastName"
                                placeholder="Enter your last name"
                                value={formValues.lastName}
                                onChange={onChange}
                                required
                            />
                        </label>
                        </div>
                        <label htmlFor="email">
                            Email
                            <input 
                                type="email"  
                                id="email"
                                name="email"
                                placeholder="yourname@email.com"
                                value={formValues.email}
                                onChange={onChange}
                                required
                            />
                        </label>
                        <label htmlFor="message">
                            Message
                            <textarea 
                                id="message" 
                                name="message" 
                                cols="60" 
                                rows="8" 
                                value={formValues.message}
                                onChange={onChange}
                            ></textarea>
                        </label>
                        <label htmlFor="verify">
                            <input 
                            type="checkbox" 
                            id="verify"
                            name="verify"
                            value={formValues.verify}
                            onChange={onChange}
                        />
                            You agree to providing your data to Sheriff Amzat who may contact you.
                        </label>
                        <button
                            type="submit"
                            id="btn_submit"
                            disabled={!formValues.verify}
                        >Send Message</button>
                    </form>
                </div>
            </section>
            <Footer />
        </>        
    )
};

export default Contact;