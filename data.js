/**
 * AI Engineer / FDE Master Roadmap Dataset
 * Standard 26 System Categories across 4 Domains: AI & Agentic Systems, Cloud & Infrastructure, Networking & Real-Time, DevOps & Distributed Systems.
 */

const DOMAINS = {
  AI: {
    id: "ai",
    title: "AI & Agentic Systems",
    icon: "brain-circuit",
    color: "#818cf8",
    lightColor: "rgba(129, 140, 248, 0.15)",
    gradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)"
  },
  CLOUD: {
    id: "cloud",
    title: "Cloud & Infrastructure",
    icon: "cloud-server",
    color: "#34d399",
    lightColor: "rgba(52, 211, 153, 0.15)",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)"
  },
  NETWORKING: {
    id: "networking",
    title: "Networking & Real-Time",
    icon: "network",
    color: "#fbbf24",
    lightColor: "rgba(251, 191, 36, 0.15)",
    gradient: "linear-gradient(135deg, #10b981 0%, #14b8a6 100%)"
  },
  ENGINEERING: {
    id: "engineering",
    title: "DevOps & Distributed Systems",
    icon: "cpu",
    color: "#38bdf8",
    lightColor: "rgba(56, 189, 248, 0.15)",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)"
  }
};

const ROADMAP_DATA = [
  // ==================== DOMAIN 1: AI & AGENTIC SYSTEMS ====================
  {
    id: "cat-1",
    domainId: "ai",
    number: 1,
    title: "AI Fundamentals",
    description: "Foundational concepts underlying artificial intelligence, machine learning, and deep learning neural models.",
    icon: "brain",
    topics: [
      {
        id: "cat-1-1",
        name: "Artificial Intelligence (AI)",
        def: "Systems capable of performing tasks requiring human-like intelligence, reasoning, and problem-solving.",
        why: "Overarching domain covering intelligent software systems.",
        level: "Beginner"
      },
      {
        id: "cat-1-2",
        name: "Machine Learning (ML)",
        def: "Algorithms learning patterns from data to make statistical predictions without hardcoded rules.",
        why: "Replaces static conditional logic with data-driven predictive models.",
        level: "Beginner"
      },
      {
        id: "cat-1-3",
        name: "Deep Learning (DL)",
        def: "Subfield of ML utilizing multi-layer neural networks to learn representations from unstructured data.",
        why: "Powers vision, audio, and language foundation models.",
        level: "Intermediate"
      },
      {
        id: "cat-1-4",
        name: "Neural Networks",
        def: "Interconnected node layers processing data through weighted activation functions.",
        why: "Computational substrate for modern generative models.",
        level: "Intermediate"
      }
    ]
  },
  {
    id: "cat-2",
    domainId: "ai",
    number: 2,
    title: "Transformers & LLM Architecture",
    description: "Self-attention mechanisms, Query/Key/Value math, positional encodings, and model parameters.",
    icon: "cpu-chip",
    topics: [
      {
        id: "cat-2-1",
        name: "Transformer Architecture",
        def: "Neural network architecture relying on self-attention to process tokens in parallel.",
        why: "Foundational architecture powering models like GPT-4, Claude, Gemini, and Llama.",
        level: "Intermediate"
      },
      {
        id: "cat-2-2",
        name: "Self-Attention Mechanism",
        def: "Calculates mathematical weights between every token in a sequence to capture context.",
        why: "Allows long-range context understanding without recurrent bottlenecks.",
        level: "Advanced"
      },
      {
        id: "cat-2-3",
        name: "Query, Key, Value (QKV)",
        def: "Vector projections used in attention calculation to compute token relevance scores.",
        why: "Core linear algebra transformation driving transformer attention.",
        level: "Advanced"
      },
      {
        id: "cat-2-4",
        name: "Quantization",
        def: "Reducing numerical precision of parameters (e.g. 16-bit float to 4-bit integer) to shrink memory requirements.",
        why: "Enables hosting 70B parameter models on smaller GPU/CPU hardware.",
        level: "Advanced"
      }
    ]
  },
  {
    id: "cat-3",
    domainId: "ai",
    number: 3,
    title: "Prompt & Context Engineering",
    description: "Designing prompt templates, system instructions, context windows, and conversation memory.",
    icon: "terminal-box",
    topics: [
      {
        id: "cat-3-1",
        name: "System Prompt & Instructions",
        def: "Input instructions defining task boundaries, role identity, and response output formats.",
        why: "Primary control mechanism steering model reasoning behavior.",
        level: "Beginner"
      },
      {
        id: "cat-3-2",
        name: "Context Window & Length",
        def: "Maximum token budget supported by an LLM in a single inference request.",
        why: "Defines memory bounds for active prompt context and retrieved document passages.",
        level: "Intermediate"
      },
      {
        id: "cat-3-3",
        name: "Context Compression",
        def: "Techniques summarizing or pruning historical context to fit token limits efficiently.",
        why: "Reduces API costs and latency while preserving essential conversation state.",
        level: "Advanced"
      }
    ]
  },
  {
    id: "cat-4",
    domainId: "ai",
    number: 4,
    title: "AI Agents & AI Evals",
    description: "Autonomous reasoning loops, tool function calling, human-in-the-loop control, and quantitative AI evaluations.",
    icon: "bot",
    topics: [
      {
        id: "cat-4-1",
        name: "AI Agent & ReAct Loop",
        def: "Autonomous system using an LLM, state memory, and external tools to accomplish multi-step goals.",
        why: "Extends passive LLMs into active task-executing digital workers.",
        level: "Intermediate"
      },
      {
        id: "cat-4-2",
        name: "Tool / Function Calling",
        def: "Structured mechanism allowing an LLM to invoke external APIs, database queries, or shell tools.",
        why: "Connects LLMs to live production data and external execution environments.",
        level: "Intermediate"
      },
      {
        id: "cat-4-3",
        name: "AI Eval (AI System Evaluation)",
        def: "Quantitative framework for evaluating the accuracy, safety, groundedness, and trajectory of AI systems.",
        why: "Replaces subjective manual prompt checks with repeatable benchmark scoring.",
        level: "Advanced",
        example: "Eval Suite: 100 test cases -> Model v1: 82% | Model v2: 89%",
        remember: "Quantitative benchmarking of AI outputs, agent trajectories, and model safety."
      },
      {
        id: "cat-4-4",
        name: "Correctness Eval",
        def: "Evaluation metric measuring whether an AI model output is factually accurate against ground truth.",
        why: "Guarantees factual accuracy in domain-specific AI assistants and calculations.",
        level: "Advanced",
        example: "Compare generated answer against verified gold-standard reference",
        remember: "Measures factual accuracy against ground truth."
      },
      {
        id: "cat-4-5",
        name: "Relevance & Groundedness Evals",
        def: "Relevance checks if prompt was directly answered; Groundedness checks if answer relies on retrieved data.",
        why: "Prevents hallucinations in enterprise RAG and document synthesis systems.",
        level: "Advanced",
        example: "Verify RAG answer claims are supported by context passage tokens",
        remember: "Relevance = answers question | Groundedness = supported by context."
      },
      {
        id: "cat-4-6",
        name: "Safety & Guardrail Eval",
        def: "Evaluation testing if an AI model avoids generating toxic, harmful, or policy-violating responses.",
        why: "Protects enterprise brand safety and defends against prompt injection attacks.",
        level: "Advanced",
        example: "Execute 500 adversarial jailbreak prompts against model guardrails",
        remember: "Verifies compliance with safety policies and guardrails."
      },
      {
        id: "cat-4-7",
        name: "Tool-Use & Trajectory Evals",
        def: "Tool-use evaluates API parameter accuracy; Trajectory evaluates multi-step reasoning action sequences.",
        why: "Prevents agent execution loops and validates optimal multi-step problem solving.",
        level: "Advanced",
        example: "Verify agent invoked get_user_account() before initiate_refund()",
        remember: "Tool-use = correct tool call | Trajectory = optimal reasoning sequence."
      },
      {
        id: "cat-4-8",
        name: "Latency & Cost Evals",
        def: "Performance evaluation measuring inference execution speed, Time-To-First-Token (TTFT), and token expense.",
        why: "Optimizes production AI costs and maintains acceptable user latency SLAs.",
        level: "Intermediate",
        example: "Benchmark TTFT (<500ms) and token cost ($/1k requests)",
        remember: "Measures inference speed (TTFT) and token financial cost."
      },
      {
        id: "cat-4-9",
        name: "AI Regression Eval",
        def: "Evaluation suite ensuring new prompt revisions or model version upgrades do not degrade baseline scores.",
        why: "Prevents silent quality regressions when deploying prompt changes to production.",
        level: "Advanced",
        example: "Compare prompt v2.1 benchmark score against v2.0 production baseline",
        remember: "Guarantees prompt or model updates do not degrade output quality."
      }
    ]
  },
  {
    id: "cat-5",
    domainId: "ai",
    number: 5,
    title: "Agent Memory",
    description: "Working memory, episodic recall, semantic vector memory, and state persistence.",
    icon: "database",
    topics: [
      {
        id: "cat-5-1",
        name: "Working & Short-Term Memory",
        def: "In-memory session buffer storing active turn history and tool execution results.",
        why: "Maintains immediate context during active multi-turn agent sessions.",
        level: "Intermediate"
      },
      {
        id: "cat-5-2",
        name: "Long-Term & Episodic Memory",
        def: "Persisted vector/relational store keeping user preferences and historical task experiences across sessions.",
        why: "Allows agents to learn from past interactions and recall long-term facts.",
        level: "Advanced"
      }
    ]
  },
  {
    id: "cat-6",
    domainId: "ai",
    number: 6,
    title: "Long-Running Agents",
    description: "Asynchronous task execution, persistent workflows, checkpointing, and fault recovery.",
    icon: "timer",
    topics: [
      {
        id: "cat-6-1",
        name: "Long-Running Agent",
        def: "Agent designed to execute complex tasks asynchronously over hours or days.",
        why: "Enables autonomous execution of long research or software codebase refactoring tasks.",
        level: "Advanced"
      },
      {
        id: "cat-6-2",
        name: "State Checkpointing & Recovery",
        def: "Saving atomic state snapshots to database storage during long execution chains.",
        why: "Enables restoring agent execution seamlessly after server restarts or network outages.",
        level: "Advanced"
      }
    ]
  },
  {
    id: "cat-7",
    domainId: "ai",
    number: 7,
    title: "AI Agent Tools & Platforms",
    description: "Model Context Protocol (MCP), specialized subagents, coding agents, and browser automation.",
    icon: "workflow",
    topics: [
      {
        id: "cat-7-1",
        name: "Model Context Protocol (MCP)",
        def: "Universal open standard protocol connecting AI agents to external tools and context servers.",
        why: "Standardizes how agents access local files, APIs, and database tools seamlessly.",
        level: "Advanced"
      },
      {
        id: "cat-7-2",
        name: "Subagents & Delegation",
        def: "Delegating specialized sub-tasks to isolated subagents (e.g. Coder, Tester, Researcher).",
        why: "Prevents context window pollution by keeping agent roles focused.",
        level: "Advanced"
      }
    ]
  },
  {
    id: "cat-8",
    domainId: "ai",
    number: 8,
    title: "Harness Engineering",
    description: "Execution sandboxes, verification specifications, automated test harnesses, and safety constraints.",
    icon: "shield-check",
    topics: [
      {
        id: "cat-8-1",
        name: "Harness Engineering",
        def: "Designing the verification environment around an AI agent (sandboxes, test harnesses, constraints).",
        why: "Surrounds raw AI models with reliable software verification infrastructure.",
        level: "Advanced"
      },
      {
        id: "cat-8-2",
        name: "Agent Sandboxing",
        def: "Isolated environment restricting filesystem, network, and command privileges of autonomous agents.",
        why: "Prevents agents from executing destructive system commands or leaking credentials.",
        level: "Advanced"
      }
    ]
  },

  // ==================== DOMAIN 2: CLOUD & INFRASTRUCTURE ====================
  {
    id: "cat-9",
    domainId: "cloud",
    number: 9,
    title: "Cloud Computing",
    description: "Virtual machines, auto-scaling groups, global load balancing, and high availability.",
    icon: "cloud",
    topics: [
      {
        id: "cat-9-1",
        name: "Cloud Infrastructure (AWS/Azure/GCP)",
        def: "On-demand virtualized compute, storage, networking, and database services.",
        why: "Replaces physical data centers with elastic pay-as-you-go global hardware.",
        level: "Beginner"
      },
      {
        id: "cat-9-2",
        name: "Load Balancer & Auto-Scaling",
        def: "Distributes incoming web traffic across instances and automatically adjusts capacity based on load.",
        why: "Prevents server overload and provides zero-downtime failovers.",
        level: "Intermediate"
      }
    ]
  },
  {
    id: "cat-10",
    domainId: "cloud",
    number: 10,
    title: "Cloud Security & Identity",
    description: "Managing API keys, environment variables, PAT tokens, service accounts, HashiCorp Vault, and IAM least privilege.",
    icon: "lock",
    topics: [
      {
        id: "cat-10-1",
        name: "Secrets",
        def: "Sensitive operational values such as database passwords, API keys, and private certificates requiring encryption at rest.",
        why: "Prevents credential leaks by insulating sensitive keys from application source code.",
        level: "Beginner",
        example: "DB_PASSWORD=secret123, STRIPE_SECRET_KEY=sk_live_...",
        remember: "Never hardcode or commit secrets to version control."
      },
      {
        id: "cat-10-2",
        name: "PAT Token (Personal Access Token)",
        def: "Personal authentication token used to identify and authenticate API requests or Git CLI operations.",
        why: "Acts as a revocable, scoped password replacement for programmatic API authentication.",
        level: "Beginner",
        example: "GitHub Personal Access Token (ghp_...)",
        remember: "PAT authenticates user API access; it is not a secret management service."
      },
      {
        id: "cat-10-3",
        name: "ENV Variables (Environment Variables)",
        def: "Dynamic key-value parameters passed to application processes at runtime.",
        why: "Configures environment behavior across dev, staging, and production without changing code.",
        level: "Beginner",
        example: "DATABASE_URL=postgres://user:pass@host:5432/db",
        remember: "Configure runtime parameters outside application binary."
      },
      {
        id: "cat-10-4",
        name: "Service Account",
        def: "Non-human machine identity used by applications or container workloads to access cloud resources.",
        why: "Grants automated workloads least-privilege cloud permissions without relying on personal user logins.",
        level: "Intermediate",
        example: "AWS IAM Role for Service Accounts (IRSA) in Kubernetes",
        remember: "Machine identity for automated pod and application workloads."
      },
      {
        id: "cat-10-5",
        name: "HashiCorp Vault",
        def: "Centralized secret management platform for storing, auditing, and dynamically leasing sensitive credentials.",
        why: "Provides automated secret rotation, dynamic database credentials, strict audit logging, and encryption.",
        level: "Advanced",
        example: "Fetch dynamic PostgreSQL credentials via Vault API",
        remember: "Centralized enterprise secret engine with dynamic credential leases."
      },
      {
        id: "cat-10-6",
        name: "Secret Flow Architecture",
        def: "Sequential security pipeline: App -> Needs Key -> ENV/Secret -> Vault Engine -> Service Account Access.",
        why: "Decouples sensitive authentication logic from deployment pipelines and source control.",
        level: "Intermediate",
        example: "App requests key -> Vault validates Service Account -> Issues short-lived secret",
        remember: "App -> ENV/Secret -> Vault -> Service Account."
      }
    ]
  },
  {
    id: "cat-11",
    domainId: "cloud",
    number: 11,
    title: "Docker & Containerization",
    description: "Container isolation, Dockerfiles, multi-container Compose, and persistent storage volumes.",
    icon: "box",
    topics: [
      {
        id: "cat-11-1",
        name: "Docker Containers & Images",
        def: "Packages applications and dependencies into standardized, lightweight executable containers.",
        why: "Eliminates environment inconsistencies between development and production.",
        level: "Beginner"
      },
      {
        id: "cat-11-2",
        name: "Docker Compose & Volumes",
        def: "Orchestrates multi-container stacks using YAML and manages persistent data mounts.",
        why: "Simplifies spinning up complex local dev stacks (App + Postgres + Redis).",
        level: "Intermediate"
      }
    ]
  },
  {
    id: "cat-12",
    domainId: "cloud",
    number: 12,
    title: "Kubernetes Orchestration",
    description: "Pod control planes, Deployments, ReplicaSets, Services, Ingress routing, and ConfigMaps.",
    icon: "layers",
    topics: [
      {
        id: "cat-12-1",
        name: "Kubernetes (K8s) Cluster",
        def: "Container orchestration engine managing automated deployment, scaling, and failover.",
        why: "Production standard for hosting containerized microservices at scale.",
        level: "Intermediate"
      },
      {
        id: "cat-12-2",
        name: "Pods, Deployments & Ingress",
        def: "Pods host container runtimes; Deployments manage pod scaling; Ingress handles external edge traffic.",
        why: "Provides self-healing workload orchestration and routing.",
        level: "Intermediate"
      }
    ]
  },
  {
    id: "cat-13",
    domainId: "cloud",
    number: 13,
    title: "Kubernetes Storage & Helm",
    description: "Persistent Volumes, PVCs, StorageClass, and Helm Chart package management.",
    icon: "package",
    topics: [
      {
        id: "cat-13-1",
        name: "Persistent Volumes & PVC",
        def: "Storage abstractions providing persistent disk storage to Kubernetes pods.",
        why: "Prevents data loss when stateful pods restart or reschedule.",
        level: "Intermediate"
      },
      {
        id: "cat-13-2",
        name: "Helm & Helm Charts",
        def: "Package manager for Kubernetes simplifying application definition, installation, and upgrades.",
        why: "Standardizes reusable cluster deployment manifests.",
        level: "Intermediate"
      }
    ]
  },
  {
    id: "cat-14",
    domainId: "cloud",
    number: 14,
    title: "Redis & Caching",
    description: "In-memory key-value data structures, Pub/Sub messaging, rate limiting, and session stores.",
    icon: "zap",
    topics: [
      {
        id: "cat-14-1",
        name: "Redis Cache & Data Structures",
        def: "In-memory key-value database providing sub-millisecond read/write latencies.",
        why: "Accelerates database lookups, session management, and rate limiting.",
        level: "Intermediate"
      }
    ]
  },
  {
    id: "cat-15",
    domainId: "cloud",
    number: 15,
    title: "Memcached",
    description: "Distributed memory caching system for speeding up dynamic database-driven web applications.",
    icon: "database",
    topics: [
      {
        id: "cat-15-1",
        name: "Memcached",
        def: "High-performance distributed memory object caching system.",
        why: "Reduces database load for simple string key-value caching.",
        level: "Intermediate"
      }
    ]
  },
  {
    id: "cat-16",
    domainId: "cloud",
    number: 16,
    title: "Queues & Messaging",
    description: "Asynchronous task queues, background workers, dead letter queues, and message idempotency.",
    icon: "mail",
    topics: [
      {
        id: "cat-16-1",
        name: "Task Queues & Workers",
        def: "Asynchronous messaging system decoupling background task processing from HTTP API requests.",
        why: "Prevents web worker timeouts when processing heavy tasks.",
        level: "Intermediate"
      }
    ]
  },
  {
    id: "cat-17",
    domainId: "cloud",
    number: 17,
    title: "Service Bus",
    description: "Enterprise message broker supporting topics, pub/sub subscriptions, and reliable messaging.",
    icon: "share-2",
    topics: [
      {
        id: "cat-17-1",
        name: "Enterprise Service Bus",
        def: "Cloud messaging service supporting queues, publish/subscribe topics, and message routing.",
        why: "Enables loose coupling and transactional messaging across enterprise services.",
        level: "Advanced"
      }
    ]
  },
  {
    id: "cat-18",
    domainId: "cloud",
    number: 18,
    title: "Apache Kafka",
    description: "Distributed event streaming platform, log partitions, consumer groups, and stream processing.",
    icon: "activity",
    topics: [
      {
        id: "cat-18-1",
        name: "Apache Kafka Streaming",
        def: "Distributed event stream log platform handling high-throughput real-time data feeds.",
        why: "Powers real-time telemetry processing, analytics, and event-driven microservices.",
        level: "Advanced"
      }
    ]
  },
  {
    id: "cat-19",
    domainId: "cloud",
    number: 19,
    title: "ZooKeeper & KRaft",
    description: "Distributed coordination consensus engines for Kafka cluster metadata management.",
    icon: "cpu",
    topics: [
      {
        id: "cat-19-1",
        name: "ZooKeeper & KRaft Consensus",
        def: "Cluster metadata and consensus management protocol for distributed systems.",
        why: "Maintains cluster state synchronization and leader elections.",
        level: "Advanced"
      }
    ]
  },

  // ==================== DOMAIN 3: NETWORKING & REAL-TIME ====================
  {
    id: "cat-20",
    domainId: "networking",
    number: 20,
    title: "Networking Fundamentals",
    description: "IP addressing, TCP/UDP protocols, DNS translation, HTTP/HTTPS verbs, and TLS encryption.",
    icon: "globe",
    topics: [
      {
        id: "cat-20-1",
        name: "IP, DNS & Ports",
        def: "Core networking primitives mapping domain names to numerical IPs and service ports.",
        why: "Foundational knowledge for server routing and security firewalls.",
        level: "Beginner"
      },
      {
        id: "cat-20-2",
        name: "HTTP / HTTPS & TLS",
        def: "Application protocol for web communication secured via TLS encryption.",
        why: "Secures data transfer across client-server API endpoints.",
        level: "Beginner"
      }
    ]
  },
  {
    id: "cat-21",
    domainId: "networking",
    number: 21,
    title: "WebSocket",
    description: "Full-duplex persistent TCP connections for real-time streaming and live bidirectionality.",
    icon: "radio",
    topics: [
      {
        id: "cat-21-1",
        name: "WebSocket Protocol",
        def: "Provides persistent two-way communication channels over a single TCP connection.",
        why: "Powers sub-10ms real-time chat, AI stream tokens, and live dashboard metrics.",
        level: "Intermediate"
      }
    ]
  },
  {
    id: "cat-22",
    domainId: "networking",
    number: 22,
    title: "WebRTC",
    description: "Peer-to-peer audio, video, and arbitrary data streaming directly between browsers.",
    icon: "video",
    topics: [
      {
        id: "cat-22-1",
        name: "WebRTC P2P Protocol",
        def: "Framework enabling direct peer-to-peer browser video/audio and data channels.",
        why: "Powers real-time low-latency video calls and direct P2P data transfers.",
        level: "Advanced"
      }
    ]
  },
  {
    id: "cat-23",
    domainId: "networking",
    number: 23,
    title: "Jump Host / Bastion Host",
    description: "Secure gateway server for proxying SSH administrative access to isolated private networks.",
    icon: "shield",
    topics: [
      {
        id: "cat-23-1",
        name: "Bastion Host Gateway",
        def: "Special-purpose server positioned on a public network to proxy administrative access to a private network.",
        why: "Protects internal database servers and VMs from direct internet exposure.",
        level: "Intermediate"
      }
    ]
  },

  // ==================== DOMAIN 4: DEVOPS & DISTRIBUTED SYSTEMS ====================
  {
    id: "cat-24",
    domainId: "engineering",
    number: 24,
    title: "DevOps, Testing & Release Strategies",
    description: "Git, GitHub Actions CI/CD pipelines, Sanity & Regression testing, Playwright, Feature Flags, Canary releases, and PageSpeed Insights.",
    icon: "repeat",
    topics: [
      {
        id: "cat-24-1",
        name: "Git & CI/CD Pipelines",
        def: "Version control combined with automated build, test, and continuous release pipelines.",
        why: "Accelerates software delivery while enforcing code quality.",
        level: "Beginner"
      },
      {
        id: "cat-24-2",
        name: "PageSpeed Insights",
        def: "Web performance auditing tool measuring page load times, Core Web Vitals, and optimization tips.",
        why: "Identifies Largest Contentful Paint (LCP), layout shifts, and rendering bottlenecks.",
        level: "Beginner",
        example: "Audit Core Web Vitals: LCP < 2.5s, CLS < 0.1",
        remember: "Audits page loading speed and Core Web Vitals."
      },
      {
        id: "cat-24-3",
        name: "Playwright",
        def: "End-to-end browser automation framework for testing modern web applications across browsers.",
        why: "Automates real user browser interactions including clicks, form submissions, navigation, and visual diffs.",
        level: "Intermediate",
        example: "await page.goto('/login'); await page.click('#submit');",
        remember: "Controls real browsers programmatically for E2E testing."
      },
      {
        id: "cat-24-4",
        name: "Regression Testing",
        def: "Verification test suite ensuring recent code changes or bug fixes have not broken existing features.",
        why: "Protects production stability when introducing new functionality or refactoring logic.",
        level: "Intermediate",
        example: "Run full test suite after upgrading core payment package",
        remember: "Regression check: Did new code break existing functionality?"
      },
      {
        id: "cat-24-5",
        name: "Sanity Testing",
        def: "Unscripted, rapid surface test verifying whether a new software build functions basic operations.",
        why: "Quickly validates if a build is stable enough to undergo comprehensive test execution.",
        level: "Beginner",
        example: "Verify deployment landing page renders and accepts user login",
        remember: "Rapid build check: Is this deployment sane enough to test?"
      },
      {
        id: "cat-24-6",
        name: "Testing Strategy Flow",
        def: "Tiered deployment test sequence: New Build -> Sanity Test -> Full Regression Suite.",
        why: "Saves CI/CD compute time by catching broken builds early before running long test suites.",
        level: "Intermediate",
        example: "Deploy build -> Sanity check passes -> Trigger full regression pipeline",
        remember: "Sanity test validates immediate change; Regression test validates full system."
      },
      {
        id: "cat-24-7",
        name: "Feature Flag",
        def: "Configuration toggle allowing feature availability to be enabled or disabled at runtime without deployment.",
        why: "Decouples code deployment from feature release exposure, enabling safer testing.",
        level: "Intermediate",
        example: "if (featureFlags.isEnabled('new_checkout')) { showNewUI(); }",
        remember: "Toggle features ON/OFF instantly without redeploying code."
      },
      {
        id: "cat-24-8",
        name: "Canary Deployment",
        def: "Progressive rollout strategy routing a small percentage of live production traffic to a new version.",
        why: "Verifies server metrics, error rates, and load performance under real traffic before full release.",
        level: "Advanced",
        example: "Route 10% traffic to v2, monitor error rate, scale to 100%",
        remember: "Canary routes live traffic percentage; Feature Flag toggles code logic."
      },
      {
        id: "cat-24-9",
        name: "Slack Incident Alerting",
        def: "Automated notification channel sending real-time operational alerts from monitoring systems to team chat.",
        why: "Minimizes Mean Time to Detect (MTTD) by alerting engineers immediately during outages.",
        level: "Beginner",
        example: "Alertmanager -> Webhook -> Slack #incident-response",
        remember: "Connects monitoring alerts directly to engineering incident response."
      }
    ]
  },
  {
    id: "cat-25",
    domainId: "engineering",
    number: 25,
    title: "Terraform & Infrastructure as Code",
    description: "Declarative cloud provisioning, state management, providers, modules, and execution plans.",
    icon: "code",
    topics: [
      {
        id: "cat-25-1",
        name: "Terraform & IaC",
        def: "Managing cloud hardware using machine-readable code configuration files.",
        why: "Ensures reproducible, version-controlled cloud infrastructure.",
        level: "Intermediate"
      }
    ]
  },
  {
    id: "cat-26",
    domainId: "engineering",
    number: 26,
    title: "Distributed Systems & Observability Stack",
    description: "Scalability, CAP theorem, circuit breakers, and comparing Grafana, Splunk, Sentry, New Relic, and Datadog.",
    icon: "server",
    topics: [
      {
        id: "cat-26-1",
        name: "Distributed Systems Architecture",
        def: "System composed of multiple autonomous computers communicating over a network to achieve common goals.",
        why: "Foundational architecture for high-scale internet systems.",
        level: "Advanced"
      },
      {
        id: "cat-26-2",
        name: "Grafana",
        def: "Open-source visualization platform for building real-time dashboards from telemetry metrics.",
        why: "Provides visual insights into system latency, CPU utilization, request throughput, and error rates.",
        level: "Intermediate",
        example: "Prometheus + Grafana real-time server dashboard",
        remember: "Visualizes metrics and system telemetry."
      },
      {
        id: "cat-26-3",
        name: "Splunk",
        def: "Enterprise data platform for collecting, indexing, searching, and analyzing machine logs.",
        why: "Enables high-speed log aggregation and multi-service search during incident investigations.",
        level: "Intermediate",
        example: "Search log stream: index=prod_logs status=500",
        remember: "Centralized search and analysis for production logs."
      },
      {
        id: "cat-26-4",
        name: "Sentry",
        def: "Real-time error tracking and crash reporting platform for software applications.",
        why: "Captures unhandled exceptions, breadcrumbs, and exact code stack traces automatically.",
        level: "Intermediate",
        example: "Capture NullPointerException with source line numbers",
        remember: "Monitors application code errors and exceptions."
      },
      {
        id: "cat-26-5",
        name: "New Relic",
        def: "Application Performance Monitoring (APM) platform tracking server health and distributed traces.",
        why: "Identifies slow database queries, backend bottlenecks, and external service call latencies.",
        level: "Intermediate",
        example: "Trace slow HTTP request across 4 microservices",
        remember: "Observes application performance and APM traces."
      },
      {
        id: "cat-26-6",
        name: "Datadog",
        def: "Unified cloud observability platform integrating metrics, distributed logs, APM traces, and synthetics.",
        why: "Delivers full-stack infrastructure visibility across cloud hosts, containers, and serverless apps.",
        level: "Intermediate",
        example: "Infrastructure host metrics + APM traces + log correlation",
        remember: "Unified full-stack monitoring across cloud infrastructure."
      }
    ]
  }
];
