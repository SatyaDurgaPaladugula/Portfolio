import { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
      const [contactData, setContactData] = useState({
            senderName: '',
            senderEmail: '',
            messageContent: ''
      });
      const [statusMessage, setStatusMessage] = useState("");
      const [loading, setLoading] = useState(false);

      const handleChange = (e) => {
            setContactData({
                  ...contactData,
                  [e.target.name]: e.target.value
            });
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            setLoading(true);

            emailjs.send(
                  import.meta.env.VITE_EMAILJS_SERVICE_ID,
                  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                  {
                        from_name: contactData.senderName,
                        from_email: contactData.senderEmail,
                        message: contactData.messageContent,
                  },
                  import.meta.env.VITE_EMAILJS_USER_ID
            )
                  .then(() => {
                        setStatusMessage("Your message has been sent!");
                        setContactData({ senderName: '', senderEmail: '', messageContent: '' });
                  })
                  .catch(() => {
                        setStatusMessage("Failed to send message. Please try again later.");
                  })
                  .finally(() => {
                        setLoading(false);
                  });
      };

      return (
            <section id="contact">
                  <h2 className="contact-heading">Contact</h2>
                  <p>Feel free to reach out using the form below.</p>

                  {statusMessage && <p className="status-message">{statusMessage}</p>}

                  <form onSubmit={handleSubmit}>
                        <label htmlFor="senderName">Name:</label>
                        <input
                              type="text"
                              id="senderName"
                              name="senderName"
                              value={contactData.senderName}
                              onChange={handleChange}
                              required
                        />

                        <label htmlFor="senderEmail">Email:</label>
                        <input
                              type="email"
                              id="senderEmail"
                              name="senderEmail"
                              value={contactData.senderEmail}
                              onChange={handleChange}
                              required
                        />

                        <label htmlFor="messageContent">Message:</label>
                        <textarea
                              id="messageContent"
                              name="messageContent"
                              rows="4"
                              value={contactData.messageContent}
                              onChange={handleChange}
                              required
                        ></textarea>

                        <button type="submit" disabled={loading}>
                              {loading ? 'Sending...' : 'Send Message'}
                        </button>
                  </form>
            </section>
      );
};

export default Contact;
