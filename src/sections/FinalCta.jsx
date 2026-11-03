import { BRAND, PAYMENT } from "../data/index.js";

// SECTION: 13. FINAL CTA. Edit the headings and text below. Photos, prices and contacts come from src/data/.
const FinalCta = ({ onBook }) => {
  const waLink = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(PAYMENT.afterPaymentMessage)}`;
  return (
    <>
    <section className="bg-lavender/70 px-4 py-16">
      <div className="mx-auto max-w-4xl rounded-[2rem] bg-brand p-10 text-center text-white">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Your Health Deserves Attention. Start Today!</h2>
        <p className="mt-3 text-white/90">अपनी फिटनेस को प्राथमिकता दें और आज ही अपनी 1:1 कंसल्टेशन बुक करें।</p>
        <button onClick={onBook} className="btn mt-6 bg-white text-purple">BOOK YOUR 1:1 CALL</button>
        <p className="mt-5 text-sm">पेमेंट हो गया? <a href={waLink} className="font-bold underline">WhatsApp पर स्लॉट कन्फर्म करें</a></p>
      </div>
    </section>
    </>
  );
};

export default FinalCta;
