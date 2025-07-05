import Image from "next/image";
import MainMenu from "./sections/main_menu";
import { Header } from "./sections/header";
import { WhyChooseUs } from "./sections/why_choose_us";
import { Services } from "./sections/services";
import { Reviews } from "./sections/reviews";
import { ContactForm } from "./sections/contact_form";
import { Footer } from "./sections/footer";

export default function Home() {
  return (
    <div className="">
      <MainMenu />
      {/* desktop ok */}
      <Header />
      {/* desktop ok */}
      <WhyChooseUs />
      {/* desktop ok */}
      <Services />
      {/* desktop ok */}
      <Reviews />
      <ContactForm />
      <Footer />
    </div>
  );
}
