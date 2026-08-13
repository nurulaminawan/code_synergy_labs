export const site = {
  name: "Code Synergy Labs",
  domain: "codesynergylabs.com",
  url: "https://codesynergylabs.com",
  email: "info@codesynergylabs.com",
  founderEmail: "waheed@codesynergylabs.com",
  phones: [
    { label: "Lahore", href: "tel:+923464323984", display: "+92 346 4323984" },
    { label: "Support", href: "tel:+923314054066", display: "+92 331 4054066" },
  ],
  whatsapp: "https://wa.me/923464323984",
  founder: "Dr. Waheed Aftab Khan",
  city: "Lahore, Pakistan",
  locations: [
    {
      city: "Manchester, UK",
      desc: "United Kingdom",
      mapSrc:
        "https://www.openstreetmap.org/export/embed.html?bbox=-2.280%2C53.460%2C-2.200%2C53.500&layer=mapnik",
    },
    {
      city: "Dubai, UAE",
      desc: "404-F 5, Frij Al Marrar Building, Al Mararr, Dubai, United Arab Emirates",
      mapSrc:
        "https://www.openstreetmap.org/export/embed.html?bbox=55.298%2C25.270%2C55.312%2C25.282&layer=mapnik",
    },
    {
      city: "Centreville, VA, USA",
      desc: "14205 Heritage Crossing Ln, Centreville, VA 20120",
      mapSrc:
        "https://www.openstreetmap.org/export/embed.html?bbox=-77.445%2C38.835%2C-77.420%2C38.852&layer=mapnik",
    },
    {
      city: "Syed Muratab Ali Road, Gulberg",
      desc: "Near Zahoor Elahi, Lahore, Pakistan",
      mapSrc:
        "https://www.openstreetmap.org/export/embed.html?bbox=74.343%2C31.516%2C74.359%2C31.526&layer=mapnik",
    },
    {
      city: "Jehangir Road, Canal Bank",
      desc: "Lahore, Pakistan",
      mapSrc:
        "https://www.openstreetmap.org/export/embed.html?bbox=74.325%2C31.500%2C74.345%2C31.515&layer=mapnik",
    },
  ],
};

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};
