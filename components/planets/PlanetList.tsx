'use client';

import { Planet } from '@/api/schemas/types';
import { SearchField } from '@/components/SearchField';
import { PlanetListRow } from '@/components/planets/PlanetListRow';
import { useState } from 'react';

interface Props {
    initialPlanets: Planet[];
}

export function PlanetList({ initialPlanets }: Props) {
    const [query, setQuery] = useState('');

    const filteredPlanets = initialPlanets.filter((planet) =>
        planet.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="space-y-10">
            <SearchField
                value={query}
                onChange={setQuery}
                placeholder="Search planets by name..."
                resultCount={filteredPlanets.length}
                resultLabel="WORLDS"
            />

            <div className="flex flex-col border-t border-border mt-8">
                {filteredPlanets.map((planet) => (
                    <PlanetListRow key={planet.id} planet={planet} />
                ))}
            </div>
        </div>
    );
}
