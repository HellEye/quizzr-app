const makeColor = (hue, saturation, lightness) => {
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
const make = {
  hue: (saturation, lightness, min, max, steps = 10) => {
    const step = (max - min) / steps;
    const hues = {};
    for (let i = 0; i < steps; i++) {
      hues[((1000 / steps) * i).toString()] = makeColor(
        min + i * step,
        saturation,
        lightness
      );
    }
    return hues;
  },
  saturation: (hue, lightness, min, max, steps = 10) => {
    const step = (max - min) / steps;
    const saturations = {};
    for (let i = 0; i < steps; i++) {
      saturations[((1000 / steps) * i).toString()] = makeColor(
        hue,
        min + i * step,
        lightness
      );
    }
    return saturations;
  },
  lightness: (hue, saturation, min, max, steps = 10) => {
    const step = (max - min) / steps;
    const light = {};
    for (let i = 0; i < steps; i++) {
      light[((1000 / steps) * i).toString()] = makeColor(
        hue,
        saturation,
        min + i * step
      );
    }
    return light;
  },
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        bg: make.lightness(226, 2, 3, 30),
        bgColor: make.lightness(226, 20, 3, 30),
        text: make.lightness(226, 4, 80, 50),
        accent: make.lightness(226, 100, 70, 30),
      },
      boxShadow: {
        "0sm": "0 0 4px 2px rgba(0, 0, 0, 0.3)",
        "0md": "0 0 8px 4px rgba(0, 0, 0, 0.3)",
        "0lg": "0 0 16px 8px rgba(0, 0, 0, 0.3)",
        "0xl": "0 0 32px 16px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
