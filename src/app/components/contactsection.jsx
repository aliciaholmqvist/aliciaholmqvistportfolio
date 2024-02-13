import React, {useState, useRef} from 'react';
import styles from '../styles/contactsection.module.scss'
import NavBar from './navbar';
import { IoMdSend } from 'react-icons/io';
import ClipLoader from "react-spinners/ClipLoader";
import emailjs from '@emailjs/browser';

function ContactSection() {
  const [sending, setSending] = useState(false);

  const form = useRef();
  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "none";
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "none";
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? "none";

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        e.target.reset();
        setSending(false);
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <>
    <NavBar/>
    <div className={`${styles.contactSection}`}>
      <span className={styles.line}></span>
      <div className={`${styles.contactPage} wrapper`}>
        <form className={styles.contact} ref={form} onSubmit={sendEmail}>
          <div className={styles.inputrow}>
            <div className={styles.inputContainer}>
              <label>Name*</label>
              <input type="text" required name="user_name" />
            </div>
            <div className={styles.inputContainer}>
              <label>Email*</label>
              <input type="email" required name="user_email" />
            </div>
          </div>

          <div className={styles.inputrow}>
            <div className={styles.inputContainer}>
              <label>Phone</label>
              <input type="text" name="user_phone" />
            </div>
            <div className={styles.inputContainer}>
              <label>Organization</label>
              <input type="text" name="user_organization" />
            </div>
          </div>

          <div className={styles.inputContainer}>
            <label>Message*</label>
            <textarea required rows={5} name="message"></textarea>
          </div>
          <div>
            {!sending ? <button className={styles.sendbutton} type="submit">SEND <IoMdSend style={{ fontSize: "1.3rem" }} /></button> : <button className={styles.sendbutton} disabled type="submit">SENDING <ClipLoader color={'#ffffff'} size={'1.3rem'} /></button>}
          </div>
        </form>
        <div className={styles.sayHelloContainer}>
          <h2 className={styles.sayHello}>It starts with <br/> Hello</h2>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactSection;