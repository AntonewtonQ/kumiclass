import About from "@/components/common/about";
import Benefits from "@/components/common/benefits";
import Call from "@/components/common/call";
import Hero from "@/components/common/hero";
import How from "@/components/common/how";
import Testimonial from "@/components/common/testimonial";
import { redirect } from "next/navigation";

export default async function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Benefits />
      <How />
      <Testimonial />
      <Call />
    </div>
  );
}
