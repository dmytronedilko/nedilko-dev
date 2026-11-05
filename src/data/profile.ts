export interface NavItem { label: string; id: string }
export interface Result { figure: string; title: string; text: string }
export interface Project { name: string; stack: string; points: string[] }
export interface StackGroup { title: string; items: string }
export interface Language { name: string; level: string }

export const profile = {
  name: 'Dmytro Nedilko',
  jobTitle: 'Software Engineer',
  url: 'https://nedilko.dev',
  email: 'dmytro.nedilko16@gmail.com',
  phone: { display: '+380 66 751 8268', href: 'tel:+380667518268' },
  linkedin: 'https://linkedin.com/in/dnedilko',
  github: 'https://github.com/dmytronedilko',
  siteTitle: 'Dmytro Nedilko, Software Engineer',

  nav: [
    { label: 'Results', id: 'results' },
    { label: 'Projects', id: 'work' },
    { label: 'Stack', id: 'stack' },
    { label: 'Award', id: 'award' },
    { label: 'Education', id: 'about' },
    { label: 'Languages', id: 'languages' },
    { label: 'Contact', id: 'contact' },
  ] satisfies NavItem[],

  hero: {
    // Parts of the H1; the last one is rendered in the accent colour.
    headline: ['Less cost.', 'Less latency.'],
    headlineAccent: 'Less downtime.',
    lede: 'I build backends and cloud infrastructure, with more than a year of commercial experience in an AI-native workflow.',
  },

  results: {
    title: 'Results',
    note: 'What changed, in numbers, across three projects.',
    items: [
      { figure: '20×', title: 'Lower infrastructure cost', text: 'Legacy services moved from MuleSoft to AWS.' },
      { figure: '10×', title: 'Traffic surges handled, zero downtime', text: 'Event-driven processing absorbed the spikes.' },
      { figure: '−66%', title: 'API response time', text: 'A Redis cache sped up the API, and MongoDB tuning cut database execution time by 20%.' },
      { figure: '−80%', title: 'Mean time to recovery', text: 'Sentry error tracking and observability.' },
      { figure: '3 mo', title: 'From start to a serverless booking MVP', text: 'On schedule for the client launch, with environment setup cut from days to minutes using IaC.' },
    ] satisfies Result[],
  },

  projects: {
    title: 'Projects',
    note: 'Three client projects, Jun 2025 to now, with the stack used on each.',
    items: [
      {
        name: 'Insurance company',
        stack: 'Express.js, PostgreSQL, MongoDB, Redis, RabbitMQ, Kafka, Docker, AWS, ELK, Dynatrace, Claude Code',
        points: [
          'Migrated legacy services from MuleSoft to AWS, cutting infrastructure costs 20x.',
          'Implemented event-driven processing that handled 10x traffic surges with zero downtime.',
        ],
      },
      {
        name: 'Education platform',
        stack: 'Nest.js, MongoDB, Redis, BullMQ, Docker, AWS, Sentry, Claude Code',
        points: [
          'Cut API response time by 66% (Redis cache) and DB execution time by 20% (MongoDB tuning).',
          'Added Sentry error tracking and observability, reducing MTTR by 80%.',
        ],
      },
      {
        name: 'Travel agency',
        stack: 'Node.js, AWS (SQS, Lambda, DynamoDB, Cognito, S3, SNS, SES, EventBridge), GitHub Copilot',
        points: [
          'Delivered a serverless booking MVP in 3 months, on schedule for the client launch.',
          'Cut environment setup time from days to minutes by codifying the infrastructure with IaC.',
        ],
      },
    ] satisfies Project[],
  },

  stack: {
    title: 'Stack',
    note: 'The tools I work with.',
    groups: [
      { title: 'Languages and frameworks', items: 'JavaScript, TypeScript, Python, Express.js, Fastify.js, Nest.js, React.js, Next.js' },
      { title: 'Databases and messaging', items: 'PostgreSQL, TypeORM, Prisma, Drizzle ORM, MongoDB, Redis, DynamoDB, RabbitMQ, Kafka' },
      { title: 'Infrastructure and DevOps', items: 'AWS, Terraform, Docker, ArgoCD, GitHub Actions, Sentry, ELK, Dynatrace' },
      { title: 'AI and LLM', items: 'Claude Code, GitHub Copilot, LLM APIs, MCP, RAG, pgvector' },
    ] satisfies StackGroup[],
  },

  award: {
    title: 'Award',
    note: 'UA SKILLS Tournament #2, Aug 2026.',
    name: 'Meeting Room Booking',
    prize: 'Prize winner',
    text: 'Made double bookings impossible at the database level with a PostgreSQL EXCLUDE constraint. Conflicts return a 409.',
    pipelineLead: 'Built a 5-stage DevSecOps CI/CD pipeline:',
    pipeline: ['gitleaks', 'Snyk', 'CodeQL', 'SonarQube', 'Playwright E2E'],
    builtWith: 'Built with Next.js, NestJS (Fastify), PostgreSQL, Docker, Prometheus, Grafana and ELK.',
  },

  education: {
    title: 'Education',
    note: 'Degree and years.',
    school: 'Kharkiv National University of Radio Electronics',
    detail: 'BS, Computer Science. Sep 2023 to Jun 2027.',
  },

  languages: {
    title: 'Languages',
    note: 'What I work and communicate in.',
    items: [
      { name: 'English', level: 'B2 Upper-Intermediate' },
      { name: 'Ukrainian', level: 'Native' },
      { name: 'Russian', level: 'Native' },
    ] satisfies Language[],
  },

  contact: {
    title: 'Contact',
    note: 'Open to new projects.',
    heading: 'Got a system that costs too much or breaks too often?',
  },
};

export type Profile = typeof profile;
