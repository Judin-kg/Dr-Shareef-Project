export const scrollReveal = (
  selector = ".reveal",
  options = {}
) => {
  const defaultOptions = {
    threshold: 0.15,
    root: null,
    rootMargin: "0px",
  };

  const config = { ...defaultOptions, ...options };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, config);

  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => observer.observe(el));
};
