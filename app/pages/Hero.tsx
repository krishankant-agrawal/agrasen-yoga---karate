export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-media">
        <video autoPlay muted loop playsInline poster="/images/yoga-01.jpg">
          <source src="/videos/training-01.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-shade" />
      <div className="hero-pattern" />

      <div className="container hero-content">
        <div className="eyebrow"><span /> Murlipura • Jaipur <span /></div>
        <h1>
          Move Better.
          <br />
          <em>Live Stronger.</em>
        </h1>
        <p>
          Yoga for balance and flexibility. Karate for strength, discipline
          and confidence. Train your body and mind under one roof.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">Start Your Journey <span>→</span></a>
          <a className="btn btn-ghost" href="#gallery">Explore Classes <span>↓</span></a>
        </div>
        <div className="hero-trust">
          <div><b>Yoga</b><span>Balance • Mobility • Mindfulness</span></div>
          <div><b>Karate</b><span>Strength • Focus • Discipline</span></div>
        </div>
      </div>

      <a className="scroll-cue" href="#classes" aria-label="Scroll to classes">
        <span>Scroll to explore</span><i>↓</i>
      </a>
    </section>
  );
}
