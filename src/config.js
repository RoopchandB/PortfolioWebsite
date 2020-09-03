module.exports = {
  siteTitle: "Roopchand Bharamgouda | Software Engineer",
  siteDescription:
    "Roopchand is a software engineer based in Dublin, Ireland who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.",
  siteKeywords:
    "Roopchand Bharamgouda, Roopchand, Bharamgouda, RoopchandB, software engineer, front-end engineer, web developer, javascript, dublin business school",
  siteUrl: "https://roopchandbharamgouda.com",
  siteLanguage: "en_US",
  googleAnalyticsID: "UA-45666519-2",
  googleVerification: "DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk",
  name: "Roopchand Bharamgouda",
  location: "Dublin, Ireland",
  email: "roop5627@outlook.com",
  github: "https://github.com/RoopchandB",
  twitterHandle: "@ROOP5627",
  socialMedia: [
    {
      name: "GitHub",
      url: "https://github.com/RoopchandB",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/roopchand-bharamgouda-8a533b15a/",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/roopchandbharamgouda/",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/ROOP5627",
    },
  ],

  navLinks: [
    {
      name: "About",
      url: "/#about",
    },
    {
      name: "Experience",
      url: "/#jobs",
    },
    {
      name: "Work",
      url: "/#projects",
    },
    {
      name: "Contact",
      url: "/#contact",
    },
  ],

  navHeight: 100,

  colors: {
    green: "#64ffda",
    navy: "#0a192f",
    darkNavy: "#020c1b",
  },

  srConfig: (delay = 200) => ({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
}
