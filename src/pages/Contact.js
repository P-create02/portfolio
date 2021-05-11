import React from 'react';

function Contact() {
  return (
     <section className="contact-page">
        <article className="contact-form">
          <form action="https://formspree.io/f/xjvjgyag" method="POST">
            <div className="form-group">
              <input type="email" name="_replyto" placeholder="email" className="form-control"/>

              <textarea name="message" rows="5" placeholder="message" className="form-control"></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              send
            </button>
          </form>
        </article>
      </section>
  )
}

export default Contact;