import Link from 'next/link';

import { Planet } from '@/api/schemas/types';

interface Props {
    planet: Planet;
}

export function PlanetDetail({ planet }: Props) {
    return (
        <div className="max-w-3xl mx-auto">
            <Link
                href="/planets"
                className="label-mono text-text-muted hover:text-accent transition-colors flex items-center gap-2 mb-12 group"
            >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Planets
            </Link>

            <header className="border-b border-border pb-8 mb-12">
                <div className="label-micro text-accent mb-2 animate-pulse">
                    Planet ID: {planet.id}
                </div>
                <h1 className="heading-hero text-text">
                    {planet.name}
                </h1>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <section>
                    <h3 className="label-xs text-text-secondary mb-6 border-l-2 border-accent pl-3">
                        Physical Properties
                    </h3>
                    <div className="space-y-4 font-mono">
                        <DataRow label="Diameter" value={`${planet.diameter} km`} />
                        <DataRow label="Rotation Period" value={`${planet.rotation_period} hrs`} />
                        <DataRow label="Orbital Period" value={`${planet.orbital_period} days`} />
                        <DataRow label="Gravity" value={planet.gravity} />
                        <DataRow label="Surface Water" value={`${planet.surface_water}%`} />
                    </div>
                </section>

                <section className="space-y-10">
                    <div>
                        <h3 className="label-xs text-text-secondary mb-6 border-l-2 border-accent pl-3">
                            Environment
                        </h3>
                        <div className="space-y-4 font-mono">
                            <DataRow label="Climate" value={planet.climate} />
                            <DataRow label="Terrain" value={planet.terrain} />
                            <DataRow label="Population" value={planet.population} />
                        </div>
                    </div>

                    <div>
                        <h3 className="label-xs text-text-secondary mb-4 border-l-2 border-accent pl-3">
                            Film Appearances
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {planet.films.map((id) => (
                                <Link
                                    key={id}
                                    href={`/films/${id}`}
                                    className="px-3 py-1 bg-surface-light border border-border label-micro text-text-muted hover:border-accent hover:text-accent transition-all"
                                >
                                    FILE_{id}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {planet.residents.length > 0 && (
                        <div>
                            <h3 className="label-xs text-text-secondary mb-4 border-l-2 border-accent pl-3">
                                Known Residents
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {planet.residents.map((id) => (
                                    <Link
                                        key={id}
                                        href={`/people/${id}`}
                                        className="px-3 py-1 bg-surface-light border border-border label-micro text-text-muted hover:border-accent hover:text-accent transition-all"
                                    >
                                        RESIDENT_{id}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </section>
            </div>
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
