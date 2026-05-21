import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const navLinks = [
  { num: "01", href: "#approche", label: "Approche" },
  { num: "02", href: "#services", label: "Services" },
  { num: "03", href: "#expertise", label: "Expertise" },
  { num: "04", href: "#cas", label: "Cas" },
  { num: "05", href: "#methode", label: "Méthode" },
];

const tickerItems = [
  "Audit IA stratégique",
  "Architecture On-premise / Hybride",
  "MLOps & industrialisation",
  "Conformité DORA",
  "Benchmark open source",
  "RAG & agents conversationnels",
  "Detection de fraude",
];

const services = [
  {
    num: "/ 01",
    title: (
      <>
        Audit & <span className="it">Benchmark IA</span>
      </>
    ),
    desc: "Cartographie objective des solutions, méthodes et tendances IA pertinentes pour votre contexte métier et technique. Analyse SWOT, matrice d'alignement stratégique, recommandations priorisées.",
    tags: ["Open source", "Marché sectoriel", "SWOT contextualisé", "Feuille de route"],
  },
  {
    num: "/ 02",
    title: (
      <>
        Architecture <span className="it">data & IA</span>
      </>
    ),
    desc: "Audit d'hébergement on-premise vs hybride au regard de DORA et de votre culture SI. Conception d'architectures IA souveraines, intégration GPU, choix open source argumentés.",
    tags: ["On-premise / Hybride", "GPU & inférence", "DORA · RGPD", "Souveraineté"],
  },
  {
    num: "/ 03",
    title: (
      <>
        Industrialisation <span className="it">& MLOps</span>
      </>
    ),
    desc: "Mise en production des modèles, monitoring, reproductibilité. Nous accompagnons le passage de l'expérimentation à l'approche produit IA — pilotée, mesurée, maintenable dans la durée.",
    tags: ["MLOps", "Monitoring", "Approche produit", "CI/CD modèles"],
  },
  {
    num: "/ 04",
    title: (
      <>
        Coaching <span className="it">& montée en compétences</span>
      </>
    ),
    desc: "Transfert de savoir-faire vers vos équipes data et SI. Ateliers, design d'organisation cible (métiers · DSI · data · IA), définition d'une vision du travail collaboratif homme-IA.",
    tags: ["Ateliers", "Org. cible", "Travail collaboratif", "REX sectoriel"],
  },
];

const pillars = [
  {
    glyph: "α",
    title: "Souveraineté & on-premise",
    desc: "Architectures IA hébergées sur infrastructures internes, avec GPU dédiés. Évaluation factuelle des scénarios hybrides quand ils apportent une vraie valeur — pas par dogme.",
    keys: "vLLM · Triton · K8s · Ollama · Llama.cpp",
  },
  {
    glyph: "β",
    title: "Cas d'usage prioritaires",
    desc: "Lecture documentaire, agents conversationnels RAG, détection de fraude, automatisation des processus métiers. Nous arbitrons aussi entre IA et RPA selon le ROI réel.",
    keys: "RAG · OCR · Classification · NER · RPA",
  },
  {
    glyph: "γ",
    title: "Conformité & gouvernance",
    desc: "Maîtrise du règlement DORA (résilience opérationnelle), RGPD, et des cadres internes de gouvernance des données. Intégrés dès la conception, pas en bout de chaîne.",
    keys: "DORA · RGPD · ISO 27001 · AI Act",
  },
  {
    glyph: "δ",
    title: "Industrialisation MLOps",
    desc: "Du notebook au produit. Pipelines reproductibles, registre de modèles, monitoring de dérive, observabilité — tout ce qui transforme un pilote en service mesurable.",
    keys: "MLflow · Airflow · Prometheus · Grafana · DVC",
  },
];

