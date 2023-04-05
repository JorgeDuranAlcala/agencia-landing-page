"use client"
import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

export default function ContactForm() {
	const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors: Record<string, boolean > = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isValidForm = handleValidation();

   if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
			setFullname("")
			setEmail("")
			setSubject("")
			setMessage("")
    }
    console.log(fullname, email, subject, message);  
   

  };

	useEffect(() => {
			let id = setTimeout(() => {
					setShowSuccessMessage(false)
			}, 4000)
			return () => {
				window.clearTimeout(id)
			}
	}, [showSuccessMessage])

	return (
			<form className={styles.contactForm} onSubmit={handleSubmit} >
				<input type="text" placeholder="Asunto" value={subject} onChange={e => setSubject(e.target.value)}/>
				{errors.subject && <p className={styles.errorMessage}>El Asunto no puede estar vacio</p>}
				<input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
				{errors.email && <p className={styles.errorMessage} >El email no puede estar vacio</p>}
				<input type="text" placeholder="Nombre Completo" value={fullname}  onChange={e => setFullname(e.target.value)} />
				{errors.fullname && <p className={styles.errorMessage}>El campo nombre completo no puede estar vacio</p>}
				<textarea placeholder="Deja tu mensaje aqui" value={message}  onChange={e => setMessage(e.target.value)}>
				</textarea>
				{errors.message && <p className={styles.errorMessage} >El mensaje no puede estar vacio</p>}
				<button type="submit" disabled={buttonText === "Sending"} >{buttonText}</button>
				{showFailureMessage && <p className={styles.errorMessage}>Algo fue mal enviando tu email, intentalo de nuevo mas tarde</p>}
				{showSuccessMessage && <p>Felicidades, tu email ha sido enviado!</p>}
			</form>
		)

}
