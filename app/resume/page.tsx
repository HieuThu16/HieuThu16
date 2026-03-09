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
        <p className="eyebrow">Resume</p>
        <h1 className="section-title mt-4">Resume and contact.</h1>
        <p className="section-copy mt-4 text-sm md:text-base">
          This section keeps the written profile, contact methods, LaTeX CV, and
          PDF export in one place.
        </p>
      </MotionReveal>

      <ResumeSection data={resumeData} />
    </div>
  );
}
