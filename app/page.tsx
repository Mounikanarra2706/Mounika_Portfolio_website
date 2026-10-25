import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  Menu,
  Network,
  ShieldCheck,
  Workflow
} from "lucide-react";

const skills = [
  { title: "Generative & Agentic AI", items: ["LLMs", "RAG", "Agentic workflows", "LangChain", "LangGraph", "MCP"] },
  { title: "Retrieval & Knowledge", items: ["Hybrid search", "Vector search", "Embeddings", "BM25", "Reranking", "GraphRAG"] },
  { title: "ML & Data", items: ["Python", "SQL", "PySpark", "Scikit-learn", "XGBoost", "NLP"] },
  { title: "Engineering & Cloud", items: ["FastAPI", "REST APIs", "AWS", "Azure", "Docker", "Kubernetes", "CI/CD"] }
];

const focusAreas = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "Generative AI & RAG",
    text: "Designing retrieval-augmented applications that connect language models with trusted enterprise knowledge.",
    tags: ["Document ingestion", "Embeddings", "Grounded responses"]
  },
  {
    number: "02",
    icon: Workflow,
    title: "Agentic workflows",
    text: "Orchestrating multi-step workflows with state, conditional routing, tool calling, and appropriate human oversight.",
    tags: ["LangGraph", "Tool integration", "Workflow state"]
  },
  {
    number: "03",
    icon: Network,
    title: "Search & knowledge discovery",
    text: "Combining keyword, semantic, vector, and graph-based retrieval patterns to improve discovery of relevant information.",
    tags: ["Hybrid retrieval", "Reranking", "GraphRAG"]
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Production AI engineering",
    text: "Treating evaluation, security, observability, reliability, latency, and deployment as core parts of the AI solution.",
    tags: ["Evaluation", "MLOps / LLMOps", "Monitoring"]
  }
];

