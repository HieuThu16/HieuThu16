import { MotionReveal } from "@/components/MotionReveal";
import { ResumeSection } from "@/components/ResumeSection";
import { resumeData } from "@/content/resume";

export const metadata = {
  title: "Resume | Truong Nguyen Minh Hieu",
};

export default function ResumePage() {
  return (
    <div className="container-shell py-10 md:py-16">
      <MotionReveal className="mb-8 section-shell rounded-[2rem] p-6 md:p-8">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
          Resume
        </p>
        <h1 className="section-title mt-4">
          A concise profile built for clarity, not filler.
        </h1>
        <p className="section-copy mt-4 text-sm md:text-base">
          This page is rendered as a readable inline preview, and the download
          button generates a PDF from the same source data so the content stays
          consistent.
        </p>
      </MotionReveal>

      <ResumeSection data={resumeData} />
    </div>
  );
}
