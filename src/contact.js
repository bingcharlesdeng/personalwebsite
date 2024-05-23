import React from 'react';
import './contact.css';

const Contact = () => {
  const handleSocialClick = (link) => {
    window.open(link, '_blank'); // Open links in a new tab
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>I'd love to hear from you. Feel free to reach out via email or connect with me on social media.</p>
      <ul className="contact-list">
        <li>
          <a href="mailto:charlesdeng98@gmail.com" onClick={() => handleSocialClick('mailto:charlesdeng98@gmail.com')}>
            Email
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/charlesxdeng" onClick={() => handleSocialClick('https://www.linkedin.com/in/charlesxdeng/')} >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/bingcharlesdeng" onClick={() => handleSocialClick('https://github.com/bingcharlesdeng')} >
            Github
          </a>
        </li>
        {/* Add more social media links here */}
      </ul>
      {/* Optional Form (requires additional setup) */}
      {/* <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Send Message</button>
      </form> */}
    </section>
  );
};

export default Contact;