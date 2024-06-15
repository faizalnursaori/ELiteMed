import { AboutTeam } from "@/components/AboutTeam";
import { AboutUsSection } from "@/components/AboutUsSection";
import { CultureSection } from "@/components/CultureSection";

export const metadata = {
  title: "About Us | Elite Med",
};

export default function AboutUs() {
  return (
    <>
      <AboutUsSection />
      <CultureSection />
      <AboutTeam />
    </>
  );
}
