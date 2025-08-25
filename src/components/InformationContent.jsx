import { motion } from "framer-motion";

const contentData = {
  About: {
    heading: "About Us",
    text: "We are a creative agency delivering timeless brands and digital experiences.",
    logos: ["/logo1.png", "/logo2.png"], // replace with your images
  },
  Team: {
    heading: "Our Team",
    text: "Our team consists of designers, developers, and strategists working collaboratively.",
    logos: ["/logo3.png", "/logo4.png"],
  },
  Process: {
    heading: "Our Process",
    text: "We follow a structured process from research to design to deployment.",
    logos: ["/logo5.png", "/logo6.png"],
  },
  Contact: {
    heading: "Contact Us",
    text: "Reach us at contact@noircase.com or call +123 456 7890.",
    logos: ["/logo7.png", "/logo8.png"],
  },
};

export default function InformationContent({ selected }) {
  if (!selected) return null;

  const { heading, text, logos } = contentData[selected];

  return (
    <motion.div
      key={selected}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6 text-center"
    >
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
      <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6">{text}</p>

      <div className="flex justify-center gap-6 flex-wrap">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`${selected} logo ${index + 1}`}
            className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain"
          />
        ))}
      </div>
    </motion.div>
  );
}
