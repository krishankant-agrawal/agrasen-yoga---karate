export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <a href="#home" className="brand footer-brand">
          <img src="/images/logo.png" alt="Agrasen Yoga & Karate Classes" />
          <span>
            <strong>AGRASEN</strong>
            <small>YOGA & KARATE CLASSES</small>
          </span>
        </a>

        <div className="footer-links">
          <a href="#classes">Classes</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="footer-wa" href="https://wa.me/919460907988" target="_blank" rel="noreferrer">
          WhatsApp ↗
        </a>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Agrasen Yoga & Karate Classes</span>
        <span>Murlipura, Jaipur</span>
      </div>
    </footer>
  );
}
