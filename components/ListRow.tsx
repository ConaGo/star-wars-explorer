import Link from 'next/link';
import { Badge } from './Badge';

interface MetadataItem {
    label: string;
    value: string;
}

interface BadgeData {
    label: string;
    count: number;
}

interface Props {
    href: string;
    title: string;
    metadata: MetadataItem[];
    badges?: BadgeData[];
    badgesLabel?: string;
}

export function ListRow({ href, title, metadata, badges, badgesLabel = 'Metadata' }: Props) {
    return (
        <Link
            href={href}
            className="group flex flex-col md:flex-row md:items-center justify-between p-4 border-b border-border hover:bg-surface/50 transition-all"
        >
            {/* Name & Basic Info */}
            <div className="flex-1">
                <h2 className="heading-row text-text-secondary group-hover:text-accent transition-colors">
                    {title}
                </h2>
                <div className="flex gap-4 mt-1 label-mono text-text-muted">
                    {metadata.map((item, index) => (
                        <span key={index}>
                            {item.label}: {item.value}
                        </span>
                    ))}
                </div>
            </div>

            {/* Relations Metadata */}
            {badges && badges.length > 0 && (
                <div className="flex items-center gap-6 mt-4 md:mt-0">
                    <div className="text-right">
                        <p className="data-label text-text-muted font-bold mb-1">{badgesLabel}</p>
                        <div className="flex gap-2">
                            {badges.map((badge, index) => (
                                <Badge key={index} label={badge.label} count={badge.count} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </Link>
    );
}
