'use client';

import {
  ArrowRightIcon,
  BoltIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ClockIcon,
  FilmIcon,
  HomeIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  PlayIcon,
  PlusIcon,
  RocketLaunchIcon,
  SparklesIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';

const nav = [
  ['Studio', HomeIcon],
  ['Ideas', LightBulbIcon],
  ['Projects', Squares2X2Icon],
  ['Editor', FilmIcon],
  ['Publishing', RocketLaunchIcon],
  ['Analytics', ChartBarIcon],
] as const;

const stages = [
  { label: 'Research', icon: MagnifyingGlassIcon, value: '6 claims', state: 'Verified' },
  { label: 'Script', icon: PencilSquareIcon, value: '118 words', state: 'Ready' },
  { label: 'Scenes', icon: FilmIcon, value: '6 / 6', state: 'Generated' },
  { label: 'Edit', icon: SparklesIcon, value: 'Next', state: 'In production' },
];

const projects = [
  { title: "Napoleon Wasn't Actually Short", niche: 'Hidden History', progress: 72, status: 'Editing', time: 'Today' },
  { title: 'Why Vikings Never Wore Horned Helmets', niche: 'Hidden History', progress: 18, status: 'Research', time: 'Draft' },
  { title: 'The War That Lasted Less Than an Hour', niche: 'Hidden History', progress: 8, status: 'Idea', time: 'Draft' },
];

export default function Home() {
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand"><div className="brand-mark"><BoltIcon /></div><div><strong>ShortForge</strong><span>STUDIO</span></div></div>
        <nav className="nav-list">
          {nav.map(([label, Icon], index) => <button className={index === 0 ? 'nav-item active' : 'nav-item'} key={label}><Icon />{label}</button>)}
        </nav>
        <div className="sidebar-card">
          <span className="eyebrow">TODAY'S GOAL</span>
          <strong>Ship one Short.</strong>
          <p>Napoleon is 72% complete.</p>
          <div className="mini-progress"><span style={{ width: '72%' }} /></div>
        </div>
        <div className="profile"><div className="avatar">JM</div><div><strong>Jamie</strong><span>Solo Studio</span></div><button>•••</button></div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div><span className="eyebrow">MONDAY · OCT 19</span><h1>Good afternoon, Jamie.</h1><p>Your content team is ready. What are we making today?</p></div>
          <button className="primary"><PlusIcon />Create video</button>
        </header>

        <section className="hero-card">
          <div className="hero-glow" />
          <div className="hero-copy"><span className="pill"><SparklesIcon /> ACTIVE PRODUCTION</span><h2>Napoleon Wasn't Actually Short</h2><p>All six scenes are generated. Your first ShortForge project is ready to move into the editor.</p><div className="hero-actions"><button className="light-button"><PlayIcon />Open editor</button><button className="ghost-button">View production <ArrowRightIcon /></button></div></div>
          <div className="phone-preview"><div className="phone-screen"><div className="sun"/><div className="napoleon"><div className="hat"/><div className="head"/><div className="body"/><div className="legs"/></div><span>NAPOLEON</span><small>THE MYTH VS. THE MAN</small></div></div>
        </section>

        <div className="section-heading"><div><span className="eyebrow">PRODUCTION PIPELINE</span><h3>Today's workflow</h3></div><span className="quiet"><ClockIcon /> About 18 min left</span></div>
        <section className="stage-grid">
          {stages.map((stage, index) => { const Icon = stage.icon; return <article className={index === 3 ? 'stage-card current' : 'stage-card'} key={stage.label}><div className="stage-top"><div className="stage-icon"><Icon /></div>{index < 3 ? <CheckCircleIcon className="done" /> : <span className="pulse" />}</div><span>{stage.label}</span><strong>{stage.value}</strong><small>{stage.state}</small></article> })}
        </section>

        <div className="content-grid">
          <section>
            <div className="section-heading compact"><div><span className="eyebrow">PROJECTS</span><h3>Recent productions</h3></div><button className="text-button">View all <ArrowRightIcon /></button></div>
            <div className="project-list">
              {projects.map((project, index) => <article className="project-row" key={project.title}><div className={'thumb t' + index}><FilmIcon /></div><div className="project-info"><strong>{project.title}</strong><span>{project.niche} · {project.time}</span><div className="row-progress"><span style={{ width: `${project.progress}%` }} /></div></div><div className="project-meta"><span className={'status s' + index}>{project.status}</span><strong>{project.progress}%</strong></div></article>)}
            </div>
          </section>

          <aside className="ideas-card"><div className="idea-head"><div className="spark"><SparklesIcon /></div><div><span className="eyebrow">AI STRATEGIST</span><h3>Next ideas</h3></div></div><p>Based on your Hidden History visual bible.</p>{['Why Vikings Never Wore Horned Helmets','The War That Lasted Less Than an Hour','Cleopatra Lived Closer to the iPhone'].map((idea, i) => <div className="idea" key={idea}><span>{94-i*3}</span><strong>{idea}</strong><ArrowRightIcon /></div>)}<button className="idea-button"><SparklesIcon />Generate more ideas</button></aside>
        </div>
      </section>
    </main>
  );
}