new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  navigationPosition: "left",
  navigationTooltips: [
    "AoiNoMagicia",
    "YOGSOTOTH",
    "AzureLilyth",
    "PetaniBiru",
  ],
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const chara = section.querySelector(".chara");
    const card = section.querySelector(".card");
    const tl = new TimelineMax({ delay: 0.2 });
    tl.fromTo(title, { y: "-50", opacity: 0 }, { y: "0", opacity: 1 });
    tl.fromTo(chara, 0.8, { x: "-10%", opacity: 0 }, { x: "0%", opacity: 1 });
    tl.fromTo(card, { opacity: 0 }, { opacity: 1 });
  },
});
