import { Hero } from "@/components/Hero";
// import  FeaturesSectionDemo  from "@/components/features-section-demo-2"
import { WorkshopForm } from "@/components/WorkshopForm";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import 'material-symbols/outlined.css';

export default function Home() {
  return (
    <>
      <main className="flex-1 flex flex-col items-center w-full">
        <Hero />
        <Services />
        <Gallery />
        <WorkshopForm />
      </main>
    </>
  );
}