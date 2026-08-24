import { useState } from 'react';

const categories = [
  ['Cybersecurity', 'Defensive architecture, threat modeling, identity, and security operations.'],
  ['AI Governance', 'Practical controls for responsible AI, model risk, assurance, and oversight.'],
  ['Public-Source Intelligence', 'Structured collection, validation, analysis, and reporting from lawful public sources.'],
  ['Geospatial Intelligence', 'Location intelligence, spatial reasoning, mapping workflows, and decision support.'],
  ['Automation Engineering', 'Reliable automation patterns for security, intelligence, operations, and reporting.'],
  ['Executive Risk Intelligence', 'Decision-grade intelligence for leaders managing uncertainty and exposure.'],
];

const products = [
  ['Professional Certificates', 'Role-focused programs built around applied capability.'],
  ['Executive Certificates', 'Compressed strategic programs for senior decision-makers.'],
  ['Master Programs', 'Deep, multidisciplinary study for advanced practitioners.'],
  ['Enterprise Learning', 'Cohort-based learning mapped to organizational priorities.'],
  ['Government Training', 'Mission-ready instruction for public-sector teams and partners.'],
  ['University Partnerships', 'Curriculum and applied research pathways with academic partners.'],
];

const community = ['Learner Community', 'Research Community', 'Industry Partners', 'Beta Testers', 'Technical Blog', 'Podcast'];
const resources = ['Articles', 'White Papers', 'Threat Reports', 'AI Governance Frameworks', 'Security Playbooks'];

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4"><path d="M4 10h11m-4-4 4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Mark() {
  return <span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/10 text-rose-300 shadow-[0_0_30px_rgba(244,63,94,.18)]">CG</span>;
}

