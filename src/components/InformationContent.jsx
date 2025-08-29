import { motion } from "framer-motion";

const contentData = {
  About: {
    heading: "about",
    text: "Creativity meets strategy. We don't just design—we build scalable brand systems that help businesses grow with purpose. Our approach blends design thinking, user experience, and storytelling to give your brand a voice that resonates.",
    logos: ["/logo1.png", "/logo2.png"], // replace with your client logos
  },
  Team: {
    heading: "Team",
    text: "Our team consists of designers, developers, and strategists working collaboratively.",
    logos: ["/logo3.png", "/logo4.png"],
  },
  Process: {
    heading: "Process",
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

  // ✅ add fallback: logos = []
  const { heading, text, logos, newTeamLogos = [], heading2, heading3, heading4, 
    igh1, igh2, igh3, igh4, igs1, igs2, igs3, igs4, th1, th2, th3, th4,
    psh1, psh2, psh3, psh4, psh5, psh6

  } = contentData[selected];
const steps = [
    {
      number: "01",
      title: "Discovery & Research",
      description:
        "We dive deep into your industry, audience, and goals conducting workshops, market analysis, and stakeholder interviews.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "We develop a strategic roadmap and creative concept that aligns with your vision, ensuring every decision is purposeful.",
    },
    {
      number: "03",
      title: "Design & Production",
      description:
        "Our in-house team executes design, development, and production maintaining quality control and cohesive brand expression across all channels.",
    },
    {
      number: "04",
      title: "Review & Refine",
      description:
        "Through iterative feedback sessions, we refine deliverables until they exceed expectations, ensuring the final product is polished and precise.",
    },
    {
      number: "05",
      title: "Launch & Support",
      description:
        "We help you roll out campaigns or products, monitor performance, and provide ongoing support to ensure sustained success.",
    },
  ];

  return (
    <motion.div
      key={selected}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6 text-left"
    >
      <h1 className="text-gray-400 text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
        <span className="text-white">NoirCase </span>
        {heading}
      </h1>

      {text && (
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6">
          {text}
        </p>
      )}

      {/* Only show heading2 + heading3 if they exist */}
      {heading2 && heading3 && (
        <div className="mb-6">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            {heading2} <span className="text-gray-400">{heading3}</span>
          </h1>

          {selected === "About" && (
            <ul className="text-gray-300 text-sm sm:text-base md:text-lg space-y-4">
              <li className="relative pl-6">
                <span className="absolute left-0 text-white">•</span>
                Noir Case was born out of a passion for simplifying the complex.
                Naseer Ud Din Ansari, a Creative Director with over a decade of
                experience, envisioned a studio where the owners themselves
                create and lead every project. In 2020, he established Noir Case
                in Islamabad, assembling a team of practicing designers,
                developers, and strategists each dedicated to pushing creative
                boundaries while maintaining rigorous strategic discipline.
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 text-white">•</span>
                Over the years, we’ve partnered with startups and Fortune 100+
                companies alike, building brands that stand apart in crowded
                markets. Our portfolio ranges from revitalising heritage sites
                to launching entirely new digital experiences.
              </li>
            </ul>
          )}
        </div>
      )}

      {/* Only show heading2 + heading4 if they exist */}
      {heading2 && heading4 && (
        <div className="mb-6">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            {heading2} <span className="text-gray-400">{heading4}</span>
          </h1>

          {selected === "About" && (
            <ul className="text-gray-300 text-sm sm:text-base md:text-lg space-y-4">
              <li className="relative pl-6">
                <span className="absolute left-0 text-white">•</span>
                <span className="font-bold">Clarity Through Creativity</span>{" "}
                Every brief begins with a question: “What is the simplest way to
                reveal this idea’s essence?” We believe true innovation lives at
                the intersection of strategic rigor and imaginative vision.
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 text-white">•</span>
                <span className="font-bold">Owner-Driven Excellence</span> The
                founders and principal creatives are directly involved in every
                phase, guaranteeing personal commitment, faster decision making,
                and uncompromising quality.
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 text-white">•</span>
                <span className="font-bold">Collaborative Partnership</span> We
                partner deeply with clients, treating every project as a shared
                journey. From discovery to delivery, transparent communication
                and mutual trust guide our work.
              </li>
            </ul>
          )}
        </div>
      )}


      
{/* Contact Us*/}
{heading && heading && (
  <div className="mb-6">

    {selected === "Contact" && (
      <div className="flex flex-col md:flex-row gap-6 text-gray-300 text-sm sm:text-base md:text-lg">
        {/* Clarity Through Creativity */}
        <div className="flex-1">
          <span className="font-bold">Islamabad, Pakistan:</span>
          <p className="mt-1">
          <ul>
           <li>+92 333 3653 273</li> 
            <li>hello@noircase.com</li>
            <li>noircase.com</li>
            <li>508 Al-Mustfa Tower,Islamabad</li>
          </ul>
          </p>
        </div>

        {/* Collaborative Partnership */}
        <div className="flex-1">
          <span className="font-bold">London,UK:</span>
          <p className="mt-1">
            <ul>
           <li>+44 7770 384010</li> 
            <li>hello@noircase.com</li>
            <li>noircase.com</li>
            <li>2 Gresham Road, Uxbridge</li>
           </ul>
          </p>
        </div>
      </div>
    )}
  </div>
)}

{/* Process */}
{heading && (
  <div className="mb-6">
    <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
      {psh1} <span className="text-gray-400">{psh2}</span>
    </h1>

    {selected === "Process" && (
  <div className="flex flex-col gap-6 text-gray-300">
    {/* First Row - 4 Columns */}
    <div className="flex flex-col md:flex-row gap-6">
      {/* Column 1 */}
      <div className="flex-1">
        <h3 className="font-bold text-white text-[26px] mb-2">Branding & Identity</h3>
        <ul className="list-disc pl-5 space-y-1 text-[12px]">
          <li>Brand Strategy & Research</li>
          <li>Visual Identity Systems</li>
          <li>Emotional Branding & Storytelling</li>
          <li>Rebranding & Refresh</li>
          <li>Brand Architecture</li>
        </ul>
      </div>

      {/* Column 2 */}
      <div className="flex-1">
        <h3 className="font-bold text-white text-[26px] mb-2">Digital Strategy & Development</h3>
        <ul className="list-disc pl-5 space-y-1 text-[12px]">
          <li>Digital Roadmaps</li>
          <li>Website Design & Development</li>
          <li>App Design & Development</li>
          <li>UX/UI Design</li>
          <li>Digital Transformation</li>
          <li>Analytics & Conversion Optimisation</li>
        </ul>
      </div>

      {/* Column 3 */}
      <div className="flex-1">
        <h3 className="font-bold text-white text-[26px] mb-2">Marketing Strategy</h3>
        <ul className="list-disc pl-5 space-y-1 text-[12px]">
          <li>Content Strategy & Copywriting</li>
          <li>Social Media Management</li>
          <li>SEO & Search Marketing</li>
          <li>Email Marketing & Automation</li>
          <li>Influencer & Partnership</li>
          <li>Marketing</li>
        </ul>
      </div>

      {/* Column 4 */}
      <div className="flex-1">
        <h3 className="font-bold text-white text-[26px] mb-2">3D & Motion Design</h3>
        <ul className="list-disc pl-5 space-y-1 text-[12px]">
          <li>3D Walkthroughs & Animations</li>
          <li>Teasers & Promos</li>
          <li>Brand Films & Long-Form Videos</li>
          <li>Shorts & Reels</li>
        </ul>
      </div>
    </div>

    {/* Second Row - 3 Columns */}
    <div className="flex flex-col md:flex-row gap-6">
      {/* Column 5 */}
      <div className="flex-1">
        <h3 className="font-bold text-white text-[26px] mb-2">Print & Environmental Design</h3>
        <ul className="list-disc pl-5 space-y-1 text-[12px]">
          <li>Packaging & Collateral</li>
          <li>Signage & Wayfinding</li>
          <li>Exhibition & Installations</li>
          </ul>
      </div>

      {/* Column 6 */}
      <div className="flex-1">
        <h3 className="font-bold text-white text-[26px] mb-2">Interior & Exterior Design</h3>
        <ul className="list-disc pl-5 space-y-1 text-[12px]">
          <li>Residential & Commercial Interiors</li>
          <li>Exterior & Façade Design</li>
          <li>Space Planning & Styling</li>
        </ul>
      </div>

      {/* Column 7 */}
      <div className="flex-1">
        <h3 className="font-bold text-white text-[26px] mb-2">AI-Generative Creative Solutions</h3>
        <ul className="list-disc pl-5 space-y-1 text-[12px]">
          <li>AI-Driven Concept Ideation</li>
          <li>Generative Design</li>
          <li>AI Copywriting & Content Generation</li>
          <li>Chatbot & Voice Assistant Development</li>
          <li>Personalised Marketing Campaigns</li>
          <li>AI-Powered Analytics & Reporting</li>
        </ul>
      </div>
    </div>
  
<div className="mb-6">
  <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 ">
    {psh3} <span className="text-gray-400">{psh6}</span>
  </h1>

  <div className="bg-black text-white px-3 py-8">
    <div className="space-y-8 max-w-4xl mx-auto">
      {steps.map((step, index) => (
        <div key={index} className="flex gap-2 items-start">
          {/* Step Number */}
          <span className="text-white-400 text-[26px] font-semibold w-10">
            {step.number}
          </span>

          {/* Content */}
          <div>
            <h3 className="text-[26px] font-bold mb-2">{step.title}</h3>
            <p className="text-[16px] text-gray-300 leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
<div className="mb-6">
    <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 ">
      {psh4}<span className="text-gray-400">{psh5}</span>
    </h1>
</div>

<div className="flex flex-col gap-6 text-gray-300">
    {/* First Row - 4 Columns */}
    <div className="flex flex-col md:flex-row gap-6">
      {/* Column 1 */}
      <div className="flex-1">
        <h3 className="font-bold text-white text-[26px] mb-2">2020-2021</h3>
        <ul className="pl-1 space-y-1 text-[16px]">
          <li>Noir Case founded in Islamabad, establishing core branding and digital design services.</li>
        </ul>
      </div>

      {/* Column 2 */}
      <div className="flex-1">
        <h3 className="font-bold text-white text-[26px] mb-2">2022</h3>
        <ul className="pl-1 space-y-1 text-[16px]">
          <li>Expanded operations with a dedicated creative studio space and launched the official Noir Case website.</li>
        </ul>
      </div>

      {/* Column 3 */}
      <div className="flex-1">
        <h3 className="font-bold text-white text-[26px] mb-2">2023</h3>
        <ul className="pl-1 space-y-1 text-[16px]">
          <li>Broadened service offerings to include 3D visualisation and motion design, doubling the in-house team.</li>
        </ul>
      </div>

      {/* Column 4 */}
      <div className="flex-1">
        <h3 className="font-bold text-white text-[22px] mb-2">2024-2025</h3>
        <ul className="pl-1 space-y-1 text-[16px]">
          <li>Integrated AI driven design workflows and launched full spectrum AI creative services, leading to significant growth indigital reach and client engagement.</li>
        </ul>
      </div>
    </div>

  </div>

  </div>
  
)}
  </div>
)}



          {/* Existing Team Logos */}
<h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            {th1} <span className="text-gray-400">{th2}</span>
          </h1>
<div className="flex flex-wrap justify-center items-center gap-10 mt-10">
  
  {logos?.map((logo, index) => {
    const logoHeadings = [igh1, igh2, igh3, igh4];
    const logoSubHeading = [igs1, igs2, igs3, igs4];

    return (
      <div key={index} className="flex flex-col items-center max-w-[140px] sm:max-w-[160px] md:max-w-[180px]">
        <img
          src={logo}
          alt={`Logo ${index + 1}`}
          className="w-40 h-40 object-contain mb-2"
        />
        <h1 className="text-white text-[26px] font-bold text-center">
          {logoHeadings[index] || `Logo ${index + 1}`}
        </h1>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg font-medium text-center">
          {logoSubHeading[index] || ""}
        </p>
      </div>
    );
  })}
</div>
<br></br>
<br />
 <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            {th3} <span className="text-gray-400">{th4}</span>
          </h1>
       
{/* New Team Logos Section */}
<div className="flex flex-wrap justify-center items-center gap-20 mt-5">
  {newTeamLogos?.map((logo, index) => {
    const newLogoHeadings = ["ArcQuility", "Hannah Duke", "Gray Area"]; // replace with real names
    const newLogoSubHeadings = ["Provides IT and digital<br /> transformation expertise (UK) <br />Additional info",
  "Tax & Accounting (UK)<br />Additional info",
  "Business Consultancy<br /> partner Extra info"]; // replace with roles

    return (
      <div key={index} className="flex flex-col items-center max-w-[140px] sm:max-w-[160px] md:max-w-[180px]">
        <img
          src={logo}
          alt={`New Logo ${index + 1}`}
          className="w-40 h-40 object-contain mb-2"
        />
        <h1 className="text-white text-[26px] font-bold text-center">
          {newLogoHeadings[index] || `New Logo ${index + 1}`}
        </h1>
        <p
  className="text-gray-300 text-[16px] text-center"
  dangerouslySetInnerHTML={{ __html: newLogoSubHeadings[index] || "" }}
/>
      </div>
    );
  })}
</div>

    </motion.div>
  );
}
