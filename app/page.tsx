import Hero from "../components/sections/Hero";
import StackShowcase from "../components/sections/StackShowcase";
import Timeline from "../components/sections/Timeline";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";

export default function Page() {
  return (
    <div className="space-y-24 pb-24">
      <Hero />
      <StackShowcase />
      <Timeline />
      <Testimonials />
      <CTA />
    </div>
  );
}
