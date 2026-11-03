import { useState } from "react";
import { PAYMENT } from "../data/index.js";
import { Icons } from "../components/Icon.jsx";

// The popup form: collects details, then sends the customer to Razorpay.
function BookingModal({ open, onClose }) {
  const [error, setError] = useState("");
  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    if (!/^[6-9]\d{9}$/.test(data.whatsapp)) return setError("सही 10 अंकों का WhatsApp नंबर डालें।");
    sessionStorage.setItem("kmfb_booking", JSON.stringify(data));
    if (PAYMENT.leadWebhook) {
      fetch(PAYMENT.leadWebhook, {
        method: "POST", headers: { "Content-Type": "application/json" }, keepalive: true,
        body: JSON.stringify({ ...data, status: "payment_started", at: new Date().toISOString() }),
      }).catch(() => {});
    }
    window.location.href = PAYMENT.razorpayUrl;
  };

  const field = "w-full rounded-xl border border-mist bg-lavender px-4 py-3 outline-none focus:border-purple";
  return (
    <div className="fixed inset-0 z-50 grid place-items-end bg-ink/60 p-0 sm:place-items-center sm:p-4" onClick={onClose}>
      <form onSubmit={submit} onClick={(e) => e.stopPropagation()} className="w-full max-w-md rounded-t-3xl bg-white p-6 sm:rounded-3xl">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-xl font-extrabold">Book Your 1:1 Call</h3>
            <p className="text-sm text-ink/60">अपनी डिटेल्स भरें</p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close"><Icons.X /></button>
        </div>
        <div className="space-y-3">
          <input name="name" required placeholder="Full Name | पूरा नाम" className={field} />
          <input name="email" type="email" required placeholder="Email Address" className={field} />
          <input name="whatsapp" type="tel" inputMode="numeric" required placeholder="WhatsApp Number (10 digits)" className={field} />
          <select name="goal" required defaultValue="" className={field}>
            <option value="" disabled>Fitness Goal | आपका गोल</option>
            <option>Weight Loss</option><option>Weight Gain</option><option>General Fitness</option>
          </select>
          <select name="method" required defaultValue="" className={field}>
            <option value="" disabled>Preferred Call | कॉल का तरीका</option>
            <option>WhatsApp Video Call</option><option>Google Meet</option>
          </select>
        </div>
        {error && <p className="mt-3 text-sm font-medium text-red-600">{error}</p>}
        <p className="mt-4 text-center text-sm font-bold">Your Consultation Fee: ₹{PAYMENT.price}</p>
        <button className="btn-primary mt-3 w-full">PAY ₹{PAYMENT.price} &amp; CONTINUE</button>
        <p className="mt-3 text-center text-xs text-ink/50">आपको सुरक्षित Razorpay पेमेंट पेज पर भेजा जाएगा।</p>
      </form>
    </div>
  );
}

export default BookingModal;
