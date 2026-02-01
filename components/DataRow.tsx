interface Props {
    label: string;
    value: string;
}

export function DataRow({ label, value }: Props) {
    return (
        <div className="flex justify-between gap-4 border-b border-border pb-2">
            <span className="data-label text-text-muted flex-0">{label}</span>
            <span className="data-value text-text-secondary text-right wrap-break-words">{value}</span>
        </div>
    );
}
