

const Heading = ({ tag, children, sub, dark = false }) => (
  <div className="mx-auto mb-10 max-w-2xl px-2 text-center sm:mb-12">
    {tag && <span className={`mb-3 inline-block rounded-full border px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] ${dark ? "border-white/15 bg-white/10 text-purple-200" : "border-purple/15 bg-white text-purple"}`}>{tag}</span>}
    <h2 className={`text-balance text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl ${dark ? "text-white" : "text-ink"}`}>{children}</h2>
    {sub && <p className={`mx-auto mt-4 max-w-xl text-sm leading-7 sm:text-base ${dark ? "text-white/70" : "text-ink/65"}`}>{sub}</p>}
  </div>
);

// Shows a real photo if provided. In dev only, shows a placeholder so you know where it goes.

export default Heading;
