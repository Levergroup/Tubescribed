import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { UseCasePageClient } from "@/components/UseCasePageClient";

export const metadata: Metadata = buildMetadata({
  title: "TubeScribed for Course Creators — Turn Video Lessons Into Written Curriculum",
  description: "Turn your course videos and YouTube lessons into transcripts, SOPs, workbooks, and written curriculum automatically — in your brand voice.",
  path: "/for/course-creators",
});

const data = {
  category: "For Course Creators",
  headline: "Your Video Lessons Deserve",
  headlineGradient: "Written Companions.",
  subheadline: "Turn every course module into a workbook, transcript, and SOP automatically. TubeScribed makes your course curriculum more complete — in your voice, in seconds.",
  painHeading: "The course content problem",
  painPoints: [
    "Students watch your videos but there's no written resource to reference later",
    "Building workbooks and lesson guides from scratch takes weeks",
    "Your course video content sits idle — it should be generating more assets",
    "You re-record the same explanations instead of documenting them once",
  ],
  featureCallout: {
    icon: "ClipboardList" as const,
    heading: "From video lesson to written curriculum",
    body: "Paste any course module or YouTube lesson URL. TubeScribed generates a clean transcript, a structured lesson guide, a summary with key takeaways, and an SOP of any process you demonstrate — all in your brand voice.",
    subBody: "Your students get more value from the same content. You spend less time writing. The Brand Workspace keeps every module consistent with your course style.",
    note: "Course creators using TubeScribed reduce curriculum build time by 60%.",
  },
  outcomeHeading: "What course creators build with TubeScribed",
  outcomes: [
    "Lesson transcripts and workbooks from every course module automatically",
    "SOPs from any process you demonstrate in your videos",
    "Key takeaways and summaries students can reference without rewatching",
    "Consistent, branded curriculum across every module",
  ],
  ctaHref: "https://app.tubescribed.com/signup",
};

export default function ForCourseCreatorsPage() {
  return <UseCasePageClient {...data} />;
}
