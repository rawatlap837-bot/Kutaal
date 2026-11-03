import { Icons } from "../components/Icon.jsx";

// SECTION: 10. LIMITED SLOTS. Edit the headings and text below. Photos, prices and contacts come from src/data/.
const LimitedSlots = () => {
  return (
    <>
    <section className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-r from-purple/5 via-lavender to-blue/5 px-4 py-16 text-center sm:px-10">
      <Icons.Hourglass className="mx-auto mb-3 h-10 w-10 text-purple" />
      <h2 className="text-3xl font-extrabold sm:text-4xl">Personalized Attention. <span className="grad-text">Limited Daily Slots.</span></h2>
      <p className="mt-4 text-ink/70">हम हर दिन सीमित लोगों को ही पर्सनल गाइडेंस देते हैं ताकि हर क्लाइंट को बेहतर ध्यान दे सकें।</p>
      <p className="mt-2 text-sm font-semibold text-ink/50">रोज़ 1–2 पर्सनल कोचिंग स्लॉट, उपलब्धता के अनुसार।</p>
    </section>
    </>
  );
};

export default LimitedSlots;
