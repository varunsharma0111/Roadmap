/**
 * AI Engineer / FDE Master Roadmap Dataset
 * Standard 26 System Categories across 4 Domains: AI & Agentic Systems, Cloud & Infrastructure, Networking & Real-Time, DevOps & Distributed Systems.
 * Each topic uses the standard schema: id, name, def, idea, mentalModel, howItWorks, example, why, remember, level.
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
      },
      {
        id: "cat-3-4",
        name: "Context Engineering",
        def: "Context engineering selects and organizes the most relevant information for an AI model or agent to solve the current task.",
        idea: "Context engineering selects and organizes the most relevant information for an AI model or agent to solve the current task.",
        mentalModel: "Think of giving a detective only the evidence relevant to the current case, rather than every document in the building.",
        howItWorks: "Large information pool → Filter relevant data → Organize context → LLM / Agent → Response / Action",
        example: "For a failing Kubernetes Pod, provide recent logs, Pod status, relevant configuration, and recent changes instead of six months of unrelated history.",
        why: "Too much irrelevant context can consume the context window, increase cost, and make relevant information harder to focus on.",
        remember: "Prompt Engineering ≠ Context Engineering\nPrompt engineering → instructions, goal, expected behavior\nContext engineering → relevant information/data supplied to the model",
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
        name: "AI Agent Permissions / Tool Access",
        def: "An AI agent should receive only the tools and permissions required to perform its task.",
        idea: "An AI agent should receive only the tools and permissions required to perform its task.",
        mentalModel: "Think of an employee who gets only the keys needed for their job.",
        howItWorks: "Goal → Agent reasons → Select tool → Permission check → Action → Result",
        example: "A Kubernetes agent can read Pod logs but must request approval before deleting a production Deployment.",
        why: "It limits the damage an agent can cause if it makes a mistake or behaves unexpectedly.",
        remember: "Tool access ≠ unrestricted authorization\nAn agent may have access to a tool while still being restricted by permissions, policies, or human approval.",
        level: "Intermediate"
      },
      {
        id: "cat-4-3",
        name: "AI Evaluation",
        def: "AI evaluation measures whether an AI model or agent produces correct, relevant, grounded, safe, and useful results.",
        idea: "AI evaluation measures whether an AI model or agent produces correct, relevant, grounded, safe, and useful results.",
        mentalModel: "Think of it as testing an AI worker's answer, decisions, actions, and behavior—not just whether it says \"done.\"",
        howItWorks: "AI Agent → Task → Evaluate (Correctness, Relevance, Groundedness, Safety, Tool Use, Trajectory)",
        example: "An agent is asked: \"Fix the production Redis problem.\" Evaluate whether it understood the problem, used correct tools, took sensible actions, respected permissions, verified fix, and reported actual result.",
        why: "An AI can produce a convincing answer while being factually wrong, unsupported by evidence, unsafe, or taking a poor sequence of actions.",
        remember: "Correctness ≠ Groundedness\nCorrectness → Is the result actually correct?\nGroundedness → Is the result supported by the available evidence?\n\nTool-use evaluation ≠ Trajectory evaluation\nTool-use → Did it use the right tools correctly?\nTrajectory → Did it follow an appropriate sequence of actions?",
        level: "Advanced"
      },
      {
        id: "cat-4-4",
        name: "Correctness Eval",
        def: "Evaluation metric measuring whether an AI model output is factually accurate against ground truth.",
        why: "Guarantees factual accuracy in domain-specific AI assistants and calculations.",
        level: "Advanced"
      },
      {
        id: "cat-4-5",
        name: "Relevance & Groundedness Evals",
        def: "Relevance checks if prompt was directly answered; Groundedness checks if answer relies on retrieved data.",
        why: "Prevents hallucinations in enterprise RAG and document synthesis systems.",
        level: "Advanced"
      },
      {
        id: "cat-4-6",
        name: "Safety & Guardrail Eval",
        def: "Evaluation testing if an AI model avoids generating toxic, harmful, or policy-violating responses.",
        why: "Protects enterprise brand safety and defends against prompt injection attacks.",
        level: "Advanced"
      },
      {
        id: "cat-4-7",
        name: "Tool-Use & Trajectory Evals",
        def: "Tool-use evaluates API parameter accuracy; Trajectory evaluates multi-step reasoning action sequences.",
        why: "Prevents agent execution loops and validates optimal multi-step problem solving.",
        level: "Advanced"
      },
      {
        id: "cat-4-8",
        name: "Latency & Cost Evals",
        def: "Performance evaluation measuring inference execution speed, Time-To-First-Token (TTFT), and token expense.",
        why: "Optimizes production AI costs and maintains acceptable user latency SLAs.",
        level: "Intermediate"
      },
      {
        id: "cat-4-9",
        name: "AI Regression Eval",
        def: "Evaluation suite ensuring new prompt revisions or model version upgrades do not degrade baseline scores.",
        why: "Prevents silent quality regressions when deploying prompt changes to production.",
        level: "Advanced"
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
      },
      {
        id: "cat-5-3",
        name: "Short-Term vs Long-Term AI Memory",
        def: "AI systems can use current context for immediate work and persistent memory for information that must survive beyond the current interaction.",
        idea: "AI systems can use current context for immediate work and persistent memory for information that must survive beyond the current interaction.",
        mentalModel: "Short-term memory = desk; long-term memory = filing cabinet.",
        howItWorks: "Current task → Short-term context → Reasoning\nPast useful information → Long-term storage → Retrieve when relevant",
        example: "An agent doesn't load six months of history into every request; it retrieves only relevant past information.",
        why: "Loading everything into every context is inefficient and can exceed the context window.",
        remember: "Memory ≠ Context window\nMemory stores information for future retrieval; context is what is actually provided to the model for the current processing step.",
        level: "Intermediate"
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
        name: "Long-Running AI Agent",
        def: "A long-running agent can continue a task across time, interruptions, or failures by saving its progress persistently.",
        idea: "A long-running agent can continue a task across time, interruptions, or failures by saving its progress persistently.",
        mentalModel: "Think of a worker who saves their work before going home, so they can continue tomorrow.",
        howItWorks: "Goal → Execute → Save progress → Crash / interruption → Restart → Recover state → Continue",
        example: "An agent investigates a Kubernetes issue, saves its findings, crashes, then resumes from the last saved state.",
        why: "Long tasks cannot depend entirely on one live process or one context window.",
        remember: "Long-term memory ≠ current context\nPersistent memory stores durable information; the current context contains the information needed for the present reasoning step.",
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
        def: "Harness engineering builds the surrounding control system that lets an AI agent operate safely and effectively.",
        idea: "Harness engineering builds the surrounding control system that lets an AI agent operate safely and effectively.",
        mentalModel: "Think of the LLM as the driver and the harness as the car's controls, brakes, dashboard, and safety systems.",
        howItWorks: "LLM → Harness (Tools, Memory, Permissions, Guardrails, Observability, Approval) → Action",
        example: "An AI agent can investigate a production Pod automatically, but the harness requires approval before deleting a production Deployment.",
        why: "The LLM should not have unrestricted control over tools, data, or production systems.",
        remember: "Harness ≠ Prompt\nPrompt tells the model what to do; harness controls the environment in which it operates.",
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
        level: "Beginner"
      },
      {
        id: "cat-10-2",
        name: "PAT Token (Personal Access Token)",
        def: "Personal authentication token used to identify and authenticate API requests or Git CLI operations.",
        why: "Acts as a revocable, scoped password replacement for programmatic API authentication.",
        level: "Beginner"
      },
      {
        id: "cat-10-3",
        name: "ENV Variables (Environment Variables)",
        def: "Dynamic key-value parameters passed to application processes at runtime.",
        why: "Configures environment behavior across dev, staging, and production without changing code.",
        level: "Beginner"
      },
      {
        id: "cat-10-4",
        name: "Service Account",
        def: "Non-human machine identity used by applications or container workloads to access cloud resources.",
        why: "Grants automated workloads least-privilege cloud permissions without relying on personal user logins.",
        level: "Intermediate"
      },
      {
        id: "cat-10-5",
        name: "HashiCorp Vault",
        def: "Centralized secret management platform for storing, auditing, and dynamically leasing sensitive credentials.",
        why: "Provides automated secret rotation, dynamic database credentials, strict audit logging, and encryption.",
        level: "Advanced"
      },
      {
        id: "cat-10-6",
        name: "Secret Flow Architecture",
        def: "Sequential security pipeline: App -> Needs Key -> ENV/Secret -> Vault Engine -> Service Account Access.",
        why: "Decouples sensitive authentication logic from deployment pipelines and source control.",
        level: "Intermediate"
      },
      {
        id: "cat-10-7",
        name: "Authentication",
        def: "Authentication verifies who a user or service is.",
        idea: "Authentication verifies who a user or service is.",
        mentalModel: "It's the identity check at the entrance.",
        howItWorks: "Credentials / Token → Verify identity → Authenticated",
        example: "A backend validates a user's JWT before accepting the request as coming from that identity.",
        why: "The system needs to know who is making a request.",
        remember: "Authentication ≠ Authorization\nAuthentication → Who are you?\nAuthorization → What can you do?",
        level: "Beginner"
      },
      {
        id: "cat-10-8",
        name: "Authorization",
        def: "Authorization determines what an authenticated identity is allowed to do.",
        idea: "Authorization determines what an authenticated identity is allowed to do.",
        mentalModel: "After checking your ID, the system checks which rooms you're allowed to enter.",
        howItWorks: "Authenticated user → Check role/permissions → Allow / Deny",
        example: "A staff user can read tasks but cannot delete users.",
        why: "Being authenticated doesn't mean having permission to perform every operation.",
        remember: "Valid JWT ≠ permission to perform every action.",
        level: "Intermediate"
      },
      {
        id: "cat-10-9",
        name: "JWT",
        def: "JWT is a signed token format commonly used to carry claims about an authenticated identity between systems.",
        idea: "JWT is a signed token format commonly used to carry claims about an authenticated identity between systems.",
        mentalModel: "Think of it as a verifiable identity card.",
        howItWorks: "Login → JWT issued → Client sends JWT → Backend validates token → Identity/claims available",
        example: "A client sends: Authorization: Bearer <JWT>. The backend validates it before processing the request.",
        why: "It allows systems to transmit verifiable identity-related claims between requests.",
        remember: "JWT authentication ≠ authorization\nA valid JWT proves the token can be trusted; the backend must still check permissions.",
        level: "Intermediate"
      },
      {
        id: "cat-10-10",
        name: "OIDC",
        def: "OIDC is an identity layer built on OAuth 2.0 that lets applications authenticate users through an identity provider.",
        idea: "OIDC is an identity layer built on OAuth 2.0 that lets applications authenticate users through an identity provider.",
        mentalModel: "Think of Google or another identity provider as the trusted identity office confirming who you are.",
        howItWorks: "User → Identity Provider → Authentication → Application receives identity information",
        example: "A user signs in with Google, and your application uses OIDC to obtain verified identity information.",
        why: "Applications can delegate user authentication to an identity provider instead of building the entire identity system themselves.",
        remember: "OIDC ≠ OAuth 2.0\nOIDC → authentication/identity\nOAuth 2.0 → authorization/delegated access",
        level: "Advanced"
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
        name: "Kubernetes",
        def: "Kubernetes is a system that automatically runs, manages, scales, and recovers containerized applications.",
        idea: "Kubernetes is a system that automatically runs, manages, scales, and recovers containerized applications.",
        mentalModel: "Think of Kubernetes as a manager for a large team of application containers.",
        howItWorks: "Application → Container → Kubernetes → Schedule → Run → Monitor → Restart/Scale",
        example: "You deploy a FastAPI application to Kubernetes, and Kubernetes keeps the required number of application Pods running.",
        why: "Manually managing many containers becomes difficult; Kubernetes automates their deployment and lifecycle.",
        remember: "Kubernetes ≠ Docker\nDocker → runs/packages containers\nKubernetes → manages containers across a cluster",
        level: "Intermediate"
      },
      {
        id: "cat-12-2",
        name: "Kubernetes Pod",
        def: "A Pod is Kubernetes' smallest deployable unit that runs one or more containers together.",
        idea: "A Pod is Kubernetes' smallest deployable unit that runs one or more containers together.",
        mentalModel: "Think of a Pod as an apartment containing one or more containers that share their environment.",
        howItWorks: "Kubernetes → Pod → Container → Application",
        example: "A FastAPI container runs inside a Kubernetes Pod.",
        why: "Kubernetes needs a unit it can schedule, monitor, restart, and manage.",
        remember: "Pod ≠ Container\nA container runs the application; a Pod is Kubernetes' management unit around one or more containers.",
        level: "Intermediate"
      },
      {
        id: "cat-12-3",
        name: "Kubernetes Deployment",
        def: "A Deployment manages the desired number and version of application Pods.",
        idea: "A Deployment manages the desired number and version of application Pods.",
        mentalModel: "Think of it as a manager making sure the required workers are always available.",
        howItWorks: "Deployment → ReplicaSet → Pods\nIf a Pod fails: Pod fails → Deployment/ReplicaSet → New Pod created",
        example: "You want 3 FastAPI Pods running. The Deployment maintains those replicas.",
        why: "It automates Pod replacement, scaling, and controlled application updates.",
        remember: "Deployment ≠ Pod\nPod runs the application; Deployment manages the desired Pod state.",
        level: "Intermediate"
      },
      {
        id: "cat-12-4",
        name: "Kubernetes Service",
        def: "A Service provides a stable network endpoint for reaching a group of Pods.",
        idea: "A Service provides a stable network endpoint for reaching a group of Pods.",
        mentalModel: "Think of it as a reception desk that knows which workers are available.",
        howItWorks: "Client → Service → Available Pods\nPods can change, but the Service provides a stable way to reach them.",
        example: "Your frontend calls the backend Service instead of depending on a specific Pod IP.",
        why: "Pods are temporary and their IP addresses can change.",
        remember: "Service ≠ Pod\nPod runs the application; Service provides stable network access to Pods.",
        level: "Intermediate"
      },
      {
        id: "cat-12-5",
        name: "Kubernetes Service Types",
        def: "Service types control how a Kubernetes Service is exposed and accessed.",
        idea: "Service types control how a Kubernetes Service is exposed and accessed.",
        mentalModel: "Think of three levels of access:\nClusterIP → Inside building\nNodePort → Building entrance\nLoadBalancer → Public reception",
        howItWorks: "ClusterIP → Internal cluster access\nNodePort → Expose through node port\nLoadBalancer → External load balancer",
        example: "A database might use ClusterIP, while a public API might use LoadBalancer.",
        why: "Different applications need different levels of network exposure.",
        remember: "Service type ≠ application\nIt controls network exposure, not what the application does.",
        level: "Intermediate"
      },
      {
        id: "cat-12-6",
        name: "ClusterIP",
        def: "ClusterIP exposes a Service inside the Kubernetes cluster.",
        idea: "ClusterIP exposes a Service inside the Kubernetes cluster.",
        mentalModel: "It's like an internal phone extension that outsiders cannot directly call.",
        howItWorks: "Pod → ClusterIP Service → Other cluster components",
        example: "Your FastAPI backend can expose PostgreSQL or Redis through an internal Service.",
        why: "Internal services should often be reachable by other applications without being publicly exposed.",
        remember: "ClusterIP ≠ NodePort\nClusterIP → internal access\nNodePort → accessible through a node port",
        level: "Intermediate"
      },
      {
        id: "cat-12-7",
        name: "NodePort",
        def: "NodePort exposes a Kubernetes Service through a port on each node.",
        idea: "NodePort exposes a Kubernetes Service through a port on each node.",
        mentalModel: "Think of it as opening a specific numbered entrance on the building.",
        howItWorks: "External Client → Node IP:NodePort → Service → Pods",
        example: "A client accesses an application through a node's exposed port.",
        why: "It provides a simple way to expose a Service outside the cluster.",
        remember: "NodePort ≠ LoadBalancer\nNodePort exposes a port; LoadBalancer typically provides external load-balancer access.",
        level: "Intermediate"
      },
      {
        id: "cat-12-8",
        name: "LoadBalancer",
        def: "A LoadBalancer Service exposes an application externally through a cloud/load-balancer endpoint.",
        idea: "A LoadBalancer Service exposes an application externally through a cloud/load-balancer endpoint.",
        mentalModel: "Think of it as a traffic controller distributing visitors to available workers.",
        howItWorks: "Internet → Load Balancer → Service → Pods",
        example: "A cloud provider creates an external load balancer for your Kubernetes API.",
        why: "It provides external access and distributes incoming traffic to the application.",
        remember: "LoadBalancer ≠ Ingress\nLoadBalancer exposes traffic; Ingress provides application-layer routing rules.",
        level: "Intermediate"
      },
      {
        id: "cat-12-9",
        name: "Kubernetes Ingress",
        def: "Ingress routes HTTP/HTTPS traffic to different Kubernetes Services using rules such as hostnames and paths.",
        idea: "Ingress routes HTTP/HTTPS traffic to different Kubernetes Services using rules such as hostnames and paths.",
        mentalModel: "Think of Ingress as a traffic receptionist who reads the address and sends visitors to the correct department.",
        howItWorks: "Internet → Ingress\n ├── /api → Backend Service\n └── /app → Frontend Service",
        example: "api.example.com goes to the backend while example.com goes to the frontend.",
        why: "It allows centralized HTTP/HTTPS routing instead of exposing every Service separately.",
        remember: "Ingress ≠ Service\nIngress decides where HTTP/HTTPS traffic goes; Service provides stable access to Pods.",
        level: "Intermediate"
      },
      {
        id: "cat-12-10",
        name: "ConfigMap",
        def: "A ConfigMap stores non-sensitive application configuration separately from application code.",
        idea: "A ConfigMap stores non-sensitive application configuration separately from application code.",
        mentalModel: "Think of it as a settings sheet.",
        howItWorks: "ConfigMap → Pod → Application reads configuration",
        example: "Store: DATABASE_HOST, APP_MODE, API_URL",
        why: "Configuration can change without rebuilding the application image.",
        remember: "ConfigMap ≠ Secret\nConfigMap → non-sensitive configuration\nSecret → sensitive values",
        level: "Intermediate"
      },
      {
        id: "cat-12-11",
        name: "Kubernetes Secret",
        def: "A Kubernetes Secret is designed to hold sensitive values such as passwords, tokens, and credentials.",
        idea: "A Kubernetes Secret is designed to hold sensitive values such as passwords, tokens, and credentials.",
        mentalModel: "Think of it as a locked box for sensitive configuration.",
        howItWorks: "Secret → Pod/Application → Credential used",
        example: "Store a database password or API credential as a Secret instead of ordinary configuration.",
        why: "Sensitive credentials need controlled access and safer handling.",
        remember: "A Secret is not automatically completely secure; RBAC, encryption, access control, and safe handling still matter.",
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
        name: "Persistent Volume (PV)",
        def: "A Persistent Volume provides storage that exists independently of a Pod's lifecycle.",
        idea: "A Persistent Volume provides storage that exists independently of a Pod's lifecycle.",
        mentalModel: "Think of a PV as a storage room outside the temporary apartment.",
        howItWorks: "Pod → PVC → PV → Persistent Storage",
        example: "Store uploaded files so they aren't lost when a Pod is deleted.",
        why: "Pod storage can be temporary, but applications often need data to survive Pod replacement.",
        remember: "PV ≠ PVC\nPV → actual storage resource\nPVC → request for storage",
        level: "Intermediate"
      },
      {
        id: "cat-13-2",
        name: "Helm & Helm Charts",
        def: "Package manager for Kubernetes simplifying application definition, installation, and upgrades.",
        why: "Standardizes reusable cluster deployment manifests.",
        level: "Intermediate"
      },
      {
        id: "cat-13-3",
        name: "Persistent Volume Claim (PVC)",
        def: "A PVC is a request by an application for persistent storage.",
        idea: "A PVC is a request by an application for persistent storage.",
        mentalModel: "Think of PVC as asking the storage manager for a room of a certain size.",
        howItWorks: "Application → PVC: \"I need storage\" → PV → Storage",
        example: "A Pod requests a 10 GB volume through a PVC and Kubernetes binds it to suitable persistent storage.",
        why: "Applications shouldn't need to directly manage the underlying storage resource.",
        remember: "PVC ≠ PV\nPVC → storage request\nPV → storage resource",
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
        name: "Redis",
        def: "Redis is a fast in-memory data store commonly used for caching frequently requested data.",
        idea: "Redis is a fast in-memory data store commonly used for caching frequently requested data.",
        mentalModel: "Think of Redis as a quick-access shelf for frequently used data.",
        howItWorks: "Request → Redis? ├── Hit → Fast response └── Miss → PostgreSQL → Store in Redis",
        example: "Cache dashboard statistics so repeated requests don't query PostgreSQL every time.",
        why: "It reduces repeated database work and improves response speed.",
        remember: "Redis ≠ PostgreSQL\nRedis → fast cache/data store\nPostgreSQL → persistent source of truth",
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
        def: "Memcached is a simple in-memory cache designed for fast temporary data access.",
        idea: "Memcached is a simple in-memory cache designed for fast temporary data access.",
        mentalModel: "Think of it as a temporary notepad for frequently needed information.",
        howItWorks: "Request → Memcached? ├── Hit → Return data └── Miss → Get from source",
        example: "Cache frequently requested API results that don't require complex Redis features.",
        why: "It reduces repeated work and provides very fast temporary caching.",
        remember: "Memcached ≠ Redis\nBoth can cache data, but Redis provides a broader set of data structures and capabilities, while Memcached is intentionally simpler.",
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
        name: "Queue",
        def: "A queue stores messages so producers and consumers can work independently.",
        idea: "A queue stores messages so producers and consumers can work independently.",
        mentalModel: "Think of a line at a counter: work waits until a worker can process it.",
        howItWorks: "Producer → Queue → Consumer",
        example: "A user uploads a PDF; the request puts a processing job into a queue while a worker processes it in the background.",
        why: "It separates producers from consumers and handles asynchronous work.",
        remember: "Queue ≠ Consumer\nQueue holds work; consumer processes it.",
        level: "Intermediate"
      },
      {
        id: "cat-16-2",
        name: "Queue vs Message Broker",
        def: "A queue is a mechanism for holding work; a message broker is broader infrastructure for moving and managing messages between systems.",
        idea: "A queue is a mechanism for holding work; a message broker is broader infrastructure for moving and managing messages between systems.",
        mentalModel: "Queue = waiting line; broker = postal center.",
        howItWorks: "Producer → Broker → Queue / Topic → Consumer",
        example: "A background job queue holds PDF-processing tasks, while a message broker may provide the infrastructure and routing around that messaging.",
        why: "Messaging systems decouple services and allow asynchronous communication.",
        remember: "A queue is one messaging pattern; a broker can provide queues, routing, delivery, and other messaging capabilities.",
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
        name: "Service Bus",
        def: "A Service Bus is messaging infrastructure that lets applications communicate asynchronously and reliably.",
        idea: "A Service Bus is messaging infrastructure that lets applications communicate asynchronously and reliably.",
        mentalModel: "Think of it as a postal system between applications.",
        howItWorks: "Service A → Service Bus → Service B",
        example: "An order service publishes an order event and another service processes payment asynchronously.",
        why: "It decouples services and helps them communicate without requiring direct synchronous calls.",
        remember: "Service Bus ≠ Queue\nA queue is a messaging pattern/component; a Service Bus is broader messaging infrastructure that can provide queues and other messaging capabilities.",
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
        name: "Kafka",
        def: "Kafka is a distributed event-streaming platform designed to handle large volumes of messages/events reliably.",
        idea: "Kafka is a distributed event-streaming platform designed to handle large volumes of messages/events reliably.",
        mentalModel: "Think of Kafka as a large, durable event highway where events are organized into lanes.",
        howItWorks: "Producer → Kafka Topic → Partitions → Consumers",
        example: "An order service publishes order events to Kafka, and payment, analytics, and notification systems consume them.",
        why: "It enables scalable, durable, distributed event streaming and decouples producers from consumers.",
        remember: "Kafka ≠ Queue\nTraditional queues often focus on work being consumed; Kafka stores ordered event streams that consumers can read independently.",
        level: "Advanced"
      },
      {
        id: "cat-18-2",
        name: "Kafka Partitions",
        def: "A Kafka topic is divided into partitions so data can be distributed and consumed in parallel.",
        idea: "A Kafka topic is divided into partitions so data can be distributed and consumed in parallel.",
        mentalModel: "Think of a highway divided into multiple lanes.",
        howItWorks: "Topic\n ├── Partition 0\n ├── Partition 1\n └── Partition 2",
        example: "Three partitions can allow up to three active consumers in the same consumer group at once.",
        why: "Partitions provide scalability, parallelism, and ordering within each partition.",
        remember: "Partition ≠ Consumer\nPartition → stores an ordered subset of events\nConsumer → reads/processes events",
        level: "Advanced"
      },
      {
        id: "cat-18-3",
        name: "Consumer",
        def: "A Kafka consumer reads and processes events from Kafka partitions.",
        idea: "A Kafka consumer reads and processes events from Kafka partitions.",
        mentalModel: "Think of a consumer as a worker reading work from a lane.",
        howItWorks: "Kafka Partition → Consumer → Process event",
        example: "A payment consumer reads order events and processes payments.",
        why: "Consumers perform the actual processing of events produced to Kafka.",
        remember: "Consumer ≠ Consumer Group\nConsumer → individual worker\nConsumer Group → collection of consumers working together",
        level: "Advanced"
      },
      {
        id: "cat-18-4",
        name: "Consumer Group",
        def: "A consumer group is a set of consumers that collectively process a Kafka topic's partitions.",
        idea: "A consumer group is a set of consumers that collectively process a Kafka topic's partitions.",
        mentalModel: "Think of a team of workers dividing lanes between themselves.",
        howItWorks: "3 Partitions → Consumer Group\n ├── Consumer 1 → P0\n ├── Consumer 2 → P1\n └── Consumer 3 → P2",
        example: "If there are 3 partitions and 5 consumers in one group, only 3 consumers can actively consume at that moment.",
        why: "It provides parallel processing and workload distribution.",
        remember: "Consumer Group ≠ Partition\nGroup → workers coordinating consumption\nPartition → Kafka's unit of storage/parallelism",
        level: "Advanced"
      },
      {
        id: "cat-18-5",
        name: "Partition vs Consumer",
        def: "A partition stores Kafka events; a consumer reads and processes those events.",
        idea: "A partition stores Kafka events; a consumer reads and processes those events.",
        mentalModel: "Partition = lane; Consumer = worker using the lane.",
        howItWorks: "Partition → Consumer → Process event",
        example: "With 3 partitions and 5 consumers in one group:\nP0 → C1\nP1 → C2\nP2 → C3\nC4 → idle\nC5 → idle",
        why: "Understanding this relationship explains Kafka's parallelism limits.",
        remember: "Adding consumers beyond the number of partitions does not create additional parallel consumption within that group.",
        level: "Advanced"
      },
      {
        id: "cat-18-6",
        name: "Consumer vs Consumer Group",
        def: "A consumer is one worker; a consumer group is the team coordinating those workers.",
        idea: "A consumer is one worker; a consumer group is the team coordinating those workers.",
        mentalModel: "Consumer = employee; Consumer Group = department.",
        howItWorks: "Consumer Group\n ├── Consumer\n ├── Consumer\n └── Consumer",
        example: "Three consumers in the same group divide three Kafka partitions among themselves.",
        why: "The group provides coordinated parallel processing.",
        remember: "Consumers do the processing; the group manages them as one logical processing unit.",
        level: "Advanced"
      },
      {
        id: "cat-18-7",
        name: "Kafka vs Service Bus",
        def: "Kafka focuses strongly on durable distributed event streaming, while a Service Bus generally focuses on reliable application messaging and communication.",
        idea: "Kafka focuses strongly on durable distributed event streaming, while a Service Bus generally focuses on reliable application messaging and communication.",
        mentalModel: "Kafka = event highway; Service Bus = managed messaging system.",
        howItWorks: "Kafka: Producer → Topic → Partitions → Consumers\nService Bus: Producer → Messaging infrastructure → Consumer",
        example: "Kafka is useful for large-scale event streams and analytics pipelines; a Service Bus can be useful for service-to-service messaging and business workflows.",
        why: "Different systems have different messaging, durability, routing, and operational requirements.",
        remember: "Kafka's partitioned event-log model is different from a traditional queue-oriented messaging model.",
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
        name: "ZooKeeper",
        def: "ZooKeeper is a distributed coordination system historically used by systems such as Kafka for coordination and cluster metadata.",
        idea: "ZooKeeper is a distributed coordination system historically used by systems such as Kafka for coordination and cluster metadata.",
        mentalModel: "Think of it as a coordinator keeping distributed workers aware of important shared information.",
        howItWorks: "Distributed Services → ZooKeeper → Coordination / Metadata",
        example: "Older Kafka deployments used ZooKeeper to help coordinate Kafka brokers.",
        why: "Distributed systems need reliable coordination between independent components.",
        remember: "ZooKeeper ≠ Kafka\nZooKeeper provides coordination; Kafka provides distributed event streaming.",
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
      },
      {
        id: "cat-20-3",
        name: "Rate Limiting",
        def: "Rate limiting controls how many requests a client or identity can make within a given period.",
        idea: "Rate limiting controls how many requests a client or identity can make within a given period.",
        mentalModel: "Think of it as a security guard limiting how many people can enter per minute.",
        howItWorks: "Requests → Rate Limiter → Within limit? → Allow / Over limit? → Reject / delay",
        example: "Allow each user to make 100 API requests per minute.",
        why: "It protects services from abuse, accidental overload, and excessive traffic.",
        remember: "Rate limiting ≠ Authentication\nAuthentication identifies the requester; rate limiting controls request volume.",
        level: "Intermediate"
      },
      {
        id: "cat-20-4",
        name: "Input Validation",
        def: "Input validation checks whether incoming data matches the expected format and rules before the application processes it.",
        idea: "Input validation checks whether incoming data matches the expected format and rules before the application processes it.",
        mentalModel: "Think of a security checkpoint checking packages before they enter a building.",
        howItWorks: "Request → Validate input → Valid? → Process / Invalid? → Reject",
        example: "An API expects: age = integer, email = valid email. Invalid input is rejected before business logic processes it.",
        why: "It prevents malformed or unexpected data from causing application errors or security problems.",
        remember: "Input validation ≠ Authorization\nValidation checks the data; authorization checks whether the user is allowed to perform the action.",
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
        name: "WebSocket",
        def: "WebSocket provides a persistent two-way connection that allows the server and client to communicate in real time.",
        idea: "WebSocket provides a persistent two-way connection that allows the server and client to communicate in real time.",
        mentalModel: "Think of it as an open phone call instead of repeatedly calling someone for updates.",
        howItWorks: "Client ↕ WebSocket Connection ↕ Server\nAgent working → Backend → WebSocket → Frontend",
        example: "A frontend shows live progress while an AI agent performs a long-running task.",
        why: "It enables real-time updates such as notifications, progress, and live status.",
        remember: "WebSocket ≠ HTTP request/response\nHTTP commonly follows request → response; WebSocket keeps a two-way connection open.",
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
      },
      {
        id: "cat-22-2",
        name: "TURN Server",
        def: "A TURN server relays real-time communication traffic when peers cannot connect directly.",
        idea: "A TURN server relays real-time communication traffic when peers cannot connect directly.",
        mentalModel: "Think of TURN as a relay station used when two people cannot reach each other directly.",
        howItWorks: "Browser A → TURN → Browser B",
        example: "In WebRTC, NAT or firewall restrictions may prevent two browsers from establishing a direct peer-to-peer connection, so traffic can be relayed through TURN.",
        why: "Some network environments prevent direct peer-to-peer connectivity.",
        remember: "TURN ≠ Direct P2P\nP2P → peers communicate directly\nTURN → server relays traffic between peers when direct connection fails",
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
        def: "PageSpeed Insights analyzes web-page performance and provides performance measurements and recommendations.",
        idea: "PageSpeed Insights analyzes web-page performance and provides performance measurements and recommendations.",
        mentalModel: "Think of it as a performance inspection for your website.",
        howItWorks: "Website → PageSpeed Insights → Performance analysis → Problems + Recommendations",
        example: "It can identify issues involving page loading, responsiveness, and layout stability.",
        why: "A website can work correctly while still providing a slow or poor user experience.",
        remember: "PageSpeed Insights ≠ Backend monitoring\nPageSpeed Insights → web-page performance\nBackend observability tools → application/infrastructure behavior",
        level: "Beginner"
      },
      {
        id: "cat-24-3",
        name: "Playwright",
        def: "Playwright automates real browser interactions to test complete web application workflows.",
        idea: "Playwright automates real browser interactions to test complete web application workflows.",
        mentalModel: "Think of it as a robot user testing your website.",
        howItWorks: "Playwright → Open browser → Login → Navigate → Perform action → Verify result",
        example: "Automatically test: Login → Dashboard → Create Task → Verify task appears",
        why: "Manual testing of repeated user workflows is slow and easy to miss.",
        remember: "Playwright ≠ Regression Testing\nPlaywright → testing automation tool\nRegression testing → purpose of checking existing functionality after changes",
        level: "Intermediate"
      },
      {
        id: "cat-24-4",
        name: "Regression Testing",
        def: "Regression testing checks whether a new change has broken functionality that previously worked.",
        idea: "Regression testing checks whether a new change has broken functionality that previously worked.",
        mentalModel: "You repair one part of a machine and then check that the other working parts still work.",
        howItWorks: "Existing application → Code change → Run existing tests → Did something break?",
        example: "You modify JWT authentication and discover that task creation and notifications no longer work.",
        why: "Changes in one part of an application can accidentally affect existing functionality.",
        remember: "Regression ≠ Sanity\nRegression → broader check of existing functionality\nSanity → quick check of critical/basic functionality",
        level: "Intermediate"
      },
      {
        id: "cat-24-5",
        name: "Sanity Testing",
        def: "Sanity testing is a quick, focused check that important/basic functionality works after a change.",
        idea: "Sanity testing is a quick, focused check that important/basic functionality works after a change.",
        mentalModel: "Before driving a repaired car, quickly check the engine and brakes.",
        howItWorks: "New deployment → Quick critical checks → Basic functionality works? → Continue deeper testing",
        example: "After deployment: Application starts ✅, Login works ✅, Dashboard opens ✅.",
        why: "There is little value in running hundreds of tests if the application cannot perform its basic functions.",
        remember: "Sanity ≠ Regression\nSanity → quick and focused\nRegression → broader existing-functionality verification",
        level: "Beginner"
      },
      {
        id: "cat-24-6",
        name: "Testing Strategy Flow",
        def: "Tiered deployment test sequence: New Build -> Sanity Test -> Full Regression Suite.",
        why: "Saves CI/CD compute time by catching broken builds early before running long test suites.",
        level: "Intermediate"
      },
      {
        id: "cat-24-7",
        name: "Feature Flags",
        def: "A feature flag lets you turn functionality on/off or expose it to selected users without requiring another application deployment.",
        idea: "A feature flag lets you turn functionality on/off or expose it to selected users without requiring another application deployment.",
        mentalModel: "Think of it as a switch controlling who gets a feature.",
        howItWorks: "Feature deployed → Feature Flag ├── OFF → old behavior └── ON → new behavior",
        example: "Enable a new AI model only for internal testers first.",
        why: "It separates deploying code from releasing functionality.",
        remember: "Feature Flag ≠ Canary Deployment\nFeature Flag → controls feature availability\nCanary → controls traffic/users receiving a new deployed version",
        level: "Intermediate"
      },
      {
        id: "cat-24-8",
        name: "Canary Deployment",
        def: "Canary deployment sends a small percentage of production traffic to a new version before gradually increasing the rollout.",
        idea: "Canary deployment sends a small percentage of production traffic to a new version before gradually increasing the rollout.",
        mentalModel: "Test a new product with a small group before giving it to everyone.",
        howItWorks: "New version → 5% traffic → Monitor → Healthy? ├── Yes → 10% → 25% → 50% → 100% └── No → Stop / Rollback",
        example: "A new AI model receives 5% of production traffic while 95% remains on the old version.",
        why: "It reduces the blast radius of a bad release.",
        remember: "Canary ≠ Feature Flag\nCanary → controls rollout of a deployed version\nFeature Flag → controls whether a feature is enabled",
        level: "Advanced"
      },
      {
        id: "cat-24-9",
        name: "Slack",
        def: "Slack provides team communication and can receive automated production alerts and notifications.",
        idea: "Slack provides team communication and can receive automated production alerts and notifications.",
        mentalModel: "Think of it as the communication channel connecting the engineering team during an incident.",
        howItWorks: "Monitoring Tool → Alert → Slack → Engineering Team → Coordinate + Respond",
        example: "Datadog detects high API error rates and sends an alert to the production Slack channel.",
        why: "Detecting a problem is not enough; engineers need to communicate and coordinate their response.",
        remember: "Slack ≠ Monitoring\nDatadog/Grafana/Sentry → observe and investigate\nSlack → communicate and coordinate",
        level: "Beginner"
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
        def: "Grafana visualizes metrics and other observability data through dashboards.",
        idea: "Grafana visualizes metrics and other observability data through dashboards.",
        mentalModel: "Think of it as the dashboard inside a control room.",
        howItWorks: "Metrics / Data → Grafana → Dashboard → Engineer",
        example: "Monitor: CPU, Memory, Request rate, Latency, Error rate.",
        why: "Raw monitoring data is difficult to understand quickly; dashboards make trends and abnormal behavior easier to see.",
        remember: "Grafana ≠ Splunk\nGrafana → visualization/dashboarding\nSplunk → log/event search and analysis",
        level: "Intermediate"
      },
      {
        id: "cat-26-3",
        name: "Splunk",
        def: "Splunk helps collect, search, and analyze application and system logs/events.",
        idea: "Splunk helps collect, search, and analyze application and system logs/events.",
        mentalModel: "Think of it as a searchable archive of what happened inside your systems.",
        howItWorks: "Application → Logs / Events → Splunk → Search / Investigate",
        example: "A production API fails, so engineers search logs around the failure time to identify database errors or timeouts.",
        why: "Large production systems generate too many logs to investigate manually.",
        remember: "Splunk ≠ Grafana\nSplunk → investigate logs/events\nGrafana → visualize observability data",
        level: "Intermediate"
      },
      {
        id: "cat-26-4",
        name: "Sentry",
        def: "Sentry detects and records application errors and crashes so developers can investigate them.",
        idea: "Sentry detects and records application errors and crashes so developers can investigate them.",
        mentalModel: "Think of it as an automatic accident report system for your application.",
        howItWorks: "Application → Error / Crash → Sentry → Error details → Developer",
        example: "A FastAPI endpoint throws an unexpected exception; Sentry records the error and its context.",
        why: "Developers need visibility into application failures that users experience in production.",
        remember: "Sentry ≠ general log platform\nSentry focuses strongly on application errors and performance issues; tools such as Splunk are broader log/event analysis platforms.",
        level: "Intermediate"
      },
      {
        id: "cat-26-5",
        name: "New Relic",
        def: "New Relic provides broad observability for applications, infrastructure, performance, errors, and related telemetry.",
        idea: "New Relic provides broad observability for applications, infrastructure, performance, errors, and related telemetry.",
        mentalModel: "Think of it as a production control center for application and infrastructure behavior.",
        howItWorks: "Application, Infrastructure, Database → New Relic → Metrics / Traces / Errors / Performance",
        example: "New Relic shows that an API takes 4 seconds and most of that time is spent in a PostgreSQL query.",
        why: "Distributed applications can be slow for many different reasons, so engineers need visibility across the request path.",
        remember: "New Relic ≠ only error tracking\nIt provides broader application and infrastructure observability.",
        level: "Intermediate"
      },
      {
        id: "cat-26-6",
        name: "Datadog",
        def: "Datadog brings metrics, logs, traces, infrastructure, application monitoring, and alerts together in an observability platform.",
        idea: "Datadog brings metrics, logs, traces, infrastructure, application monitoring, and alerts together in an observability platform.",
        mentalModel: "Think of it as a central production monitoring room.",
        howItWorks: "Applications, Servers, Containers, Databases → Datadog → Monitor → Detect → Alert → Investigate",
        example: "Datadog detects that API error rate has exceeded a threshold and alerts the engineering team.",
        why: "Engineers need a central place to monitor distributed production systems and respond to abnormal behavior.",
        remember: "Datadog ≠ Slack\nDatadog → monitors and detects\nSlack → communicates the alert to the team",
        level: "Intermediate"
      }
    ]
  }
];
