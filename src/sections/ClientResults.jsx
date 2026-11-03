import { useEffect, useRef, useState } from "react";
import { MEDIA } from "../data/index.js";
import Heading from "../components/Heading.jsx";

const ClientResults = () => {
  const results = MEDIA.clientResults;
  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);
  const resumeTimer = useRef(null);
  const dragStart = useRef(null);
  const loopFrame = useRef(null);
  const autoScrolling = useRef(false);
  const [visibleCount, setVisibleCount] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches ? 5 : 1,
  );

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const update = () => setVisibleCount(query.matches ? 5 : 1);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => () => window.clearTimeout(resumeTimer.current), []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || paused) {
      cancelAnimationFrame(loopFrame.current);
      return undefined;
    }
    let last = performance.now();
    const loopWidth = track.scrollWidth / 2;
    const speed = loopWidth / 30;
    const advance = (now) => {
      const elapsed = Math.min(now - last, 40);
      last = now;
      autoScrolling.current = true;
      track.scrollLeft += (speed * elapsed) / 1000;
      const currentLoopWidth = track.scrollWidth / 2;
      if (currentLoopWidth > 0 && track.scrollLeft >= currentLoopWidth) track.scrollLeft -= currentLoopWidth;
      requestAnimationFrame(() => { autoScrolling.current = false; });
      loopFrame.current = requestAnimationFrame(advance);
    };
    loopFrame.current = requestAnimationFrame(advance);
    return () => cancelAnimationFrame(loopFrame.current);
  }, [paused, visibleCount, results.length]);

  const pauseAfterManualMove = () => {
    setPaused(true);
    window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => setPaused(false), 5000);
  };

  const handleManualScroll = () => {
    const track = trackRef.current;
    if (!track || autoScrolling.current) return;
    const loopWidth = track.scrollWidth / 2;
    if (loopWidth > 0 && track.scrollLeft >= loopWidth) track.scrollLeft -= loopWidth;
    pauseAfterManualMove();
  };

  return (
    <>
      {(results.length > 0 || import.meta.env.DEV) && (
        <section className="bg-lavender py-16">
          <div className="mx-auto max-w-7xl px-4">
            <Heading tag="Client Transformation Results">
              Real People. <span className="grad-text">Real Journeys.</span>
            </Heading>

            {results.length > 0 ? (
              <div
                className="client-results-viewport mx-auto w-full py-3"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => {
                  window.clearTimeout(resumeTimer.current);
                  setPaused(false);
                }}
                onFocusCapture={() => setPaused(true)}
                onBlurCapture={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
                }}
                onPointerDown={(event) => {
                  if (event.pointerType === "mouse") {
                    dragStart.current = { x: event.clientX, scrollLeft: trackRef.current?.scrollLeft ?? 0 };
                    event.currentTarget.setPointerCapture(event.pointerId);
                  }
                  pauseAfterManualMove();
                }}
                onPointerMove={(event) => {
                  if (dragStart.current && trackRef.current) {
                    trackRef.current.scrollLeft = dragStart.current.scrollLeft + dragStart.current.x - event.clientX;
                  }
                }}
                onPointerUp={(event) => {
                  if (dragStart.current === null) return;
                  dragStart.current = null;
                  pauseAfterManualMove();
                }}
                onPointerCancel={() => { dragStart.current = null; }}
                aria-roledescription="carousel"
                aria-label="Automatically scrolling client transformation results"
              >
                <div
                  ref={trackRef}
                  className="client-results-track flex w-full gap-4 overflow-x-auto"
                  style={{ "--card-count": visibleCount }}
                  onWheel={(event) => {
                    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) pauseAfterManualMove();
                  }}
                  onScroll={handleManualScroll}
                >
                  {[...results, ...results].map((result, index) => (
                    <figure
                      key={`${result.img}-${index}`}
                      className="client-results-card shrink-0"
                    >
                      <div className="overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(37,38,50,0.12)] ring-1 ring-ink/5">
                        <img
                          src={result.img}
                          alt={result.caption || `Client transformation result ${(index % results.length) + 1}`}
                          className="client-results-image block h-auto w-full object-contain"
                          loading={index < visibleCount + 1 ? "eager" : "lazy"}
                        />
                      </div>
                      {result.caption && (
                        <figcaption className="mt-2 text-center text-xs font-semibold">
                          {result.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mx-auto grid max-w-4xl place-items-center rounded-2xl border-2 border-dashed border-mist bg-white/60 p-12 text-center text-sm text-ink/50">
                Add client result photos in the media settings.
              </div>
            )}

            <p className="mt-6 text-center text-xs text-ink/50">
              Results vary from person to person and are not typical.
            </p>
          </div>
          <style>{`
            .client-results-image {
              max-height: 78vh;
            }
            .client-results-track {
              scrollbar-width: none;
              scroll-behavior: auto;
              /* Keep vertical page scrolling available when a gesture starts on a card. */
              touch-action: pan-y;
              cursor: grab;
              overscroll-behavior-x: contain;
              padding: 0.5rem 0.25rem 1rem;
            }
            .client-results-track:active { cursor: grabbing; }
            .client-results-track::-webkit-scrollbar { display: none; }
            .client-results-card {
              width: calc(100vw - 2rem);
            }
            .client-results-card > div {
              transition: transform 220ms ease, box-shadow 220ms ease;
            }
            @media (hover: hover) {
              .client-results-card:hover > div {
                transform: translateY(-3px);
                box-shadow: 0 16px 38px rgba(37, 38, 50, 0.16);
              }
            }
            @media (min-width: 768px) {
              .client-results-viewport {
                max-width: 100%;
              }
              .client-results-card {
                width: calc((min(100vw - 2rem, 1280px) - 4rem) / 5);
              }
              .client-results-image {
                max-height: 55vh;
              }
            }
          `}</style>
        </section>
      )}
    </>
  );
};

export default ClientResults;
