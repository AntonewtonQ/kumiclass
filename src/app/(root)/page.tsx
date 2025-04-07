import About from "@/components/common/about";
import Benefits from "@/components/common/benefits";
import Call from "@/components/common/call";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Hero from "@/components/common/hero";
import How from "@/components/common/how";
import Testimonial from "@/components/common/testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Benefits />
      <How />
      <Testimonial />
      <Call />
      <Footer />
    </div>
  );
}
