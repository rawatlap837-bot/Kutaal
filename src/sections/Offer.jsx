import { PAYMENT } from "../data/index.js";
import { Icons } from "../components/Icon.jsx";

// SECTION: 11. OFFER. Edit the headings and text below. Photos, prices and contacts come from src/data/.
const Offer = ({ onBook }) => {
  return (
    <>
    <section id="offer" className="bg-gradient-to-b from-white to-lavender/70 px-4 py-16">
      <div className="mx-auto grid max-w-4xl gap-8 rounded-[2rem] bg-ink p-6 text-white shadow-2xl shadow-purple/20 sm:p-10 md:grid-cols-2">
        <div>
          <p className="text-xs font-bold text-white/60">ONE-TIME PAYMENT</p>
          <h3 className="mt-2 text-xl font-extrabold">Mission Fit Bharat – 1:1 Transformation Call</h3>
          <p className="mt-4 text-6xl font-extrabold bg-brand bg-clip-text text-transparent">₹{PAYMENT.price}</p>
          <p className="mt-1 text-sm text-white/60">Pay once • कोई सब्सक्रिप्शन नहीं</p>
          <button onClick={onBook} className="btn mt-6 w-full bg-white text-ink">PAY ₹{PAYMENT.price} &amp; BOOK YOUR CALL</button>
        </div>
        <ul className="space-y-3 text-sm">
          {["Fitness report & goal analysis", "Personalized fat-loss / muscle-gain plan", "Live doubt solving", "Lifestyle guidance", "WhatsApp video call या Google Meet"].map((t) => (
            <li key={t} className="flex gap-2"><Icons.CheckCircle2 className="h-5 w-5 shrink-0 text-purple" />{t}</li>
          ))}
        </ul>
      </div>
    </section>
    </>
  );
};

export default Offer;
