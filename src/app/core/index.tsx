export const clientInfo = {
  email: "rosetopservice22@gmail.com",
  phone: "+17865234822",
  clientHandler: "rose_cleaning_service",
  solution: "landing-page",
  socialNetworks: {
    instagram:
      "https://www.instagram.com/rose.top.cleaning?utm_source=qr&igsh=MWVjdjAzcDZpbGVyMw==",
  },
};

export const menuConfig = [
  {
    title: "Home",
    id: "header",
  },
  {
    title: "Why Choose Us",
    id: "whychooseus",
  },
  {
    title: "Our Services",
    id: "ourservices",
  },
];

export const headerText = {
  label: "best in miami",
  title: (
    <h1 className="font-sans text-textcolor text-[36px] md:text-[24px] lg:text-[36px] xl:text-[64px] font-semibold leading-[45px] md:leading-[30px] lg:leading-[45px] xl:leading-[67px]">
      Professional <br />
      <span className="font-sansSerif italic">Cleaning Service</span> <br />
      for your home <br />
      and office
    </h1>
  ),
  description:
    "We specialize in comprehensive cleaning solutions for both residential and commercial spaces, ensuring spotless and healthy environments.",
  buttonText: "Get Started",
};

export const whyChooseUsData = {
  label: "why choose Us",
  title: (
    <h1 className="font-sans text-textcolor text-[36px] md:text-[24px] lg:text-[36px] xl:text-[64px] font-semibold leading-[45px] md:leading-[30px] lg:leading-[45px] xl:leading-[67px]">
      Why clients love <br />
      our
      <span className="ml-[10px] lg:ml-[15px] font-sansSerif italic">
        Cleaning Service
      </span>{" "}
      <br />
    </h1>
  ),
  description:
    "We deliver top-quality cleaning services, tailored to your needs, with a focus on reliability, professionalism, and attention to detail.",
  features: [
    {
      icon: <img src="assets/why_choose_us/experience.svg" alt="" />,
      title: "Experienced & Reliable",
    },
    {
      icon: <img src="assets/why_choose_us/calendar.svg" alt="" />,
      title: "Flexible Scheduling",
    },
    {
      icon: <img src="assets/why_choose_us/eco.svg" alt="" />,
      title: "Eco-Friendly Products",
    },
    {
      icon: <img src="assets/why_choose_us/pricing.svg" alt="" />,
      title: "Transparent Pricing",
    },
  ],
  buttonText: "Give Us a Call",
};

export const servicesData = {
  label: "Our Services",
  title: (
    <h1 className="text-left font-sans text-textcolor text-[36px] md:text-[24px] lg:text-[36px] xl:text-[64px] font-semibold leading-[45px] md:leading-[30px] lg:leading-[45px] xl:leading-[67px]">
      One-Stop
      <span className="ml-[10px] font-sansSerif italic">
        Cleaning Solutions
      </span>
    </h1>
  ),
  description:
    "We offer top-quality cleaning services tailored to your needs, with a focus on reliability, professionalism, and attention to detail.",
  servicesItems: [
    {
      imgUrl: "/assets/services/airbnb.png",
      bgColor: "#ff5a5f",
      icon: "/assets/services/airbnb.svg",
      title: "Airbnb Cleaning",
      description:
        "Impress your guests with a spotless and welcoming space. We provide fast and thorough cleaning services for short-term rentals.",
      actions: [
        "Full property deep cleaning (bedrooms, bathrooms, kitchen)",
        "Bed linen and towel replacement",
        "High-touch surface disinfection (tables, handles, switches)",
      ],
    },
    {
      imgUrl: "/assets/services/home.jpg",
      bgColor: "#0f7cea",
      icon: "/assets/services/home.svg",
      title: "Home Cleaning",
      description:
        "Keep your home spotless with our deep and regular cleaning services, ensuring a fresh and healthy environment for you and your family.",
      actions: [
        "Deep cleaning of bedrooms, living rooms, and kitchens",
        "Bathroom disinfection (sink, toilet, shower)",
        "Carpet and upholstery vacuuming",
      ],
    },
    {
      imgUrl: "/assets/services/commercial.png",
      bgColor: "#0f7cea",
      icon: "/assets/services/commercial.svg",
      title: "Commercial and Residential Cleaning",
      description:
        "Maintain a professional and hygienic workspace with our tailored cleaning services for offices, stores, and other business establishments.",
      actions: [
        "Office and workspace cleaning (desks, electronics, floors)",
        "Bathroom and common area sanitization",
        "High-touch surface disinfection (handles, switches)",
      ],
    },
    {
      imgUrl: "/assets/services/moving.png",
      bgColor: "#0f7cea",
      icon: "/assets/services/moving.svg",
      title: "Moving in/on Cleaning",
      description:
        "Make moving stress-free with our deep cleaning services before or after a relocation, ensuring your old or new space is pristine.",
      actions: [
        "Bathroom and kitchen disinfection",
        "Deep cleaning of all rooms, including floors and windows",
        "Appliance and cabinet cleaning",
      ],
    },
    {
      imgUrl: "/assets/services/pressureCleaning.jpg",
      bgColor: "#0f7cea",
      icon: "/assets/services/pressureCleaning.svg",
      title: "Pressure Cleaning",
      description:
        "Revitalize your property with our professional pressure cleaning services, removing dirt, grime, and stains to restore your surfaces to their original shine.",
      actions: [
        "Thorough cleaning of windows and doors to remove dirt and stains",
        "Pressure washing of driveways and walkways for a fresh, clean look",
        "Deep cleaning of pool areas, including tiles and surrounding surfaces",
      ],
    },
  ],
  footerText: "You need a customer service?",
  footerButtonText: "Lets Talk",
};
