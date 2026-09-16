const benefits = [
  ["01", "Strength & Flexibility", "Improve mobility, balance and everyday body control through consistent practice."],
  ["02", "Discipline & Focus", "Karate training builds focus, discipline and a positive training mindset."],
  ["03", "Confidence", "Learn movement, coordination and self-defence fundamentals in a supportive environment."],
  ["04", "Healthy Routine", "Make movement a regular part of your week with structured group sessions."],
];

export default function Benefits() {
  return (
    <section className="section dark-section">
      <div className="container">
        <div className="section-head light">
          <div>
            <span className="kicker">THE AGRASEN APPROACH</span>
            <h2>More than a workout.</h2>
          </div>
          <p>Small improvements, repeated consistently, can change how you move and feel.</p>
        </div>

        <div className="benefit-grid">
          {benefits.map(([num, title, text]) => (
            <article className="benefit" key={num}>
              <span className="benefit-num">{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
