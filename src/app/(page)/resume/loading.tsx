import SkeletonEducationLoader from "@/components/loader/SkeletonEducationLoader";
import SkeletonExperienceLoader from "@/components/loader/SkeletonExperienceLoader";
import SkeletonSkillLoader from "@/components/loader/SkeletonSkillLoader";

export default function Loading() {
  return (
    <>
      <SkeletonExperienceLoader />
      <SkeletonEducationLoader />
      <SkeletonSkillLoader />
    </>
  );
}
