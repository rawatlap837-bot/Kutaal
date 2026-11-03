import { BRAND } from "../data/index.js";
import Logo from "../components/Logo.jsx";

// SECTION: 14. FOOTER. Edit the headings and text below. Photos, prices and contacts come from src/data/.
const Footer = () => {
  return (
    <>
    <footer className="bg-ink px-4 py-12 text-sm text-white/70">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div><div className="text-white"><Logo /></div><p className="mt-3">{BRAND.mission}</p></div>
        <div className="space-y-2">
          <a className="block" href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          <a className="block" href={`https://wa.me/${BRAND.whatsapp}`}>WhatsApp: {BRAND.whatsappDisplay}</a>
          <a className="block" href={BRAND.site}>{BRAND.site.replace("https://", "")}</a>
        </div>
        <div className="space-y-2">
          <a className="block" href="#services">Services</a><a className="block" href="#faq">FAQ</a>
          <a className="block" href="/privacy.html">Privacy Policy</a>
          <a className="block" href="/terms.html">Terms &amp; Conditions</a>
          <a className="block" href="/refund.html">Refund &amp; Cancellation Policy</a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl border-t border-white/10 pt-6 text-xs">© 2026 {BRAND.name}. परिणाम व्यक्ति के अनुसार अलग हो सकते हैं। यह मार्गदर्शन किसी चिकित्सकीय सलाह का विकल्प नहीं है।</p>
    </footer>
    </>
  );
};

export default Footer;
