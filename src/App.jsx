import { useState } from "react";
import BookingModal from "./components/BookingModal.jsx";
import Hero from "./sections/Hero.jsx";
import Challenges from "./sections/Challenges.jsx";
import Coach from "./sections/Coach.jsx";
import BeforeAfter from "./sections/BeforeAfter.jsx";
import ClientResults from "./sections/ClientResults.jsx";
import Services from "./sections/Services.jsx";
import CallIncludes from "./sections/CallIncludes.jsx";
import HowItWorks from "./sections/HowItWorks.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import LimitedSlots from "./sections/LimitedSlots.jsx";
import Offer from "./sections/Offer.jsx";
import Faq from "./sections/Faq.jsx";
import FinalCta from "./sections/FinalCta.jsx";
import Footer from "./sections/Footer.jsx";
import StickyCta from "./sections/StickyCta.jsx";
import Reveal from "./components/Reveal.jsx";
import BookingPrep from "./sections/BookingPrep.jsx";

// The page = these sections in this order. Reorder or delete a line to change the page.
export default function App() {
  const [open, setOpen] = useState(false);
  const openBooking = () => setOpen(true);

  return (
    <div id="top" className="pb-20 md:pb-0">
      <BookingModal open={open} onClose={() => setOpen(false)} />
      <Reveal><Hero onBook={openBooking} /></Reveal>
      <Reveal><Challenges /></Reveal>
      <Reveal><Coach onBook={openBooking} /></Reveal>
      <Reveal><BeforeAfter /></Reveal>
      <Reveal><ClientResults /></Reveal>
      <Reveal><Services /></Reveal>
      <Reveal><CallIncludes /></Reveal>
      <Reveal><BookingPrep onBook={openBooking} /></Reveal>
      <Reveal><HowItWorks /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><LimitedSlots /></Reveal>
      <Reveal><Offer onBook={openBooking} /></Reveal>
      <Reveal><Faq /></Reveal>
      <Reveal><FinalCta onBook={openBooking} /></Reveal>
      <Footer />
      <StickyCta onBook={openBooking} />
    </div>
  );
}
