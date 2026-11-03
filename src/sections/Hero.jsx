import { BRAND, PAYMENT, MEDIA } from "../data/index.js";

// SECTION: 1. HERO. Edit the headings and text below. Photos, prices and contacts come from src/data/.
const Hero = ({ onBook }) => {
  return (
    <>
    <section className="relative overflow-hidden bg-gradient-to-b from-lavender to-white">
      <div className={`mx-auto grid items-center justify-items-center gap-10 px-4 py-16 text-center sm:py-20 md:py-24 ${MEDIA.coachPhoto ? "max-w-6xl md:grid-cols-2" : "max-w-4xl"}`}>
        <div className="mx-auto w-full max-w-3xl text-center">
          <span className="mb-6 inline-block rounded-full border border-purple/15 bg-white/90 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.1em] text-purple shadow-sm sm:text-xs">
            Weight Loss • Weight Gain • Fitness Coaching
          </span>
          <h1 className="text-balance text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-5xl lg:text-7xl">
            Ready to Transform <span className="grad-text">Your Lifestyle?</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-ink/70 sm:text-lg">
            क्या आप वेट लॉस, वेट गेन या अपनी फिटनेस को बेहतर बनाना चाहते हैं? सही मार्गदर्शन के साथ अपनी हेल्दी लाइफस्टाइल की शुरुआत करें।
          </p>
          <div className="mx-auto mt-8 flex w-full max-w-xl flex-col justify-center gap-3 sm:flex-row">
            <button onClick={onBook} className="btn-primary">BOOK YOUR 1:1 CALL</button>
            <a href="#services" className="btn-soft">EXPLORE OUR SERVICES</a>
          </div>
          <p className="mt-4 text-sm font-semibold text-ink/60">सिर्फ ₹{PAYMENT.price} में 1:1 वीडियो कंसल्टेशन</p>
        </div>
        {MEDIA.coachPhoto && <div className="animate-float">
          <img src={MEDIA.coachPhoto} alt="Coach Kutaal" className="mx-auto aspect-[4/5] w-full max-w-sm rounded-[2rem] object-cover shadow-2xl shadow-purple/25" />
        </div>}
      </div>
      <p className="mx-auto max-w-3xl px-4 pb-10 text-center text-sm font-semibold leading-6 text-ink/55">{BRAND.mission}</p>
    </section>
    </>
  );
};

export default Hero;
