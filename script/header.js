gsap.registerPlugin(ScrollTrigger);

const header = $("header")[0];
let lastDirection = 0;

ScrollTrigger.create({
  start: 0,
  end: "max",

  onUpdate: (self) => {
    const currentDirection = self.direction;

    if (self.scroll() === 0) {
      gsap.to(header, {
        y: "0%",
        duration: 0.6,
        ease: "power1.inout",
      });
      lastDirection = -1;
    } else if (currentDirection !== lastDirection) {
      if (currentDirection === 1) {
        gsap.to(header, {
          y: "-100%",
          duration: 0.6,
          ease: "power1.inout",
        });
      } else if (currentDirection === -1) {
        gsap.to(header, {
          y: "-0%",
          duration: 0.6,
          ease: "power1.inout",
        });
      }

      lastDirection = currentDirection;
    }
  },
});
