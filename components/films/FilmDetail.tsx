import Link from 'next/link';

import { Film } from '@/api/schemas/types';

interface Props {
    film: Film;
}

export function FilmDetail({ film }: Props) {
    return (
        <div className="max-w-3xl mx-auto">
            <Link
                href="/films"
                className="label-mono text-text-muted hover:text-accent transition-colors flex items-center gap-2 mb-12 group"
            >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Films
            </Link>

            <header className="border-b border-border pb-8 mb-12">
                <div className="label-micro text-accent mb-2 animate-pulse">
                    Episode {film.episode_id}
                </div>
                <h1 className="heading-hero text-text">
                    {film.title}
                </h1>
            </header>

            <section className="mb-12">
                <h3 className="label-xs text-text-secondary mb-6 border-l-2 border-accent pl-3">
                    Opening Crawl
                </h3>
                <div className="bg-surface border border-border p-6 rounded">
                    <p className="text-text-muted text-sm leading-relaxed italic whitespace-pre-line">
                        {film.opening_crawl}
                    </p>
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <section>
                    <h3 className="label-xs text-text-secondary mb-6 border-l-2 border-accent pl-3">
                        Production
                    </h3>
                    <div className="space-y-4 font-mono">
                        <DataRow label="Director" value={film.director} />
                        <DataRow label="Producer" value={film.producer} />
                        <DataRow label="Release Date" value={film.release_date} />
                    </div>
                </section>

                <section className="space-y-10">
                    <div>
                        <h3 className="label-xs text-text-secondary mb-6 border-l-2 border-accent pl-3">
                            Film Statistics
                        </h3>
                        <div className="space-y-4 font-mono">
                            <DataRow label="Characters" value={`${film.characters.length}`} />
                            <DataRow label="Planets" value={`${film.planets.length}`} />
                            <DataRow label="Starships" value={`${film.starships.length}`} />
                            <DataRow label="Vehicles" value={`${film.vehicles.length}`} />
                            <DataRow label="Species" value={`${film.species.length}`} />
                        </div>
                    </div>
                </section>
            </div>

            {film.characters.length > 0 && (
                <section className="mt-12">
                    <h3 className="label-xs text-text-secondary mb-4 border-l-2 border-accent pl-3">
                        Featured Characters
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {film.characters.map((id) => (
                            <Link
                                key={id}
                                href={`/people/${id}`}
                                className="px-3 py-1 bg-surface-light border border-border label-micro text-text-muted hover:border-accent hover:text-accent transition-all"
                            >
                                CHAR_{id}
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {film.planets.length > 0 && (
                <section className="mt-12">
                    <h3 className="label-xs text-text-secondary mb-4 border-l-2 border-accent pl-3">
                        Featured Planets
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {film.planets.map((id) => (
                            <Link
                                key={id}
                                href={`/planets/${id}`}
                                className="px-3 py-1 bg-surface-light border border-border label-micro text-text-muted hover:border-accent hover:text-accent transition-all"
                            >
                                PLANET_{id}
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}

function DataRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex justify-between border-b border-border pb-2">
            <span className="data-label text-text-muted">{label}</span>
            <span className="data-value text-text-secondary">{value}</span>
        </div>
    );
}
