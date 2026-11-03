'use client';

import { useState } from 'react';

const navItems = [
  { id: 'home', icon: '⌂', label: 'Accueil' },
  { id: 'journey', icon: '✧', label: 'Parcours' },
  { id: 'coach', icon: '♡', label: 'Coach' },
  { id: 'journal', icon: '▤', label: 'Journal' },
  { id: 'profile', icon: '○', label: 'Profil' },
];

export default function Home() {
  const [active, setActive] = useState('home');
  const [done, setDone] = useState(false);
  const [mood, setMood] = useState('Bien');

  const sectionTitle = active === 'home' ? 'Ton espace' :
    active === 'journey' ? 'Mon parcours' :
    active === 'coach' ? 'Ma coach' :
    active === 'journal' ? 'Mon journal' : 'Mon profil';

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-mark">TG</div>
          <div className="brand-copy"><span>THAT GIRL</span><small>BECOME HER</small></div>
        </div>
        <nav className="side-nav" aria-label="Navigation principale">
          {navItems.map(item => <button key={item.id} onClick={() => setActive(item.id)} className={active === item.id ? 'nav-item active' : 'nav-item'} aria-current={active === item.id ? 'page' : undefined}><span>{item.icon}</span><small>{item.label}</small></button>)}
        </nav>
        <p className="sidebar-note">UN JOUR À LA FOIS, À TON RYTHME.</p>
      </aside>

      <div className="main-content">
        <header className="topbar">
          <div className="mobile-brand">
            <div className="brand-mark">TG</div>
            <div className="brand-copy"><span>THAT GIRL</span><small>BECOME HER</small></div>
          </div>
          <button className="avatar" aria-label="Ouvrir le profil" onClick={() => setActive('profile')}>A</button>
        </header>

        <section className="welcome">
          <p className="eyebrow">TON NOUVEAU CHAPITRE COMMENCE ICI</p>
          <h1>{sectionTitle}<br/><em>avec intention.</em></h1>
          <p className="intro">Tu n’as pas besoin de devenir quelqu’un d’autre. Tu construis, un jour après l’autre, une version de toi qui te ressemble.</p>
        </section>

        {active === 'home' && <>
          <section className="mood-card">
            <div className="section-heading"><div><span className="eyebrow">CHECK-IN DU JOUR</span><h2>Comment tu te sens ?</h2></div><span className="sparkle">✦</span></div>
            <div className="mood-options">
              {['Rayonnante', 'Bien', 'Moyen', 'Fatiguée'].map(item => <button key={item} onClick={() => setMood(item)} className={mood === item ? 'mood selected' : 'mood'}>{item}</button>)}
            </div>
            <p className="microcopy">Ton humeur est un repère, pas une note. ♡</p>
          </section>

          <section className="daily-card">
            <div className="daily-top"><span className="eyebrow">TON PETIT PAS DU JOUR</span><span className="day-pill">JOUR 01 / 30</span></div>
            <h2>Apprendre à te regarder autrement</h2>
            <p>Aujourd’hui, prends deux minutes pour écrire trois qualités que tu reconnais chez toi. Même les plus discrètes comptent.</p>
            <button className={done ? 'primary-button completed' : 'primary-button'} onClick={() => setDone(!done)}>{done ? '✓ Défi accompli' : 'Marquer comme terminé'}</button>
            <div className="progress-line"><span style={{width: done ? '3.3%' : '0%'}} /></div>
            <div className="progress-label"><span>Ton parcours de 30 jours</span><b>{done ? '1%' : '0%'}</b></div>
          </section>

          <section className="affirmation">
            <span className="eyebrow">À GARDER EN TÊTE</span>
            <p>« Ma valeur ne dépend pas du regard des autres. »</p>
            <span className="affirmation-foot">UNE PENSÉE À LA FOIS <span>✧</span></span>
          </section>
        </>}

        {active === 'journey' && <section className="simple-card"><span className="eyebrow">TON PROGRAMME</span><h2>30 jours pour avancer à ton rythme.</h2><div className="phase"><b>01 — Découverte de soi</b><span>Jours 1 à 7</span><p>Faire le point, reconnaître tes forces et comprendre ce qui compte pour toi.</p></div><div className="phase"><b>02 — Reconstruction</b><span>Jours 8 à 14</span><p>Renforcer ton estime et installer des habitudes qui te font du bien.</p></div><div className="phase"><b>03 — Affirmation</b><span>Jours 15 à 21</span><p>Exprimer tes besoins, poser tes limites et prendre ta place.</p></div><div className="phase"><b>04 — Évolution</b><span>Jours 22 à 30</span><p>Clarifier tes ambitions et continuer avec confiance.</p></div></section>}

        {active === 'coach' && <section className="simple-card"><span className="eyebrow">TON ESPACE DE CONVERSATION</span><h2>Une coach qui t’encourage avec douceur et franchise.</h2><p>Les modes Confidence, Emotional, Glow Up, Discipline et Ambition seront disponibles ici.</p><div className="coming-soon">La coach IA sera connectée dans une prochaine étape.</div></section>}

        {active === 'journal' && <section className="simple-card"><span className="eyebrow">TON ESPACE PRIVÉ</span><h2>Dépose tes pensées, sans jugement.</h2><textarea placeholder="Qu’aimerais-tu déposer ici aujourd’hui ?" rows={5} /><p className="microcopy">Cette première maquette ne sauvegarde pas encore tes notes.</p></section>}

        {active === 'profile' && <section className="simple-card"><span className="eyebrow">MON PROFIL</span><h2>Ton évolution, à ta façon.</h2><p>Les paramètres, la confidentialité et la gestion de tes données seront ajoutés avant la mise en service.</p><div className="coming-soon">Version de démonstration — aucune donnée personnelle n’est enregistrée.</div></section>}

        <p className="footer-note">THAT GIRL — BECOME HER · VERSION 0.1</p>
      </div>
      <footer className="bottom-nav">
        {navItems.map(item => <button key={item.id} onClick={() => setActive(item.id)} className={active === item.id ? 'nav-item active' : 'nav-item'} aria-current={active === item.id ? 'page' : undefined}><span>{item.icon}</span><small>{item.label}</small></button>)}
      </footer>
    </main>
  );
}
