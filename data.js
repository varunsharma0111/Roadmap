/**
 * AI Engineer / FDE Master Roadmap Dataset
 * Contains 30 System Categories mapping end-to-end DevOps, Cloud Infrastructure, Security, Testing, Observability, and AI Systems.
 */

const DOMAINS = {
  AI: {
    id: "ai",
    title: "AI & Agentic Systems",
    icon: "brain-circuit",
    color: "#818cf8", // Electric Purple / Indigo
    lightColor: "rgba(129, 140, 248, 0.15)",
    gradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)"
  },
  CLOUD: {
    id: "cloud",
    title: "Cloud & Infrastructure",
    icon: "cloud-server",
    color: "#34d399", // Emerald
    lightColor: "rgba(52, 211, 153, 0.15)",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)"
  },
  NETWORKING: {
    id: "networking",
    title: "Networking & Real-Time",
    icon: "network",
    color: "#fbbf24", // Amber
    lightColor: "rgba(251, 191, 36, 0.15)",
    gradient: "linear-gradient(135deg, #10b981 0%, #14b8a6 100%)"
  },
  ENGINEERING: {
    id: "engineering",
    title: "DevOps & Distributed Systems",
    icon: "cpu",
    color: "#38bdf8", // Sky Blue
    lightColor: "rgba(56, 189, 248, 0.15)",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)"
  }
};

