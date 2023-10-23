// Locomotive
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// Shery JS

Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".onmous", { images: [".https://wallpaperaccess.com/full/16773.jpg","https://w0.peakpx.com/wallpaper/657/253/HD-wallpaper-native-american-cosplay-model-native-american-cosplay.jpg"] });

// GSAP
gsap.from(".navlink", {
  stagger: 0.2,
  y: 20,
  duration: 2,
  ease: Power2,
  opacity: 0,
});

// Shery JS
Shery.textAnimate(".title h1", {
  style: 2,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

// GSAP
gsap.from(".anem", {
  y: 50,
  stagger: 0.2,
  eaase: Expo,
  duration: 1,
  opacity: 1,
});

// Shery JS
Shery.imageEffect([".imgIne", "#images img"], {
  style: 3,
  config: {
    uFrequencyX: { value: 12, range: [0, 100] },
    uFrequencyY: { value: 5.79, range: [0, 100] },
    uFrequencyZ: { value: 10, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 1 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.6666666666666666 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.1, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 0 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
    uColor: { value: true },
    uSpeed: { value: 0.1, range: [0.1, 1], rangep: [1, 10] },
    uAmplitude: { value: 1.5, range: [0, 5] },
    uFrequency: { value: 3.5, range: [0, 10] },
  },
});
Shery.imageEffect(["#imageTwe"], {
  style: 3,
  config: {
    uFrequencyX: { value: 15.7, range: [0, 100] },
    uFrequencyY: { value: 14.05, range: [0, 100] },
    uFrequencyZ: { value: 22.31, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 12.98 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.8 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.13, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 0 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
    uColor: { value: true },
    uSpeed: { value: 1.07, range: [0.1, 1], rangep: [1, 10] },
    uAmplitude: { value: 0.79, range: [0, 5] },
    uFrequency: { value: 1.82, range: [0, 10] },
  },
});

// GSAP

gsap.from(["#imageTwe", "#images img"], {
  z: 3,
  opacity: 0,
  duration: 2,
  ease: Expo,
});

gsap.from([".imgIne"], {
  z: 1,
  opacity: 0,
  duration: 2,
  ease: Expo,
});

// Shery JS
Shery.imageEffect("#bgimg", {
  style: 4,
  config: {
    uColor: { value: false },
    uSpeed: { value: 0.6, range: [0.1, 1], rangep: [1, 10] },
    uAmplitude: { value: 1.5, range: [0, 5] },
    uFrequency: { value: 3.5, range: [0, 10] },
    geoVertex: { range: [1, 64], value: 32 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.0974054364902424 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 36 } },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  gooey: true,
});

document.getElementById("futureBtn").addEventListener("mouseover", () => {
  gsap.to("#footer video", {
    opacity: 1,
    duration: 1.5,
    ease: Power4,
  });
});

document.getElementById("futureBtn").addEventListener("mouseleave", () => {
  gsap.to("#footer video", {
    opacity: 0,
    duration: 1.5,
    ease: Power4,
  });
});
