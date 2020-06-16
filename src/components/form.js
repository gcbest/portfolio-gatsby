import React, { useState } from 'react'

const SendButton = () => (
    <button
        type="submit"
        id="submit"
        class="btn btn-effect wow fadeInUp"
        data-wow-delay="0.8s"
    >
        <i class="fa fa-check" /> Send Message
    </button>
)

const Form = () => {
    const [status, setStatus] = useState('');

    const submitForm = ev => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setStatus("SUCCESS");
            } else {
                this.setStatus("ERROR");
            }
        };
        xhr.send(data);
    }

    // return (
    //     <form
    //         onSubmit={submitForm}
    //         action="https://formspree.io/moqklawn"
    //         method="POST"
    //     >
    //         <!-- add your custom form HTML here -->


    //         <label>Email:</label>
    //         <input type="email" name="email" />
    //         <label>Message:</label>
    //         <input type="text" name="message" />
    //         {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
    //         {status === "ERROR" && <p>Ooops! There was an error.</p>}
    //     </form>
    // );

    return (
        <form
            id="contactForm"
            class="contact-form shake"
            data-toggle="validator"
            onSubmit={submitForm}
            action="https://formspree.io/moqklawn"
            method="POST"
        >
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group wow fadeInUp" data-wow-delay="0.2s">
                        <div class="controls">
                            <input
                                type="text"
                                id="name"
                                class="form-control"
                                placeholder="Name"
                                required
                                data-error="Please enter your name"
                            />
                            <div class="help-block with-errors" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group wow fadeInUp" data-wow-delay="0.2s">
                        <div class="controls">
                            <input
                                type="email"
                                name="email"
                                class="email form-control"
                                id="email"
                                placeholder="Email"
                                required
                                data-error="Please enter your email"
                            />
                            <div class="help-block with-errors" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="form-group wow fadeInUp" data-wow-delay="0.4s">
                        <div class="controls">
                            <input
                                type="text"
                                id="msg_subject"
                                class="form-control"
                                placeholder="Subject"
                                required
                                data-error="Please enter your message subject"
                            />
                            <div class="help-block with-errors" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="form-group wow fadeInUp" data-wow-delay="0.6s">
                        <div class="controls">
                            <textarea
                                id="message"
                                name="message"
                                rows="7"
                                placeholder="Message"
                                class="form-control"
                                required
                                data-error="Write your message"
                            />
                            <div class="help-block with-errors" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    {status === "SUCCESS" ? <p>Thanks!</p> : <SendButton/>}
                    {status === "ERROR" && <p>Ooops! There was an error.</p>}
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div id="msgSubmit" class="h3 text-center hidden" />
                    <div class="clearfix" />
                </div>
            </div>
        </form>
    )
}

export default Form