const ROADMAP_DATA = [
  // ==================== 1. Linux ====================
  {
    id: "cat-1",
    domainId: "engineering",
    number: 1,
    title: "1. Linux & OS Primitives",
    description: "Core operating system primitives, process execution, memory management, and shell automation.",
    icon: "terminal",
    topics: [
      {
        id: "cat-1-1",
        name: "Linux OS Kernel",
        def: "Core operating system layer managing hardware, system calls, memory, and process threads.",
        why: "Provides foundational environment for hosting cloud containers and backend microservices.",
        level: "Beginner",
        remember: "Underpins all server infrastructure and container runtimes."
      },
      {
        id: "cat-1-2",
        name: "Process & Threads",
        def: "Executing instance of a program with isolated virtual memory and lightweight execution threads.",
        why: "Essential for managing multi-threaded concurrency and multi-process web workers.",
        level: "Beginner"
      },
      {
        id: "cat-1-3",
        name: "System Calls",
        def: "Programmatic requests from user space software to the Linux kernel for I/O and hardware access.",
        why: "Underlies file access, network socket communication, and memory allocation.",
        level: "Intermediate"
      },
      {
        id: "cat-1-4",
        name: "Shell Scripting (Bash)",
        def: "Automated scripting environment for command execution and system management.",
        why: "Powers CI/CD build scripts, container initialization, and server configuration.",
        level: "Beginner"
      }
    ]
  },

  // ==================== 2. Networking ====================
  {
    id: "cat-2",
    domainId: "networking",
    number: 2,
    title: "2. Networking Fundamentals",
    description: "IP addressing, TCP/UDP transport protocols, DNS resolution, and network isolation.",
    icon: "globe",
    topics: [
      {
        id: "cat-2-1",
        name: "IP Address (IPv4 / IPv6)",
        def: "Numerical label assigned to devices connected to a computer network.",
        why: "Core numerical address required for routing packets across local and internet networks.",
        level: "Beginner"
      },
      {
        id: "cat-2-2",
        name: "Public IP vs Private IP",
        def: "Public IPs are globally routable over the internet; Private IPs are isolated inside local networks.",
        why: "Protects backend servers and database instances from direct internet exposure.",
        level: "Beginner",
        example: "Public: 52.14.9.1 | Private: 10.0.1.45"
      },
      {
        id: "cat-2-3",
        name: "Ports & Services",
        def: "Logical endpoints identifying specific software processes on a network host.",
        why: "Routes traffic to correct web servers (80/443), SSH (22), or database ports.",
        level: "Beginner"
      },
      {
        id: "cat-2-4",
        name: "DNS (Domain Name System)",
        def: "Translates human-readable domain names into numerical IP addresses.",
        why: "Directs client requests to correct server IPs without needing hardcoded addresses.",
        level: "Beginner"
      },
      {
        id: "cat-2-5",
        name: "TCP vs UDP",
        def: "TCP guarantees reliable ordered packet delivery; UDP provides fast connectionless streaming.",
        why: "Use TCP for APIs/databases; use UDP for real-time video, WebRTC, and telemetry.",
        level: "Intermediate"
      }
    ]
  },

  // ==================== 3. HTTP / HTTPS ====================
  {
    id: "cat-3",
    domainId: "networking",
    number: 3,
    title: "3. HTTP / HTTPS & Web Security",
    description: "Web protocol verbs, status codes, TLS encryption, CORS security, and WebSockets.",
    icon: "lock",
    topics: [
      {
        id: "cat-3-1",
        name: "HTTP / HTTPS",
        def: "Application protocol for data transfer on the web, secured via TLS/SSL encryption.",
        why: "Forms the foundational client-server communication mechanism for REST APIs and web apps.",
        level: "Beginner"
      },
      {
        id: "cat-3-2",
        name: "TLS Encryption",
        def: "Cryptographic protocol providing data privacy and integrity over public networks.",
        why: "Prevents packet sniffing and man-in-the-middle attacks on web requests.",
        level: "Intermediate"
      },
      {
        id: "cat-3-3",
        name: "WebSocket Protocol",
        def: "Provides full-duplex, persistent two-way communication channels over a single TCP connection.",
        why: "Enables sub-10ms real-time chat, AI stream response chunks, and live notifications.",
        level: "Intermediate"
      },
      {
        id: "cat-3-4",
        name: "WebRTC",
        def: "Enables peer-to-peer audio, video, and data sharing directly between web browsers.",
        why: "Powers ultra-low-latency video conferencing and P2P data streaming.",
        level: "Advanced"
      }
    ]
  },

  // ==================== 4. Git / GitHub ====================
  {
    id: "cat-4",
    domainId: "engineering",
    number: 4,
    title: "4. Git & GitHub Collaboration",
    description: "Distributed version control, branching strategies, pull request workflows, and merge conflict resolution.",
    icon: "git-pull-request",
    topics: [
      {
        id: "cat-4-1",
        name: "Git Version Control",
        def: "Distributed system tracking source code history and changes across time.",
        why: "Enables multi-developer code collaboration and version rollback safety.",
        level: "Beginner"
      },
      {
        id: "cat-4-2",
        name: "GitHub / GitLab",
        def: "Centralized cloud platform hosting Git repositories with team collaboration tools.",
        why: "Manages code reviews, issue tracking, continuous integration, and deployments.",
        level: "Beginner"
      },
      {
        id: "cat-4-3",
        name: "Branching Strategy",
        def: "Isolated development lines for features, hotfixes, and release branches.",
        why: "Keeps main production branch stable while work happens on feature branches.",
        level: "Beginner"
      },
      {
        id: "cat-4-4",
        name: "Pull Request & Code Review",
        def: "Formal code submission workflow allowing team members to audit changes before merging.",
        why: "Ensures code quality, prevents bugs, and triggers automated CI tests.",
        level: "Beginner"
      }
    ]
  },

  // ==================== 5. Docker ====================
  {
    id: "cat-5",
    domainId: "cloud",
    number: 5,
    title: "5. Docker & Containerization",
    description: "Container isolation, image building, Dockerfiles, multi-container Compose, and persistent volumes.",
    icon: "box",
    topics: [
      {
        id: "cat-5-1",
        name: "Docker",
        def: "Platform packaging applications and their runtime dependencies into isolated containers.",
        why: "Eliminates 'works on my machine' bugs by standardizing execution environments.",
        level: "Beginner"
      },
      {
        id: "cat-5-2",
        name: "Docker Image vs Container",
        def: "Image is an immutable read-only blueprint; Container is the active running instance.",
        why: "Allows rapid instantiation of consistent software environments in seconds.",
        level: "Beginner"
      },
      {
        id: "cat-5-3",
        name: "Dockerfile",
        def: "Declarative text file specifying base OS, dependencies, and startup execution steps.",
        why: "Automates repeatable container image creation.",
        level: "Beginner"
      },
      {
        id: "cat-5-4",
        name: "Docker Compose",
        def: "Tool for defining and running multi-container applications using YAML configurations.",
        why: "Orchestrates complex local stacks (e.g. App + Postgres + Redis) with a single command.",
        level: "Intermediate"
      },
      {
        id: "cat-5-5",
        name: "Docker Volumes",
        def: "Mechanism for persisting data generated by and used by Docker containers.",
        why: "Prevents data loss when containers are destroyed or restarted.",
        level: "Intermediate"
      }
    ]
  },

  // ==================== 6. Cloud ====================
  {
    id: "cat-6",
    domainId: "cloud",
    number: 6,
    title: "6. Cloud Computing Infrastructure",
    description: "Cloud VMs, auto-scaling groups, global load balancers, high availability, and fault tolerance.",
    icon: "cloud",
    topics: [
      {
        id: "cat-6-1",
        name: "Cloud Provider Infrastructure (AWS/Azure/GCP)",
        def: "On-demand virtualized compute, storage, network, and database resources.",
        why: "Replaces physical data centers with elastic pay-as-you-go global hardware.",
        level: "Beginner"
      },
      {
        id: "cat-6-2",
        name: "Virtual Machine (VM) / VPS",
        def: "Software emulation of a physical computer running an independent operating system.",
        why: "Provides scalable compute nodes for application workloads.",
        level: "Beginner"
      },
      {
        id: "cat-6-3",
        name: "Horizontal vs Vertical Scaling",
        def: "Vertical adds CPU/RAM to 1 machine; Horizontal adds more machine instances.",
        why: "Horizontal scaling enables infinite elasticity across multi-node clusters.",
        level: "Intermediate"
      },
      {
        id: "cat-6-4",
        name: "Load Balancer",
        def: "Distributes incoming network traffic evenly across multiple backend servers.",
        why: "Prevents server overload and provides zero-downtime health failovers.",
        level: "Intermediate"
      },
      {
        id: "cat-6-5",
        name: "High Availability & Fault Tolerance",
        def: "Designing redundant systems that remain operational despite individual node crashes.",
        why: "Guarantees 99.99% system uptime for mission-critical enterprise services.",
        level: "Advanced"
      }
    ]
  },

  // ==================== 7. CI/CD ====================
  {
    id: "cat-7",
    domainId: "engineering",
    number: 7,
    title: "7. DevOps & CI/CD Pipelines",
    description: "Continuous integration, automated test runners, continuous deployment, and build pipelines.",
    icon: "repeat",
    topics: [
      {
        id: "cat-7-1",
        name: "Continuous Integration (CI)",
        def: "Automated process of building and running tests on every code commit.",
        why: "Catches integration bugs immediately before code reaches production.",
        level: "Intermediate"
      },
      {
        id: "cat-7-2",
        name: "Continuous Deployment (CD)",
        def: "Automated pipeline releasing validated code updates directly to production.",
        why: "Accelerates release velocity from weeks to minutes.",
        level: "Intermediate"
      },
      {
        id: "cat-7-3",
        name: "GitHub Actions Pipelines",
        def: "Native GitHub automation runner executing build, lint, test, and deploy jobs.",
        why: "Standard workflow runner for repository automation.",
        level: "Intermediate"
      },
      {
        id: "cat-7-4",
        name: "Automated Rollbacks",
        def: "System safety mechanism restoring previous stable release if new deployment health fails.",
        why: "Minimizes user outage duration when bugs reach production.",
        level: "Advanced"
      }
    ]
  },

  // ==================== 8. Terraform ====================
  {
    id: "cat-8",
    domainId: "engineering",
    number: 8,
    title: "8. Terraform & Infrastructure as Code",
    description: "Declarative infrastructure provisioning, state files, providers, modules, and execution plans.",
    icon: "code",
    topics: [
      {
        id: "cat-8-1",
        name: "Infrastructure as Code (IaC)",
        def: "Managing cloud hardware using machine-readable definition files rather than manual portals.",
        why: "Ensures reproducible, version-controlled cloud environment setups.",
        level: "Intermediate"
      },
      {
        id: "cat-8-2",
        name: "Terraform",
        def: "Declarative IaC tool provisioning resources across cloud providers (AWS, GCP, Azure).",
        why: "Industry standard tool for managing cloud topology declaratively.",
        level: "Intermediate"
      },
      {
        id: "cat-8-3",
        name: "Terraform State File",
        def: "JSON state registry mapping declared code objects to real cloud resource IDs.",
        why: "Tracks infrastructure changes and prevents drift.",
        level: "Advanced"
      },
      {
        id: "cat-8-4",
        name: "Terraform Modules",
        def: "Reusable, parameterized configuration blueprints for complex cloud infrastructure.",
        why: "Encapsulates infrastructure patterns across development and production environments.",
        level: "Advanced"
      }
    ]
  },

  // ==================== 9. Kubernetes ====================
  {
    id: "cat-9",
    domainId: "cloud",
    number: 9,
    title: "9. Kubernetes Orchestration",
    description: "Production container orchestration, Pod control planes, Deployments, Services, and Ingress routing.",
    icon: "layers",
    topics: [
      {
        id: "cat-9-1",
        name: "Kubernetes (K8s)",
        def: "Container orchestration engine managing deployment, scaling, and failover of containerized applications.",
        why: "Standard production runtime engine for microservice fleets.",
        level: "Intermediate"
      },
      {
        id: "cat-9-2",
        name: "Pod",
        def: "Smallest execution unit in Kubernetes containing one or more co-located containers.",
        why: "Groups closely coupled application containers sharing network/storage.",
        level: "Beginner"
      },
      {
        id: "cat-9-3",
        name: "Deployment & ReplicaSet",
        def: "Controller ensuring desired number of Pod replicas are actively running and updated.",
        why: "Manages rolling zero-downtime updates and self-healing worker pods.",
        level: "Intermediate"
      },
      {
        id: "cat-9-4",
        name: "K8s Service & Ingress",
        def: "Service provides internal load balancer IPs; Ingress handles external HTTP/HTTPS edge routing.",
        why: "Directs web traffic to dynamic transient Pod IP addresses.",
        level: "Intermediate"
      },
      {
        id: "cat-9-5",
        name: "ConfigMap & K8s Secret",
        def: "Objects decoupling non-sensitive configuration and encrypted keys from container images.",
        why: "Injects runtime parameters safely into running Pod environments.",
        level: "Intermediate"
      }
    ]
  },

  // ==================== 10. Helm ====================
  {
    id: "cat-10",
    domainId: "cloud",
    number: 10,
    title: "10. Helm Package Management",
    description: "Kubernetes package management, Helm Charts, Values.yaml parameterization, and release lifecycles.",
    icon: "package",
    topics: [
      {
        id: "cat-10-1",
        name: "Helm",
        def: "Package manager for Kubernetes that simplifies defining, installing, and upgrading cluster applications.",
        why: "Acts as the 'apt-get' or 'npm' equivalent for Kubernetes manifest templates.",
        level: "Intermediate"
      },
      {
        id: "cat-10-2",
        name: "Helm Chart",
        def: "Collection of version-controlled Kubernetes YAML templates describing a complete application package.",
        why: "Standardizes complex microservice app deployment across environments.",
        level: "Intermediate"
      },
      {
        id: "cat-10-3",
        name: "Values.yaml",
        def: "Configuration parameter file supplying environment-specific values to Helm templates.",
        why: "Allows reusing identical Helm charts across dev, staging, and production clusters.",
        level: "Intermediate",
        example: "replicaCount: 3 | imageTag: v2.4"
      }
    ]
  },

  // ==================== 11. Argo CD ====================
  {
    id: "cat-11",
    domainId: "engineering",
    number: 11,
    title: "11. Argo CD & GitOps",
    description: "Declarative GitOps continuous delivery, automated cluster state synchronization, and drift detection.",
    icon: "refresh-cw",
    topics: [
      {
        id: "cat-11-1",
        name: "GitOps Paradigm",
        def: "Operational framework where Git repositories act as the single source of truth for infrastructure and code.",
        why: "Eliminates manual `kubectl` changes by automating cluster updates from Git commits.",
        level: "Intermediate"
      },
      {
        id: "cat-11-2",
        name: "Argo CD",
        def: "Declarative GitOps continuous delivery tool for Kubernetes running inside the cluster.",
        why: "Monitors Git repositories and continuously syncs cluster state to match target code.",
        level: "Advanced"
      },
      {
        id: "cat-11-3",
        name: "Continuous Reconciliation & Drift Detection",
        def: "Automatically detects and overwrites unauthorized manual cluster changes to preserve Git state.",
        why: "Guarantees cluster configuration integrity and automated security compliance.",
        level: "Advanced"
      }
    ]
  },

  // ==================== 12. Secrets & Configuration ====================
  {
    id: "cat-12",
    domainId: "cloud",
    number: 12,
    title: "12. Secrets & Identity Management",
    description: "Managing API keys, environment variables, PAT tokens, service accounts, and IAM least privilege.",
    icon: "key",
    topics: [
      {
        id: "cat-12-1",
        name: "Secrets",
        def: "Sensitive values such as database passwords, TLS certificates, and API keys that must be protected.",
        why: "Prevents credential theft and unauthorized infrastructure access.",
        level: "Beginner",
        example: "DB_PASSWORD, Stripe Secret Key",
        remember: "Keep private! Never commit secrets to source code repositories."
      },
      {
        id: "cat-12-2",
        name: "PAT Token (Personal Access Token)",
        def: "Token used to authenticate user or developer access to specific APIs or Git services.",
        why: "Password replacement for programmatic API authentication and Git CLI operations.",
        level: "Beginner",
        example: "GitHub PAT for repository access",
        remember: "PAT is an authentication credential/token, NOT a general secret manager replacement."
      },
      {
        id: "cat-12-3",
        name: "ENV Variables (Environment Variables)",
        def: "Configuration values supplied to an application dynamically at runtime.",
        why: "Configures application behavior across dev/prod environments without hardcoding code values.",
        level: "Beginner",
        example: "DATABASE_URL=postgres://...",
        remember: "Configure without hardcoding."
      },
      {
        id: "cat-12-4",
        name: "Service Account",
        def: "Non-human machine identity used by an application or pod to access cloud services.",
        why: "Grants applications automated permissions without associating with personal human credentials.",
        level: "Intermediate",
        example: "Kubernetes pod accessing AWS S3 bucket via IAM role",
        remember: "Machine identity for non-human applications."
      },
      {
        id: "cat-12-5",
        name: "Secret Flow Architecture",
        def: "Standard application security access pattern: Application -> Needs key -> ENV / Secret -> Service Account.",
        why: "Decouples credentials from source code and automates security bounds.",
        level: "Intermediate",
        remember: "App -> Needs key -> Don't hardcode -> ENV/Secret -> Vault -> Service Account securely obtains access."
      }
    ]
  },

  // ==================== 13. HashiCorp Vault ====================
  {
    id: "cat-13",
    domainId: "cloud",
    number: 13,
    title: "13. HashiCorp Vault & Secret Security",
    description: "Centralized secret management, dynamic credentials, key rotation, and encryption as a service.",
    icon: "shield",
    topics: [
      {
        id: "cat-13-1",
        name: "HashiCorp Vault",
        def: "Centralized enterprise system for securely storing, accessing, and leasing secrets and API credentials.",
        why: "Provides encrypted secret storage, audit logging, dynamic leases, and automated key rotation.",
        level: "Advanced",
        example: "Store DB credentials and API keys central in Vault",
        remember: "Central secret manager for large systems."
      },
      {
        id: "cat-13-2",
        name: "Dynamic Secrets",
        def: "Credentials generated on-demand by Vault with short expiration lifetimes.",
        why: "Eliminates static long-lived passwords; credentials self-destruct after use.",
        level: "Advanced"
      },
      {
        id: "cat-13-3",
        name: "Encryption as a Service",
        def: "Vault encrypts application data in transit and at rest without exposing underlying encryption keys.",
        why: "Offloads complex cryptographic key management from application logic.",
        level: "Advanced"
      }
    ]
  },

  // ==================== 14. Testing ====================
  {
    id: "cat-14",
    domainId: "engineering",
    number: 14,
    title: "14. Software Testing & Automation",
    description: "Sanity checks, regression test suites, Playwright browser automation, and verification pipelines.",
    icon: "check-circle",
    topics: [
      {
        id: "cat-14-1",
        name: "Sanity Testing",
        def: "Quick surface-level check verifying that a specific change or new build basically functions.",
        why: "Quickly determines if a new build is sane enough to proceed with deeper testing.",
        level: "Beginner",
        example: "After deployment, verify user login form renders and accepts input",
        remember: "Quick check: 'Is this build sane enough to continue testing?'"
      },
      {
        id: "cat-14-2",
        name: "Regression Testing",
        def: "Comprehensive test suite verifying that new code changes did not break existing features.",
        why: "Guarantees system stability when adding features or refactoring legacy logic.",
        level: "Intermediate",
        example: "Ensure new payment feature didn't break dashboard stats",
        remember: "Regression check: 'Did we break anything else?'"
      },
      {
        id: "cat-14-3",
        name: "Playwright Framework",
        def: "Modern cross-browser automation framework for testing web apps end-to-end.",
        why: "Automates real browser actions (clicks, forms, file uploads, network intercept).",
        level: "Intermediate",
        example: "Automate user login, add to cart, and checkout flow in real Chromium",
        remember: "Browser automation framework to control a real browser programmatically."
      },
      {
        id: "cat-14-4",
        name: "Sanity vs Regression Workflow",
        def: "Sequential test execution strategy: Build -> Sanity Test -> Regression Test Suite.",
        why: "Saves CI compute time by rejecting broken builds before running long test suites.",
        level: "Intermediate",
        remember: "New Build -> Sanity Test (Basic Check) -> Regression Testing (Deep Check)."
      }
    ]
  },

  // ==================== 15. Feature Flags ====================
  {
    id: "cat-15",
    domainId: "engineering",
    number: 15,
    title: "15. Feature Flags & Progressive Delivery",
    description: "Runtime feature toggling, percentage rollouts, dark launching, and instant kill switches.",
    icon: "toggle-right",
    topics: [
      {
        id: "cat-15-1",
        name: "Feature Flag",
        def: "Configuration switch enabling or disabling code functionality at runtime without deploying code.",
        why: "Decouples code deployment from feature release exposure.",
        level: "Intermediate",
        example: "new_video_player = false (old player) -> true (new player)",
        remember: "Turn features ON/OFF instantly without redeploying code."
      },
      {
        id: "cat-15-2",
        name: "Progressive Feature Rollout",
        def: "Strategy releasing code to internal users, then 5%, 50%, and finally 100% of live users.",
        why: "Minimizes blast radius of bugs by exposing features incrementally while monitoring telemetry.",
        level: "Intermediate",
        remember: "Deploy OFF -> Test Internally -> 5% -> Monitor -> 50% -> 100%"
      },
      {
        id: "cat-15-3",
        name: "Dark Launching & Kill Switches",
        def: "Releasing code quietly into production environment and toggling OFF instantly if errors spike.",
        why: "Provides instantaneous emergency kill switch without requiring code rollbacks.",
        level: "Advanced"
      }
    ]
  },

  // ==================== 16. Canary Deployment ====================
  {
    id: "cat-16",
    domainId: "cloud",
    number: 16,
    title: "16. Canary Deployment & Release Strategies",
    description: "Traffic shifting release strategies, canary builds, blue/green deployments, and health gating.",
    icon: "git-commit",
    topics: [
      {
        id: "cat-16-1",
        name: "Canary Deployment",
        def: "Releasing a new application version to a small percentage (e.g. 10%) of live traffic before full rollout.",
        why: "Validates server performance, error rates, and CPU load under live traffic before 100% deployment.",
        level: "Advanced",
        example: "90% traffic -> v1 | 10% traffic -> v2 (Monitor metrics -> scale to 100%)",
        remember: "Canary controls traffic version rollout across server instances."
      },
      {
        id: "cat-16-2",
        name: "Feature Flag vs Canary Deployment",
        def: "Feature Flags control whether code logic is enabled; Canary controls which app version receives traffic.",
        why: "Understanding the distinction prevents mixing code toggles with infrastructure routing.",
        level: "Intermediate",
        remember: "Feature Flag = Code feature on/off | Canary = Infrastructure traffic percentage rollout."
      },
      {
        id: "cat-16-3",
        name: "Blue/Green Deployment",
        def: "Maintaining two identical production environments (Blue active, Green staging) and switching router traffic.",
        why: "Enables instant zero-downtime cutover and immediate fallback.",
        level: "Advanced"
      }
    ]
  },

  // ==================== 17. Observability ====================
  {
    id: "cat-17",
    domainId: "engineering",
    number: 17,
    title: "17. Observability & Telemetry Fundamentals",
    description: "The 3 pillars of observability: Metrics, Structured Logs, and Distributed Tracing.",
    icon: "activity",
    topics: [
      {
        id: "cat-17-1",
        name: "Observability",
        def: "Ability to measure and understand the internal state of a complex system based on external outputs.",
        why: "Enables fast troubleshooting of distributed microservice bottlenecks and edge cases.",
        level: "Intermediate"
      },
      {
        id: "cat-17-2",
        name: "Metrics",
        def: "Numeric aggregated measurements over time (CPU utilization, API request count, memory, latency).",
        why: "Detects system degradation trends and triggers automated alerts.",
        level: "Beginner"
      },
      {
        id: "cat-17-3",
        name: "Structured Logging",
        def: "Formatting log messages as structured JSON objects containing context key-value pairs.",
        why: "Allows rapid indexing and querying in log search engines.",
        level: "Beginner"
      },
      {
        id: "cat-17-4",
        name: "Distributed Tracing (APM)",
        def: "Tracking single user requests across multiple microservices using unified trace IDs.",
        why: "Identifies exact microservice causing latency slowdowns in distributed call chains.",
        level: "Advanced"
      }
    ]
  },

  // ==================== 18. Observability Stack ====================
  {
    id: "cat-18",
    domainId: "engineering",
    number: 18,
    title: "18. Observability Stack (Grafana, Datadog, Sentry, Splunk, New Relic)",
    description: "Comparing production telemetry visualization, error tracking, APM, and log search engines.",
    icon: "bar-chart-2",
    topics: [
      {
        id: "cat-18-1",
        name: "Grafana",
        def: "Open-source visualization platform creating real-time dashboards for metrics and telemetry.",
        why: "Visualizes latency, CPU usage, and queue depth from metrics sources like Prometheus.",
        level: "Intermediate",
        example: "CPU utilization & API latency dashboard",
        remember: "Grafana -> SEE THE DATA & VISUALIZE DASHBOARDS"
      },
      {
        id: "cat-18-2",
        name: "Splunk",
        def: "Enterprise log analytics platform for ingesting, searching, and analyzing big log data.",
        why: "Searches millions of production error logs quickly during incident investigations.",
        level: "Intermediate",
        example: "Search production application logs for 500 status codes",
        remember: "Splunk -> SEARCH & ANALYZE LOGS"
      },
      {
        id: "cat-18-3",
        name: "Sentry",
        def: "Application crash and error monitoring platform capturing exceptions and stack traces in real time.",
        why: "Instantly alerts developers to unhandled code exceptions with exact code line numbers.",
        level: "Intermediate",
        example: "View Python exception stack trace and affected user IDs",
        remember: "Sentry -> FIND APPLICATION ERRORS & CRASHES"
      },
      {
        id: "cat-18-4",
        name: "New Relic",
        def: "Application Performance Monitoring (APM) platform tracking server health and distributed traces.",
        why: "Monitors application execution speed, database query timings, and infrastructure.",
        level: "Intermediate",
        example: "APM tracing slow SQL query execution times",
        remember: "New Relic -> OBSERVE APPLICATION PERFORMANCE & APM"
      },
      {
        id: "cat-18-5",
        name: "Datadog",
        def: "Unified cloud observability platform integrating metrics, logs, traces, and synthetic tests.",
        why: "All-in-one monitoring platform covering full-stack cloud infrastructure.",
        level: "Intermediate",
        example: "Unified dashboard combining server metrics, logs, and APM traces",
        remember: "Datadog -> UNIFIED MONITOR EVERYTHING"
      }
    ]
  },

  // ==================== 19. Slack + Alerting ====================
  {
    id: "cat-19",
    domainId: "engineering",
    number: 19,
    title: "19. Slack & Automated Incident Alerting",
    description: "Team alert notifications, Prometheus Alertmanager integration, and on-call escalation.",
    icon: "bell",
    topics: [
      {
        id: "cat-19-1",
        name: "Slack Incident Notifications",
        def: "Team communication platform integrated with alerting systems to post automated incident alerts.",
        why: "Notifies DevOps and engineering teams instantly when outages or errors spike.",
        level: "Beginner",
        example: "Prometheus detects API outage -> Alertmanager -> Slack #production-alerts -> Engineer",
        remember: "Monitoring detects -> Slack notifies the team. Slack itself is NOT the monitoring system!"
      },
      {
        id: "cat-19-2",
        name: "Alert Rules & Thresholds",
        def: "Conditions defining when system telemetry triggers automated notifications.",
        why: "Prevents alert fatigue by notifying engineers only on actionable incidents.",
        level: "Intermediate"
      }
    ]
  },

  // ==================== 20. Performance ====================
  {
    id: "cat-20",
    domainId: "engineering",
    number: 20,
    title: "20. Website Performance & Optimization",
    description: "PageSpeed Insights, Core Web Vitals, browser rendering performance, and edge caching.",
    icon: "zap",
    topics: [
      {
        id: "cat-20-1",
        name: "PageSpeed Insights",
        def: "Tool measuring web page loading speed, performance scores, and optimization recommendations.",
        why: "Audits mobile/desktop web speed, LCP (Largest Contentful Paint), and rendering performance.",
        level: "Beginner",
        example: "Audit mobile web page loading speed and get image compression tips",
        remember: "PageSpeed Insights -> HOW FAST IS MY PAGE?"
      },
      {
        id: "cat-20-2",
        name: "Core Web Vitals",
        def: "Google metrics measuring user experience: loading speed (LCP), interactivity (INP), and visual stability (CLS).",
        why: "Directly impacts user retention and search engine rankings.",
        level: "Intermediate"
      }
    ]
  },

  // ==================== 21. AI Fundamentals ====================
  {
    id: "cat-21",
    domainId: "ai",
    number: 21,
    title: "21. AI & Machine Learning Fundamentals",
    description: "Core concepts foundational to modern artificial intelligence, machine learning, and neural networks.",
    icon: "brain",
    topics: [
      {
        id: "cat-21-1",
        name: "Artificial Intelligence (AI)",
        def: "Systems performing tasks requiring human-like intelligence such as reasoning and problem-solving.",
        why: "Provides overarching paradigm for constructing autonomous intelligent software.",
        level: "Beginner"
      },
      {
        id: "cat-21-2",
        name: "Machine Learning (ML)",
        def: "Algorithms learning statistical patterns from data to make predictions without hardcoded rules.",
        why: "Replaces traditional static conditional logic with data-driven predictions.",
        level: "Beginner"
      },
      {
        id: "cat-21-3",
        name: "Deep Learning (DL)",
        def: "Subfield of ML using multi-layer neural networks to learn representations from unstructured data.",
        why: "Powers modern image, voice, and language foundation models.",
        level: "Intermediate"
      },
      {
        id: "cat-21-4",
        name: "Neural Networks",
        def: "Interconnected node architectures inspired by biological brains processing data in layers.",
        why: "Acts as computational substrate for modern artificial intelligence.",
        level: "Intermediate"
      }
    ]
  },

  // ==================== 22. Deep Learning & Transformers ====================
  {
    id: "cat-22",
    domainId: "ai",
    number: 22,
    title: "22. Deep Learning & Transformer Architecture",
    description: "Attention mechanisms, Query/Key/Value vectors, positional encodings, and model parameters.",
    icon: "cpu-chip",
    topics: [
      {
        id: "cat-22-1",
        name: "Transformer Architecture",
        def: "Neural network architecture relying on self-attention to process sequence tokens in parallel.",
        why: "Foundational architecture powering modern LLMs (GPT-4, Claude, Gemini, Llama).",
        level: "Intermediate"
      },
      {
        id: "cat-22-2",
        name: "Self-Attention Mechanism",
        def: "Calculates mathematical weights between every token in a sequence to capture contextual relationships.",
        why: "Allows long-range context understanding without recurrent bottleneck limits.",
        level: "Advanced"
      },
      {
        id: "cat-22-3",
        name: "Query, Key, Value (QKV)",
        def: "Vector projections used in attention math: Query asks, Key matches relevance, Value carries content.",
        why: "Core linear algebra transformation computing attention scores.",
        level: "Advanced"
      },
      {
        id: "cat-22-4",
        name: "Quantization",
        def: "Reducing numerical precision of model parameters (e.g. 16-bit to 4-bit float) to shrink memory size.",
        why: "Allows running 70B parameter models on smaller GPU/CPU devices.",
        level: "Advanced"
      }
    ]
  },

  // ==================== 23. LLMs & RAG ====================
  {
    id: "cat-23",
    domainId: "ai",
    number: 23,
    title: "23. LLMs & RAG Architectures",
    description: "Large Language Models, Next-Token Prediction, Fine-Tuning, Embeddings, and Retrieval-Augmented Generation.",
    icon: "sparkles",
    topics: [
      {
        id: "cat-23-1",
        name: "Large Language Models (LLMs)",
        def: "Deep learning models trained on vast text corpora to understand and generate human language.",
        why: "Acts as general-purpose reasoning engines for AI agents.",
        level: "Intermediate"
      },
      {
        id: "cat-23-2",
        name: "Next-Token Prediction",
        def: "Autoregressive training objective predicting the most statistically probable next token given context.",
        why: "The core mechanism driving generative language model responses.",
        level: "Intermediate"
      },
      {
        id: "cat-23-3",
        name: "Vector Embeddings",
        def: "Dense numerical vector arrays representing semantic meaning in high-dimensional vector spaces.",
        why: "Translates text into mathematical representations for semantic similarity search.",
        level: "Intermediate"
      },
      {
        id: "cat-23-4",
        name: "RAG (Retrieval-Augmented Generation)",
        def: "Retrieving relevant external database passages and inserting them into LLM context prior to generation.",
        why: "Grounds LLM responses in real-time private data while preventing hallucinations.",
        level: "Intermediate"
      }
    ]
  },

  // ==================== 24. Prompt & Context ====================
  {
    id: "cat-24",
    domainId: "ai",
    number: 24,
    title: "24. Prompt & Context Engineering",
    description: "Designing prompt templates, system instructions, context windows, and conversation history memory.",
    icon: "terminal-box",
    topics: [
      {
        id: "cat-24-1",
        name: "Prompt & System Instructions",
        def: "Input instructions defining task requirements, role identity, constraints, and output format.",
        why: "Primary control mechanism steering LLM behavior and reasoning quality.",
        level: "Beginner"
      },
      {
        id: "cat-24-2",
        name: "Context Window & Context Length",
        def: "Maximum token budget supported by an LLM in a single inference call (e.g. 128k, 1M tokens).",
        why: "Defines memory boundaries for active reasoning and document retrieval.",
        level: "Intermediate"
      },
      {
        id: "cat-24-3",
        name: "Context Management & Compression",
        def: "Techniques summarizing or trimming older context history to fit within token budgets efficiently.",
        why: "Reduces API costs and inference latency while keeping essential conversation state.",
        level: "Advanced"
      }
    ]
  },

  // ==================== 25. AI Agents ====================
  {
    id: "cat-25",
    domainId: "ai",
    number: 25,
    title: "25. AI Agents & Function Calling",
    description: "Autonomous agent execution loops, planning, tool calling, function parameters, and human-in-the-loop control.",
    icon: "bot",
    topics: [
      {
        id: "cat-25-1",
        name: "AI Agent",
        def: "Autonomous system using an LLM, state memory, and tools to accomplish multi-step goals.",
        why: "Extends passive chat models into active task-executing digital workers.",
        level: "Intermediate"
      },
      {
        id: "cat-25-2",
        name: "Planning & ReAct Pattern",
        def: "Decomposing complex goals into sub-tasks using Reasoning + Acting loops.",
        why: "Allows agents to solve complex tasks systematically step-by-step.",
        level: "Intermediate"
      },
      {
        id: "cat-25-3",
        name: "Tool Calling / Function Calling",
        def: "Structured mechanism allowing an LLM to request execution of external APIs, functions, or shell commands.",
        why: "Connects LLM intelligence to live external databases, APIs, and execution environments.",
        level: "Intermediate"
      },
      {
        id: "cat-25-4",
        name: "Agent Control Loop (Plan -> Act -> Observe)",
        def: "Continuous runtime cycle: plan step -> execute tool -> observe output -> refine next action.",
        why: "Core execution loop driving autonomous problem solving.",
        level: "Intermediate"
      },
      {
        id: "cat-25-5",
        name: "Human-in-the-Loop (HITL)",
        def: "Safety gate requiring human review and approval before executing high-risk agent actions.",
        why: "Prevents accidental file deletion or unintended financial transactions.",
        level: "Intermediate"
      }
    ]
  },

  // ==================== 26. Agent Memory ====================
  {
    id: "cat-26",
    domainId: "ai",
    number: 26,
    title: "26. Agent Memory & State Persistence",
    description: "Working memory, episodic recall, semantic vector memory, state serialization, and checkpointing.",
    icon: "database",
    topics: [
      {
        id: "cat-26-1",
        name: "Working & Short-Term Memory",
        def: "In-memory session buffer storing active variables, turn history, and transient tool execution results.",
        why: "Maintains immediate context during an active multi-turn agent session.",
        level: "Intermediate"
      },
      {
        id: "cat-26-2",
        name: "Long-Term & Episodic Memory",
        def: "Persisted vector/relational storage keeping user preferences and past task experiences across sessions.",
        why: "Allows agents to recall past interactions and learn from historical successes.",
        level: "Advanced"
      },
      {
        id: "cat-26-3",
        name: "State Checkpointing & Recovery",
        def: "Saving atomic state snapshots to database storage during long execution chains.",
        why: "Enables restoring agent execution after server crashes or restarts.",
        level: "Advanced"
      }
    ]
  },

  // ==================== 27. Agentic AI ====================
  {
    id: "cat-27",
    domainId: "ai",
    number: 27,
    title: "27. Agentic AI & Workflow Orchestration",
    description: "Model Context Protocol (MCP), specialized subagents, coding agents, and browser automation.",
    icon: "workflow",
    topics: [
      {
        id: "cat-27-1",
        name: "Agentic AI",
        def: "Systems capable of planning, acting, observing, and adapting autonomously toward complex goals.",
        why: "Powers autonomous software development, research, and enterprise workflow execution.",
        level: "Advanced"
      },
      {
        id: "cat-27-2",
        name: "Model Context Protocol (MCP)",
        def: "Universal open standard protocol connecting AI agents to external context and tool servers.",
        why: "Standardizes how agents access local files, APIs, and database tools seamlessly.",
        level: "Advanced"
      },
      {
        id: "cat-27-3",
        name: "Specialized Subagents",
        def: "Delegating specific sub-tasks to isolated specialized agents (e.g. Coder, Code Reviewer, Browser Tester).",
        why: "Prevents context window pollution by keeping agent roles focused.",
        level: "Advanced"
      }
    ]
  },

  // ==================== 28. Long-Running Agents ====================
  {
    id: "cat-28",
    domainId: "ai",
    number: 28,
    title: "28. Long-Running Agents & Fault Resilience",
    description: "Asynchronous task execution, persistent background workflows, automatic retry, and goal tracking.",
    icon: "timer",
    topics: [
      {
        id: "cat-28-1",
        name: "Long-Running Agent",
        def: "Agent designed to execute complex tasks asynchronously over hours or days.",
        why: "Enables autonomous execution of long research projects or software refactoring tasks.",
        level: "Advanced"
      },
      {
        id: "cat-28-2",
        name: "Persistent Background Workflows",
        def: "Decoupling long agent execution from HTTP requests using queue workers and database checkpoints.",
        why: "Ensures agent execution survives client disconnects and server restarts.",
        level: "Advanced"
      },
      {
        id: "cat-28-3",
        name: "Retry & Task Persistence",
        def: "Automatic recovery from transient tool failures and maintaining clear goal direction without drifting.",
        why: "Guarantees robust task completion over long execution trajectories.",
        level: "Advanced"
      }
    ]
  },

  // ==================== 29. AI Evals ====================
  {
    id: "cat-29",
    domainId: "ai",
    number: 29,
    title: "29. AI Evals & Quality Benchmarking",
    description: "Evaluation frameworks for LLMs and Agents: Correctness, Groundedness, Tool-use, Trajectory, Latency, and Cost.",
    icon: "award",
    topics: [
      {
        id: "cat-29-1",
        name: "AI Eval (AI System Evaluation)",
        def: "Quantitative, measurable testing of an AI system's output quality, correctness, safety, and agent behavior.",
        why: "Transforms AI prompt/model development into rigorous engineering with measurable score benchmarks.",
        level: "Advanced",
        example: "Dataset of 100 test cases -> AI Eval -> Score (v1: 82%, v2: 89%, v3: 74%)",
        remember: "AI Eval measures AI behavior, correctness, and agent trajectories quantitatively."
      },
      {
        id: "cat-29-2",
        name: "Correctness & Groundedness Evals",
        def: "Correctness checks factual accuracy against ground truth; Groundedness checks if response uses provided data.",
        why: "Eliminates hallucinations in RAG applications and customer support agents.",
        level: "Advanced",
        example: "Question: 'Refund policy?' -> Compare AI response to official policy document",
        remember: "Correctness = Factual truth | Groundedness = Supported by retrieved context."
      },
      {
        id: "cat-29-3",
        name: "Tool-Use & Agent Trajectory Evals",
        def: "Tool-use checks if agent called correct tool; Trajectory checks if sequence of reasoning steps was optimal.",
        why: "Verifies that multi-step agents perform logical tool calls without getting stuck in loops.",
        level: "Advanced",
        remember: "Tool-Use Eval = Correct tool call | Trajectory Eval = Right sequence of actions."
      },
      {
        id: "cat-29-4",
        name: "Latency & Cost Evals",
        def: "Measures Time-To-First-Token (TTFT), total latency, and financial token cost per execution run.",
        why: "Optimizes production AI costs and response speed for end users.",
        level: "Intermediate",
        example: "Track latency (ms) and token expense ($) per user request"
      },
      {
        id: "cat-29-5",
        name: "AI Regression Evals",
        def: "Running benchmark datasets after prompt or model updates to ensure performance did not degrade.",
        why: "Prevents silent regressions when upgrading model versions or tuning prompts.",
        level: "Advanced",
        example: "Compare v1 baseline (82%) against v2 (89% - Pass) and v3 (74% - Fail & Rollback)",
        remember: "Did a new model or prompt make performance worse?"
      }
    ]
  },

  // ==================== 30. Production AI Systems ====================
  {
    id: "cat-30",
    domainId: "ai",
    number: 30,
    title: "30. Production AI Systems & Harness Engineering",
    description: "Harness engineering, isolated execution sandboxes, verification specifications, and agent CI/CD.",
    icon: "shield-check",
    topics: [
      {
        id: "cat-30-1",
        name: "Production AI System Architecture",
        def: "End-to-end integration of cloud infrastructure, security, CI/CD, observability, and AI evals into a production system.",
        why: "Combines DevOps reliability with agentic intelligence for real-world enterprise deployment.",
        level: "Advanced",
        remember: "Integrates Security -> Testing -> Deployment -> Production -> Observability -> AI Evals."
      },
      {
        id: "cat-30-2",
        name: "Harness Engineering",
        def: "Designing the execution environment around an AI agent (sandboxes, automated verification tests, constraints).",
        why: "Surrounds raw AI models with reliable software verification infrastructure.",
        level: "Advanced"
      },
      {
        id: "cat-30-3",
        name: "Agent Sandboxing & Safety Constraints",
        def: "Isolated environment restricting filesystem, network, and command privileges of autonomous agents.",
        why: "Prevents agents from executing destructive system actions or leaking secrets.",
        level: "Advanced"
      }
    ]
  }
];

