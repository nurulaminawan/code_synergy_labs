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