const approach = [
  ["Understand", "Start with the user need, constraints, data, and success criteria."],
  ["Design", "Choose the simplest architecture that meets quality, security, and scale needs."],
  ["Build & evaluate", "Implement retrieval, model workflows, APIs, and repeatable evaluation."],
  ["Operate & improve", "Monitor quality and reliability, learn from failures, and iterate."]
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#home" aria-label="Mounika Narra home">
          <span className="brand-mark">MN</span>
          <span>Mounika Narra</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#focus">Focus areas</a>
          <a href="#skills">Skills</a>
          <a href="#approach">Approach</a>
          <a className="nav-cta" href="#contact">Contact <ArrowUpRight size={15} /></a>
        </div>
      </nav>

      <section className="hero shell" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> SENIOR AI / ML ENGINEER</div>
          <h1>Building AI that is <span>useful, grounded,</span> and ready for the real world.</h1>
          <p className="hero-intro">
            I’m Mounika Narra. I work across Generative AI, agentic systems, retrieval, and machine learning—turning complex
            problems into practical, maintainable software.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#focus">Explore my work <ArrowDownRight size={17} /></a>
            <a className="button button-quiet" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
          </div>
          <div className="hero-meta">
            <span><Code2 size={15} /> Python & AI engineering</span>
            <span><Cloud size={15} /> Cloud-native systems</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Illustration of an AI system connecting data, retrieval, and applications">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="core-card">
            <div className="core-icon"><BrainCircuit size={34} strokeWidth={1.5} /></div>
            <span className="core-label">AI SYSTEMS</span>
            <strong>From context<br />to capability</strong>
            <span className="core-caption">Retrieval · Reasoning · Reliability</span>
          </div>
          <div className="float-card float-top"><Database size={17} /><span><b>Knowledge</b><small>Data & retrieval</small></span></div>
          <div className="float-card float-right"><Workflow size={17} /><span><b>Orchestration</b><small>Tools & workflows</small></span></div>
          <div className="float-card float-bottom"><ShieldCheck size={17} /><span><b>Trust</b><small>Evaluation & safety</small></span></div>
          <div className="visual-grid" />
        </div>
        <div className="hero-bottom-line"><span>01 / INTRODUCTION</span><span>ENGINEERING • INTELLIGENCE • IMPACT</span></div>
      </section>

      <section className="ticker" aria-label="Areas of expertise">
        <div className="ticker-track">
          <span>GENERATIVE AI</span><i>✳</i><span>AGENTIC SYSTEMS</span><i>✳</i><span>RAG & RETRIEVAL</span><i>✳</i><span>MACHINE LEARNING</span><i>✳</i><span>PRODUCTION ENGINEERING</span><i>✳</i>
        </div>
      </section>

      <section className="section shell" id="about">
        <div className="section-kicker">01 — ABOUT</div>
        <div className="about-grid">
          <h2>Engineering is more than making a model work.</h2>
          <div className="about-copy">
            <p>
              I’m a Senior AI/ML Engineer with 10+ years of experience across software engineering, machine learning, data
              platforms, and enterprise applications. My background spans financial services, healthcare, retail, aviation,
              and logistics.
            </p>
            <p>
              My recent focus is on Generative AI and LLM-powered applications: retrieval-augmented generation, agentic
              workflows, semantic and hybrid search, and the backend systems that make these capabilities useful in practice.
            </p>
            <p>
              I care about the details that help AI earn trust—relevant context, grounded outputs, measurable evaluation,
              security, observability, and dependable operations.
            </p>
            <a className="text-link" href="https://www.linkedin.com/in/mounika99/" target="_blank" rel="noreferrer">
              Connect on LinkedIn <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="focus">
        <div className="shell">
          <div className="section-heading">
            <div><div className="section-kicker">02 — FOCUS AREAS</div><h2>Problems I like to solve</h2></div>
            <p>Core themes across my engineering work, from retrieval and orchestration to production reliability.</p>
          </div>
          <div className="focus-grid">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article className="focus-card" key={area.number}>
                  <div className="card-top"><span className="card-number">{area.number}</span><Icon size={23} strokeWidth={1.6} /></div>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                  <div className="tag-list">{area.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </article>
              );
            })}
          </div>
          <p className="note">These are portfolio focus areas, not claims about publicly available client projects. Add links to approved demos or repositories as they become available.</p>
        </div>
      </section>

      <section className="section shell" id="skills">
        <div className="section-heading">
          <div><div className="section-kicker">03 — TOOLKIT</div><h2>Technologies I work with</h2></div>
          <p>A broad toolkit across AI application development, retrieval, data, and deployment.</p>
        </div>
        <div className="skills-grid">
          {skills.map((group) => (
            <article className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
        <p className="note">Technology list is a concise summary of skills represented in the supplied profile and resume variants. Keep it aligned with the tools you want to discuss in interviews.</p>
      </section>

      <section className="section section-alt" id="approach">
        <div className="shell approach-layout">
          <div>
            <div className="section-kicker">04 — HOW I WORK</div>
            <h2>Thoughtful systems.<br /><span>Measurable outcomes.</span></h2>
            <p className="approach-lead">A practical engineering mindset: understand the problem, validate the solution, and design for life beyond the prototype.</p>
          </div>
          <div className="approach-list">
            {approach.map(([title, text], index) => (
              <div className="approach-item" key={title}>
                <span className="approach-number">0{index + 1}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section shell" id="contact">
        <div className="contact-panel">
          <div className="contact-glow" />
          <div className="section-kicker">05 — CONTACT</div>
          <h2>Have a meaningful AI problem to solve?</h2>
          <p>I’m interested in thoughtful conversations about AI/ML engineering, Generative AI, retrieval systems, and production AI platforms.</p>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:mounikanarra610@gmail.com"><Mail size={17} /> Email me <ArrowUpRight size={15} /></a>
            <a className="button button-outline" href="https://www.linkedin.com/in/mounika99/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
          </div>
          <div className="social-row">
            <a href="mailto:mounikanarra610@gmail.com"><Mail size={16} /> mounikanarra610@gmail.com</a>
            <a href="https://www.linkedin.com/in/mounika99/" target="_blank" rel="noreferrer"><Linkedin size={16} /> linkedin.com/in/mounika99</a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#home"><span className="brand-mark">MN</span><span>Mounika Narra</span></a>
        <span>Designed to be clear, useful, and always evolving.</span>
        <a href="#home" className="back-top">Back to top ↑</a>
      </footer>
    </main>
  );
}
