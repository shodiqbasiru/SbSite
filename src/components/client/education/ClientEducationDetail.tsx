import React from "react";
import XModal from "@/components/shared/XModal";
import { useRouter } from "next/navigation";
import DOMPurify from "dompurify";
import { Education } from "@/types/education";

interface EducationDetailProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  selectedEducation: Education | null;
  setSelectedEducation: (selectedEducation: Education | null) => void;
}
export default function ClientEducationDetail({
  visible,
  setVisible,
  selectedEducation,
  setSelectedEducation,
}: EducationDetailProps) {
  const router = useRouter();

  const onHide = () => {
    if (!visible) return;
    router.replace("/dashboard/education");
    setVisible(false);
    setSelectedEducation(null);
  };

  const formatExperienceDate = (startDate: Date, endDate?: Date): string => {
    const start = new Date(startDate).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
    });

    const end = endDate
      ? new Date(endDate).toLocaleDateString("id-ID", {
          year: "numeric",
          month: "long",
        })
      : "Present";

    return `${start} - ${end}`;
  };
  const header = (
    <h2 className="text-xl font-bold text-slate-50">
      {selectedEducation?.institution}
    </h2>
  );

  const sanitizeContent = () => {
    if (selectedEducation && selectedEducation.description) {
      return { __html: DOMPurify.sanitize(selectedEducation.description) };
    }
  };

  const content = (
    <div className="text-slate-50">
      <p className="text-sm font-semibold">
        {formatExperienceDate(
          selectedEducation?.startDate!,
          selectedEducation?.endDate,
        )}
      </p>
      {selectedEducation?.degree ? (
        <p className="text-sm font-semibold">{selectedEducation?.degree}</p>
      ) : (
        <p className="text-sm font-semibold">{selectedEducation?.program}</p>
      )}

      <div
        className="desc mt-3"
        dangerouslySetInnerHTML={sanitizeContent()}
      ></div>
    </div>
  );
  return (
    <XModal visible={visible} header={header} onHide={onHide}>
      {content}
    </XModal>
  );
}
