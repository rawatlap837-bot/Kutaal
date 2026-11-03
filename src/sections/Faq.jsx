import { FAQS } from "../data/index.js";
import { Icons } from "../components/Icon.jsx";
import Heading from "../components/Heading.jsx";

// SECTION: 12. FAQ. Edit the headings and text below. Photos, prices and contacts come from src/data/.
const Faq = () => {
  return (
    <>
    <section id="faq" className="mx-auto max-w-4xl rounded-[2rem] bg-lavender/70 px-4 py-14 sm:px-8 sm:py-16">
      <Heading tag="FAQ">Got <span className="grad-text">Questions?</span></Heading>
      <div className="space-y-3">
        {FAQS.map(([q, a]) => (
          <details key={q} className="group card !p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between font-bold">{q}<Icons.ChevronDown className="h-5 w-5 transition group-open:rotate-180" /></summary>
            <p className="mt-3 text-sm text-ink/70">{a}</p>
          </details>
        ))}
      </div>
    </section>
    </>
  );
};

export default Faq;
