import TechText from "@/components/TechText";

export default function Home() {
  return (
    <>
      {/* ──────────────────────────────────────────────────────────
          HERO
          Left-aligned copy. Wordmark bleeds off the right edge so it
          reads as a specimen slide, not a centered logo. The whole
          thing fits above the fold on a laptop.
         ────────────────────────────────────────────────────────── */}
      <section className="relative border-b hair overflow-hidden">
        <div className="mx-auto max-w-[1100px] px-6 pt-14 md:pt-20 pb-0 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4 relative z-10">
            <p className="mono text-[11px] text-[var(--color-dimmer)] mb-6">
              an index, not a library
            </p>

            <h1 className="text-[34px] md:text-[40px] leading-[1.08] tracking-[-0.02em] font-medium">
              Components that
              <br />
              get out of the way.
            </h1>

            <p className="mt-6 text-[15px] leading-[1.6] text-[var(--color-dim)] max-w-[38ch]">
              I got tired of UI kits that want to own your whole app. So I
              started collecting the pieces that do one thing and stop. You
              copy a file, paste it, and move on.
            </p>

            <div className="mt-8 flex items-center gap-5 mono text-[12px]">
              <a
                href="#notes"
                className="text-[var(--color-fg)] border-b border-[var(--color-line-2)] pb-[2px] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
              >
                read the notes →
              </a>
            </div>
          </div>

          {/* The wordmark. It's allowed to overlap the copy column on
              wide screens — that's the composition. */}
          <div className="md:col-span-8 relative h-[240px] md:h-[420px] -mr-8 md:-mr-24">
            <TechText
              text="ZOEHACKZ"
              fontWeight={600}
              fontSize={170}
              letterSpacing={-0.035}
              color="#ececec"
              accentColor="#7df9ff"
              dashLength={5}
              dashGap={3}
              strokeWidth={1.4}
              specks={24}
              reach={220}
              softness={0.8}
              reveal="letter"
            />
          </div>
        </div>

        {/* A one-line "how it feels" strip. Not a marquee. Not centered.
            Just three short clauses, unevenly spaced, like a note. */}
        <div className="mx-auto max-w-[1100px] px-6 pb-10 mono text-[11px] text-[var(--color-dimmer)] flex flex-wrap gap-x-8 gap-y-2">
          <span>hover a letter → it turns to blueprint</span>
          <span className="hidden sm:inline">drag it → it hangs</span>
          <span className="hidden md:inline">let go → spring</span>
          <span className="hidden lg:inline">ignore it → slow sweep</span>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          WHAT IT DOES WELL / WHAT IT DOESN'T
          Two columns, uneven widths. The right column is deliberately
          shorter — the point is that the honest version wins.
         ────────────────────────────────────────────────────────── */}
      <section className="border-b hair">
        <div className="mx-auto max-w-[1100px] px-6 py-12 md:py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <p className="mono text-[11px] text-[var(--color-dimmer)] mb-5">where it belongs</p>
            <ul className="space-y-5 text-[15px] leading-[1.6]">
              <li>
                <span className="text-[var(--color-fg)]">Hero wordmarks for dev tools.</span>{" "}
                <span className="text-[var(--color-dim)]">
                  The blueprint look says &ldquo;we build technical things&rdquo; without
                  you having to write that sentence.
                </span>
              </li>
              <li>
                <span className="text-[var(--color-fg)]">Launch and 404 pages.</span>{" "}
                <span className="text-[var(--color-dim)]">
                  The idle sweep means it&rsquo;s alive even when nobody&rsquo;s
                  moving the mouse. Ship it as-is and walk away.
                </span>
              </li>
              <li>
                <span className="text-[var(--color-fg)]">Component galleries like this one.</span>{" "}
                <span className="text-[var(--color-dim)]">
                  It&rsquo;s a specimen. Give it a page and let it be looked at.
                </span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-5 md:pt-9">
            <p className="mono text-[11px] text-[var(--color-dimmer)] mb-5">where it doesn&rsquo;t</p>
            <ul className="space-y-4 text-[14px] leading-[1.6] text-[var(--color-dim)]">
              <li>Long-form reading. Canvas text isn&rsquo;t text.</li>
              <li>E-commerce. Clashes with product photography.</li>
              <li>Anything the crawler needs to index.</li>
              <li>Mobile-first marketing. Pointer-only interactions.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          NOTES
          A short, opinionated paragraph. This is the human fingerprint.
          If this were AI-generated it would be a bulleted feature list.
          It's a take, with a reason, and a joke at the end.
         ────────────────────────────────────────────────────────── */}
      <section id="notes" className="border-b hair scroll-mt-20">
        <div className="mx-auto max-w-[1100px] px-6 py-12 md:py-16">
          <p className="mono text-[11px] text-[var(--color-dimmer)] mb-6">notes</p>

          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-7 text-[15px] leading-[1.75] text-[var(--color-dim)] space-y-5">
              <p>
                The reason this site is a list instead of an npm install is
                that a component you can read in one sitting is a component
                you can trust. The moment you add a config DSL and a theming
                layer and a plugin system, you&rsquo;ve built a framework by
                accident, and now you owe it upgrades.
              </p>
              <p>
                So there&rsquo;s one rule for what gets added here: you should
                be able to open the file, read the whole thing over coffee,
                and change any behavior you don&rsquo;t like. If that&rsquo;s
                not true, it doesn&rsquo;t belong.
              </p>
              <p className="text-[var(--color-fg)]">
                Nothing here is a dependency of anything else here. Copy what
                you want. Ignore the rest. It won&rsquo;t mind.
              </p>
            </div>

            <div className="md:col-span-5 md:pt-2">
              <div className="border hair divide-y divide-[var(--color-line)]">
                <Row k="looking for the source" v="reactbits.dev ↗" href="https://reactbits.dev" />
                <Row k="machine-readable index" v="llms.txt ↗" href="https://reactbits.dev/llms.txt" />
                <Row k="issue with a specimen" v="open a PR" href="https://reactbits.dev" />
                <Row k="this site" v="next 15 · tailwind 4" />
                <Row k="analytics" v="none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SIGN-OFF
          Short. Slightly informal. The wordmark reappears at the
          bottom in "off" mode as a visual bookend, then a plain line.
          No emoji, no CTA buttons in a row.
         ────────────────────────────────────────────────────────── */}
      <section className="border-b hair">
        <div className="mx-auto max-w-[1100px] px-6 pt-16 pb-10">
          <div className="relative w-full h-[180px] md:h-[240px]">
            <TechText
              text="one at a time"
              fontWeight={600}
              fontSize={120}
              reveal="off"
              sweep={false}
              specks={0}
              selection={false}
              labels={false}
              draggable={false}
              color="#4c4c52"
              accentColor="#7df9ff"
              letterSpacing={-0.03}
            />
          </div>

          <p className="mt-8 text-[14px] text-[var(--color-dim)] max-w-[52ch]">
            More specimens when they earn their place. No newsletter, no
            waitlist — if you want to know when something shows up, watch
            the repo.
          </p>
        </div>
      </section>
    </>
  );
}

function Row({
  k,
  v,
  href
}: {
  k: string;
  v: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="text-[var(--color-dim)]">{k}</span>
      <span className="text-[var(--color-fg)]">{v}</span>
    </>
  );
  const className =
    "flex items-baseline justify-between gap-4 px-4 py-3 mono text-[12px]";
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${className} hover:bg-[#101012] transition-colors`}
    >
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
}
