const gallery = [
  { src: "/images/yoga-01.jpg", alt: "Group yoga practice at Agrasen Yoga & Karate Classes" },
  { src: "/images/yoga-02.jpg", alt: "Yoga flexibility session" },
  { src: "/images/yoga-03.jpg", alt: "Students practising yoga poses" },
  { src: "/images/yoga-04.jpg", alt: "Guided yoga training" },
  { src: "/images/yoga-05.jpg", alt: "Group yoga class" },
  { src: "/images/yoga-06.jpg", alt: "Yoga balance and mobility practice" },
  { src: "/images/yoga-07.jpg", alt: "Yoga warm-up session" },
  { src: "/images/yoga-08.jpg", alt: "Students during yoga class" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="kicker">FROM OUR SESSIONS</span>
            <h2>Training in <span>motion.</span></h2>
          </div>
          <p>Real class moments from Agrasen Yoga & Karate Classes.</p>
        </div>

        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <figure className={`gallery-item gallery-${index + 1}`} key={item.src}>
              <img
                src={item.src}
                alt={item.alt}
                loading={index > 2 ? "lazy" : "eager"}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