const stackLayers = [
  { lab: "Inférence", items: ["vLLM", "Triton", "TGI", "Ollama"], hi: "vLLM" },
  { lab: "Modèles", items: ["Mistral", "Llama", "Qwen", "Granite"], hi: "Llama" },
  { lab: "RAG / VDB", items: ["Qdrant", "Weaviate", "pgvector", "Milvus"], hi: "Weaviate" },
  { lab: "Orchestration", items: ["LangGraph", "Haystack", "LlamaIndex"], hi: "LlamaIndex" },
  { lab: "Plateforme", items: ["Kubernetes", "K3s", "Slurm", "Nvidia GPU Operator"], hi: "Kubernetes" },
  { lab: "MLOps", items: ["MLflow", "Airflow", "DVC", "Prometheus"], hi: "DVC" },
];

const phases = [
  {
    num: "01",
    title: "Cadrage",
    week: "Semaines 1–2 · sur site",
    desc: "Entretiens individuels avec la DSI. Vision 360° du contexte SI, des cas d'usage et des contraintes réglementaires.",
    deliv: "→ Compte-rendu d'entretiens",
  },
  {
    num: "02",
    title: "Recherche",
    week: "Semaines 3–4 · à distance",
    desc: "Benchmark des solutions IA on-premise, hybrides et open source. Analyse des tendances sectorielles, étude DORA, évaluation RPA.",
    deliv: "→ Benchmark IA",
  },
  {
    num: "03",
    title: "Analyse",
    week: "Semaines 5–6 · à distance",
    desc: "SWOT contextualisé, audit on-premise vs hybride, matrice d'alignement stratégique, recommandations priorisées.",
    deliv: "→ Audit + SWOT + Matrice",
  },
  {
    num: "04",
    title: "Restitution",
    week: "Semaines 7–8 · sur site",
    desc: "Présentation des résultats à la DSI. Remise d'une documentation directement réutilisable pour le Comité de Direction.",
    deliv: "→ Feuille de route",
  },
];

const insights = [
  {
    tag: "Analyse",
    readTime: "12 min · lecture",
    title: "DORA et IA on-premise : comment cartographier ses dépendances technologiques sans dogme.",
    date: "14 mai 2026",
  },
  {
    tag: "Benchmark",
    readTime: "9 min · lecture",
    title: "Inférence LLM on-premise : vLLM, Triton, TGI — quels arbitrages réels en 2026 ?",
    date: "3 mai 2026",
  },
  {
    tag: "REX",
    readTime: "8 min · lecture",
    title: "Industrialiser un RAG en assurance : ce que personne ne dit sur la gouvernance documentaire.",
    date: "22 avril 2026",
  },
];

