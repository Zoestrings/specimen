export default function Footer() {
  return (
    <footer className="border-t hair">
      <div className="mx-auto max-w-[1100px] px-6 py-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="mono text-[12px] text-[var(--color-dim)] leading-relaxed max-w-[42ch]">
            zoehackz — a one-person catalog of open-source interface bits.
            Nothing on this page phones home.
          </p>
        </div>
        <div className="mono text-[11px] text-[var(--color-dimmer)] flex items-center gap-5">
          <a
            className="hover:text-[var(--color-fg)] transition-colors"
            href="https://reactbits.dev"
            target="_blank"
            rel="noreferrer"
          >
            reactbits.dev
          </a>
          <a
            className="hover:text-[var(--color-fg)] transition-colors"
            href="https://reactbits.dev/llms.txt"
            target="_blank"
            rel="noreferrer"
          >
            llms.txt
          </a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
