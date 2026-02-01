'use client';

import { People } from '@/api/schemas/types';
import { SearchField } from '@/components/SearchField';
import { PeopleListRow } from '@/components/people/PeopleListRow';
import { useState } from 'react';

interface Props {
    initialPeople: People[];
}

export function PeopleList({ initialPeople }: Props) {
    const [query, setQuery] = useState('');

    const filteredPeople = initialPeople.filter((person) =>
        person.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="space-y-10">
            <SearchField
                value={query}
                onChange={setQuery}
                placeholder="Search the archives by name..."
                resultCount={filteredPeople.length}
                resultLabel="UNITS"
            />

            <div className="flex flex-col border-t border-border mt-8">
                {filteredPeople.map((person) => (
                    <PeopleListRow key={person.id} person={person} />
                ))}
            </div>
        </div>
    );
}