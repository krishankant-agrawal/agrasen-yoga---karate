function Icon({ children }: { children: React.ReactNode }) {
  return <span className="icon" aria-hidden="true">{children}</span>;
}

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-grid">
          <div>
            <span className="kicker">GET IN TOUCH</span>
            <h2>Come train<br /><span>with us.</span></h2>
            <p>
              Visit Agrasen Yoga & Karate Classes in Murlipura, Jaipur or
              message us for current batch timings and admission details.
            </p>

            <div className="contact-list">
              <a href="https://wa.me/919460907988" target="_blank" rel="noreferrer">
                <Icon>◉</Icon>
                <span>
                  <small>WhatsApp</small>
                  <strong>+91 94609 07988</strong>
                </span>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Agrasen%20Yoga%20and%20Karate%20Classes%20Murlipura%20Jaipur"
                target="_blank"
                rel="noreferrer"
              >
                <Icon>⌖</Icon>
                <span>
                  <small>Location</small>
                  <strong>Murlipura, Jaipur, Rajasthan</strong>
                </span>
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-top">
              <img src="/images/logo.png" alt="" />
              <span>AGRASEN<br />YOGA & KARATE</span>
            </div>
            <h3>Ask about a class</h3>
            <p>
              Send us a WhatsApp message and we’ll share the latest batch,
              timing and admission details.
            </p>
            <a
              className="btn btn-primary full"
              href="https://wa.me/919460907988?text=Hi%20Agrasen%20Yoga%20%26%20Karate%20Classes%2C%20please%20share%20your%20latest%20batch%20timings%20and%20admission%20details."
              target="_blank"
              rel="noreferrer"
            >
              Message on WhatsApp <span>↗</span>
            </a>
          </div>
        </div>

        <div className="map-wrap">
          <div className="map-heading">
            <span className="kicker">FIND US</span>
            <h3>Visit Agrasen Yoga & Karate Classes</h3>
            <p>Murlipura, Jaipur, Rajasthan</p>
          </div>

          <div className="map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.9181571116574!2d75.76321777544148!3d26.969490976613383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db393efa04aaf%3A0xc7d790bf408ab89d!2sAgrasen%20Yoga%20%26%20Karate%20Classes!5e0!3m2!1sen!2sin!4v1789534743845!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, width: "100%", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Agrasen Yoga & Karate Classes location map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
