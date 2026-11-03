import { STEPS } from "../data/index.js";
import Heading from "../components/Heading.jsx";

// SECTION: 8. HOW IT WORKS. Edit the headings and text below. Photos, prices and contacts come from src/data/.
const HowItWorks = () => {
  return (
    <>
    <section id="how" className="mx-auto max-w-5xl rounded-[2rem] bg-white px-4 py-16 sm:px-8">
      <Heading tag="How It Works">4 Simple Steps to <span className="grad-text">Start</span></Heading>
      <ol className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <li key={s} className="card text-center">
            <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-brand font-extrabold text-white">{i + 1}</div>
            <p className="font-bold">{s}</p>
          </li>
        ))}
      </ol>
    </section>
    </>
  );
};

export default HowItWorks;
