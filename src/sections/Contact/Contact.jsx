import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactStyles.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('All fields are required.');
      return;
    }

    setStatus('Sending...');

    // Sending the email
    emailjs
      .send(
        'service_skwgpd8', // Replace with your Service ID
        'template_7czjw4e', // Replace with your Template ID
        {
          from_name: formData.name, // Map to {{from_name}} in your template
          to_name: 'Recipient', // Replace with a static or dynamic value
          email: formData.email, // Map to {{email}} if needed
          message: formData.message, // Map to {{message}} in your template
        },
        'N-eCm1y8ghdszOWtP' // Replace with your Public Key
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Message Sent!');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.error('FAILED...', error);
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
          required
        />
        <input type="submit" value="Send" className={styles.submit} />
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default Contact;
