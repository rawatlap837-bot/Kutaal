import { MEDIA } from "../data/index.js";
import Heading from "../components/Heading.jsx";

// SECTION: 9. TESTIMONIALS. Edit the headings and text below. Photos, prices and contacts come from src/data/.
const Testimonials = () => {
  return (
    <>
    {(MEDIA.testimonials.length > 0 || import.meta.env.DEV) && (
      <section className="bg-gradient-to-br from-lavender via-white to-lavender py-16">
        <div className="mx-auto max-w-6xl px-4">
          <Heading tag="Client Testimonials">What Clients <span className="grad-text">Say</span></Heading>
          <div className="grid gap-5 md:grid-cols-3">
            {(MEDIA.testimonials.length ? MEDIA.testimonials : [{ text: "Add real testimonials in content.js", name: "Client" }]).map((t, i) => (
              <div key={i} className="card"><p className="text-ink/80">“{t.text}”</p><p className="mt-4 font-extrabold">{t.name}</p></div>
            ))}
          </div>
        </div>
      </section>
    )}
    </>
  );
};

export default Testimonials;
