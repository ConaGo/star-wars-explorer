export function Badge({ label, count }: { label: string; count: number }) {
    if (count === 0) return null;
    return (
        <span className="px-2 py-0.5 bg-surface text-text-muted text-[9px] rounded border border-border font-mono">
            {count} {label}
        </span>
    );
}
