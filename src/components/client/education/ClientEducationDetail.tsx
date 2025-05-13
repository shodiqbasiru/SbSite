import React from "react";
import XModal from "@/components/shared/XModal";
import { useRouter } from "next/navigation";
import { Education } from "@/types/education";
import { convertDate, sanitizeContent } from "@/utils/helper";

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

  const header = (
    <h2 className="text-xl font-bold text-slate-50">
      {selectedEducation?.institution}
    </h2>
  );

  const content = (
    <div className="text-slate-50">
      <p className="text-sm font-semibold">
        {selectedEducation?.startDate
          ? convertDate(selectedEducation.startDate, selectedEducation.endDate)
          : "Date not available"}
      </p>
      {selectedEducation?.degree ? (
        <p className="text-sm font-semibold">{selectedEducation?.degree}</p>
      ) : (
        <p className="text-sm font-semibold">{selectedEducation?.program}</p>
      )}

      <div
        className="desc mt-3"
        dangerouslySetInnerHTML={sanitizeContent(selectedEducation?.description || "")}
      ></div>
    </div>
  );
  return (
    <XModal visible={visible} header={header} onHide={onHide}>
      {content}
    </XModal>
  );
}