function ServiceArrow() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 13L13 3M6 3h7v7" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <nav className="top">
        <div className="inner">
          <Link href="#top" className="brand">
            <Image
              src="/assets/kotech-logotype.png"
              alt="Kotech"
              width={120}
              height={28}
              priority
            />
            <span className="tag">IA · Conseil · Architecture</span>
          </Link>
          <div className="nav-links">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className="num">{link.num}</span>
                {link.label}
              </Link>
            ))}
          </div>
          <Link href="#contact" className="cta-btn">
            Prendre RDV
            <span className="arrow" />
          </Link>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="wrap">
          <Reveal className="eyebrow" style={{ marginBottom: 56 }}>
            Kotech Engineering · Conseil en intelligence artificielle
          </Reveal>
          <div className="hero-grid">
            <Reveal as="h1">
              L&apos;<span className="accent">IA</span>,<br />
              augmentée
              <br />
              <span className="by italic">par l&apos;humain.</span>
            </Reveal>
            <Reveal className="hero-meta">
              <p className="hero-sub">
                Nous aidons les DSI, mutuelles et industriels à structurer leur stratégie IA :
                audit, architecture, alignement réglementaire — sans renier ni la culture interne,
                ni la souveraineté des données.
              </p>
              <div className="hero-meta-row">
                <div>
                  <div className="label">Spécialités</div>
                  <div className="value">
                    Benchmark IA
                    <br />
                    Architecture data
                    <br />
                    MLOps & industrialisation
                  </div>
                </div>
                <div>
                  <div className="label">Contextes</div>
                  <div className="value">
                    On-premise
                    <br />
                    Hybride · Open source
                    <br />
                    DORA · RGPD
                  </div>
                </div>
              </div>
              <div className="hero-cta">
                <Link href="#contact" className="cta-btn">
                  Demander un audit <span className="arrow" />
                </Link>
                <Link href="#approche" className="ghost-btn">
                  Notre approche
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="stats-strip" aria-label="Repères">
        <div className="wrap">
          <div className="stats-row">
            <div className="stat-item">
              <div className="stat-since">Depuis 2024 —</div>
            </div>
            <div className="stat-item">
              <div className="stat-v">
                <em>30</em>+
              </div>
              <div className="stat-l">Missions livrées</div>
            </div>
            <div className="stat-item">
              <div className="stat-v">
                <em>8</em>
              </div>
              <div className="stat-l">Secteurs couverts</div>
            </div>
            <div className="stat-item">
              <div className="stat-v">
                100<em>%</em>
              </div>
              <div className="stat-l">Souveraineté préservée</div>
            </div>
            <div className="stat-item">
              <div className="stat-v">
                <em>0</em>
              </div>
              <div className="stat-l">Vendor lock-in</div>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>

      <section className="block manifeste" id="approche">
        <div className="wrap">
          <div className="section-head">
            <div className="left">
              <span className="num">01 — Approche</span>
              <div className="eyebrow">Manifeste</div>
            </div>
            <h2>
              L&apos;intelligence artificielle <em>n&apos;a de sens</em> que si elle sert
              <br />
              les personnes qui l&apos;utilisent.
            </h2>
          </div>
          <Reveal className="quote">
            Notre conviction&nbsp;: l&apos;IA est un catalyseur — elle{" "}
            <em style={{ color: "var(--kotech-light)", fontStyle: "italic" }}>amplifie</em> la
            créativité, renforce la décision, et fait progresser l&apos;organisation, à condition
            de rester ancrée dans son contexte humain et technique.
          </Reveal>
          <div className="manifeste-grid">
            {[
              {
                marker: "i.",
                title: "Le contexte avant les outils",
                text: "Nous ne plaquons pas de solutions. Nous partons de votre culture SI, de vos contraintes réglementaires et de la maturité réelle de vos équipes. Un cas d'usage pertinent vaut mieux qu'une démo brillante.",
              },
              {
                marker: "ii.",
                title: "Un regard extérieur, factuel",
                text: "Nous challengeons les convictions internes — y compris les nôtres — en croisant retours d'expérience, benchmarks marché et analyse architecturale. Notre livrable est un outil de dialogue, pas une opinion.",
              },
              {
                marker: "iii.",
                title: "Industrialiser, pas démontrer",
                text: "Nous accompagnons le passage de l'expérimentation au produit IA reproductible : MLOps, monitoring, gouvernance. C'est là que la valeur se crée — et qu'elle se mesure.",
              },
            ].map((item) => (
              <Reveal key={item.marker}>
                <span className="marker">{item.marker}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="block" id="services">
        <div className="wrap">
          <div className="section-head">
            <div className="left">
              <span className="num">02 — Services</span>
              <div className="eyebrow">Quatre offres, un fil rouge</div>
            </div>
            <p className="section-lede">
              Du <em>cadrage stratégique</em> à la mise en production. Nous intervenons sur
              l&apos;ensemble du cycle de vie d&apos;une initiative IA, avec une exigence
              d&apos;alignement permanent entre business, technique et réglementaire.
            </p>
          </div>
          <div className="services-list">
            {services.map((service) => (
              <Reveal key={service.num} className="service">
                <div className="s-num">{service.num}</div>
                <h3>{service.title}</h3>
                <div>
                  <p className="s-desc">{service.desc}</p>
                  <div className="s-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="s-arrow">
                  <ServiceArrow />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="block expertise" id="expertise">
        <div className="wrap">
          <div className="section-head">
            <div className="left">
              <span className="num">03 — Expertise</span>
              <div className="eyebrow">Stack & cadre</div>
            </div>
            <p className="section-lede">
              Une expertise <em>technique et réglementaire</em> taillée pour les organisations à
              forte culture SI : open source, on-premise, conformité européenne.
            </p>
          </div>
          <div className="tech-grid">
            <div className="pillars">
              {pillars.map((pillar) => (
                <Reveal key={pillar.glyph} className="pillar">
                  <div className="glyph">{pillar.glyph}</div>
                  <div>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.desc}</p>
                    <div className="keys">{pillar.keys}</div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="stack">
              <div className="stack-title">
                <h3>Stack de référence</h3>
                <div className="badge">Open Source</div>
              </div>
              {stackLayers.map((layer) => (
                <div key={layer.lab} className="layer">
                  <div className="lab">{layer.lab}</div>
                  <div className="items">
                    {layer.items.map((item) => (
                      <span key={item} className={item === layer.hi ? "hi" : undefined}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <div className="stack-foot">
                <span>
                  Compatible{" "}
                  <em style={{ color: "var(--kotech)", fontStyle: "normal" }}>on-premise</em>
                </span>
                <span className="ok">✓ DORA-ready</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="block case" id="cas">
        <div className="wrap">
          <div className="section-head">
            <div className="left">
              <span className="num">04 — Cas client</span>
              <div className="eyebrow">Référence sectorielle</div>
            </div>
            <p className="section-lede">
              Comment nous accompagnons un <em>acteur mutualiste</em> à structurer son adoption de
              l&apos;IA, sans renoncer à sa culture on-premise.
            </p>
          </div>
          <Reveal className="case-card">
            <div className="case-head">
              <div className="eyebrow">Mission en cours · 2026</div>
              <div className="anon">Secteur · Assurance mutualiste</div>
            </div>
            <h2 className="case-title">
              Benchmark IA, audit d&apos;architecture &amp; <em>alignement stratégique</em>.
            </h2>
            <div className="case-grid">
              <div>
                <div className="col-label">Contexte</div>
                <p>
                  Une mutuelle d&apos;assurance avec une culture historique de développement
                  interne, une infrastructure on-premise et une orientation open source affirmée.
                  La DSI souhaite challenger ses convictions et structurer sa réflexion IA pour
                  répondre aux attentes de la Direction Générale — tout en respectant DORA et le
                  RGPD.
                </p>
              </div>
              <div>
                <div className="col-label">Notre intervention</div>
                <ul>
                  <li>Audit des choix d&apos;hébergement on-premise vs hybride</li>
                  <li>Benchmark des solutions IA open source applicables</li>
                  <li>Analyse SWOT contextualisée + matrice d&apos;alignement</li>
                  <li>Feuille de route priorisée par effort × risque × valeur</li>
                </ul>
              </div>
            </div>
            <div className="case-stats">
              <div className="stat">
                <div className="v">5–6</div>
                <div className="l">Interlocuteurs DSI</div>
              </div>
              <div className="stat">
                <div className="v">
                  8<em>w</em>
                </div>
                <div className="l">Durée de mission</div>
              </div>
              <div className="stat">
                <div className="v">4</div>
                <div className="l">Phases structurées</div>
              </div>
              <div className="stat">
                <div className="v">6+</div>
                <div className="l">Livrables réutilisables</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="block" id="methode">
        <div className="wrap">
          <div className="section-head">
            <div className="left">
              <span className="num">05 — Méthode</span>
              <div className="eyebrow">Quatre phases, huit semaines</div>
            </div>
            <p className="section-lede">
              Une démarche <em>structurée et factuelle</em>, du cadrage à la restitution — pensée
              pour produire des livrables réutilisables en interne.
            </p>
          </div>
          <div className="phases">
            {phases.map((phase) => (
              <Reveal key={phase.num} className="phase">
                <div className="ph-num">{phase.num}</div>
                <h3>{phase.title}</h3>
                <div className="week">{phase.week}</div>
                <p>{phase.desc}</p>
                <div className="deliv">{phase.deliv}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="block" id="apropos">
        <div className="wrap">
          <div className="section-head">
            <div className="left">
              <span className="num">06 — À propos</span>
              <div className="eyebrow">L&apos;équipe</div>
            </div>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <Reveal>
                <p>
                  Kotech est un cabinet de conseil IA <em>indépendant</em>, fondé sur la conviction
                  que la technologie doit servir les organisations qui la déploient — leur culture,
                  leurs contraintes, leurs équipes.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  Nous travaillons aux côtés des DSI et des directions data, en apportant un{" "}
                  <em>regard extérieur factuel</em>, et une expertise concrète des contextes
                  on-premise, open source et réglementés.
                </p>
              </Reveal>
            </div>
            <Reveal className="founder-card">
              <div className="founder-photo">portrait fondateur</div>
              <h3>Sebastian Pavel</h3>
              <div className="role">Consultant IA · Fondateur</div>
              <p>
                15+ ans d&apos;expérience en architecture data et IA pour des organisations à
                forte exigence réglementaire (assurance, industrie, secteur public).
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="block insights" id="insights">
        <div className="wrap">
          <div className="insights-head">
            <div>
              <div className="num" style={{ display: "block", marginBottom: 14 }}>
                07 — Publications
              </div>
              <h2>
                Ce que nous <em>publions</em>, ce que nous regardons.
              </h2>
            </div>
            <span className="insights-cta">Toutes les publications →</span>
          </div>
          <div className="insights-grid">
            {insights.map((item) => (
              <Reveal key={item.title} as="article" className="insight">
                <div className="insight-meta">
                  <span className="tag">{item.tag}</span>
                  <span>{item.readTime}</span>
                </div>
                <h3>{item.title}</h3>
                <div className="insight-meta">
                  <span className="date">{item.date}</span>
                  <span className="read">Lire</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="block contact" id="contact">
        <div className="wrap">
          <div className="eyebrow" style={{ color: "rgba(244,239,230,0.55)" }}>
            08 — Contact
          </div>
          <h2 style={{ marginTop: 24 }}>
            Parlons de votre <em>initiative IA</em>.
          </h2>
          <p className="lead">
            Un audit, un avis sur une architecture, un cadrage stratégique avant Comité de
            Direction — le premier échange est gratuit et sans engagement. 45 minutes pour
            comprendre votre contexte.
          </p>
          <div className="contact-grid">
            <div className="contact-actions">
              <div className="row">
                <span className="k">Email</span>
                <a href="mailto:sebastian@kotech.fr" className="v">
                  sebastian@kotech.fr
                </a>
              </div>
              <div className="row">
                <span className="k">Téléphone</span>
                <span className="v">+33 (0)6 — sur demande</span>
              </div>
              <div className="row">
                <span className="k">Localisation</span>
                <span className="v">Paris · France · International</span>
              </div>
              <div className="row">
                <span className="k">Disponibilité</span>
                <span className="v">Missions Q3 / Q4 2026</span>
              </div>
            </div>
            <div>
              <a href="mailto:sebastian@kotech.fr?subject=Demande%20d%27audit%20IA" className="big-cta">
                Demander un audit
                <span className="arrow" style={{ background: "var(--ink)" }} />
              </a>
              <p
                style={{
                  marginTop: 20,
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "rgba(244,239,230,0.45)",
                }}
              >
                Ou écrivez-nous directement →
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="foot">
        <div className="wrap inner">
          <div>© Kotech Engineering · 2026</div>
          <div className="links">
            <Link href="#">Mentions légales</Link>
            <Link href="#">RGPD</Link>
            <Link href="#">LinkedIn</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
