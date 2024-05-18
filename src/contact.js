import React from 'react';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <p>
        Feel free to reach out to me via email or connect with me on social media.
      </p>
      <ul>
        <li>
          <a href="mailto:youremail@example.com">Email</a>
        </li>
        {/* Add social media links here */}
      </ul>
    </section>
  );
}

export default Contact;