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
        def: "Evaluation of an AI system's quality, correctness, safety, or behavior.",
        why: "Measurable test suites steering prompt, model, and agent engineering.",
        level: "Advanced",
        example: "Test dataset (100 test cases) -> Change -> AI Eval -> Score",
        remember: "User -> AI Agent -> LLM -> Tools -> Database / API"
      },
      {
        id: "cat-4-4",
        name: "Correctness Eval",
        def: "Is the answer factually correct?",
        why: "Checks whether the model output is factually accurate against ground truth benchmark data.",
        level: "Advanced",
        example: "Compare output against gold standard answer key",
        remember: "Is the answer factually correct?"
      },
      {
        id: "cat-4-5",
        name: "Relevance & Groundedness Evals",
        def: "Relevance: Did it answer the actual question? Groundedness: Is the answer supported by provided data?",
        why: "Eliminates hallucinations in RAG and enterprise document retrieval systems.",
        level: "Advanced",
        example: "Verify answer directly relies on retrieved context passages",
        remember: "Did it answer question & is it supported by data?"
      },
      {
        id: "cat-4-6",
        name: "Safety & Guardrail Eval",
        def: "Does it avoid harmful/unsafe behavior?",
        why: "Verifies model safety compliance against jailbreaks, toxicity, and unauthorized actions.",
        level: "Advanced",
        example: "Test red-teaming prompts against safety filters",
        remember: "Does it avoid harmful/unsafe behavior?"
      },
      {
        id: "cat-4-7",
        name: "Tool-Use & Trajectory Evals",
        def: "Tool-use: Did the agent call the correct tool? Trajectory: Did it take the right sequence of actions?",
        why: "Evaluates agent decision-making logic and step sequence efficiency.",
        level: "Advanced",
        example: "Verify agent tool call parameters & step count",
        remember: "Tool-use = correct tool call | Trajectory = right sequence of actions"
      },
      {
        id: "cat-4-8",
        name: "Latency & Cost Evals",
        def: "Latency: How quickly did it respond? Cost: How expensive was the run?",
        why: "Tracks Time-To-First-Token (TTFT), total response speed, and financial token expense.",
        level: "Intermediate",
        example: "Track latency (ms) & token cost ($)",
        remember: "How fast and how expensive?"
      },
      {
        id: "cat-4-9",
        name: "AI Regression Eval",
        def: "Did a new model/prompt make performance worse?",
        why: "Ensures prompt changes or model version upgrades do not degrade performance baseline.",
        level: "Advanced",
        example: "Compare v1 baseline (82%) vs v2 (89%) vs v3 (74%)",
        remember: "Did a new model or prompt make performance worse?"
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
        def: "Sensitive values that must be protected.",
        why: "Prevents credential theft and unauthorized cloud infrastructure access.",
        level: "Beginner",
        example: "DB password, API key",
        remember: "Keep private"
      },
      {
        id: "cat-10-2",
        name: "PAT Token (Personal Access Token)",
        def: "Personal Access Token used to authenticate with a service/API.",
        why: "Password replacement for programmatic API authentication and Git CLI operations.",
        level: "Beginner",
        example: "GitHub PAT",
        remember: "Password replacement for APIs/Git"
      },
      {
        id: "cat-10-3",
        name: "ENV Variables (Environment Variables)",
        def: "Configuration values supplied to an application at runtime.",
        why: "Configures application behavior across dev/prod environments without hardcoding code values.",
        level: "Beginner",
        example: "DATABASE_URL=...",
        remember: "Configure without hardcoding"
      },
      {
        id: "cat-10-4",
        name: "Service Account",
        def: "Non-human identity used by an application/service.",
        why: "Grants applications automated permissions without associating with personal human credentials.",
        level: "Intermediate",
        example: "Kubernetes pod accessing AWS S3 bucket",
        remember: "Machine identity"
      },
      {
        id: "cat-10-5",
        name: "HashiCorp Vault",
        def: "Central system for storing and accessing secrets securely.",
        why: "Provides encrypted key storage, audit logging, short-lived dynamic leases, and key rotation.",
        level: "Advanced",
        example: "Store DB credentials and API keys",
        remember: "Secret manager"
      },
      {
        id: "cat-10-6",
        name: "Secret Flow Architecture",
        def: "Application -> Needs password/API key -> Don't hardcode it -> ENV variable / Secret -> For larger systems -> Vault -> Service Account -> securely obtains access.",
        why: "Decouples credentials from source code and automates security bounds.",
        level: "Intermediate",
        example: "App -> ENV/Secret -> Vault -> Service Account",
        remember: "PAT is different: it's an authentication token, not general secret management."
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
        def: "Measures webpage performance and provides optimization suggestions.",
        why: "Audits mobile and desktop web loading speed and rendering performance.",
        level: "Beginner",
        example: "Check mobile performance",
        remember: "How fast is my page?"
      },
      {
        id: "cat-24-3",
        name: "Playwright",
        def: "Browser automation/testing framework.",
        why: "Automates real browser actions (clicks, forms, uploads, checkout).",
        level: "Intermediate",
        example: "Test login, upload, checkout",
        remember: "Control a real browser"
      },
      {
        id: "cat-24-4",
        name: "Regression Testing",
        def: "Checks that new changes didn't break existing features.",
        why: "Guarantees system stability when adding new features or refactoring.",
        level: "Intermediate",
        example: "New login feature breaks dashboard",
        remember: "Did old things still work?"
      },
      {
        id: "cat-24-5",
        name: "Sanity Testing",
        def: "Quick check that a specific change/build basically works.",
        why: "Quickly determines if a new build is sane enough to proceed with deeper testing.",
        level: "Beginner",
        example: "After deployment, verify login works",
        remember: "Is this build sane enough to continue testing?"
      },
      {
        id: "cat-24-6",
        name: "Testing Strategy Flow",
        def: "New build -> Sanity test -> Regression testing.",
        why: "Prevents running long regression test suites on broken builds.",
        level: "Intermediate",
        remember: "Sanity test ('Does changed area work?') -> Regression testing ('Did we break anything else?')"
      },
      {
        id: "cat-24-7",
        name: "Feature Flag",
        def: "Switch that lets you turn a feature on/off without redeploying the whole application.",
        why: "Decouples code deployment from feature release exposure.",
        level: "Intermediate",
        example: "new_video_player = false/true",
        remember: "Deploy code -> Feature OFF -> Test internally -> Enable for 5% -> Monitor -> Enable for 50% -> Enable for 100%"
      },
      {
        id: "cat-24-8",
        name: "Canary Deployment",
        def: "Release a new application version to a small percentage of users/traffic first.",
        why: "Validates server performance and metrics under live traffic before 100% rollout.",
        level: "Advanced",
        example: "90% v1, 10% v2 -> Monitor errors/latency/CPU -> 25% -> 50% -> 100%",
        remember: "Feature flag controls whether feature is enabled; Canary controls which version receives traffic."
      },
      {
        id: "cat-24-9",
        name: "Slack Alerting",
        def: "Team communication platform for automated incident notifications.",
        why: "Notifies DevOps and engineering teams instantly when monitoring detects outages.",
        level: "Beginner",
        example: "Prometheus detects API outage -> Alerting system -> Slack #production-alerts -> DevOps engineer",
        remember: "Monitoring detects -> Slack notifies the team"
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
        def: "Creates dashboards and visualizes telemetry.",
        why: "Visualizes latency, CPU usage, memory, and API metrics from metric servers.",
        level: "Intermediate",
        example: "CPU/API latency dashboard",
        remember: "See the data"
      },
      {
        id: "cat-26-3",
        name: "Splunk",
        def: "Platform for collecting, searching and analyzing logs/data.",
        why: "Searches millions of production error logs quickly during incident investigations.",
        level: "Intermediate",
        example: "Search production errors",
        remember: "Search/analyze logs"
      },
      {
        id: "cat-26-4",
        name: "Sentry",
        def: "Application error/crash monitoring.",
        why: "Instantly alerts developers to unhandled code exceptions with exact stack traces.",
        level: "Intermediate",
        example: "See Python exception with stack trace",
        remember: "Find application errors"
      },
      {
        id: "cat-26-5",
        name: "New Relic",
        def: "Application/system observability platform.",
        why: "Monitors application execution speed, database query timings, and host server health.",
        level: "Intermediate",
        example: "APM, traces, infrastructure",
        remember: "Observe application"
      },
      {
        id: "cat-26-6",
        name: "Datadog",
        def: "Unified monitoring/observability platform.",
        why: "All-in-one monitoring platform combining metrics, logs, traces, and synthetics.",
        level: "Intermediate",
        example: "Metrics + logs + traces",
        remember: "Monitor everything"
      }
    ]
  }
];
