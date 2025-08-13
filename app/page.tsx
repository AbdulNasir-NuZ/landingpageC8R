"use client";
import { useRouter } from "next/navigation";

import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
//import { MotionPills } from "@/components/main/MotionPills";
import { ScrollBasedVelocity } from "@/components/main/Scrollbasedvelocity";

//import { Projects } from "@/components/main/projects";
import { Highlights } from "@/components/main/Highlights";
import { Roadmap } from "@/components/main/roadmap";
import { Mintstep } from "@/components/main/Mintstep";
import { PerksSection } from "@/components/main/Perkssection";
import { MeetTheTeam } from "@/components/main/MeetTheTeam";
import { FAQSection } from "@/components/main/FAQSection";
import { JoinClan } from "@/components/main/JoinClan";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col relative">
        <Hero />
        {/* <MotionPills /> */}
        <ScrollBasedVelocity />
        <Highlights />
        <PerksSection/>
        <Roadmap />
        <Mintstep />
        <Encryption />
        <MeetTheTeam />
        <FAQSection/>
        <JoinClan/>
        {/* <Projects /> */}

      </div>
    </main>
  );
}