// 30 Master Roadmap Flow Steps
const ROADMAP_FLOW = [
  { id: "flow-1", step: 1, label: "Linux", catId: "cat-1" },
  { id: "flow-2", step: 2, label: "Networking", catId: "cat-2" },
  { id: "flow-3", step: 3, label: "HTTP/HTTPS", catId: "cat-3" },
  { id: "flow-4", step: 4, label: "Git/GitHub", catId: "cat-4" },
  { id: "flow-5", step: 5, label: "Docker", catId: "cat-5" },
  { id: "flow-6", step: 6, label: "Cloud", catId: "cat-6" },
  { id: "flow-7", step: 7, label: "CI/CD", catId: "cat-7" },
  { id: "flow-8", step: 8, label: "Terraform", catId: "cat-8" },
  { id: "flow-9", step: 9, label: "Kubernetes", catId: "cat-9" },
  { id: "flow-10", step: 10, label: "Helm", catId: "cat-10" },
  { id: "flow-11", step: 11, label: "Argo CD", catId: "cat-11" },
  { id: "flow-12", step: 12, label: "Secrets & IAM", catId: "cat-12" },
  { id: "flow-13", step: 13, label: "HashiCorp Vault", catId: "cat-13" },
  { id: "flow-14", step: 14, label: "Testing & Playwright", catId: "cat-14" },
  { id: "flow-15", step: 15, label: "Feature Flags", catId: "cat-15" },
  { id: "flow-16", step: 16, label: "Canary Deployment", catId: "cat-16" },
  { id: "flow-17", step: 17, label: "Observability", catId: "cat-17" },
  { id: "flow-18", step: 18, label: "Observability Stack", catId: "cat-18" },
  { id: "flow-19", step: 19, label: "Slack + Alerting", catId: "cat-19" },
  { id: "flow-20", step: 20, label: "PageSpeed Insights", catId: "cat-20" },
  { id: "flow-21", step: 21, label: "AI Fundamentals", catId: "cat-21" },
  { id: "flow-22", step: 22, label: "Deep Learning", catId: "cat-22" },
  { id: "flow-23", step: 23, label: "LLMs & RAG", catId: "cat-23" },
  { id: "flow-24", step: 24, label: "AI Agents", catId: "cat-24" },
  { id: "flow-25", step: 25, label: "Context Window", catId: "cat-25" },
  { id: "flow-26", step: 26, label: "Agent Memory", catId: "cat-26" },
  { id: "flow-27", step: 27, label: "Agentic AI", catId: "cat-27" },
  { id: "flow-28", step: 28, label: "Long-running Agents", catId: "cat-28" },
  { id: "flow-29", step: 29, label: "AI Evals", catId: "cat-29" },
  { id: "flow-30", step: 30, label: "Production AI", catId: "cat-30" }
];

