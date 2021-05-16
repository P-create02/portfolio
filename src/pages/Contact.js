import React from 'react';
import AOS from 'aos'

function Contact() {
  React.useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  
  return (
     <section className="contact-page" 
     data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
        <article className="contact-form">
          <form action="https://formspree.io/f/xjvjgyag" method="POST">
            <div className="form-group">
              <input type="email" name="_replyto" placeholder="Email for reply" className="form-control"/>

              <textarea name="message" rows="5" placeholder="Your message, it would be best if it was a job offer or an interesting project" className="form-control"></textarea>
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