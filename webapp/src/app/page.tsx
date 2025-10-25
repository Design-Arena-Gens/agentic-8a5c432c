"use client";

import { useMemo, useState } from "react";

type DesignPreset = {
  id: string;
  name: string;
  tagline: string;
  vibe: string;
  paletteDescription: string;
  gradient: string;
  accent: string;
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  sections: string[];
  highlights: string[];
};

const designPresets: DesignPreset[] = [
  {
    id: "sublime-serenity",
    name: "Sublime Serenity",
    tagline: "Digital calm for modern wellness brands",
    vibe: "tranquil, luminous, confidence-building",
    paletteDescription:
      "holographic blues drifting into soft lavender with frosted glass surfaces",
    gradient:
      "linear-gradient(135deg, rgba(156, 236, 251, 0.95) 0%, rgba(140, 166, 255, 0.95) 50%, rgba(203, 148, 255, 0.9) 100%)",
    accent: "rgba(255,255,255,0.65)",
    hero: {
      headline: "Where calm shapes the experience",
      subheadline:
        "Design a spa-inspired landing page with liquid gradients and glassmorphism that instantly lowers the viewer's shoulders.",
      cta: "Book a restorative session",
    },
    sections: [
      "breathing animation guidance to ease the scroll",
      "floating gradient droplets with parallax motion",
      "testimonial carousel wrapped in translucent cards",
    ],
    highlights: ["Glassmorphism panels", "Pastel glow", "Slow parallax drift"],
  },
  {
    id: "cine-noir",
    name: "Cine Noir Director's Cut",
    tagline: "Moody storytelling for premium film studios",
    vibe: "cinematic, artful, after-dark sophistication",
    paletteDescription:
      "deep charcoal infused with brass gradients and cinematic lighting cues",
    gradient:
      "linear-gradient(160deg, rgba(20, 20, 24, 0.98) 0%, rgba(32, 29, 41, 0.94) 60%, rgba(120, 84, 56, 0.85) 100%)",
    accent: "rgba(201, 144, 86, 0.6)",
    hero: {
      headline: "Launch a film premiere experience",
      subheadline:
        "Build a director's cut microsite with bold typographic grids and noir lighting moments to showcase cinematic craft.",
      cta: "Enter the premiere screening",
    },
    sections: [
      "scroll-triggered storyboard frames with subtle grain",
      "immersive trailer reveal using spotlight masking",
      "award timeline pinned to a vertical gold line",
    ],
    highlights: ["Spotlight reveals", "Editorial layout", "Grain textures"],
  },
  {
    id: "neon-lab",
    name: "Neon Lab Launchpad",
    tagline: "hypercolor experiments for futuristic products",
    vibe: "bold, kinetic, future-forward energy",
    paletteDescription:
      "electric magenta colliding with cyan in a laser-grid inspired stage",
    gradient:
      "radial-gradient(circle at 20% 20%, rgba(255, 0, 128, 0.85), rgba(30, 30, 60, 0.95)), radial-gradient(circle at 80% 80%, rgba(0, 212, 255, 0.85), rgba(10, 10, 30, 1))",
    accent: "rgba(255,255,255,0.08)",
    hero: {
      headline: "Prototype the future in vivid motion",
      subheadline:
        "Craft a product teaser site that feels alive with kinetic typography and neon depth to frame experimental hardware.",
      cta: "Experience the product drop",
    },
    sections: [
      "3D-inspired hero card hovering on neon gridlines",
      "feature matrix with luminous dividers and scanline glow",
      "circular launch timeline with progressive pulses",
    ],
    highlights: ["Neon gradients", "Scanline glow", "Kinetic type"],
  },
  {
    id: "slow-living",
    name: "Slow Living Journal",
    tagline: "Editorial warmth for mindful creators",
    vibe: "thoughtful, tactile, slow-paced storytelling",
    paletteDescription:
      "sunlit neutrals, warm clay accents, and textured paper overlays",
    gradient:
      "linear-gradient(180deg, rgba(249, 245, 239, 0.96) 0%, rgba(238, 224, 207, 0.96) 35%, rgba(214, 179, 139, 0.85) 100%)",
    accent: "rgba(107, 80, 55, 0.5)",
    hero: {
      headline: "Compose a mindful editorial homepage",
      subheadline:
        "Design a reading experience with generous spacing, organic rhythm, and handcrafted illustration frames.",
      cta: "Read the latest letter",
    },
    sections: [
      "split column layout pairing photography with thoughtful essays",
      "slow scrolling quote reveals with typographic hierarchy",
      "subscriber invitation with textured background and serif accents",
    ],
    highlights: ["Editorial serif", "Textured paper", "Warm neutrals"],
  },
];

