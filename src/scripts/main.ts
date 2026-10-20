// Age gate: remembered per browser; storage may be unavailable (private mode)
const AGE_KEY = "mm-age-ok";
const gate = document.getElementById("age-gate");
let ageOk = false;
try {
  ageOk = localStorage.getItem(AGE_KEY) === "1";
} catch {}
if (gate && !ageOk) {
  gate.hidden = false;
  document.body.classList.add("locked");
  gate.addEventListener("click", (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLElement>("[data-age]");
    if (!btn) return;
    if (btn.dataset.age === "yes") {
      try {
        localStorage.setItem(AGE_KEY, "1");
      } catch {}
      gate.hidden = true;
      document.body.classList.remove("locked");
    } else {
      const msg = gate.querySelector("p")!;
      msg.textContent = "Beklager – du skal være fyldt 18 år for at besøge siden.";
      msg.classList.add("age-denied");
      gate.querySelector(".age-actions")?.remove();
    }
  });
}

// Header background once scrolled past the top
const header = document.querySelector<HTMLElement>(".site-header")!;
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Mobile menu
const toggle = header.querySelector<HTMLButtonElement>(".nav-toggle")!;
toggle.addEventListener("click", () => {
  const open = header.classList.toggle("nav-open");
  toggle.setAttribute("aria-expanded", String(open));
});
header.querySelectorAll(".nav-links a").forEach((a) =>
  a.addEventListener("click", () => {
    header.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
  }),
);

// Product filter
const filters = document.querySelectorAll<HTMLButtonElement>(".filter");
filters.forEach((btn) =>
  btn.addEventListener("click", () => {
    filters.forEach((b) => b.classList.toggle("active", b === btn));
    const cat = btn.dataset.filter;
    document.querySelectorAll<HTMLElement>(".product").forEach((p) => {
      p.hidden = cat !== "all" && p.dataset.cat !== cat;
    });
  }),
);

// Reveal on scroll
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        io.unobserve(en.target);
      }
    }),
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
