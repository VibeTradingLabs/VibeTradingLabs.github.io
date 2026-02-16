import AppShell from "@/components/shell/AppShell";
import HeroSection from "@/components/home/HeroSection";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import QuickstartSection from "@/components/home/QuickstartSection";
import ArchitectureSection from "@/components/home/ArchitectureSection";
import FooterCTASection from "@/components/home/FooterCTASection";

export default function HomePage() {
  return (
    <AppShell>
      <HeroSection />
      <CapabilitiesSection />
      <QuickstartSection />
      <ArchitectureSection />
      <FooterCTASection />
    </AppShell>
  );
}
