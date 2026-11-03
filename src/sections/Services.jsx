import { SERVICES } from "../data/index.js";
import Heading from "../components/Heading.jsx";
import IconBox from "../components/IconBox.jsx";

// SECTION: 6. SERVICES. Edit the headings and text below. Photos, prices and contacts come from src/data/.
const Services = () => {
  return (
    <>
    <section id="services" className="mx-auto max-w-6xl rounded-[2rem] bg-lavender/70 px-4 py-16 sm:px-8">
      <Heading tag="Our Coaching Services">Transform Your <span className="grad-text">Lifestyle</span></Heading>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <div key={s.title} className="card"><IconBox name={s.icon} /><h3 className="text-lg font-extrabold">{s.title}</h3><p className="mt-1 text-sm text-ink/70">{s.text}</p></div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Services;
