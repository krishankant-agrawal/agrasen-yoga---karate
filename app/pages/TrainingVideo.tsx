function Icon({ children }: { children: React.ReactNode }) {
  return <span className="icon" aria-hidden="true">{children}</span>;
}

export default function TrainingVideo() {
  return (
    <section className="section video-section">
      <div className="container video-grid">
        <div className="video-copy">
          <span className="kicker">SEE THE SPACE</span>
          <h2>Real people.<br /><span>Real practice.</span></h2>
          <p>
            A glimpse of the training environment at Agrasen Yoga & Karate
            Classes — captured during a real group session.
          </p>
          <div className="mini-points">
            <span><Icon>✓</Icon> Group training</span>
            <span><Icon>✓</Icon> Dedicated mat area</span>
            <span><Icon>✓</Icon> Yoga & martial arts</span>
          </div>
        </div>
        <div className="video-card">
          <video controls playsInline poster="/images/yoga-02.jpg">
            <source src="/videos/training-02.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
