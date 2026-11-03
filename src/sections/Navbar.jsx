import Logo from "../components/Logo.jsx";

// SECTION: NAV. Edit the headings and text below. Photos, prices and contacts come from src/data/.
const Navbar = ({ onBook }) => {
  return (
    <>
    <header className="sticky top-0 z-40 border-b border-mist/60 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Logo />
        <nav className="hidden gap-8 text-sm font-semibold text-ink/70 md:flex">
          <a href="#services">Services</a><a href="#how">How It Works</a><a href="#faq">FAQ</a>
        </nav>
        <button onClick={onBook} className="btn-primary !px-5 !py-3">Book Call</button>
      </div>
    </header>
    </>
  );
};

export default Navbar;
