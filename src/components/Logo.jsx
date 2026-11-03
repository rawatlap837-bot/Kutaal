import { BRAND } from "../data/index.js";

// Logo + brand name used in the navbar and footer. Change the logo file in data/brand.js.
const Logo = ({ h = "h-10" }) => (
  <a href="#top" className="flex items-center gap-2 font-extrabold">
    <img src={BRAND.logo} alt={BRAND.name} className={`${h} w-auto rounded-lg`} onError={(e) => (e.currentTarget.style.display = "none")} />
    <span className="text-sm leading-tight">Kutaal <span className="grad-text">Mission Fit Bharat</span></span>
  </a>
);

export default Logo;
