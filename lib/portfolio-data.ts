export const ROHAN_DATA = {
  about: {
    title: "About Me",
    intro:
      "Systems Architect & AI Engineer specializing in scalable intelligence, edge models, and robust distributed systems.",
    bio: [
      "I architect and build high-performance software systems, bridging the gap between frontier AI research and production-grade engineering.",
      "Selected into the Anthropic Claude for Startups program, Winner at Claude Impact Lab Mumbai 2026 for KHOJ (edge missing-person identification for Kumbh Mela 2027), and Finalist for Smart India Hackathon (SIH 2026 / NTRO Cryptographic Discovery).",
      "My engineering philosophy centers on deterministic reasoning, zero bloat, privacy-by-design, and building fault-tolerant architectures that hold up under real-world constraints.",
    ],
    highlights: [
      { label: "Role", value: "Systems Architect & AI Engineer" },
      {
        label: "Recognition",
        value: "Claude for Startups · Claude Impact Lab Winner",
      },
      { label: "Location", value: "Satara / Pune, Maharashtra, India" },
      {
        label: "Focus",
        value: "Edge AI, Post-Quantum Security, Multi-Agent RAG",
      },
      { label: "Status", value: "Open for High-Impact Engineering Roles" },
    ],
  },

  projects: [
    {
      id: 1,
      title: "KHOJ / Kho-Ya-Paya (Kumbh Mela 2027)",
      subtitle: "Privacy-First Missing-Person Identification System",
      description:
        "Winner at Claude Impact Lab Mumbai 2026. A non-biometric, edge-accelerated missing-person identification platform designed for 50-kiosk choke-point deployment at Kumbh Mela 2027 with zero facial recognition.",
      fullDescription:
        "KHOJ addresses the massive public safety challenge of lost individuals at large-scale religious gatherings without sacrificing civil liberties. Operating in strict compliance with India's DPDP Act 2023, the platform eschews facial recognition entirely. Instead, edge kiosks run MobileNetV3 semantic segmentation and ResNet-50 hierarchical clothing/appearance feature extractors, storing only ephemeral, TTL-purged vector hashes. A 3-tiered matching pipeline (T1 garment <6mo, T2 descriptive query, T3 morphological verification) achieves fast multi-camera resolution with in-the-loop human review.",
      technologies: [
        "Edge AI",
        "MobileNetV3",
        "ResNet-50",
        "FastAPI",
        "Vector Search",
        "DPDP Act 2023",
        "Docker",
      ],
      github: "https://github.com/RohanExploit",
      image: "/projects/khoj.jpg",
      badge: "1st Place Winner · Claude Impact Lab Mumbai 2026",
      features: [
        "Zero Facial Recognition: 100% DPDP Act 2023 compliance preserving pilgrim privacy",
        "Edge-Optimized Pipeline: Sub-45ms MobileNetV3 segmentation on low-power kiosk hardware",
        "Tiered Matching: T1 garment taxonomy, T2 semantic query, T3 morphological bounding",
        "Ephemeral In-Memory Hashes: Automated TTL vector purging after resolution",
        "Kiosk Mesh: Designed for 50-point choke-point deployment across Kumbh Mela 2027",
      ],
      impact:
        "Winner at Claude Impact Lab Mumbai 2026. Directly scalable to protect millions of pilgrims at Kumbh Mela 2027.",
    },
    {
      id: 2,
      title: "AdaptiveMarket — Self-Evolving Strategy Agent",
      subtitle: "Biomimetic Memory & Competitive Intelligence Engine",
      description:
        "Winning submission at HackWithHyderabad 3.0. Autonomous competitive intelligence agent powered by Vectorize Hindsight 5-layer biomimetic memory and Groq LPU (openai/gpt-oss-120b) that mutates pricing, sales battlecards, and product roadmaps.",
      fullDescription:
        "AdaptiveMarket replaces static market research scrapers with a stateful Chief Strategy Officer agent grounded in 6-month cumulative memory. Using Vectorize Hindsight's 5-layer biomimetic memory bank and TEMPR 4-way neural retrieval (Semantic + BM25 + Graph + Temporal Recency at 0.94 confidence), the system prevents knee-jerk price-war discounting, defends 85% SaaS gross margins, dynamically rewrites sales objection scripts against competitor outages, and autonomously elevates SOC 2 compliance to P0 on the engineering roadmap.",
      technologies: [
        "Next.js 15",
        "Vectorize Hindsight",
        "Groq LPU (120B MoE)",
        "FastAPI",
        "TEMPR Retrieval",
        "TypeScript",
        "Render",
      ],
      github: "https://github.com/RohanExploit/adaptive-market",
      link: "https://adaptive-market-frontend.onrender.com",
      image: "/projects/adaptive-market.jpg",
      badge: "Winning Submission · HackWithHyderabad 3.0",
      features: [
        "5-Layer Biomimetic Memory: Persistent World Facts, Experience Logs, Observations & Mental Models",
        "TEMPR 4-Way Neural Fusion: Semantic (0.59) + BM25 + Graph + Temporal Recency retrieval",
        "Margin Defense Engine: Prevents panic discounting and locks 85% gross margin via SLA packaging",
        "Autonomous Roadmap Mutation: Elevates SOC 2 Type II from P2 to P0 based on deal-loss audits",
        "Sub-Second LPU Execution: Powered by Groq openai/gpt-oss-120b (~500+ tok/s)",
      ],
      impact:
        "Live deployed full-stack agentic system demonstrating how cumulative temporal memory outperforms stateless LLMs in enterprise strategy.",
    },
    {
      id: 3,
      title: "Q-DARPAN (SIH 2026 / NTRO ECDAT)",
      subtitle: "Enterprise Cryptographic Discovery & Post-Quantum Risk",
      description:
        "Selected for Smart India Hackathon (SIH 2026 / SIH26164 ECDAT) as Team PRAHARI. Generates CycloneDX 1.7 Cryptographic Bill of Materials (CBOM) and maps enterprise migration pathways to NIST Post-Quantum standards.",
      fullDescription:
        "Q-DARPAN (Quantum Discovery, Audit, Risk Prioritization & Automated Neutralization) is an enterprise security platform designed for national cyber-defense. It scans source code repositories, compiled artifacts, and transport layer configurations to detect vulnerable classical cryptosystems (RSA, DSA, ECDH). It automatically generates CycloneDX 1.7 CBOM compliance manifests and produces automated refactoring recommendations for NIST Post-Quantum Cryptography standards (ML-KEM, ML-DSA, SLH-DSA).",
      technologies: [
        "Post-Quantum Cryptography",
        "CycloneDX 1.7 CBOM",
        "AST Parsing",
        "Python",
        "FastAPI",
        "NIST PQC (FIPS 203/204)",
        "Docker",
      ],
      github: "https://github.com/RohanExploit/q-darpan",
      image: "/projects/qdarpan.jpg",
      badge: "SIH 2026 Finalist · NTRO ECDAT (Team PRAHARI)",
      features: [
        "CBOM Generation: Automated extraction conforming to CycloneDX 1.7 specification",
        "Quantum-Risk Timeline Indexing: Maps vulnerable key-exchange and signatures against Q-Day horizons",
        "PQC Migration Mapping: Automatic replacement rules for ML-KEM-512/768/1024 and ML-DSA",
        "Static & Dynamic Scanner: Multi-language AST analysis across Java, C/C++, Go, and Python",
        "Enterprise Dashboard: Executive compliance summaries and SBOM/CBOM diff reporting",
      ],
      impact:
        "Selected as primary solution for NTRO SIH 2026 problem statement. Provides a turnkey roadmap for sovereign post-quantum cyber defense.",
    },
    {
      id: 4,
      title: "ComplianceMind",
      subtitle: "AI-Native Regulatory Compliance Workspace (YC RFS #12)",
      description:
        "Production AI workspace built targeting YC Request for Startups (RFS #12). Features multi-agent legal verification, Moss knowledge retrieval, and human-in-the-loop audit generation.",
      fullDescription:
        "ComplianceMind re-engineers enterprise regulatory audits from manual multi-week consultant engagements into continuous autonomous oversight. Deployed live in production, the system orchestrates a swarm of specialized agentic workers that ingest statutory frameworks (SOC 2, ISO 27001, HIPAA, GDPR, DPDP Act), parse internal operational artifacts, detect compliance drift, and generate evidence binders with cited legal provenance.",
      technologies: [
        "Next.js 14",
        "TypeScript",
        "Multi-Agent Swarm",
        "Moss Retrieval",
        "Tailwind CSS",
        "FastAPI",
        "Vercel",
      ],
      github: "https://github.com/RohanExploit/ComplianceMind",
      link: "https://compliance-mind.vercel.app",
      image: "/projects/compliancemind.jpg",
      badge: "Live in Production · YC RFS #12",
      features: [
        "Live Production Deployment: Interactive workspace at compliance-mind.vercel.app",
        "Multi-Agent Orchestration: Decomposed auditor, verifier, and synthesizer agents",
        "Moss Knowledge Retrieval: High-precision retrieval with strict clause-level citation attribution",
        "Automated Gap Analysis: Instant scoring against SOC 2, HIPAA, ISO 27001, and Indian DPDP Act",
        "Exportable Evidence Binders: Audit-ready PDF and JSON evidence packages",
      ],
      impact:
        "Reduces audit prep cycles from weeks to minutes with zero hallucination via grounded citation retrieval.",
    },
    {
      id: 5,
      title: "CKD Digital Twin",
      subtitle:
        "Chronic Kidney Disease Policy Simulator & Patient Risk Predictor",
      description:
        "Healthcare digital twin and clinical simulation platform built by Team Hare. Simulates patient-specific disease progression trajectories and models regional health policy interventions.",
      fullDescription:
        "CKD Digital Twin combines longitudinal electronic health record modeling with multi-biomarker trajectory simulation. By constructing a digital twin of kidney function, clinicians and health policymakers can simulate how changes in lifestyle, pharmaceutical interventions, or early diagnostic screening impact progression across CKD stages 1 through 5.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Machine Learning",
        "Biomarker Modeling",
        "Tailwind CSS",
        "Recharts",
        "Vercel",
      ],
      github: "https://github.com/RohanExploit/ckd-digital-twin",
      link: "https://ckd-digital-twin.vercel.app",
      image: "/projects/ckd-digital-twin.jpg",
      badge: "Live in Production · Team Hare",
      features: [
        "Live Production Deployment: Deployed at ckd-digital-twin.vercel.app",
        "Biomarker Trajectory Engine: Simulates longitudinal eGFR, serum creatinine, and ACR variations",
        "Synthetic Cohort Generator: Realistic demographic sampling for epidemiological policy planning",
        "Policy Sandbox: Models cost-benefit tradeoffs for statewide early diagnostic mandates",
        "Interactive Clinical Visualizer: Dynamic risk curve exploration with counterfactual forecasting",
      ],
      impact:
        "Enables data-driven preventative interventions before irreversible renal decline occurs.",
    },
    {
      id: 6,
      title: "Campus Brain Android (Offline RAG)",
      subtitle: "Zero-Network On-Device SLM Knowledge Router",
      description:
        "Four-route hierarchical retrieval engine (FACT/LOCAL/GLOBAL/TABULAR) achieving 88.9% benchmark accuracy, running entirely on-device on Android with native Kotlin and local SLMs.",
      fullDescription:
        "Campus Brain solves the critical privacy and connectivity bottlenecks of institutional AI. Rather than routing sensitive student queries to commercial cloud APIs, it runs a 4-route retrieval system locally: FACT for instant key-value resolution, LOCAL for semantic vector matching, GLOBAL for summary synthesis, and TABULAR for relational DuckDB queries. The complete routing architecture was ported to an on-device Android application powered by quantized Small Language Models (SLMs).",
      technologies: [
        "Kotlin",
        "Android SDK",
        "On-Device SLM",
        "DuckDB",
        "Vector Search",
        "Python",
        "FastAPI",
      ],
      github: "https://github.com/RohanExploit/campus-brain-android",
      image: "/projects/campus-brain.jpg",
      badge: "88.9% QA Benchmark · 100% Offline",
      features: [
        "4-Route Retrieval: Dynamic routing between FACT, LOCAL, GLOBAL, and TABULAR stores",
        "100% Offline Operation: Native Android client with zero external network requirement",
        "88.9% Accuracy: Evaluated across 208 difficult multi-hop institutional questions",
        "Embedded Relational Analytics: Local DuckDB integration for lightning-fast tabular calculations",
        "Zero-Data Leakage: Guarantees complete data sovereignty for institutional records",
      ],
      impact:
        "Proves high-accuracy enterprise RAG can run at the edge without cloud subscriptions or latency overhead.",
    },
    {
      id: 7,
      title: "VishwaGuru",
      subtitle: "Open-Source AI Civic Governance & Grievance Platform",
      description:
        "Open-source civic platform empowering Indian youth in democratic processes. Multilingual AI auto-routes citizen issues to local representatives; 15+ GitHub stars, Project Admin across GSSoC & ECWoC.",
      fullDescription:
        "VishwaGuru bridges citizens with local and national governance using vernacular AI. Citizens report issues in regional languages via voice, video, or photos; VishwaGuru extracts geolocation metadata, classifies the grievance department, and dispatches actionable notices to responsible authorities. Rohan serves as Project Administrator, guiding dozens of open-source contributors and maintaining continuous CI/CD pipelines.",
      technologies: [
        "Python",
        "React",
        "FastAPI",
        "NLP",
        "Geolocation APIs",
        "Docker",
        "GitHub Actions",
      ],
      github: "https://github.com/RohanExploit/VishwaGuru",
      image: "/projects/vishwaguru.jpg",
      badge: "15+ Stars · GSSoC & ECWoC Project Admin",
      features: [
        "Multilingual Voice & Text: Broad vernacular language coverage for accessible civic reporting",
        "Autonomous Department Triage: Geocoding + NLP classification to map complaints to administrative zones",
        "Public Transparency Ledger: Track resolution lifecycle from submission to verified remediation",
        "Open Source Leadership: 15+ stars, 50+ contributors mentored, and daily automated PR reviews",
        "Microservices Core: Modular Dockerized architecture ready for state-level scale",
      ],
      impact:
        "Democratizes access to governance and empowers grassroots youth civic participation across India.",
    },
    {
      id: 8,
      title: "Kaggle Competitive ML & ARC Prize 2026",
      subtitle: "Top 14 & Top 20 Global Competitive Machine Learning Stacks",
      description:
        "Top 14 finish in Kaggle Playground Series S6E10 (0.96225 Public LB), Top 20 competitive engine in Kaggle 'Name That LLM' with 24-LoRA ensembles, and symbolic DSL solver for ARC-AGI-2.",
      fullDescription:
        "Engineered state-of-the-art competitive ML pipelines for highly contested international benchmarks. In S6E10 (Predicting Airline Satisfaction), built a 5-fold nested cross-validation super-stack blending CatBoost, LightGBM, and XGBoost with multi-seed residual consensus (0.96225 LB). In 'Name That LLM' (2026), built a Top 20 competitive engine using ATLAS stylometry residual modeling, Qwen3.8-27B GSQ3, and a 24-adapter LoRA ensemble.",
      technologies: [
        "Python",
        "CatBoost",
        "LightGBM",
        "XGBoost",
        "PyTorch",
        "LoRA Ensembles",
        "ARC-AGI-2 DSL",
      ],
      github:
        "https://github.com/RohanExploit/kaggle-s6e10-airline-satisfaction",
      image: "/projects/kaggle-s6e10.jpg",
      badge: "Top 14 & Top 20 Competitive ML",
      features: [
        "Top 14 Global Finish: S6E10 score of 0.96225 Public LB & 0.962225 5-Fold Nested CV",
        "Multi-Seed Residual Consensus: Rank-averaged blending with out-of-fold calibration (PAS_E54)",
        "Name That LLM Top 20: 24-LoRA model stack capturing fine-grained token distribution residuals",
        "ARC Prize 2026 (ARC-AGI-2): Bidirectional program synthesis DSL with test-time transduction",
        "Production ML Rigor: Strict zero-leakage cross-validation and reproducible pipeline execution",
      ],
      impact:
        "Validates algorithmic and modeling mastery against thousands of international data science teams.",
    },
    {
      id: 9,
      title: "Quantensor (Regime & Microstructure Study)",
      subtitle: "Fixed-Band Neutrality Collapse & Market Regime Modeling",
      description:
        "Quantitative finance research & ML platform proving the h^(-1/2) neutrality collapse law and detecting regime shifts across 48 NSE equities and EURUSD. Manuscript prepared for arXiv & IEEE CIFEr.",
      fullDescription:
        "Quantensor investigates algorithmic market microstructure and regime classification. Built on DuckDB, FastAPI, and Angel One SmartAPI, it formally proves and empirically verifies Across 48 NSE equities, EURUSD, and Geometric Brownian Motion that fixed-threshold ternary labeling collapses the neutral class at h^(-1/2) and manufactures spurious directional edge under drift. Accompanied by a reproducible LaTeX manuscript prepared for arXiv (q-fin.CP / cs.LG) and IEEE CIFEr.",
      technologies: [
        "Python",
        "FastAPI",
        "DuckDB",
        "XGBoost",
        "Angel One SmartAPI",
        "LaTeX / Research",
        "Market Microstructure",
      ],
      github: "https://github.com/RohanExploit/quantensor-study",
      image: "/projects/quantensor.jpg",
      badge: "Research Manuscript · arXiv & IEEE CIFEr",
      features: [
        "Analytic & Empirical Proof: Demonstrates h^(-1/2) neutral-class collapse across 48 NSE equities & FX",
        "Spurious Edge Diagnostics: Quantifies manufactured directional edge M_dir under drift",
        "DuckDB Analytics Store: Sub-second analytical queries on multi-year equity tick & OHLCV series",
        "Broker API Integration: Live order routing and telemetry via Angel One SmartAPI",
        "Reproducible Research Pipeline: Automated figure generation and statistical verification suite",
      ],
      impact:
        "Bridges theoretical quantitative finance microstructure research with low-latency production execution.",
    },
  ],

  experience: [
    {
      id: 1,
      title: "Project Administrator & Technical Mentor",
      company: "Elite Coders",
      period: "Jan 2026 - Present",
      type: "Leadership",
      description: [
        "Architect and design modular system architecture for open-source repositories",
        "Manage repository configuration, branch protections, and issue triage with priority labels",
        "Conduct rigorous code reviews focusing on algorithmic efficiency, type safety, and security",
        "Enforce automated CI/CD validation pipelines via GitHub Actions",
        "Mentor 20+ junior developers through technical implementation and refactoring",
        "Lead release management, semantic versioning, and technical documentation standards",
      ],
      skills: [
        "System Architecture",
        "Git Workflows",
        "Code Review",
        "Team Leadership",
        "CI/CD Pipelines",
      ],
    },
    {
      id: 2,
      title: "Career Counselor & Data Analytics Lead",
      company: "Wadhwani Foundation",
      period: "Sep 2025 - Present",
      type: "Mentorship",
      description: [
        "Analyze LMS engagement telemetry and API metrics for thousands of student learners",
        "Design executive KPI dashboards and operational reporting pipelines",
        "Deploy AI-driven assessment tools and validate educational module integrations",
        "Automate data extraction and transformations using Python and Google Workspace APIs",
        "Optimize instructional pathways using predictive analytics on completion rates",
      ],
      skills: [
        "Data Analytics",
        "Python Automation",
        "Dashboard Engineering",
        "AI Assessment",
        "Telemetry",
      ],
    },
    {
      id: 3,
      title: "AI/ML Research Intern",
      company: "Destiny Solutions",
      period: "Jun 2025 - Oct 2025",
      type: "Internship",
      description: [
        "Conducted R&D on deep learning computer vision architectures for healthcare diagnostics",
        "Collaborated with backend engineering teams to integrate ML microservices via REST endpoints",
        "Implemented data augmentation and normalization pipelines on high-dimensional clinical datasets",
        "Participated in agile sprint reviews and architecture design reviews",
      ],
      skills: [
        "Machine Learning",
        "Computer Vision",
        "Data Preprocessing",
        "Model Optimization",
        "FastAPI",
      ],
    },
    {
      id: 4,
      title: "Full Stack Developer",
      company: "Y-SoC",
      period: "Oct 2025 - Dec 2025",
      type: "Project-Based",
      description: [
        "Optimized frontend performance, achieving 95+ Google Lighthouse scores across metrics",
        "Configured Row-Level Security (RLS) policies and relational schemas in Supabase",
        "Built responsive mentor-management interfaces in React with Tailwind CSS",
        "Diagnosed and resolved critical client-side state synchronizations",
      ],
      skills: [
        "React",
        "TypeScript",
        "Supabase",
        "Row-Level Security",
        "Performance Optimization",
      ],
    },
    {
      id: 5,
      title: "Open Source Contributor & Maintainer",
      company: "GSSoC & ECWoC",
      period: "Jul 2025 - Jan 2026",
      type: "Open Source",
      description: [
        "Architected high-throughput microservices with clean, type-safe API boundaries",
        "Refactored legacy monoliths into composable, decoupled service modules",
        "Authored reusable UI component libraries in React with TypeScript and strict accessibility standards",
        "Standardized Docker build configurations for multi-environment reproducibility",
      ],
      skills: [
        "Microservices",
        "React",
        "TypeScript",
        "Docker",
        "GitHub Actions",
        "Clean Architecture",
      ],
    },
    {
      id: 6,
      title: "Machine Learning & Data Analyst Intern",
      company: "iNeuron.ai (PW Acquisition)",
      period: "Aug 2024 - Feb 2025",
      type: "Internship",
      description: [
        "Built supervised machine learning classification models for agricultural telemetry",
        "Developed end-to-end data pipelines using Pandas, NumPy, and OpenCV",
        "Engineered executive business intelligence dashboards in PowerBI and Streamlit",
        "Deployed trained models using FastAPI microservices with sub-100ms inference",
      ],
      skills: ["FastAPI", "PowerBI", "OpenCV", "Pandas", "ETL Pipelines"],
    },
  ],

  skills: {
    technical: [
      {
        category: "Languages",
        items: [
          "Python",
          "TypeScript",
          "JavaScript",
          "SQL",
          "Kotlin",
          "HTML/CSS",
        ],
      },
      {
        category: "AI & Machine Learning",
        items: [
          "PyTorch",
          "TensorFlow",
          "CatBoost / LightGBM / XGBoost",
          "Hugging Face",
          "Scikit-Learn",
          "OpenCV",
          "Edge SLM Deployment",
          "Vector Search / RAG",
        ],
      },
      {
        category: "Full-Stack & Systems",
        items: [
          "Next.js 14",
          "React",
          "FastAPI",
          "Node.js",
          "Tailwind CSS",
          "Three.js / WebGL",
          "REST APIs",
        ],
      },
      {
        category: "Security & Cryptography",
        items: [
          "CycloneDX 1.7 CBOM",
          "Post-Quantum Cryptography (NIST PQC)",
          "DPDP Act 2023 Compliance",
          "AST Static Code Analysis",
        ],
      },
      {
        category: "Databases & Data Engines",
        items: [
          "DuckDB",
          "PostgreSQL",
          "Supabase",
          "MongoDB",
          "Pandas / NumPy",
        ],
      },
      {
        category: "DevOps & Cloud",
        items: ["Docker", "GitHub Actions CI/CD", "AWS", "Vercel", "Git"],
      },
    ],
    soft: [
      "System Architecture & Design",
      "Technical Mentorship",
      "Problem Solving",
      "Open Source Leadership",
      "Rapid Prototyping",
      "Code Review & Quality Assurance",
    ],
  },

  achievements: [
    {
      id: 1,
      title: "Anthropic Claude for Startups Cohort",
      issuer: "Anthropic PBC",
      date: "Jun 2026 - Present",
      description:
        "Inducted into the exclusive Anthropic Claude for Startups program for Rohan's Individual Org. Direct technical collaboration with the Claude engineering team, private builder days, founder resources, and advanced model access.",
      link: "/claude-for-startups",
      type: "Program",
      featured: true,
    },
    {
      id: 2,
      title: "Winner - Claude Impact Lab Mumbai 2026",
      issuer: "Anthropic / Claude Impact Lab",
      date: "2026",
      description:
        "First-place winner for project KHOJ / Kho-Ya-Paya, an edge-accelerated, non-biometric missing-person identification system architected for Kumbh Mela 2027.",
      type: "Award",
      featured: true,
    },
    {
      id: 3,
      title: "Smart India Hackathon (SIH 2026) Finalist - NTRO ECDAT",
      issuer: "Ministry of Education & NTRO",
      date: "2026",
      description:
        "Selected as finalist for NTRO Cryptographic Discovery (SIH26164 ECDAT) with project Q-DARPAN, delivering automated CycloneDX 1.7 CBOM and post-quantum migration.",
      type: "Award",
      featured: true,
    },
    {
      id: 4,
      title: "Top 14 Solution - Kaggle Playground Series s6e10",
      issuer: "Kaggle",
      date: "2026",
      description:
        "Ranked Top 14 internationally with a 0.96225 Public LB score utilizing a 5-fold nested cross-validation super-stack blending CatBoost, LightGBM, and XGBoost.",
      type: "Award",
      featured: true,
    },
    {
      id: 5,
      title: "Top 20 Solution - Kaggle 'Name That LLM'",
      issuer: "Kaggle",
      date: "2026",
      description:
        "Top 20 competitive engine using multi-model LoRA24 ensembles, ATLAS stylometry residual modeling, and Qwen3.8-27B GSQ3.",
      type: "Award",
    },
    {
      id: 6,
      title: "Google Student Ambassador",
      issuer: "Google",
      date: "Aug 2025 - Present",
      description:
        "Campus ambassador driving adoption of Google Developer tools, modern web platforms, and AI APIs across universities.",
      type: "Program",
    },
    {
      id: 7,
      title: "Oracle Cloud Infrastructure AI Foundations Associate",
      issuer: "Oracle",
      date: "Jul 2025",
      description:
        "Certified in Oracle Cloud Infrastructure AI services, machine learning concepts, and enterprise cloud architecture.",
      type: "Certification",
    },
    {
      id: 8,
      title: "ECWoC 25 - Project Administrator",
      issuer: "Elite Coders Winter of Code",
      date: "Jan 2026 - Present",
      description:
        "Project administrator and technical lead overseeing high-scale open-source repositories, architectural standards, and developer mentorship.",
      type: "Program",
    },
    {
      id: 9,
      title: "GSSoC 25 Contributor & Reviewer",
      issuer: "GirlScript Summer of Code",
      date: "Jul 2025 - Jan 2026",
      description:
        "Maintained active contributions across open-source repositories and reviewed 50+ pull requests.",
      type: "Program",
    },
    {
      id: 10,
      title: "Google Developer Program Premium Tier",
      issuer: "Google",
      date: "Feb 2026",
      description:
        "Member of the Google Developer Program Premium Tier with access to Google Cloud Innovators Plus.",
      link: "https://developers.google.com/profile/badges/community/innovators/cloud/innovators_plus",
      type: "Certification",
    },
    {
      id: 11,
      title: "Accenture - Data Analytics and Visualization",
      issuer: "Accenture",
      date: "May 2025",
      description:
        "Professional certification in enterprise data cleansing, modeling, and executive dashboard communication.",
      type: "Certification",
    },
    {
      id: 12,
      title: "JPMorgan Chase - CADP Program",
      issuer: "JPMorgan Chase & Co.",
      date: "Sep 2024",
      description:
        "Corporate Analyst Development Program certification in financial analytics and software engineering.",
      type: "Program",
    },
    {
      id: 13,
      title: "BCG Generative AI Program",
      issuer: "Boston Consulting Group",
      date: "Aug 2024",
      description:
        "Generative AI strategic transformation and production LLM application design.",
      type: "Certification",
    },
  ],

  testimonials: [
    {
      id: 1,
      quote: "Namaskar!!! Good, Keep it up rohan. Dhanyawad.",
      author: "Dr. S V Balshetwar",
      role: "Associate Professor & HOD, CSE Department, Yashoda Technical Campus",
    },
    {
      id: 2,
      quote:
        "Rohan demonstrates exceptional technical depth combined with the ability to architect clean, fault-tolerant distributed systems and mentor developers effectively.",
      author: "Elite Coders Leadership Team",
      role: "Open Source Supervision",
    },
    {
      id: 3,
      quote:
        "We're glad to welcome Rohan's Individual Org to Claude for Startups. We built this program because some of the most ambitious work on Claude is coming from founders like you, and we want to support it early.",
      author: "Claude for Startups Team",
      role: "Anthropic PBC",
    },
  ],

  openSourceContributions: [
    {
      id: 1,
      name: "VishwaGuru (RohanExploit/VishwaGuru)",
      description:
        "Founder & Project Admin for open-source multilingual civic tech platform with 15+ GitHub stars, automated issue routing, and active contributor community.",
      contributions: [
        "Architected core NLP routing engine for Indian vernacular languages",
        "Established CI/CD pipelines and issue triage with automated PR linting",
        "Mentored 50+ contributors across GSSoC, ECWoC, and Social Summer of Code",
        "Implemented secure geolocation handling and municipal agency dispatch APIs",
      ],
      technologies: ["Python", "FastAPI", "React", "Docker", "GitHub Actions"],
      link: "https://github.com/RohanExploit/VishwaGuru",
    },
    {
      id: 2,
      name: "Elite Coders Winter of Code",
      image: "/projects/ecwoc.jpg",
      description:
        "Project Administrator managing repository architecture, CI/CD pipelines, and developer guidance for large-scale open source initiatives.",
      contributions: [
        "Designed modular system architecture for high-traffic repositories",
        "Managed GitHub workflows and CI/CD pipelines",
        "Reviewed and merged 50+ pull requests",
        "Mentored 20+ junior developers",
        "Established coding standards and best practices",
      ],
      technologies: [
        "Git",
        "System Design",
        "Code Review",
        "Leadership",
        "DevOps",
      ],
      link: "https://github.com/RohanExploit",
    },
  ],

  contact: {
    email: "itzrohan007@gmail.com",
    collegeEmail: "212_2023_cse@yes.edu.in",
    phone: "+917057200895",
    location: "Satara, Maharashtra, India",
    social: [
      {
        platform: "GitHub",
        url: "https://github.com/RohanExploit",
        icon: "Github",
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/rohanvijaygaikwad",
        icon: "Linkedin",
      },
      {
        platform: "Twitter",
        url: "https://x.com/rohan_critic",
        icon: "Twitter",
      },
    ],
    resume: "/rohan-gaikwad-resume.pdf",
    claudePdf: "/claude-for-startups.pdf",
  },

  profilePhoto: "/rohan-profile.jpg",
  winnerPhoto: "/claude-impact-lab-winner.jpg",
};
