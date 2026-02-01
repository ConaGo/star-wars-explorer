import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="flex items-center gap-2 mb-8 label-micro text-text-secondary">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span>System Online</span>
        <span className="text-border">|</span>
        <span>Holocron Database Ready</span>
      </div>

      <header className="mb-12">
        <h1 className="heading-page text-text">
          Star Wars <span className="text-accent">Explorer</span>
        </h1>
        <p className="mt-4 text-text-muted max-w-xl text-sm leading-relaxed border-l border-border pl-4">
          Access the comprehensive galactic database. Query data from across the Star Wars
          universe including personnel records, planetary information, and film archives.
        </p>
      </header>

      <section>
        <h2 className="label-xs text-text-secondary mb-6">
          Available Archives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ArchiveCard
            href="/people"
            title="Peoples"
            description="Browse detailed records of individuals from across the galaxy"
            icon="👤"
          />
          <ArchiveCard
            href="/planets"
            title="Planets"
            description="Explore environmental and population data for known worlds"
            icon="🌍"
          />
          <ArchiveCard
            href="/films"
            title="Films"
            description="Access the complete Star Wars saga film collection"
            icon="🎬"
          />
        </div>
      </section>
    </>
  );
}

function ArchiveCard({
  href,
  title,
  description,
  icon,
}: {
  href: string;
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <Link
      href={href}
      className="group block p-6 bg-surface border border-border hover:border-accent transition-all rounded"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="heading-row text-text group-hover:text-accent transition-colors mb-2">
        {title}
      </h3>
      <p className="text-text-muted text-sm leading-relaxed">{description}</p>
      <div className="mt-4 label-micro text-text-muted group-hover:text-accent transition-colors">
        Access Archive →
      </div>
    </Link>
  );
}
