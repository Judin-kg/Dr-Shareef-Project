export const fadeIn = (
  direction = "up",
  type = "tween",
  delay = 0,
  duration = 0.8
) => {
  return {
    hidden: {
      opacity: 0,
      x:
        direction === "left"
          ? 60
          : direction === "right"
          ? -60
          : 0,
      y:
        direction === "up"
          ? 60
          : direction === "down"
          ? -60
          : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};
