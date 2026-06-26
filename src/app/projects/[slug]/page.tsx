import { notFound } from "next/navigation";
import { projects } from "@/content/projects/data";
import { HostelHubCaseStudy } from "@/components/case-studies/HostelHubCaseStudy";
import { IQERPCaseStudy } from "@/components/case-studies/IQERPCaseStudy";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.filter((p) => p.caseStudy).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Isra QuirozZ`,
    description: project.shortDescription,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;

  if (slug === "hostelhub") return <HostelHubCaseStudy />;
  if (slug === "iq-erp") return <IQERPCaseStudy />;

  notFound();
}