// Key Concept Distinctions Matrix (Memorization Cheat-Sheet)
const KEY_DISTINCTIONS = [
  {
    category: "Secrets & Credentials Management",
    description: "Component responsibilities for configuration vs machine identity & vault storage",
    pairs: [
      { topic: "ENV Variable", role: "Configuration", explanation: "Runtime configuration values supplied to an application without hardcoding in code.", remember: "Configure without hardcoding", example: "DATABASE_URL=..." },
      { topic: "Secret", role: "Sensitive Config", explanation: "Sensitive credentials such as DB passwords or API keys requiring protection.", remember: "Keep private & encrypted", example: "DB_PASSWORD" },
      { topic: "PAT Token", role: "Authentication Token", explanation: "Personal Access Token for API or Git authentication. Not a secret manager replacement.", remember: "Password replacement for APIs/Git", example: "GitHub PAT" },
      { topic: "Service Account", role: "Machine Identity", explanation: "Non-human identity used by automated applications and Kubernetes pods.", remember: "Machine identity for apps/pods", example: "K8s pod accessing AWS S3" },
      { topic: "HashiCorp Vault", role: "Secret Manager", explanation: "Central system for storing, dynamic leasing, and managing access to secrets securely.", remember: "Central secret manager", example: "Store & rotate DB keys" }
    ]
  },
  {
    category: "Observability & Alerting Stack",
    description: "Distinguishing metrics visualization, log search, error tracking, APM, and alerts",
    pairs: [
      { topic: "Grafana", role: "Visualize Telemetry", explanation: "Creates interactive dashboards to visualize CPU, memory, and API metrics.", remember: "SEE THE DATA & VISUALIZE", example: "Latency dashboard" },
      { topic: "Splunk", role: "Log Search & Analytics", explanation: "Centralized log platform for collecting, searching, and analyzing production log streams.", remember: "SEARCH & ANALYZE LOGS", example: "Search log 500 errors" },
      { topic: "Sentry", role: "Application Error Tracking", explanation: "Real-time error/crash monitoring capturing unhandled exceptions with stack traces.", remember: "FIND APPLICATION ERRORS", example: "Python crash stack trace" },
      { topic: "New Relic", role: "APM & Infrastructure", explanation: "Application Performance Monitoring tracking distributed traces and host health.", remember: "OBSERVE APP PERFORMANCE", example: "APM query trace" },
      { topic: "Datadog", role: "Unified Observability", explanation: "All-in-one platform integrating metrics, logs, APM traces, and synthetics.", remember: "MONITOR EVERYTHING", example: "Unified stack monitor" },
      { topic: "Slack", role: "Team Notification", explanation: "Team communication platform receiving automated incident alerts to notify engineers.", remember: "Monitoring detects -> Slack notifies", example: "Prometheus -> Slack alert" }
    ]
  },
  {
    category: "Testing & Website Performance",
    description: "Comparing quick sanity checks, regression suites, Playwright, and PageSpeed Insights",
    pairs: [
      { topic: "Sanity Testing", role: "Quick Basic Check", explanation: "Quick validation that a specific change or new build basically functions before deep testing.", remember: "Is this build sane enough to test?", example: "Verify login page loads" },
      { topic: "Regression Testing", role: "Full Suite Check", explanation: "Comprehensive testing ensuring new code changes did not break existing features.", remember: "Did we break anything else?", example: "Full dashboard test suite" },
      { topic: "Playwright", role: "Browser Automation", explanation: "Cross-browser automation framework controlling real web pages programmatically.", remember: "Control a real browser", example: "Automate checkout flow" },
      { topic: "PageSpeed Insights", role: "Web Performance Audit", explanation: "Measures webpage loading speed, Core Web Vitals, and provides optimization tips.", remember: "How fast is my page?", example: "Audit mobile speed score" }
    ]
  },
  {
    category: "Deployment & Release Strategies",
    description: "Code feature toggling vs infrastructure traffic routing",
    pairs: [
      { topic: "Feature Flag", role: "Feature Switch (On/Off)", explanation: "Controls whether a code feature is enabled at runtime without re-deploying code.", remember: "Controls if feature is enabled", example: "new_video_player = true" },
      { topic: "Canary Deployment", role: "Traffic Version Rollout", explanation: "Routes a small percentage of live user traffic to a new application version.", remember: "Controls version traffic percentage", example: "90% v1 / 10% v2 rollout" }
    ]
  },
  {
    category: "AI System Evaluations & Metrics",
    description: "Quantitative benchmarks for correctness, groundedness, tools, and agent trajectories",
    pairs: [
      { topic: "Correctness Eval", role: "Factual Accuracy", explanation: "Checks whether the AI system response is factually correct against ground truth.", remember: "Is answer factually correct?", example: "Refund policy accuracy" },
      { topic: "Relevance & Groundedness", role: "Context Fidelity", explanation: "Ensures AI answers the prompt directly and uses retrieved data without hallucinations.", remember: "Is answer supported by data?", example: "RAG context fidelity" },
      { topic: "Tool-Use & Trajectory Eval", role: "Agent Execution", explanation: "Evaluates whether the agent invoked correct tools and took logical step sequences.", remember: "Did agent take right steps?", example: "Tool call parameter check" },
      { topic: "AI Regression Eval", role: "Version Benchmark", explanation: "Ensures new model or prompt updates do not degrade scores compared to baseline.", remember: "Did update make quality worse?", example: "v1 82% vs v2 89% vs v3 74%" }
    ]
  }
];

