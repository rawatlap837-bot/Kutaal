import Logo from "../components/Logo.jsx";

// SECTION: NAV. Edit the headings and text below. Photos, prices and contacts come from src/data/.
const Navbar = ({ onBook }) => {
  return (
    <>
    <header className="sticky top-0 z-40 border-b border-mist/60 bg-white/90 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-0">
        <Logo />
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 text-base font-bold text-ink/80 md:flex lg:text-lg">
          <a href="#services">Services</a><a href="#how">How It Works</a><a href="#faq">FAQ</a>
        </nav>
        <button onClick={onBook} className="btn-primary !px-5 !py-3">Book Call</button>
      </div>
    </header>
    </>
  );
};

export default Navbar;
