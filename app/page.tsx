import Hero from "@/components/hero"
import PhotoSlider from "@/components/photo-slider"
import About from "@/components/about"
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
      <About />
      <ProfileIntro />
      <ProfileTabs />
      <Achievements />
      <Research />
      <Contact />
    </>
  )
}
