import { BRAND } from "../data/index.js";
import Heading from "../components/Heading.jsx";

// SECTION: 3. COACH. Edit the headings and text below. Photos, prices and contacts come from src/data/.
const Coach = ({ onBook }) => {
  return (
    <>
    <section className="bg-ink py-16 text-white sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
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
