import { motion } from "framer-motion";

const contentData = {
  About: {
    heading: "about",
    text: "Creativity meets strategy. We don't just design—we build scalable brand systems that help businesses grow with purpose. Our approach blends design thinking, user experience, and storytelling to give your brand a voice that resonates.",
    logos: ["/images/meta-color.png", "/images/microsoft.png"], // replace with your client logos
  },
  Team: {
    heading: "Team",
    text: "Our team consists of designers, developers, and strategists working collaboratively.",
    logos: ["/images/meta-color.png", "/images/microsoft.png"],
  },
  Process: {
    heading: "Process",
    text: "We follow a structured process from research to design to deployment.",
    logos: ["/images/meta-color.png", "/images/microsoft.png"],
  },
  Contact: {
    heading: "Contact Us",
    text: "Reach us at contact@noircase.com or call +123 456 7890.",
    logos: ["/images/meta-color.png", "/images/microsoft.png"],
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
  className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6 text-left"
>
  <h1 className="text-gray-400 text-[50px] sm:text-[50px] md:text-[50px] font-bold mb-4"><span className="text-white">NoirCase </span>{heading} </h1>
  <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6">{text}</p>

  <h1 className="text-white text-[50px] sm:text-[50px] md:text-[50px] font-semibold mb-4">
    Our <span className="text-gray-400">Clients</span>
  </h1>
  <div className="flex justify-start gap-6 flex-wrap">
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