// Production Architecture System Lifecycle Diagram Flow
const SYSTEM_ARCHITECTURE_FLOW = {
  title: "Production System Architecture Workflow",
  subtitle: "Unified lifecycle connecting Security, Testing, Deployment, Observability, Alerting, and AI Evaluations.",
  stages: [
    {
      id: "sec",
      name: "1. Security & Identity",
      color: "#34d399",
      items: ["Secrets", "ENV Variables", "PAT Tokens", "Service Accounts", "HashiCorp Vault"],
      desc: "Protects sensitive keys and manages machine identity for applications."
    },
    {
      id: "test",
      name: "2. Testing & Verification",
      color: "#38bdf8",
      items: ["Sanity Testing", "Regression Testing", "Playwright Automation"],
      desc: "Sanity checks new builds, then runs full regression and browser e2e tests."
    },
    {
      id: "deploy",
      name: "3. Progressive Deployment",
      color: "#fbbf24",
      items: ["Feature Flags (0% -> 100%)", "Canary Deployment (10% -> 100%)"],
      desc: "Safely toggles code features and shifts traffic incrementally to new versions."
    },
    {
      id: "obs",
      name: "4. Observability & Telemetry",
      color: "#818cf8",
      items: ["Grafana (Metrics)", "Splunk (Logs)", "Sentry (Errors)", "New Relic (APM)", "Datadog (Unified)"],
      desc: "Monitors real-time application health, metrics, stack trace crashes, and traces."
    },
    {
      id: "alert",
      name: "5. Incident Alerting",
      color: "#ec4899",
      items: ["Prometheus Alertmanager", "Slack #production-alerts"],
      desc: "Monitoring detects anomalies and posts automated alerts to Slack for engineers."
    },
    {
      id: "ai",
      name: "6. AI System & Agents",
      color: "#a855f7",
      items: ["LLMs & RAG", "AI Agents", "Tool Calling", "Vector Memory"],
      desc: "Executes agentic workflows, contextual reasoning loops, and function calls."
    },
    {
      id: "eval",
      name: "7. AI Evals & Benchmarks",
      color: "#6366f1",
      items: ["Correctness & Groundedness", "Tool-use & Trajectory", "Latency & Cost", "AI Regression Evals"],
      desc: "Evaluates AI model accuracy, agent step sequences, and guards against quality regression."
    }
  ]
};
