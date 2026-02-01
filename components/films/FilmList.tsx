'use client';

import { Film } from '@/api/schemas/types';
import { SearchField } from '@/components/SearchField';
import { FilmListRow } from '@/components/films/FilmListRow';
import { useState } from 'react';

interface Props {
    initialFilms: Film[];
}

export function FilmList({ initialFilms }: Props) {
    const [query, setQuery] = useState('');

    const filteredFilms = initialFilms.filter((film) =>
        film.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="space-y-10">
            <SearchField
                value={query}
                onChange={setQuery}
                placeholder="Search films by title..."
                resultCount={filteredFilms.length}
                resultLabel="FILMS"
            />

            <div className="flex flex-col border-t border-border mt-8">
                {filteredFilms.map((film) => (
                    <FilmListRow key={film.id} film={film} />
                ))}
            </div>
        </div>
    );
}
