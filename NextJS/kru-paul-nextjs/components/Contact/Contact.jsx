import React from "react";
import styles from '../Contact/Contact.module.scss'
export default function Contact() {

    return (
        <article>
            <h1 className="topic">
                Contact
            </h1>
            <div className={styles.wrapper}>
                <h3>
                    Please provide your information and messages to communicate with me
                </h3>
            </div>
            <div>
                <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/xnqlwbzy"
                    method="POST">

                    <fieldset id="fs-frm-inputs">
                        <div className={styles.wrapper}>
                            <label for="full-name">
                                Full Name
                            </label>
                            <input
                                className={styles.dataInput}
                                type="text" name="name" id="full-name" required="" />

                        </div>
                        <div className={styles.wrapper}>
                            <label for="email-address">
                                Email
                            </label>
                            <input
                                className={styles.dataInput}
                                type="email" name="_replyto" id="email-address"
                                required="" />

                        </div>
                        <div className={styles.wrapper}>
                            <label for="message">
                                Message
                            </label>
                            <textarea
                                className={styles.dataInputLarge} name="message" id="message"
                                required=""></textarea>

                        </div>
                        <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
                    </fieldset>
                    <div className={styles.wrapper}>
                        <button
                            className={styles.submitButton}
                            type="submit" value="submit">Submit</button>
                    </div>

                </form>
            </div>
        </article>
    )
}