export default function ClearGlassLearningSection() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <section id="clearglass-learning" aria-labelledby="learning-title" className="relative isolate overflow-hidden bg-[#07090d] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(244,63,94,.18),transparent_32%),radial-gradient(circle_at_85%_30%,rgba(251,146,60,.10),transparent_28%),linear-gradient(180deg,#090b10,#050609)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:56px_56px]" />

      <nav aria-label="Learning platform navigation" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#learning-title" className="flex items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"><Mark /><span className="font-semibold tracking-tight">ClearGlass <span className="text-white/45">Learning</span></span></a>
        <button type="button" aria-expanded={mobileOpen} aria-controls="learning-mobile-nav" onClick={() => setMobileOpen(v => !v)} className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400">Menu</button>
        <div className="hidden items-center gap-7 text-sm text-white/65 md:flex">
          <a className="hover:text-white" href="#learning-categories">Learning</a>
          <a className="hover:text-white" href="#learning-products">Programs</a>
          <a className="hover:text-white" href="#learning-community">Community</a>
          <a className="hover:text-white" href="#learning-resources">Resources</a>
          <a className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10" href="#learning-enterprise">Enterprise</a>
        </div>
      </nav>
      {mobileOpen && <div id="learning-mobile-nav" className="border-y border-white/10 bg-black/30 px-5 py-4 md:hidden"><div className="mx-auto grid max-w-7xl gap-3 text-sm"><a href="#learning-categories" onClick={() => setMobileOpen(false)}>Learning</a><a href="#learning-products" onClick={() => setMobileOpen(false)}>Programs</a><a href="#learning-community" onClick={() => setMobileOpen(false)}>Community</a><a href="#learning-resources" onClick={() => setMobileOpen(false)}>Resources</a><a href="#learning-enterprise" onClick={() => setMobileOpen(false)}>Enterprise</a></div></div>}

      <div className="mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:pb-28 lg:pt-28">
        <div className="max-w-4xl">
          <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[.22em] text-rose-300">ClearGlass Inc. · Professional Learning</p>
          <h1 id="learning-title" className="text-balance text-5xl font-semibold tracking-[-.04em] sm:text-6xl lg:text-8xl">Build capability for a world where <span className="bg-gradient-to-r from-rose-300 via-orange-200 to-white bg-clip-text text-transparent">transparency is infrastructure.</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">Original, applied learning in cybersecurity, AI governance, intelligence, geospatial systems, automation, and executive risk—designed for practitioners who need decisions to hold up under scrutiny.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#learning-products" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-orange-400 px-6 py-3.5 font-semibold text-white shadow-[0_10px_40px_rgba(244,63,94,.25)] transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"><span>Explore programs</span><Arrow /></a>
            <a href="#learning-enterprise" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400">Talk to ClearGlass</a>
          </div>
          <div className="mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
            {[['6','learning domains'],['6','program formats'],['Applied','method'],['Original','curriculum']].map(([v,l]) => <div key={l} className="bg-white/[.045] p-4 sm:p-5"><div className="text-xl font-semibold">{v}</div><div className="mt-1 text-xs text-white/45">{l}</div></div>)}
          </div>
        </div>

        <div id="learning-categories" className="scroll-mt-20 pt-24 lg:pt-32">
          <div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-[.2em] text-rose-300">01 · Learning categories</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Learn across the systems that shape risk.</h2><p className="mt-4 text-white/55">A multidisciplinary catalog connects technical execution with governance, intelligence, and leadership.</p></div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map(([title, desc], i) => <article key={title} className="group rounded-3xl border border-white/10 bg-white/[.045] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-rose-300/30 hover:bg-white/[.07] focus-within:ring-2 focus-within:ring-rose-400"><div className="mb-7 flex items-center justify-between"><span className="font-mono text-xs text-white/35">0{i + 1}</span><span className="h-2 w-2 rounded-full bg-rose-400 shadow-[0_0_14px_rgba(244,63,94,.8)]" /></div><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/55">{desc}</p><a href="#learning-products" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-rose-200 opacity-80 transition group-hover:opacity-100">View pathways <Arrow /></a></article>)}
          </div>
        </div>

        <div id="learning-products" className="scroll-mt-20 pt-24 lg:pt-32">
          <div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-[.2em] text-rose-300">02 · Training products</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Credentials matched to the job.</h2></div>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{products.map(([title, desc]) => <a key={title} href="#learning-enterprise" className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[.07] to-white/[.025] p-6 transition hover:-translate-y-1 hover:border-orange-200/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/50">{desc}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/75">Explore <Arrow /></span></a>)}</div>
        </div>

        <div id="learning-community" className="scroll-mt-20 pt-24 lg:pt-32"><div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end"><div><p className="font-mono text-xs uppercase tracking-[.2em] text-rose-300">03 · Community</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Learning becomes leverage when practitioners connect.</h2></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{community.map(x => <a href="#learning-community" key={x} className="rounded-2xl border border-white/10 bg-white/[.035] px-4 py-5 text-sm text-white/70 transition hover:border-white/20 hover:bg-white/[.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400">{x}</a>)}</div></div></div>

        <div id="learning-resources" className="scroll-mt-20 pt-24 lg:pt-32"><div className="rounded-[2rem] border border-white/10 bg-white/[.045] p-6 backdrop-blur-xl sm:p-10"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><p className="font-mono text-xs uppercase tracking-[.2em] text-rose-300">04 · Resource center</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Reference material for real-world work.</h2><p className="mt-4 text-white/55">A growing library of analysis, frameworks, reports, and operational playbooks.</p></div><div className="grid gap-3 sm:grid-cols-2">{resources.map(x => <a href="#learning-resources" key={x} className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-4 text-sm font-medium text-white/75 hover:bg-white/[.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"><span>{x}</span><Arrow /></a>)}</div></div></div></div>

        <div className="grid gap-5 pt-24 lg:grid-cols-2 lg:pt-32">
          <article className="rounded-[2rem] border border-white/10 bg-white/[.045] p-7 sm:p-10"><p className="font-mono text-xs uppercase tracking-[.2em] text-rose-300">05 · Faculty</p><h2 className="mt-3 text-3xl font-semibold">Practitioners, researchers, and advisors.</h2><p className="mt-4 text-white/55">Founder-led instruction is complemented by expert contributors and industry advisors selected for domain depth and practical judgment.</p><div className="mt-7 flex flex-wrap gap-2 text-xs text-white/55"><span className="rounded-full border border-white/10 px-3 py-2">Founder Profile</span><span className="rounded-full border border-white/10 px-3 py-2">Expert Contributors</span><span className="rounded-full border border-white/10 px-3 py-2">Industry Advisors</span></div></article>
          <article id="learning-enterprise" className="scroll-mt-20 rounded-[2rem] border border-rose-300/15 bg-gradient-to-br from-rose-500/10 to-orange-400/5 p-7 sm:p-10"><p className="font-mono text-xs uppercase tracking-[.2em] text-rose-300">06 · Enterprise</p><h2 className="mt-3 text-3xl font-semibold">Train the organization, not just the individual.</h2><p className="mt-4 text-white/55">Build role-based capability around enterprise cybersecurity, AI risk management, and government readiness.</p><div className="mt-7 grid gap-2 text-sm text-white/70 sm:grid-cols-3"><span>Enterprise Cybersecurity Training</span><span>AI Risk Management Programs</span><span>Government Readiness Programs</span></div><a href="mailto:learning@clearglassinc.com" className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white">Start an enterprise conversation</a></article>
        </div>

        <footer className="mt-24 border-t border-white/10 pt-10 lg:mt-32"><div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5"><div className="lg:col-span-2"><div className="flex items-center gap-3"><Mark /><span className="font-semibold">ClearGlass Inc.</span></div><p className="mt-4 max-w-sm text-sm text-white/45">Transparency Is Infrastructure. Original professional education for security, intelligence, AI governance, automation, and risk.</p></div>{[['Company',['About','Training','Careers']],['Community',['Learners','Partners','Podcast']],['Resources',['Articles','White Papers','Security Playbooks']],['Legal',['Privacy','Terms','Contact']]].map(([head, links]) => <div key={head}><h3 className="text-sm font-semibold text-white/80">{head}</h3><ul className="mt-3 space-y-2 text-sm text-white/45">{links.map(x => <li key={x}><a href="#clearglass-learning" className="hover:text-white">{x}</a></li>)}</ul></div>)}</div><div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/30 sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} ClearGlass Inc.</span><span>Original ClearGlass curriculum · Not affiliated with Coursera</span></div></footer>
      </div>
    </section>
  );
}
