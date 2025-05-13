import SideHero from "@/components/SideHero";
import PageContainer from "@/components/PageContainer";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SideHero />
      <div className="flex-1">
        <div className="bg-slate-900 pb-8">
          <PageContainer classNames="text-lg">{children}</PageContainer>
        </div>
      </div>
    </>
  );
}
