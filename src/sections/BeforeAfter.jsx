import { MEDIA } from "../data/index.js";
import Heading from "../components/Heading.jsx";
import Photo from "../components/Photo.jsx";

// SECTION: 4. BEFORE / AFTER. Edit the headings and text below. Photos, prices and contacts come from src/data/.
const BeforeAfter = () => {
  return (
    <>
    {(MEDIA.coachBefore || MEDIA.coachAfter || import.meta.env.DEV) && (
      <section className="mx-auto max-w-4xl rounded-[2rem] bg-gradient-to-br from-lavender to-white px-4 py-16 sm:px-8">
        <Heading tag="Personal Transformation" sub="कोच की अपनी असली ट्रांसफॉर्मेशन जर्नी।">My Own <span className="grad-text">Journey</span></Heading>
        <div className="grid grid-cols-2 gap-4">
          <div><Photo src={MEDIA.coachBefore} label="before" className="aspect-[3/4] w-full" /><p className="mt-2 text-center font-bold">Before</p></div>
          <div><Photo src={MEDIA.coachAfter} label="after" className="aspect-[3/4] w-full" /><p className="mt-2 text-center font-bold grad-text">After</p></div>
        </div>
      </section>
    )}
    </>
  );
};

export default BeforeAfter;
