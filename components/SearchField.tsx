interface Props {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    resultCount?: number;
    resultLabel?: string;
}

export function SearchField({
    value,
    onChange,
    placeholder = 'Search...',
    resultCount,
    resultLabel = 'RESULTS',
}: Props) {
    return (
        <div className="max-w-xl mx-auto relative group">
            <input
                type="text"
                placeholder={placeholder}
                className="relative w-full bg-background border border-border text-accent p-4 rounded-lg outline-none focus:border-accent transition-all font-mono"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            {resultCount !== undefined && (
                <div className="absolute right-4 top-4 text-text-secondary pointer-events-none label-mono">
                    {resultCount} {resultLabel}
                </div>
            )}
        </div>
    );
}
