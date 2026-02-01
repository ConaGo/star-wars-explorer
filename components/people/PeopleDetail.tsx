import Link from 'next/link';

import { People } from '@/api/schemas/types';
import { BackButton } from '@/components/BackButton';
import { DataRow } from '@/components/DataRow';

interface Props {
    person: People;
}

export function PeopleDetail({ person }: Props) {
    return (
        <div className="max-w-3xl mx-auto">
            <BackButton href="/people" label="Back to Archives" />

            {/* Header Section */}
            <header className="border-b border-border pb-8 mb-12">
                <div className="label-micro text-accent mb-2 animate-pulse">
                    Subject ID: {person.id}
                </div>
                <h1 className="heading-hero text-text">
                    {person.name}
                </h1>
            </header>

            {/* Data Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Profile */}
                <section>
                    <h3 className="label-xs text-text-secondary mb-6 border-l-2 border-accent pl-3">
                        Biological Profile
                    </h3>
                    <div className="space-y-4 font-mono">
                        <DataRow label="Birth Year" value={person.birth_year} />
                        <DataRow label="Gender" value={person.gender} />
                        <DataRow label="Height" value={`${person.height} cm`} />
                        <DataRow label="Mass" value={`${person.mass} kg`} />
                        <DataRow label="Eye Color" value={person.eye_color} />
                        <DataRow label="Hair Color" value={person.hair_color} />
                    </div>
                </section>

                {/* Intelligence / Links */}
                <section className="space-y-10">
                    <div>
                        <h3 className="label-xs text-text-secondary mb-6 border-l-2 border-accent pl-3">
                            Homeworld Data
                        </h3>
                        <Link
                            href={`/planets/${person.homeworld}`}
                            className="group block p-4 bg-surface border border-border hover:border-accent/50 transition-all rounded"
                        >
                            <div className="label-micro text-text-muted mb-1">Origin Sector</div>
                            <div className="data-value uppercase text-text-secondary group-hover:text-accent flex justify-between">
                                Link: {person.homeworld}
                                <span>→</span>
                            </div>
                        </Link>
                    </div>

                    <div>
                        <h3 className="label-xs text-text-secondary mb-4 border-l-2 border-accent pl-3">
                            Holocron Appearances
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {person.films.map((id) => (
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
                </section>
            </div>
        </div>
    );
}