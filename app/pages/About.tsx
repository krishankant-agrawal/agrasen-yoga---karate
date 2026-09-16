export default function About() {
  return (
    <section id="about" className="section story">
      <div className="container story-grid">
        <div className="story-copy">
          <span className="kicker">WHY AGRASEN</span>
          <h2>A place to build a <span>healthier you.</span></h2>
          <p>
            Agrasen Yoga & Karate Classes brings mindful movement and martial
            arts together in a dedicated training space in Murlipura, Jaipur.
          </p>
          <p>
            Whether you are starting your first yoga session or building
            discipline through karate, our sessions are built around
            consistent practice, movement quality and confidence.
          </p>
          <a className="text-link" href="#contact">Talk to us about a batch <span>→</span></a>
        </div>

        <div className="story-visual">
          <div className="image-frame">
            <img src="/images/yoga-04.jpg" alt="Students practising yoga together" />
            <div className="floating-badge">
              <strong>A healthier</strong>
              <span>• stronger • more confident you</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
