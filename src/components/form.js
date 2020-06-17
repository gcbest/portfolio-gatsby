import React, { useState } from 'react'

const SendButton = () => (
    <button
        type="submit"
        id="submit"
        className="btn btn-effect wow fadeInUp"
        data-wow-delay="0.8s"
    >
        <i className="fa fa-check" /> Send Message
    </button>
)

const Form = () => {
    const initialFormData = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState(initialFormData);
    const { name, email, subject, message } = formData;

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const clearForms = () => setFormData(initialFormData);

    const handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formData })
        })
            .then(() => {
                setStatus("SUCCESS");
                clearForms();
            })
            .catch(error => setStatus("ERROR"));

        e.preventDefault();
    };

    return (
        <form
            id="contactForm"
            className="contact-form shake"
            data-toggle="validator"
            data-netlify="true"
            name="contact"
            onSubmit={handleSubmit}
        >
            <input type="hidden" name="form-name" value="contact" aria-label="contact" />

            <div className="row">
                <div className="col-md-6">
                    <div className="form-group wow fadeInUp" data-wow-delay="0.2s">
                        <div className="controls">
                            <input
                                onChange={handleChange}
                                type="text"
                                id="name"
                                className="form-control"
                                placeholder="Name"
                                required
                                name="name"
                                value={name}
                                aria-label="name"
                                data-error="Please enter your name"
                            />
                            <div className="help-block with-errors" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group wow fadeInUp" data-wow-delay="0.2s">
                        <div className="controls">
                            <input
                                onChange={handleChange}
                                type="email"
                                className="email form-control"
                                id="email"
                                placeholder="Email"
                                required
                                name="email"
                                value={email}
                                aria-label="email"
                                data-error="Please enter your email"
                            />
                            <div className="help-block with-errors" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="form-group wow fadeInUp" data-wow-delay="0.4s">
                        <div className="controls">
                            <input
                                onChange={handleChange}
                                type="text"
                                id="msg_subject"
                                className="form-control"
                                placeholder="Subject"
                                required
                                name="subject"
                                value={subject}
                                aria-label="subject"
                                data-error="Please enter your message subject"
                            />
                            <div className="help-block with-errors" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="form-group wow fadeInUp" data-wow-delay="0.6s">
                        <div className="controls">
                            <textarea
                                onChange={handleChange}
                                id="message"
                                name="message"
                                value={message}
                                rows="7"
                                placeholder="Message"
                                className="form-control"
                                required
                                aria-label="message"
                                data-error="Write your message"
                            />
                            <div className="help-block with-errors" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {status === "SUCCESS" ? <p>Thanks!</p> : <SendButton />}
                    {status === "ERROR" && <p>Ooops! There was an error.</p>}
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div id="msgSubmit" className="h3 text-center hidden" />
                    <div className="clearfix" />
                </div>
            </div>
        </form>
    )
}

export default Form
