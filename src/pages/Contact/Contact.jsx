import React from 'react'

function Contact() {
  return (
    <section className="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <section className="mapbox">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.8895942649337!2d78.20969167545891!3d26.232776677059032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c145f9f7cd0b%3A0xe83936febcb279e9!2sGole%20Ka%20Mandir%20Rd%2C%20Gwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1737952085714!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </figure>
      </section>
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form action="#" className="form">
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="form-input"
              placeholder="Full Name"
            />
            <input
              type="email"
              name="email"
              id="email"
              className="form-input"
              placeholder="Email Address"
            />
                  </div>
                  <textarea name="message" id="message" className='form-input' placeholder='Your Messages'></textarea>
                  <button className='form-btn' type='submit'>
                      <span>Send Message</span>
                  </button>
        </form>
      </section>
    </section>
  );
}

export default Contact