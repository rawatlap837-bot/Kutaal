import { ClipboardCheck, MessageCircle, Target } from "lucide-react";
import Heading from "../components/Heading.jsx";

const prompts = [
  {
    icon: Target,
    title: "Your main goal",
    text: "Think about what you want help with, such as weight loss, weight gain, or general fitness.",
  },
  {
    icon: ClipboardCheck,
    title: "Your daily routine",
    text: "Be ready to share a little about your meals, activity, sleep, and schedule.",
  },
  {
    icon: MessageCircle,
    title: "Questions you have",
    text: "Note anything you would like to ask during your one-to-one consultation.",
  },
];

const BookingPrep = ({ onBook }) => (
  <section className="bg-gradient-to-b from-white to-lavender/80 py-16 sm:py-20">
    <div className="mx-auto max-w-6xl px-4">
      <Heading tag="Make the most of your call">
        A little preparation. <span className="grad-text">A clearer conversation.</span>
      </Heading>
      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        {prompts.map(({ icon: Icon, title, text }, index) => (
          <article key={title} className="group rounded-3xl border border-mist/60 bg-white p-6 shadow-[0_12px_36px_rgba(37,38,50,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(37,38,50,0.10)] sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white shadow-lg shadow-purple/20">
                <Icon size={22} strokeWidth={2.2} />
              </span>
              <span className="text-sm font-extrabold tracking-[0.16em] text-purple/50">0{index + 1}</span>
            </div>
            <h3 className="text-lg font-extrabold tracking-tight">{title}</h3>
            <p className="mt-2 text-sm leading-7 text-ink/65">{text}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button type="button" onClick={onBook} className="btn-primary">Book your 1:1 call</button>
      </div>
    </div>
  </section>
);

export default BookingPrep;
