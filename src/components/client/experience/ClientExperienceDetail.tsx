import React from "react";
import XModal from "@/components/shared/XModal";
import { useRouter } from "next/navigation";
import { Experience } from "@/types/experience";
import { convertDate, sanitizeContent } from "@/utils/helper";

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

  const header = (
    <h2 className="text-xl font-bold text-slate-50">
      {selectedExperience?.companyName}
    </h2>
  );

  const content = (
    <div className="text-slate-50">
      <p className="font-semibold">
        {selectedExperience?.position} -{" "}
        {selectedExperience?.employmentType} -{" "}
        {selectedExperience?.location}
      </p>
      <p className="text-sm font-light">
        {selectedExperience?.startDate && convertDate(
          selectedExperience.startDate,
          selectedExperience.endDate
        )}
      </p>
      <div className="desc mt-3"
        dangerouslySetInnerHTML={sanitizeContent(selectedExperience?.description || "")}
      ></div>
    </div>
  );
  return (
    <XModal visible={visible} header={header} onHide={onHide}>
      {content}
    </XModal>
  );
}
