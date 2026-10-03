import Hero from "@/components/hero"
import PhotoSlider from "@/components/photo-slider"
import { ProfileIntro } from "@/components/profile-intro"
import { ProfileTabs } from "@/components/profile-tabs"
import Achievements from "@/components/achievements"
import Research from "@/components/research"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <PhotoSlider />
      <ProfileIntro />
      <ProfileTabs />
      <Achievements />
      <Research />
      <Contact />
    </>
  )
}
