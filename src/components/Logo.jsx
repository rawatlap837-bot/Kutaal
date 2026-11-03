import { BRAND } from "../data/index.js";

// Logo + brand name used in the navbar and footer. Change the logo file in data/brand.js.
const Logo = ({ h = "h-16 md:h-[4.5rem]" }) => (
  <a href="#top" className="flex h-16 w-36 shrink-0 items-center justify-start sm:w-40 md:h-[4.5rem] md:w-52" aria-label={`${BRAND.name} — home`}>
    <img src={BRAND.logo} alt={BRAND.name} className={`${h} w-full object-contain object-left`} />
  </a>
);

export default Logo;
