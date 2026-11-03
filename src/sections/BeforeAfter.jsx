import { MEDIA } from "../data/index.js";
import Heading from "../components/Heading.jsx";
import Photo from "../components/Photo.jsx";

// SECTION: 4. BEFORE / AFTER. Edit the headings and text below. Photos, prices and contacts come from src/data/.
const BeforeAfter = () => {
  return (
    <>
    {(MEDIA.coachBefore || MEDIA.coachAfter || import.meta.env.DEV) && (
      <section className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-br from-lavender to-white px-4 py-16 sm:px-8 lg:px-12 lg:py-24">
        <Heading tag="Personal Transformation" sub="कोच की अपनी असली ट्रांसफॉर्मेशन जर्नी।">My Own <span className="grad-text">Journey</span></Heading>
        <div className="journey-gallery mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8 lg:gap-10">
          <div className="overflow-hidden rounded-3xl border border-mist/70 bg-white p-3 shadow-[0_12px_36px_rgba(37,38,50,0.08)] sm:p-4"><Photo src={MEDIA.coachBefore} label="Coach Kutaal's CRPF service background" className="aspect-video w-full rounded-2xl object-contain" /><p className="mt-4 text-center text-base font-bold sm:mt-5">A proud service journey</p></div>
          <div className="overflow-hidden rounded-3xl border border-mist/70 bg-white p-3 shadow-[0_12px_36px_rgba(37,38,50,0.08)] sm:p-4"><Photo src={MEDIA.coachAfter} label="Coach Kutaal's 14 kilogram transformation" className="aspect-video w-full rounded-2xl object-contain" /><p className="mt-4 text-center text-base font-bold grad-text sm:mt-5">My 14 kg transformation</p></div>
        </div>
      </section>
    )}
    </>
  );
};

export default BeforeAfter;