const targetAudiences = [
  "early-stage founders launching a flagship product",
  "wellness practitioners scaling hybrid studio experiences",
  "cinematographers promoting a festival showcase",
  "content creators designing their personal brand hubs",
  "immersive event producers crafting digital previews",
  "AI startups unveiling a premium SaaS dashboard",
  "boutique agencies refreshing a portfolio presence",
];

const toneOptions = [
  "luxurious and refined",
  "playfully experimental",
  "minimal and editorial",
  "bold and cinematic",
  "serene and restorative",
  "futuristic with a human touch",
];

const layoutOptions = [
  "full-bleed hero with thematic storytelling sections",
  "modular grid layering imagery and narrative copy",
  "one-page scroll anchored by immersive chapter reveals",
  "split-screen experience alternating copy and visuals",
  "scroll-triggered experience blending vertical and horizontal motion",
];

const interactionOptions = [
  "hover-triggered micro-interactions that feel tactile",
  "magnetic cursor flourishes that guide exploration",
  "parallax-driven depth with subtle 3D illusions",
  "cinematic transitions choreographed with easing curves",
  "ambient motion responding to scroll velocity",
  "adaptive theming based on time of day",
];

const callToActionOptions = [
  "launch the experience",
  "book a discovery session",
  "request a full creative treatment",
  "watch the teaser narrative",
  "download the media kit",
  "reserve a private walkthrough",
];

const sparklesSvg = (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      d="M12 2.5 13.8 8l5.7 1.8-5.7 1.8L12 17.5 10.2 11.6 4.5 9.8 10.2 8z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.2 18.8 7.1 21l2.2.9-2.2.9-.9 2.2-.9-2.2L2.9 21l2.2-.9zM16.9 4.3l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const copySvg = (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      d="M9 9.75A2.75 2.75 0 0 1 11.75 7h6.5A2.75 2.75 0 0 1 21 9.75v6.5A2.75 2.75 0 0 1 18.25 19h-6.5A2.75 2.75 0 0 1 9 16.25z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.75 15A2.75 2.75 0 0 1 2 12.25v-6.5A2.75 2.75 0 0 1 4.75 3h6.5A2.75 2.75 0 0 1 14 5.75"
      strokeLinecap="round"
    />
  </svg>
);

