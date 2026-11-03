import { BRAND, MEDIA } from "../data/index.js";
import Heading from "../components/Heading.jsx";
import Photo from "../components/Photo.jsx";

// SECTION: 3. COACH. Edit the headings and text below. Photos, prices and contacts come from src/data/.
const Coach = ({ onBook }) => {
  return (
    <>
    <section className="bg-[#111218] py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <div>
          {MEDIA.coachVideo ? (
            <video src={MEDIA.coachVideo} controls playsInline preload="metadata" poster={MEDIA.coachPhoto} className="w-full rounded-3xl shadow-xl" />
          ) : (
            <Photo src={MEDIA.coachPhoto} label="coach photo / intro video" className="aspect-video w-full" />
          )}
        </div>
        <div>
          <Heading dark tag="Meet Your Coach">Hi, I'm <span className="grad-text">Kutaal</span></Heading>
          <p className="-mt-4 text-white/75">मेरा मकसद है आपको सही जानकारी और पर्सनल गाइडेंस देना, ताकि आप अपनी फिटनेस और लाइफस्टाइल को सही दिशा में ले जा सकें। {BRAND.mission}</p>
          <button onClick={onBook} className="btn-primary mt-6">BOOK YOUR 1:1 CALL</button>
        </div>
      </div>
    </section>
    </>
  );
};

export default Coach;
