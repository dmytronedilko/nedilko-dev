// Builds /llms.txt (https://llmstxt.org/) from the same data as the homepage,
// so the two can't drift apart.
import type { APIRoute } from 'astro';
import { profile } from '../data/profile';

export const GET: APIRoute = () => {
  const { results, projects, stack, award, education, languages, contact } = profile;
  const home = new URL('/', profile.url).href;

  const lines = [
    `# ${profile.name}`,
    '',
    `> ${profile.jobTitle}. ${profile.hero.lede}`,
    '',
    `${contact.note} Email: ${profile.email}.`,
    '',
    '## Site',
    '',
    `- [Home](${home}): One-page site with every section below.`,
    ...profile.nav.map((item) => `- [${item.label}](${home}#${item.id})`),
    '',
    `## ${results.title}`,
    '',
    results.note,
    '',
    ...results.items.map((r) => `- ${r.title} (${r.figure}): ${r.text}`),
    '',
    `## ${projects.title}`,
    '',
    projects.note,
    ...projects.items.flatMap((p) => [
      '',
      `### ${p.name}`,
      '',
      `Stack: ${p.stack}`,
      '',
      ...p.points.map((point) => `- ${point}`),
    ]),
    '',
    `## ${stack.title}`,
    '',
    ...stack.groups.map((g) => `- ${g.title}: ${g.items}`),
    '',
    `## ${award.title}`,
    '',
    `${award.name}, ${award.prize.toLowerCase()} at ${award.note}`,
    '',
    award.text,
    `${award.pipelineLead} ${award.pipeline.join(', ')}.`,
    award.builtWith,
    '',
    `## ${education.title}`,
    '',
    `${education.school}. ${education.detail}`,
    '',
    `## ${languages.title}`,
    '',
    ...languages.items.map((l) => `- ${l.name}: ${l.level}`),
    '',
    `## ${contact.title}`,
    '',
    `- [Email](mailto:${profile.email})`,
    `- [LinkedIn](${profile.linkedin})`,
    `- [GitHub](${profile.github})`,
    `- [Phone](${profile.phone.href}): ${profile.phone.display}`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
