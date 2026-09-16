export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#home" className="brand">
          <img src="/images/logo.png" alt="Agrasen Yoga & Karate Classes logo" />
          <span>
            <strong>AGRASEN</strong>
            <small>YOGA & KARATE CLASSES</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#classes">Classes</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="nav-cta"
          href="https://wa.me/919460907988?text=Hi%20Agrasen%20Yoga%20%26%20Karate%20Classes%2C%20I%20want%20to%20know%20about%20the%20classes."
          target="_blank"
          rel="noreferrer"
        >
          Join Now <span>↗</span>
        </a>
      </div>
    </header>
  );
}
