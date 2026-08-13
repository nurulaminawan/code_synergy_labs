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
      city: "United Arab Emirates",
      desc: "Middle East",
      mapSrc:
        "https://www.openstreetmap.org/export/embed.html?bbox=55.250%2C25.185%2C55.320%2C25.235&layer=mapnik",
    },
    {
      city: "Virginia, USA",
      desc: "United States",
      mapSrc:
        "https://www.openstreetmap.org/export/embed.html?bbox=-77.250%2C38.850%2C-77.050%2C38.950&layer=mapnik",
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
