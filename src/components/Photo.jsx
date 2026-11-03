

const Photo = ({ src, label, className = "" }) =>
  src ? (
    <img src={src} alt={label} loading="lazy" className={`rounded-3xl object-cover ${className}`} />
  ) : import.meta.env.DEV ? (
    <div className={`grid place-items-center rounded-3xl border-2 border-dashed border-mist bg-lavender text-sm text-ink/50 ${className}`}>
      Add photo: {label}
    </div>
  ) : null;

export default Photo;
