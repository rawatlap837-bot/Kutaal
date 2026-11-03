import { CALL_INCLUDES } from "../data/index.js";
import Icon from "../components/Icon.jsx";

// SECTION: 7. WHAT YOU GET. Edit the headings and text below. Photos, prices and contacts come from src/data/.
const CallIncludes = () => {
  return (
    <>
    <section className="bg-ink py-16 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Book Your Exclusive <span className="bg-brand bg-clip-text text-transparent">1:1 Transformation Call</span></h2>
          <p className="mt-3 text-white/70">आपकी कॉल में आपको क्या मिलेगा?</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {CALL_INCLUDES.map((c) => (
            <div key={c.title} className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand"><Icon name={c.icon} /></div>
              <div><h3 className="font-extrabold">{c.title}</h3><p className="mt-1 text-sm text-white/70">{c.text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default CallIncludes;
