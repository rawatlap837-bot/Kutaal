import { PAYMENT } from "../data/index.js";

// SECTION: STICKY MOBILE CTA. Edit the headings and text below. Photos, prices and contacts come from src/data/.
const StickyCta = ({ onBook }) => {
  return (
    <>
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-mist bg-white/95 p-3 backdrop-blur md:hidden">
      <button onClick={onBook} className="btn-primary w-full">PAY ₹{PAYMENT.price} &amp; BOOK YOUR CALL</button>
    </div>
    </>
  );
};

export default StickyCta;
