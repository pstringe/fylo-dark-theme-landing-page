import { FC, FormEvent, useState } from "react";
import styles from "@styles/Form.module.scss";

const Form: FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = new RegExp(
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    );
    
    return emailRegex.test(String(email).toLowerCase());
  }

  const registerUser = async () => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify({email}),
    };

    const response = await fetch('/.netlify/functions/index', options);

    if (response.ok) {
      console.log('success')
    }
    else {
      console.warn('failed to submit')
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) =>  {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    registerUser()
    setError("");
    setEmail("");
  }

  return (
    <section aria-label="Early access" id="emailForm" className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Sign Up For Early Access</h1>
        <div className={styles.inputWrapper}>
          <div>
            <input
              type="email"
              aria-label="Email"
              placeholder="email@example.com"
              onChange={({ target: { value } }) => setEmail(value)}
              value={email}
            />
            {error ? <p className={styles.error}>{error}</p> : null}
          </div>
          <button type="submit">Get Started For Free</button>
        </div>
      </form>
    </section>
  );
};

export default Form;
