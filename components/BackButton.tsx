import Link from 'next/link';

interface Props {
    href: string;
    label: string;
}

export function BackButton({ href, label }: Props) {
    return (
        <Link
            href={href}
            className="label-mono text-text-muted hover:text-accent transition-colors flex items-center gap-2 mb-8 group"
        >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> {label}
        </Link>
    );
}
