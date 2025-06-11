// NO 'use client' at the top of this file
// This file is now a Server Component by default

import { PROJECTS, PERSONAL_INFO } from '@/data/content';
import ProjectDetailClientPage from './project-detail-client-page';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

function getProjectBySlug(slug) {
  return PROJECTS.find((project) => project.slug === slug);
}

// This is now a Server Component
export default async function ProjectDetailPageServerWrapper({ params }) {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Pass the fetched project data and personalInfo to the client component
  return <ProjectDetailClientPage project={project} personalInfo={PERSONAL_INFO} />;
}
