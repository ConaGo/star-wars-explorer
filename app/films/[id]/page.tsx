import { FilmSchema } from '@/api/schemas/film';
import { swapi } from '@/api/swapi';
import { FilmDetail } from '@/components/films/FilmDetail';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    try {
        const film = await swapi.films.byId(id);
        return {
            title: `${film.title} | Film Archives`,
            description: `Episode ${film.episode_id}: ${film.opening_crawl.slice(0, 150)}...`,
        };
    } catch {
        return { title: 'Film Not Found' };
    }
}

export async function generateStaticParams() {
    const allFilms = await swapi.fetchAll('films', FilmSchema);
    return allFilms.map((f) => ({ id: f.id }));
}

export default async function FilmPage({ params }: Props) {
    const { id } = await params;

    try {
        const film = await swapi.films.byId(id);
        return <FilmDetail film={film} />;
    } catch (error) {
        return notFound();
    }
}
