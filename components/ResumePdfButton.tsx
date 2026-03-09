"use client";

import { useState } from "react";
import { Download } from "lucide-react";

import type { ResumeData } from "@/content/resume";
import { Button } from "@/components/ui/button";

type ResumePdfButtonProps = {
  data: ResumeData;
};

export function ResumePdfButton({ data }: ResumePdfButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleDownload() {
    try {
      setLoading(true);
      const [{ pdf }, { ResumePdfDocument }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("@/components/ResumePdfDocument"),
      ]);
      const blob = await pdf(<ResumePdfDocument data={data} />).toBlob();
      const objectUrl = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = objectUrl;
      anchor.download = "truong-nguyen-minh-hieu-resume.pdf";
      anchor.click();
      URL.revokeObjectURL(objectUrl);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button variant="secondary" onClick={handleDownload} disabled={loading}>
      <Download className="size-4" />
      {loading ? "Preparing PDF..." : "Download PDF"}
    </Button>
  );
}
