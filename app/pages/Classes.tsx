export default function Classes() {
  return (
    <section id="classes" className="section classes">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="kicker">WHAT WE TRAIN</span>
            <h2>Two disciplines.<br /><span>One stronger you.</span></h2>
          </div>
          <p>
            Structured group sessions designed for people who want to move,
            learn and become more confident — one session at a time.
          </p>
        </div>

        <div className="class-grid">
          <article className="class-card yoga-card">
            <div className="class-image">
              <img src="/images/yoga-06.jpg" alt="Yoga class at Agrasen" />
              <span className="class-tag">YOGA</span>
            </div>
            <div className="class-body">
              <div className="class-number">01</div>
              <h3>Yoga & Mobility</h3>
              <p>
                Build flexibility, balance, mobility and body awareness with
                guided yoga practice.
              </p>
              <ul>
                <li>Flexibility & mobility</li>
                <li>Balance & posture</li>
                <li>Breathing & mindful movement</li>
              </ul>
              <a href="#contact">Enquire about Yoga <span>→</span></a>
            </div>
          </article>

          <article className="class-card karate-card">
            <div className="class-image">
              <img src="/images/karate-01.png" alt="Martial arts training environment" />
              <span className="class-tag">KARATE</span>
            </div>
            <div className="class-body">
              <div className="class-number">02</div>
              <h3>Karate & Self Defence</h3>
              <p>
                Develop coordination, discipline, fitness and practical
                self-defence fundamentals through martial arts training.
              </p>
              <ul>
                <li>Fundamentals & techniques</li>
                <li>Coordination & fitness</li>
                <li>Discipline & confidence</li>
              </ul>
              <a href="#contact">Enquire about Karate <span>→</span></a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
