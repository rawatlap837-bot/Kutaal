// EDIT ME: Coach photo/video, before-after photos, client results, testimonials. Put files in /public/images.

export const MEDIA = {
  coachPhoto: "", // e.g. "/images/coach.jpg"
  coachVideo: "", // e.g. "/videos/intro.mp4"
  coachBefore: "", // e.g. "/images/before.jpg"
  coachAfter: "", // e.g. "/images/after.jpg"
  clientResults: Array.from({ length: 23 }, (_, i) => ({
    img: `/images/client-result-${String(i + 1).padStart(2, "0")}.webp`,
  })),
  testimonials: [], // [{ name: "Rahul", text: "Real feedback…", img: "/images/r1.jpg" }]
};
