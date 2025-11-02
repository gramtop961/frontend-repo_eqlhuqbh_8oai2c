import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Yiroo',
    tag: 'mobile, admin, product',
    description:
      'Drivers app and admin: signup approval, admin notes on rejections, ride history and cancel. Supabase backend with App Store submission support.',
    tech: ['React', 'Supabase', 'Tailwind'],
    links: { demo: '#', repo: '#' },
  },
  {
    title: 'Athlete Platform',
    tag: 'demo, product',
    description:
      'Player stats demo with avatars and optional character displaying vitals. Supports dummy data. React-based.',
    tech: ['React', 'TypeScript'],
    links: { demo: '#', repo: '#' },
  },
  {
    title: 'Ligaye',
    tag: 'marketplace, product',
    description: 'Job marketplace with job posting and career-tip social cards.',
    tech: ['Next.js', 'Tailwind'],
    links: { demo: '#', repo: '#' },
  },
  {
    title: 'Link Gambia',
    tag: 'product',
    description:
      'Package sending UX: search, results, traveler contact, size and price checks.',
    tech: ['React', 'Node'],
    links: { demo: '#', repo: '#' },
  },
  {
    title: 'Motivation Letter Service',
    tag: 'tooling, product',
    description: 'Example letter generator and scholarship version.',
    tech: ['Next.js', 'TypeScript'],
    links: { demo: '#', repo: '#' },
  },
  {
    title: 'Gambia Play',
    tag: 'marketplace, admin, product',
    description:
      'Gaming marketplace: items upload, gaming vibe UI, protected admin routes, Supabase storage, broadcast emails.',
    tech: ['Supabase', 'Next.js', 'Tailwind'],
    links: { demo: '#', repo: '#' },
  },
  {
    title: 'Nano Banana',
    tag: 'tooling, demo',
    description: 'Image edit headshot prompt examples with a guide for portrait touch-ups.',
    tech: ['React'],
    links: { demo: '#', repo: '#' },
  },
];

function ProjectCard({ title, tag, description, tech, links }) {
  return (
    <article className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md focus-within:shadow-md">
      <div>
        <div className="mb-3 flex items-center gap-2 text-xs text-indigo-700">
          {tag.split(',').map((t) => (
            <span key={t.trim()} className="rounded bg-indigo-50 px-2 py-0.5">
              {t.trim()}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700">
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href={links.demo}
            className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm font-medium text-indigo-700 hover:text-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            aria-label={`Open demo for ${title}`}
          >
            <ExternalLink className="h-4 w-4" /> Demo
          </a>
          <a
            href={links.repo}
            className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm font-medium text-gray-700 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            aria-label={`Open repository for ${title}`}
          >
            <Github className="h-4 w-4" /> Code
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsGrid() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Selected projects</h2>
          <p className="mt-2 text-gray-600">
            A quick look at work and experiments. Each project is focused and shippable.
          </p>
        </div>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Get in touch
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 6).map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
