import type { Metadata } from "next"
import { ProfileIntro } from "@/components/profile-intro"
import { ProfileTabs } from "@/components/profile-tabs"

export const metadata: Metadata = {
  title: "Profile",
  description: "Experience, education, and projects — Shozab Mehdi.",
}

export default function ProfilePage() {
  return (
    <>
      <ProfileIntro />
      <ProfileTabs />
    </>
  )
}
