import { CHALLENGES } from "../data/index.js";
import Heading from "../components/Heading.jsx";
import IconBox from "../components/IconBox.jsx";

// SECTION: 2. CHALLENGES. Edit the headings and text below. Photos, prices and contacts come from src/data/.
const Challenges = () => {
  return (
    <>
    <section className="mx-auto max-w-6xl rounded-[2rem] bg-gradient-to-br from-white via-white to-lavender px-4 py-16 sm:px-8">
      <Heading tag="Your Fitness Challenges" sub="क्या इनमें से कोई समस्या आपकी भी है?">What Is Holding You <span className="grad-text">Back?</span></Heading>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CHALLENGES.map((c) => (
          <div key={c.title} className="card"><IconBox name={c.icon} /><h3 className="font-extrabold">{c.title}</h3><p className="mt-1 text-sm text-ink/70">{c.text}</p></div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Challenges;