const shuffleSvg = (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      d="M16 3h4v4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m4 5 6.5 6.5L16 9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 21H4v-4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m20 19-6.5-6.5L8 15"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const checkSvg = (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      d="M5 13l4 4L19 7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const randomFrom = <T,>(items: T[]): T =>
  items[Math.floor(Math.random() * items.length)];

export default function Home() {
  const [selectedPreset, setSelectedPreset] = useState<DesignPreset>(
    designPresets[0],
  );
  const [targetAudience, setTargetAudience] = useState(targetAudiences[0]);
  const [tone, setTone] = useState(toneOptions[0]);
  const [layout, setLayout] = useState(layoutOptions[0]);
  const [interaction, setInteraction] = useState(interactionOptions[0]);
  const [callToAction, setCallToAction] = useState(callToActionOptions[0]);
  const [customNotes, setCustomNotes] = useState("");
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(() => {
    const base = [
      `Design a ${tone} web experience tailored for ${targetAudience}.`,
      `Use the "${selectedPreset.name}" concept defined by ${selectedPreset.vibe} energy and ${selectedPreset.paletteDescription}.`,
      `Structure the journey as a ${layout}, anchored by the hero message "${selectedPreset.hero.headline}" and call-to-action "${selectedPreset.hero.cta}".`,
      `Emphasize ${selectedPreset.sections.join(", ")}.`,
      `Layer ${interaction} and ensure the primary engagement is to ${callToAction}.`,
    ];

    if (customNotes.trim()) {
      base.push(`Additional art direction notes: ${customNotes.trim()}.`);
    }

    return base.join(" ");
  }, [
    tone,
    targetAudience,
    selectedPreset,
    layout,
    interaction,
    callToAction,
    customNotes,
  ]);

  const autoGenerate = () => {
    setSelectedPreset(randomFrom(designPresets));
    setTargetAudience(randomFrom(targetAudiences));
    setTone(randomFrom(toneOptions));
    setLayout(randomFrom(layoutOptions));
    setInteraction(randomFrom(interactionOptions));
    setCallToAction(randomFrom(callToActionOptions));
    setCustomNotes("");
    setCopied(false);
  };

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#05070d] pb-24 font-sans text-white">
      <div className="absolute left-0 top-0 -z-10 h-96 w-full overflow-hidden">
        <div className="mx-auto h-full max-w-5xl rounded-full blur-3xl">
          <div className="h-full w-full bg-gradient-to-r from-purple-600/30 via-cyan-500/20 to-emerald-500/20" />
        </div>
      </div>

      <header className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pb-12 pt-16 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white/90 backdrop-blur">
            {sparklesSvg}
            AI Prompt Design Studio
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Craft remarkable web design prompts in seconds.
          </h1>
          <p className="max-w-2xl text-base text-white/70 sm:text-lg">
            Explore curated art direction presets, remix narrative ingredients,
            and instantly generate AI-ready prompts for landing pages, product
            teasers, or editorial experiences. Your creative assistant for the
            next showcase-ready concept.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={autoGenerate}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            {shuffleSvg}
            Auto style remix
          </button>
          <button
            onClick={copyPrompt}
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-white/90"
          >
            {copySvg}
            {copied ? "Copied!" : "Copy prompt"}
          </button>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1.25fr_1fr]">
        <section className="space-y-6">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl shadow-black/40 backdrop-blur">
            <div className="border-b border-white/10 px-7 pb-4 pt-7">
              <h2 className="text-xl font-semibold">
                {selectedPreset.name}
              </h2>
              <p className="text-sm text-white/70">
                {selectedPreset.tagline}
              </p>
            </div>

            <div className="grid gap-8 px-7 pb-10 pt-7 lg:grid-cols-[1.05fr_1fr]">
              <div>
                <div
                  className="relative h-64 overflow-hidden rounded-2xl border border-white/10 shadow-inner shadow-black/30"
                  style={{ background: selectedPreset.gradient }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.35),transparent_55%)]" />
                  <div className="absolute left-6 top-6 space-y-2 text-sm font-medium text-white/90">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-wide">
                      Hero
                    </span>
                    <div className="max-w-[240px] text-lg font-semibold leading-snug">
                      {selectedPreset.hero.headline}
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 space-y-3">
                    <p className="text-sm text-white/80">
                      {selectedPreset.hero.subheadline}
                    </p>
                    <button
                      style={{ backgroundColor: selectedPreset.accent }}
                      className="inline-flex items-center justify-center rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wide text-black backdrop-blur transition hover:scale-105"
                    >
                      {selectedPreset.hero.cta}
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-5 text-sm text-white/80">
                <div>
                  <h3 className="text-xs uppercase tracking-wide text-white/60">
                    Art direction
                  </h3>
                  <p className="mt-2 text-base text-white">
                    {selectedPreset.vibe}
                  </p>
                  <p className="mt-1">
                    Palette direction: {selectedPreset.paletteDescription}.
                  </p>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-wide text-white/60">
                    Signature moments
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {selectedPreset.sections.map((section) => (
                      <li
                        key={section}
                        className="flex items-start gap-2 text-white/75"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60" />
                        <span>{section}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-wide text-white/60">
                    Visual highlights
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedPreset.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-black/40 backdrop-blur">
            <h2 className="text-lg font-semibold text-white">
              Curated design showcases
            </h2>
            <p className="mt-1 text-sm text-white/60">
              Tap a preset to infuse the prompt with ready-to-use art direction.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {designPresets.map((preset) => {
                const active = selectedPreset.id === preset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => setSelectedPreset(preset)}
                    className={`relative overflow-hidden rounded-2xl border px-4 py-5 text-left transition focus:outline-none focus:ring-2 focus:ring-white/40 ${
                      active
                        ? "border-white/60 bg-white/15 shadow-lg shadow-black/30"
                        : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10"
                    }`}
                  >
                    <div
                      className="absolute inset-0 opacity-60"
                      style={{ background: preset.gradient }}
                    />
                    <div className="relative space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-semibold text-white">
                          {preset.name}
                        </h3>
                        {active && (
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/80 text-xs font-bold text-black">
                            ✓
                          </span>
                        )}
                      </div>
                      <p className="text-xs uppercase tracking-wide text-white/65">
                        {preset.tagline}
                      </p>
                      <p className="text-sm text-white/80">
                        Palette: {preset.paletteDescription}.
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        </section>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/40 backdrop-blur">
            <h2 className="text-lg font-semibold text-white">
              Prompt ingredients
            </h2>
            <p className="mt-1 text-sm text-white/60">
              Dial in the brand narrative, tone, and interactive moments you
              want your AI partner to explore.
            </p>

            <div className="mt-6 space-y-5 text-sm">
              <div className="space-y-2">
                <label className="flex items-center justify-between text-xs uppercase tracking-wide text-white/60">
                  Target audience
                  <button
                    onClick={() => setTargetAudience(randomFrom(targetAudiences))}
                    className="text-white/60 underline-offset-2 transition hover:text-white"
                  >
                    shuffle
                  </button>
                </label>
                <select
                  value={targetAudience}
                  onChange={(event) => setTargetAudience(event.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white focus:border-white/40 focus:outline-none"
                >
                  {targetAudiences.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center justify-between text-xs uppercase tracking-wide text-white/60">
                  Tone
                  <button
                    onClick={() => setTone(randomFrom(toneOptions))}
                    className="text-white/60 underline-offset-2 transition hover:text-white"
                  >
                    shuffle
                  </button>
                </label>
                <select
                  value={tone}
                  onChange={(event) => setTone(event.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white focus:border-white/40 focus:outline-none"
                >
                  {toneOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center justify-between text-xs uppercase tracking-wide text-white/60">
                  Layout narrative
                  <button
                    onClick={() => setLayout(randomFrom(layoutOptions))}
                    className="text-white/60 underline-offset-2 transition hover:text-white"
                  >
                    shuffle
                  </button>
                </label>
                <select
                  value={layout}
                  onChange={(event) => setLayout(event.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white focus:border-white/40 focus:outline-none"
                >
                  {layoutOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center justify-between text-xs uppercase tracking-wide text-white/60">
                  Interaction signature
                  <button
                    onClick={() => setInteraction(randomFrom(interactionOptions))}
                    className="text-white/60 underline-offset-2 transition hover:text-white"
                  >
                    shuffle
                  </button>
                </label>
                <select
                  value={interaction}
                  onChange={(event) => setInteraction(event.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white focus:border-white/40 focus:outline-none"
                >
                  {interactionOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center justify-between text-xs uppercase tracking-wide text-white/60">
                  Primary CTA
                  <button
                    onClick={() =>
                      setCallToAction(randomFrom(callToActionOptions))
                    }
                    className="text-white/60 underline-offset-2 transition hover:text-white"
                  >
                    shuffle
                  </button>
                </label>
                <select
                  value={callToAction}
                  onChange={(event) => setCallToAction(event.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white focus:border-white/40 focus:outline-none"
                >
                  {callToActionOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wide text-white/60">
                  Custom notes
                </label>
                <textarea
                  value={customNotes}
                  onChange={(event) => setCustomNotes(event.target.value)}
                  placeholder="Add any must-have inspiration, references, or performance targets."
                  className="h-24 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-inner shadow-black/40 backdrop-blur">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
              {checkSvg}
              Prompt ready to paste
            </h2>
            <p className="mt-1 text-sm text-white/60">
              Use this inside Midjourney, Galileo AI, v0, or your favourite
              design assistant and iterate from there.
            </p>
            <pre className="mt-4 max-h-72 overflow-y-auto whitespace-pre-wrap rounded-2xl border border-white/10 bg-black/50 p-4 text-sm leading-relaxed text-white/85 shadow-sm shadow-black/40">
              {prompt}
            </pre>
          </div>
        </aside>
      </main>
    </div>
  );
}
