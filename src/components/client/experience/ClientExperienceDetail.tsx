import React from "react";
import XModal from "@/components/shared/XModal";
import { useRouter } from "next/navigation";
import { Experience } from "@/types/experience";
import DOMPurify from "dompurify";

interface ClientExperienceDetailProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  selectedExperience: Experience | null;
  setSelectedExperience: (selectedExperience: Experience | null) => void;
}
export default function ClientExperienceDetail({
  visible,
  setVisible,
  selectedExperience,
  setSelectedExperience,
}: ClientExperienceDetailProps) {
  const router = useRouter();

  const onHide = () => {
    if (!visible) return;
    router.replace("/dashboard/experience");
    setVisible(false);
    setSelectedExperience(null);
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
      {selectedExperience?.companyName}
    </h2>
  );

  const sanitizeContent = () => {
    if (selectedExperience && selectedExperience.description) {
      return { __html: DOMPurify.sanitize(selectedExperience.description) };
    }
  };

  const content = (
    <div className="text-slate-50">
      <p className="font-semibold">
        {selectedExperience?.position} -{" "}
        {selectedExperience?.employmentType} -{" "}
        {selectedExperience?.location}
      </p>
      <p className="text-sm font-light">
        {formatExperienceDate(
          selectedExperience?.startDate!,
          selectedExperience?.endDate
        )}
      </p>
      <div className="desc mt-3"
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
