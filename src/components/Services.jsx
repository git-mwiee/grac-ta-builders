import "./Services.css";

const SERVICES = [
  {
    title: "Residential Construction",
    short: "Homes • Extensions • Repairs",
    desc: "We build and improve homes with durable materials, clean finishing, and on-time delivery—tailored to your budget and design.",
    icon: "🏠",
  },
  {
    title: "Commercial Projects",
    short: "Offices • Stores • Buildings",
    desc: "From planning to execution, we deliver professional commercial builds with safety standards, quality control, and clear timelines.",
    icon: "🏢",
  },
  {
    title: "Renovation & Remodeling",
    short: "Interior • Exterior • Upgrades",
    desc: "Upgrade your space with modern layouts, better lighting, and improved functionality—without compromising structural integrity.",
    icon: "🛠️",
  },
  {
    title: "Roofing & Waterproofing",
    short: "Roof • Seal • Protection",
    desc: "We install and repair roofs and apply waterproofing solutions to help protect your property from leaks and long-term damage.",
    icon: "🏗️",
  },
  {
    title: "Plumbing & Electrical",
    short: "Install • Fix • Maintain",
    desc: "Safe and reliable plumbing and electrical works—from wiring and lighting to fixtures—done by skilled professionals.",
    icon: "⚡",
  },
  {
    title: "Painting & Finishing",
    short: "Paint • Tiles • Details",
    desc: "Clean finishing touches including painting, tiling, and surface repairs—so your project looks polished and professional.",
    icon: "🎨",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="servicesHead">
        <h2>Our Services</h2>
        <p>
          Here are sample services (we can update these anytime once you have the
          real list).
        </p>
      </div>

      <div className="serviceGrid">
        {SERVICES.map((s, idx) => (
          <article className="serviceCard" key={idx}>
            <div className="cardFront">
              <div className="serviceIcon" aria-hidden="true">{s.icon}</div>
              <h3>{s.title}</h3>
              <span className="serviceShort">{s.short}</span>
            </div>

            <div className="cardBack">
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}