import { FilmSchema } from '@/api/schemas/film';
import { swapi } from '@/api/swapi';
import { BackButton } from '@/components/BackButton';
import { FilmList } from '@/components/films/FilmList';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Film Archives | Holocron',
    description: 'Complete collection of Star Wars saga films.',
};

export default async function FilmsPage() {
    const allFilms = await swapi.fetchAll('films', FilmSchema);

    const sortedFilms = allFilms.sort((a, b) => a.episode_id - b.episode_id);

    return (
        <>
            <BackButton href="/" label="Back to Home" />

            <div className="flex items-center gap-2 mb-8 label-micro text-text-secondary">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>Database Link: Active</span>
                <span className="text-border">|</span>
                <span>Records Found: {allFilms.length}</span>
            </div>

            <header className="mb-12">
                <h1 className="heading-page text-text">
                    Film <span className="text-accent">Archives</span>
                </h1>
                <p className="mt-4 text-text-muted max-w-xl text-sm leading-relaxed border-l border-border pl-4">
                    Access the complete Star Wars saga. Browse through the epic films that define
                    the galaxy far, far away.
                </p>
            </header>

            <FilmList initialFilms={sortedFilms} />
        </>
    );
}
