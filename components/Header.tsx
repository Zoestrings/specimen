import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[rgba(11,11,12,0.7)] border-b hair">
      <div className="mx-auto max-w-[1100px] px-6 h-[52px] flex items-center">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="mono text-[13px] tracking-[-0.01em]">zoehackz</span>
          <span className="mono text-[10px] text-[var(--color-dimmer)]">v0.1</span>
        </Link>

        <span className="flex-1" />

        <nav className="flex items-center gap-7 mono text-[12px] text-[var(--color-dim)]">
          <a href="#notes" className="hover:text-[var(--color-fg)] transition-colors">
            notes
          </a>
          <a
            href="https://reactbits.dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--color-fg)] transition-colors"
          >
            reactbits ↗
          </a>
        </nav>

        <span
          className="ml-7 w-[7px] h-[7px] rounded-full bg-[var(--color-accent)]"
          style={{ boxShadow: "0 0 12px var(--color-accent)" }}
          aria-hidden
        />
      </div>
    </header>
  );
}
