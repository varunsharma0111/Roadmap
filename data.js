/**
 * AI Engineer / FDE Master Roadmap Dataset
 * Contains 26 categories and ~250 topics with definitions, descriptions, domain groupings, and prerequisite mappings.
 */

const DOMAINS = {
  AI: {
    id: "ai",
    title: "AI & Agentic Systems",
    icon: "brain-circuit",
    color: "#6366f1", // Indigo / Electric Purple
    lightColor: "rgba(99, 102, 241, 0.15)",
    gradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)"
  },
  CLOUD: {
    id: "cloud",
    title: "Cloud & Infrastructure",
    icon: "cloud-server",
    color: "#06b6d4", // Cyan
    lightColor: "rgba(6, 182, 212, 0.15)",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)"
  },
  NETWORKING: {
    id: "networking",
    title: "Networking & Real-Time",
    icon: "network",
    color: "#10b981", // Emerald
    lightColor: "rgba(16, 185, 129, 0.15)",
    gradient: "linear-gradient(135deg, #10b981 0%, #14b8a6 100%)"
  },
  ENGINEERING: {
    id: "engineering",
    title: "DevOps & Distributed Systems",
    icon: "cpu",
    color: "#f59e0b", // Amber / Flame
    lightColor: "rgba(245, 158, 11, 0.15)",
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
    description: "Core concepts foundational to modern machine intelligence, statistical modeling, and deep learning.",
    icon: "brain",
    topics: [
      {
        id: "ai-1-1",
        name: "Artificial Intelligence",
        def: "Systems that perform tasks requiring human-like intelligence such as reasoning, decision-making and problem-solving.",
        why: "Provides the overarching paradigm for constructing autonomous, rational decision-making systems.",
        level: "Beginner"
      },
      {
        id: "ai-1-2",
        name: "Machine Learning",
        def: "Systems learn patterns from data to make predictions or decisions.",
        why: "Replaces hardcoded logic with data-driven statistical pattern recognition.",
        level: "Beginner",
        prereqs: ["ai-1-1"]
      },
      {
        id: "ai-1-3",
        name: "Deep Learning",
        def: "Machine learning using multi-layer neural networks to learn complex patterns.",
        why: "Enables feature extraction and representation learning on high-dimensional unstructured data.",
        level: "Intermediate",
        prereqs: ["ai-1-2"]
      },
      {
        id: "ai-1-4",
        name: "Neural Networks",
        def: "Models made of interconnected layers that learn patterns from data.",
        why: "Serves as the computational substrate for modern deep learning architectures.",
        level: "Intermediate",
        prereqs: ["ai-1-3"]
      },
      {
        id: "ai-1-5",
        name: "Generative AI",
        def: "AI that generates new content such as text, images, audio, video or code.",
        why: "Powers novel creative workflows, software synthesis, and contextual assistance.",
        level: "Intermediate",
        prereqs: ["ai-1-3"]
      },
      {
        id: "ai-1-6",
        name: "Large Language Models (LLMs)",
        def: "Models trained on large amounts of data to understand and generate human language.",
        why: "Acts as general-purpose reasoning and processing engines for modern AI agents.",
        level: "Intermediate",
        prereqs: ["ai-1-4", "ai-1-5"]
      },
      {
        id: "ai-1-7",
        name: "Training",
        def: "The process of teaching a model patterns using data.",
        why: "Adjusts internal weights via loss optimization to minimize error on target distributions.",
        level: "Intermediate",
        prereqs: ["ai-1-4"]
      },
      {
        id: "ai-1-8",
        name: "Inference",
        def: "Using a trained model to generate an output.",
        why: "The runtime execution step where trained weights produce predictions for live input.",
        level: "Beginner",
        prereqs: ["ai-1-7"]
      },
      {
        id: "ai-1-9",
        name: "Fine-Tuning",
        def: "Further training a pretrained model for a specific task or domain.",
        why: "Adapts general foundation models to downstream domain-specific requirements.",
        level: "Advanced",
        prereqs: ["ai-1-6", "ai-1-7"]
      },
      {
        id: "ai-1-10",
        name: "Embeddings",
        def: "Numerical vectors representing the meaning or relationships of data.",
        why: "Translates discrete text/media into high-dimensional semantic vector spaces for retrieval.",
        level: "Intermediate",
        prereqs: ["ai-1-6"]
      },
      {
        id: "ai-1-11",
        name: "RAG",
        def: "Retrieves relevant external information and provides it to an LLM before generating an answer.",
        why: "Grounds generative models in dynamic external knowledge bases to eliminate hallucinations.",
        level: "Intermediate",
        prereqs: ["ai-1-6", "ai-1-10"]
      }
    ]
  },
  {
    id: "cat-2",
    domainId: "ai",
    number: 2,
    title: "Transformers & LLM Architecture",
    description: "Internal architecture, math primitives, tokenization, and compute optimization techniques of generative models.",
    icon: "cpu-chip",
    topics: [
      {
        id: "ai-2-1",
        name: "Transformer",
        def: "Neural-network architecture that uses attention to understand relationships between tokens.",
        why: "The foundational architecture underlying modern foundation LLMs and multimodal models.",
        level: "Intermediate",
        prereqs: ["ai-1-4"]
      },
      {
        id: "ai-2-2",
        name: "Attention",
        def: "Determines which parts of the input are important to each other.",
        why: "Allows long-range context dependencies without recurrence bottlenecks.",
        level: "Intermediate",
        prereqs: ["ai-2-1"]
      },
      {
        id: "ai-2-3",
        name: "Self-Attention",
        def: "Allows tokens in the same sequence to interact with each other.",
        why: "Enables sequence elements to dynamically weight relationships to every other element.",
        level: "Advanced",
        prereqs: ["ai-2-2"]
      },
      {
        id: "ai-2-4",
        name: "Multi-Head Attention",
        def: "Uses multiple attention mechanisms to learn different relationships simultaneously.",
        why: "Captures diverse syntactic, semantic, and structural representations in parallel.",
        level: "Advanced",
        prereqs: ["ai-2-3"]
      },
      {
        id: "ai-2-5",
        name: "Query",
        def: "Represents what information a token is looking for during attention.",
        why: "Vector matrix projection used to measure semantic relevance against Keys.",
        level: "Advanced",
        prereqs: ["ai-2-2"]
      },
      {
        id: "ai-2-6",
        name: "Key",
        def: "Represents information used to determine relevance.",
        why: "Matched against Queries via dot products to compute attention scores.",
        level: "Advanced",
        prereqs: ["ai-2-5"]
      },
      {
        id: "ai-2-7",
        name: "Value",
        def: "Contains information passed forward when a token is considered relevant.",
        why: "Weighted sum of Values forms the contextualized representation output.",
        level: "Advanced",
        prereqs: ["ai-2-6"]
      },
      {
        id: "ai-2-8",
        name: "Token",
        def: "A small unit of text processed by an LLM.",
        why: "The fundamental atomic unit of currency for LLM compute and context accounting.",
        level: "Beginner",
        prereqs: ["ai-1-6"]
      },
      {
        id: "ai-2-9",
        name: "Tokenization",
        def: "Converts text into tokens that a model can process.",
        why: "Maps raw character sequences to numerical token indices (e.g. BPE, WordPiece).",
        level: "Intermediate",
        prereqs: ["ai-2-8"]
      },
      {
        id: "ai-2-10",
        name: "Positional Encoding",
        def: "Provides information about the position or order of tokens.",
        why: "Injects order awareness into permutation-invariant attention matrices.",
        level: "Advanced",
        prereqs: ["ai-2-1"]
      },
      {
        id: "ai-2-11",
        name: "Feed-Forward Network",
        def: "Processes and transforms information inside a Transformer layer.",
        why: "Applies non-linear transformations after attention integration.",
        level: "Intermediate",
        prereqs: ["ai-2-1"]
      },
      {
        id: "ai-2-12",
        name: "Layer Normalization",
        def: "Stabilizes neural-network computations.",
        why: "Normalizes activation distributions across features to accelerate convergence.",
        level: "Advanced",
        prereqs: ["ai-2-1"]
      },
      {
        id: "ai-2-13",
        name: "Residual Connection",
        def: "Helps information and gradients flow through deep neural networks.",
        why: "Prevents vanishing gradients during backpropagation in deep networks.",
        level: "Advanced",
        prereqs: ["ai-2-1"]
      },
      {
        id: "ai-2-14",
        name: "Encoder",
        def: "Transformer component primarily designed to understand input representations.",
        why: "Processes contextualized bidirectional representations (e.g., BERT architecture).",
        level: "Intermediate",
        prereqs: ["ai-2-1"]
      },
      {
        id: "ai-2-15",
        name: "Decoder",
        def: "Transformer component primarily designed to generate output sequences.",
        why: "Autoregressively generates sequence tokens (e.g., GPT series).",
        level: "Intermediate",
        prereqs: ["ai-2-1"]
      },
      {
        id: "ai-2-16",
        name: "Next-Token Prediction",
        def: "Predicts the next token based on previous context.",
        why: "The core pre-training objective of causal autoregressive LLMs.",
        level: "Intermediate",
        prereqs: ["ai-2-15"]
      },
      {
        id: "ai-2-17",
        name: "Parameters",
        def: "Learned numerical values that determine model behavior.",
        why: "Determines model capacity, memory footprint, and computational requirements.",
        level: "Beginner",
        prereqs: ["ai-1-7"]
      },
      {
        id: "ai-2-18",
        name: "Quantization",
        def: "Reduces numerical precision to decrease memory and compute requirements.",
        why: "Compresses 16/32-bit float parameters down to 8-bit or 4-bit for edge inference.",
        level: "Advanced",
        prereqs: ["ai-2-17"]
      },
      {
        id: "ai-2-19",
        name: "Token Pruning",
        def: "Removes less-useful tokens to improve processing efficiency.",
        why: "Drops redundant context tokens during attention calculation to speed up inference.",
        level: "Advanced",
        prereqs: ["ai-2-8"]
      }
    ]
  },
  {
    id: "cat-3",
    domainId: "ai",
    number: 3,
    title: "Prompt & Context Engineering",
    description: "Optimizing token budgets, system instructions, context windows, and conversation memory formatting.",
    icon: "terminal-box",
    topics: [
      {
        id: "ai-3-1",
        name: "Prompt",
        def: "Instruction or input given to an AI model.",
        why: "The primary control vector steering generative model behavior.",
        level: "Beginner"
      },
      {
        id: "ai-3-2",
        name: "Prompt Engineering",
        def: "Designing effective instructions to obtain better model outputs.",
        why: "Improves reasoning quality, formatting compliance, and zero/few-shot accuracy.",
        level: "Beginner",
        prereqs: ["ai-3-1"]
      },
      {
        id: "ai-3-3",
        name: "Context",
        def: "Relevant information available to a model while solving a task.",
        why: "Provides the immediate working set of data for reasoning and response generation.",
        level: "Beginner"
      },
      {
        id: "ai-3-4",
        name: "Context Window",
        def: "Maximum amount of token-based information a model can process at once.",
        why: "Establishes memory boundary limits for single inference calls.",
        level: "Intermediate",
        prereqs: ["ai-3-3"]
      },
      {
        id: "ai-3-5",
        name: "Context Length",
        def: "Number of tokens supported inside the model's context window.",
        why: "Determines how much document history or state can be passed to the model.",
        level: "Beginner",
        prereqs: ["ai-3-4"]
      },
      {
        id: "ai-3-6",
        name: "Context Management",
        def: "Selecting and organizing useful information for the model.",
        why: "Prevents distraction, avoids token overflow, and reduces API token latency/cost.",
        level: "Intermediate",
        prereqs: ["ai-3-3"]
      },
      {
        id: "ai-3-7",
        name: "Context Engineering",
        def: "Designing the information, history, tools and context supplied to an AI model.",
        why: "Builds structured, dynamic environment prompts for production agents.",
        level: "Advanced",
        prereqs: ["ai-3-6"]
      },
      {
        id: "ai-3-8",
        name: "System Prompt",
        def: "High-level instructions defining model behavior and constraints.",
        why: "Sets core identity, guardrails, capabilities, and format outputs globally.",
        level: "Intermediate",
        prereqs: ["ai-3-1"]
      },
      {
        id: "ai-3-9",
        name: "Conversation History",
        def: "Previous messages supplied to the model for continuity.",
        why: "Maintains multi-turn dialogue state across user interactions.",
        level: "Beginner",
        prereqs: ["ai-3-3"]
      },
      {
        id: "ai-3-10",
        name: "Context Compression",
        def: "Reducing context size while preserving important information.",
        why: "Fits long histories into limited prompt windows via summarization or semantic extraction.",
        level: "Advanced",
        prereqs: ["ai-3-6"]
      }
    ]
  },
  {
    id: "cat-4",
    domainId: "ai",
    number: 4,
    title: "AI Agents & Agentic AI",
    description: "Autonomous agent execution loops, multi-agent orchestration, tool calling, guardrails, and evaluation.",
    icon: "bot",
    topics: [
      {
        id: "ai-4-1",
        name: "AI Agent",
        def: "AI system that uses a model, tools and state to accomplish a goal through multiple steps.",
        why: "Extends passive language models into active goal-driven problem solvers.",
        level: "Intermediate",
        prereqs: ["ai-1-6"]
      },
      {
        id: "ai-4-2",
        name: "Agentic AI",
        def: "AI systems capable of planning, acting, observing and adapting toward goals with some autonomy.",
        why: "Enables autonomous execution of dynamic multi-step workflows without human micro-management.",
        level: "Advanced",
        prereqs: ["ai-4-1"]
      },
      {
        id: "ai-4-3",
        name: "Goal",
        def: "The desired outcome an agent needs to accomplish.",
        why: "Defines objective criteria for agent planning and termination.",
        level: "Beginner"
      },
      {
        id: "ai-4-4",
        name: "Planning",
        def: "Breaking a goal into actionable steps.",
        why: "Organizes complex objectives into solvable sub-tasks (e.g. ReAct, Plan-and-Solve).",
        level: "Intermediate",
        prereqs: ["ai-4-1"]
      },
      {
        id: "ai-4-5",
        name: "Tool Calling",
        def: "Allows an AI model to invoke external tools or APIs.",
        why: "Connects LLM intelligence to live data sources, terminal commands, and API actions.",
        level: "Intermediate",
        prereqs: ["ai-4-1"]
      },
      {
        id: "ai-4-6",
        name: "Function Calling",
        def: "Structured mechanism for an LLM to request execution of a defined function.",
        why: "Provides strict JSON schema validation for model-generated tool arguments.",
        level: "Intermediate",
        prereqs: ["ai-4-5"]
      },
      {
        id: "ai-4-7",
        name: "Action",
        def: "Operation performed by an agent using a tool or system.",
        why: "Executes changes in the external environment or computational runtime.",
        level: "Beginner",
        prereqs: ["ai-4-5"]
      },
      {
        id: "ai-4-8",
        name: "Observation",
        def: "Result returned after an action is performed.",
        why: "Informs the model of environmental feedback following an action execution.",
        level: "Beginner",
        prereqs: ["ai-4-7"]
      },
      {
        id: "ai-4-9",
        name: "Feedback Loop",
        def: "Uses results to determine the next action or correction.",
        why: "Allows dynamic adaptation when an intermediate tool action fails or produces unexpected data.",
        level: "Intermediate",
        prereqs: ["ai-4-8"]
      },
      {
        id: "ai-4-10",
        name: "Agent Loop",
        def: "Repeating cycle of planning, action, observation and adaptation.",
        why: "The core runtime control loop driving autonomous agent execution (Plan → Act → Observe → Evaluate).",
        level: "Intermediate",
        prereqs: ["ai-4-9"]
      },
      {
        id: "ai-4-11",
        name: "Multi-Agent System",
        def: "Multiple specialized agents collaborating on a larger task.",
        why: "Divides complex responsibilities across specialized roles (e.g. Coder, Reviewer, Tester).",
        level: "Advanced",
        prereqs: ["ai-4-10"]
      },
      {
        id: "ai-4-12",
        name: "Agent Orchestration",
        def: "Coordinates models, tools and multiple agents to complete workflows.",
        why: "Manages state transitions, communication routing, and task handoffs.",
        level: "Advanced",
        prereqs: ["ai-4-11"]
      },
      {
        id: "ai-4-13",
        name: "Human-in-the-Loop",
        def: "Allows humans to review, approve or intervene in agent actions.",
        why: "Ensures safety and control over high-risk or irreversible system actions.",
        level: "Intermediate",
        prereqs: ["ai-4-1"]
      },
      {
        id: "ai-4-14",
        name: "Guardrails",
        def: "Rules and controls that restrict unsafe or unwanted agent behavior.",
        why: "Enforces security bounds, structural constraints, and ethical policies.",
        level: "Intermediate",
        prereqs: ["ai-4-1"]
      },
      {
        id: "ai-4-15",
        name: "Agent Evaluation",
        def: "Measures whether an agent performs tasks correctly and reliably.",
        why: "Quantifies benchmark performance, task success rates, and tool use accuracy.",
        level: "Advanced",
        prereqs: ["ai-4-1"]
      },
      {
        id: "ai-4-16",
        name: "Agent Observability",
        def: "Monitoring agent actions, errors, latency, tools and outcomes.",
        why: "Provides granular trace visibility into thought processes, token usage, and system calls.",
        level: "Advanced",
        prereqs: ["ai-4-1"]
      }
    ]
  },
  {
    id: "cat-5",
    domainId: "ai",
    number: 5,
    title: "Agent Memory",
    description: "Working memory, episodic recall, semantic vector stores, state serialization, and checkpointing.",
    icon: "database-zap",
    topics: [
      {
        id: "ai-5-1",
        name: "Working Memory",
        def: "Holds information required for the current task.",
        why: "Stores active variables, prompt state, and transient step data.",
        level: "Intermediate",
        prereqs: ["ai-4-1"]
      },
      {
        id: "ai-5-2",
        name: "Short-Term Memory",
        def: "Temporary information used during an interaction or task.",
        why: "Maintains active chat buffers and session execution state.",
        level: "Beginner",
        prereqs: ["ai-5-1"]
      },
      {
        id: "ai-5-3",
        name: "Long-Term Memory",
        def: "Stores information that can be reused across future sessions.",
        why: "Persists knowledge, user preferences, and historical experience across restarts.",
        level: "Advanced",
        prereqs: ["ai-5-2"]
      },
      {
        id: "ai-5-4",
        name: "Episodic Memory",
        def: "Stores specific past experiences or events.",
        why: "Enables agents to learn from past success/failure stories.",
        level: "Advanced",
        prereqs: ["ai-5-3"]
      },
      {
        id: "ai-5-5",
        name: "Semantic Memory",
        def: "Stores facts, concepts and general knowledge.",
        why: "Holds structured knowledge graph data and domain facts.",
        level: "Advanced",
        prereqs: ["ai-5-3"]
      },
      {
        id: "ai-5-6",
        name: "Procedural Memory",
        def: "Stores knowledge about how to perform tasks or procedures.",
        why: "Retains step-by-step tool usage patterns and executable skills.",
        level: "Advanced",
        prereqs: ["ai-5-3"]
      },
      {
        id: "ai-5-7",
        name: "Persistent State",
        def: "Stores the agent's progress so work can continue later.",
        why: "Ensures durability against system restarts or crash events.",
        level: "Intermediate",
        prereqs: ["ai-4-1"]
      },
      {
        id: "ai-5-8",
        name: "Checkpoint",
        def: "Saved state that allows an agent to resume after interruption.",
        why: "Provides atomic recovery points during complex multi-step execution.",
        level: "Intermediate",
        prereqs: ["ai-5-7"]
      },
      {
        id: "ai-5-9",
        name: "Recovery",
        def: "Restores an agent's state after failure or restart.",
        why: "Enables resilient long-running background tasks.",
        level: "Intermediate",
        prereqs: ["ai-5-8"]
      }
    ]
  },
  {
    id: "cat-6",
    domainId: "ai",
    number: 6,
    title: "Long-Running Agents",
    description: "Asynchronous task persistence, retry logic, background execution threads, and fault resilience.",
    icon: "timer-reset",
    topics: [
      {
        id: "ai-6-1",
        name: "Long-Running Agent",
        def: "Agent designed to work toward a goal for hours, days or longer.",
        why: "Solves complex asynchronous software engineering or research tasks.",
        level: "Advanced",
        prereqs: ["ai-4-1", "ai-5-7"]
      },
      {
        id: "ai-6-2",
        name: "Persistent Workflow",
        def: "Saves workflow progress so execution can continue later.",
        why: "Decouples task duration from active server memory or HTTP connections.",
        level: "Advanced",
        prereqs: ["ai-6-1"]
      },
      {
        id: "ai-6-3",
        name: "Checkpointing",
        def: "Saves intermediate progress for recovery.",
        why: "Guarantees state preservation across long step sequences.",
        level: "Intermediate",
        prereqs: ["ai-5-8"]
      },
      {
        id: "ai-6-4",
        name: "Retry",
        def: "Attempts a failed operation again.",
        why: "Handles transient network glitches, API rate limits, or tool timeouts.",
        level: "Beginner"
      },
      {
        id: "ai-6-5",
        name: "Recovery",
        def: "Continues work after crashes or failures.",
        why: "Prevents restarting multi-hour task loops from scratch.",
        level: "Intermediate",
        prereqs: ["ai-6-3"]
      },
      {
        id: "ai-6-6",
        name: "Task Persistence",
        def: "Keeps the original task or goal available throughout execution.",
        why: "Prevents goal drift over long reasoning chains.",
        level: "Advanced",
        prereqs: ["ai-6-1"]
      }
    ]
  },
  {
    id: "cat-7",
    domainId: "ai",
    number: 7,
    title: "AI Agent Tools & Platforms",
    description: "Open-source agent frameworks, Model Context Protocol (MCP), browser integration, and coding tools.",
    icon: "wrench-screwdriver",
    topics: [
      {
        id: "ai-7-1",
        name: "OpenClaw",
        def: "Open-source/self-hosted AI assistant and agent infrastructure.",
        why: "Provides extensible local infrastructure for autonomous agents and tools.",
        level: "Intermediate"
      },
      {
        id: "ai-7-2",
        name: "Hermes Agent",
        def: "AI agent system focused on tools, memory, skills and persistent workflows.",
        why: "Enables structured skill execution and memory management.",
        level: "Advanced",
        prereqs: ["ai-7-1"]
      },
      {
        id: "ai-7-3",
        name: "Coding Agent",
        def: "AI system capable of reading, modifying, testing and debugging software.",
        why: "Automates developer pair programming, refactoring, and bug fixes.",
        level: "Advanced",
        prereqs: ["ai-4-1"]
      },
      {
        id: "ai-7-4",
        name: "Browser Agent",
        def: "Agent that uses browser tools to navigate websites and perform actions.",
        why: "Automates web interactions, data scraping, and web application testing.",
        level: "Advanced",
        prereqs: ["ai-4-5"]
      },
      {
        id: "ai-7-5",
        name: "Subagent",
        def: "Specialized agent delegated a specific part of a larger task.",
        why: "Isolates context and tool usage to targeted sub-tasks.",
        level: "Intermediate",
        prereqs: ["ai-4-11"]
      },
      {
        id: "ai-7-6",
        name: "MCP",
        def: "Standard protocol for connecting AI systems to external tools and data.",
        why: "Provides universal interoperability across diverse agent platforms and context providers.",
        level: "Advanced",
        prereqs: ["ai-4-5"]
      },
      {
        id: "ai-7-7",
        name: "Agent Skill",
        def: "Reusable capability or workflow an agent can invoke.",
        why: "Encapsulates reusable prompt templates, tool calls, and workflows.",
        level: "Intermediate",
        prereqs: ["ai-4-5"]
      }
    ]
  },
  {
    id: "cat-8",
    domainId: "ai",
    number: 8,
    title: "Harness Engineering",
    description: "Building production sandboxes, test verification harnesses, environment constraints, and agent CI/CD.",
    icon: "shield-check",
    topics: [
      {
        id: "ai-8-1",
        name: "Harness Engineering",
        def: "Designing the environment around an AI agent so it can reliably perform complex tasks.",
        why: "Surrounds raw AI models with reliable software verification and execution infrastructure.",
        level: "Advanced",
        prereqs: ["ai-4-16"]
      },
      {
        id: "ai-8-2",
        name: "Agent Environment",
        def: "Tools, files, APIs, tests and systems available to an agent.",
        why: "Defines the sandbox scope and interaction boundary for agent operations.",
        level: "Intermediate",
        prereqs: ["ai-8-1"]
      },
      {
        id: "ai-8-3",
        name: "Specifications",
        def: "Clear requirements defining what the agent must build or accomplish.",
        why: "Acts as ground truth standard for automated verification.",
        level: "Beginner"
      },
      {
        id: "ai-8-4",
        name: "Automated Tests",
        def: "Automatically verify whether an agent's output works correctly.",
        why: "Provides instantaneous feedback to agent feedback loops.",
        level: "Intermediate",
        prereqs: ["ai-8-3"]
      },
      {
        id: "ai-8-5",
        name: "CI/CD",
        def: "Automatically builds, tests and deploys software.",
        why: "Integrates agentic code changes into automated software pipelines.",
        level: "Intermediate"
      },
      {
        id: "ai-8-6",
        name: "Constraints",
        def: "Rules limiting what the agent can or cannot do.",
        why: "Prevents destructive filesystem, network, or cost actions.",
        level: "Intermediate",
        prereqs: ["ai-4-14"]
      },
      {
        id: "ai-8-7",
        name: "Agent Feedback Loop",
        def: "Mechanism that tells the agent whether its work is correct.",
        why: "Guides iterative error correction before committing output.",
        level: "Advanced",
        prereqs: ["ai-4-9", "ai-8-4"]
      }
    ]
  },

  // ==================== DOMAIN 2: CLOUD & INFRASTRUCTURE ====================
  {
    id: "cat-9",
    domainId: "cloud",
    number: 9,
    title: "Cloud Computing",
    description: "Virtual server hosting, VM auto-scaling pools, load distribution, and fault tolerance architecture.",
    icon: "cloud",
    topics: [
      {
        id: "cloud-9-1",
        name: "VPS",
        def: "Rented virtual server providing CPU, RAM, storage and networking.",
        why: "Provides foundational compute resources in cloud environments.",
        level: "Beginner"
      },
      {
        id: "cloud-9-2",
        name: "Virtual Machine (VM)",
        def: "Virtual computer running on physical or cloud infrastructure.",
        why: "Abstracts physical hardware into isolated software-defined instances.",
        level: "Beginner",
        prereqs: ["cloud-9-1"]
      },
      {
        id: "cloud-9-3",
        name: "VMSS",
        def: "Azure service that manages and automatically scales groups of virtual machines.",
        why: "Provides automated infrastructure management for high-demand VM groups.",
        level: "Intermediate",
        prereqs: ["cloud-9-2"]
      },
      {
        id: "cloud-9-4",
        name: "Scale Set",
        def: "Group of virtual machines managed as a scalable pool.",
        why: "Ensures consistent configuration across elastic server clusters.",
        level: "Intermediate",
        prereqs: ["cloud-9-3"]
      },
      {
        id: "cloud-9-5",
        name: "Vertical Scaling",
        def: "Increasing resources of an existing machine.",
        why: "Adds CPU/RAM to a single instance for immediate resource boosts.",
        level: "Beginner"
      },
      {
        id: "cloud-9-6",
        name: "Horizontal Scaling",
        def: "Adding more machines or instances.",
        why: "Expands capacity across multiple compute nodes for linear scalability.",
        level: "Intermediate",
        prereqs: ["cloud-9-5"]
      },
      {
        id: "cloud-9-7",
        name: "Auto Scaling",
        def: "Automatically increases or decreases resources based on demand.",
        why: "Optimizes cloud expenditure while handling unexpected traffic spikes.",
        level: "Intermediate",
        prereqs: ["cloud-9-6"]
      },
      {
        id: "cloud-9-8",
        name: "Load Balancer",
        def: "Distributes incoming traffic across multiple servers.",
        why: "Prevents single-server overload and provides smooth traffic routing.",
        level: "Intermediate",
        prereqs: ["cloud-9-6"]
      },
      {
        id: "cloud-9-9",
        name: "High Availability",
        def: "Keeps services available despite individual failures.",
        why: "Ensures maximum uptime via multi-zone redundancy.",
        level: "Advanced",
        prereqs: ["cloud-9-8"]
      },
      {
        id: "cloud-9-10",
        name: "Fault Tolerance",
        def: "Allows a system to continue operating despite failures.",
        why: "Protects against hardware failures and software crashes seamlessly.",
        level: "Advanced",
        prereqs: ["cloud-9-9"]
      }
    ]
  },
  {
    id: "cat-10",
    domainId: "cloud",
    number: 10,
    title: "Cloud Security",
    description: "IAM controls, role-based security policies, principle of least privilege, and secret management.",
    icon: "lock-closed",
    topics: [
      {
        id: "cloud-10-1",
        name: "IAM",
        def: "Manages identities and permissions for accessing resources.",
        why: "Establishes central authority over user and service access.",
        level: "Intermediate"
      },
      {
        id: "cloud-10-2",
        name: "RBAC",
        def: "Assigns permissions based on user or administrator roles.",
        why: "Simplifies access control management across complex organizations.",
        level: "Intermediate",
        prereqs: ["cloud-10-1"]
      },
      {
        id: "cloud-10-3",
        name: "Authentication",
        def: "Verifies who a user or service is.",
        why: "Validates credentials before granting system access.",
        level: "Beginner"
      },
      {
        id: "cloud-10-4",
        name: "Authorization",
        def: "Determines what an authenticated identity can do.",
        why: "Enforces rules on permitted operations after identity confirmation.",
        level: "Beginner",
        prereqs: ["cloud-10-3"]
      },
      {
        id: "cloud-10-5",
        name: "Role",
        def: "Collection of permissions assigned to an identity.",
        why: "Bundles specific rights for consistent assignment.",
        level: "Beginner",
        prereqs: ["cloud-10-2"]
      },
      {
        id: "cloud-10-6",
        name: "Policy",
        def: "Rules defining allowed or denied actions.",
        why: "Expresses granular security constraints in JSON or YAML.",
        level: "Intermediate",
        prereqs: ["cloud-10-1"]
      },
      {
        id: "cloud-10-7",
        name: "Least Privilege",
        def: "Gives users and services only the permissions they actually need.",
        why: "Minimizes blast radius in case of credential compromise.",
        level: "Intermediate",
        prereqs: ["cloud-10-6"]
      },
      {
        id: "cloud-10-8",
        name: "Service Account",
        def: "Identity used by applications or services to access resources.",
        why: "Allows programmatic server-to-server authentication without personal credentials.",
        level: "Intermediate",
        prereqs: ["cloud-10-1"]
      },
      {
        id: "cloud-10-9",
        name: "Secret",
        def: "Sensitive credential such as an API key or password.",
        why: "Requires encrypted storage and strict access controls.",
        level: "Beginner"
      }
    ]
  },
  {
    id: "cat-11",
    domainId: "cloud",
    number: 11,
    title: "Docker",
    description: "Application containerization, image build layers, multi-container compose setups, and volume persistence.",
    icon: "box-archive",
    topics: [
      {
        id: "cloud-11-1",
        name: "Docker",
        def: "Platform for building and running applications in containers.",
        why: "Standardizes environment consistency from development to production.",
        level: "Beginner"
      },
      {
        id: "cloud-11-2",
        name: "Container",
        def: "Isolated environment containing an application and its dependencies.",
        why: "Ensures reproducible runtime execution regardless of host OS.",
        level: "Beginner",
        prereqs: ["cloud-11-1"]
      },
      {
        id: "cloud-11-3",
        name: "Docker Image",
        def: "Packaged template used to create containers.",
        why: "Immutable read-only layer snapshot defining application state.",
        level: "Beginner",
        prereqs: ["cloud-11-2"]
      },
      {
        id: "cloud-11-4",
        name: "Dockerfile",
        def: "Instructions for building a Docker image.",
        why: "Declarative text recipe for building reproducible images.",
        level: "Beginner",
        prereqs: ["cloud-11-3"]
      },
      {
        id: "cloud-11-5",
        name: "Container Registry",
        def: "Stores and distributes container images.",
        why: "Central repository (e.g. Docker Hub, ECR) for sharing versions.",
        level: "Intermediate",
        prereqs: ["cloud-11-3"]
      },
      {
        id: "cloud-11-6",
        name: "Docker Compose",
        def: "Defines and runs multiple containers together.",
        why: "Orchestrates multi-container microservice environments locally.",
        level: "Intermediate",
        prereqs: ["cloud-11-2"]
      },
      {
        id: "cloud-11-7",
        name: "Docker Volume",
        def: "Persistent storage for container data.",
        why: "Decouples data persistence from ephemeral container lifecycles.",
        level: "Intermediate",
        prereqs: ["cloud-11-2"]
      },
      {
        id: "cloud-11-8",
        name: "Docker Network",
        def: "Allows containers to communicate with each other.",
        why: "Provides isolated network bridges for inter-container communication.",
        level: "Intermediate",
        prereqs: ["cloud-11-2"]
      }
    ]
  },
  {
    id: "cat-12",
    domainId: "cloud",
    number: 12,
    title: "Kubernetes",
    description: "Production container orchestration, Pod control planes, deployments, ingress traffic, and auto-scaling.",
    icon: "layers-intersect",
    topics: [
      {
        id: "cloud-12-1",
        name: "Kubernetes",
        def: "Platform for orchestrating containerized applications.",
        why: "Automates container deployment, scaling, failover, and management.",
        level: "Intermediate",
        prereqs: ["cloud-11-1"]
      },
      {
        id: "cloud-12-2",
        name: "Pod",
        def: "Smallest deployable Kubernetes unit containing one or more containers.",
        why: "Co-locates closely coupled application containers sharing network/storage.",
        level: "Beginner",
        prereqs: ["cloud-12-1"]
      },
      {
        id: "cloud-12-3",
        name: "Deployment",
        def: "Manages replicated Pods and rolling updates.",
        why: "Ensures zero-downtime updates and maintains desired instance counts.",
        level: "Intermediate",
        prereqs: ["cloud-12-2"]
      },
      {
        id: "cloud-12-4",
        name: "ReplicaSet",
        def: "Maintains the desired number of Pod replicas.",
        why: "Low-level controller guaranteeing pod count resilience.",
        level: "Intermediate",
        prereqs: ["cloud-12-3"]
      },
      {
        id: "cloud-12-5",
        name: "Service",
        def: "Provides stable network access to Pods.",
        why: "Abstracts transient Pod IP addresses behind stable DNS endpoints.",
        level: "Intermediate",
        prereqs: ["cloud-12-2"]
      },
      {
        id: "cloud-12-6",
        name: "Ingress",
        def: "Routes external HTTP/HTTPS traffic to Kubernetes services.",
        why: "Manages edge routing, SSL termination, and path-based routing.",
        level: "Advanced",
        prereqs: ["cloud-12-5"]
      },
      {
        id: "cloud-12-7",
        name: "ConfigMap",
        def: "Stores non-sensitive configuration.",
        why: "Decouples configuration parameters from container image builds.",
        level: "Beginner",
        prereqs: ["cloud-12-1"]
      },
      {
        id: "cloud-12-8",
        name: "Secret",
        def: "Stores sensitive configuration and credentials.",
        why: "Securely injects API keys, passwords, and tokens into Pods.",
        level: "Intermediate",
        prereqs: ["cloud-12-1"]
      },
      {
        id: "cloud-12-9",
        name: "Namespace",
        def: "Provides logical isolation inside a Kubernetes cluster.",
        why: "Separates environments (e.g. dev, staging, prod) within one cluster.",
        level: "Intermediate",
        prereqs: ["cloud-12-1"]
      },
      {
        id: "cloud-12-10",
        name: "Node",
        def: "Machine that runs Kubernetes workloads.",
        why: "Physical or virtual server providing host compute power.",
        level: "Beginner",
        prereqs: ["cloud-12-1"]
      },
      {
        id: "cloud-12-11",
        name: "Cluster",
        def: "Collection of Kubernetes control-plane and worker resources.",
        why: "The total aggregate compute environment running container workloads.",
        level: "Intermediate",
        prereqs: ["cloud-12-10"]
      },
      {
        id: "cloud-12-12",
        name: "Scheduler",
        def: "Selects suitable nodes for new Pods.",
        why: "Matches Pod resource requests against node availability.",
        level: "Advanced",
        prereqs: ["cloud-12-11"]
      },
      {
        id: "cloud-12-13",
        name: "HPA",
        def: "Automatically scales Pods based on resource or custom metrics.",
        why: "Adjusts Pod count dynamically according to CPU/memory/queue depth.",
        level: "Advanced",
        prereqs: ["cloud-12-3"]
      },
      {
        id: "cloud-12-14",
        name: "Control Plane",
        def: "Manages Kubernetes cluster state and orchestration.",
        why: "Brains of the cluster running API server, scheduler, and ETCD.",
        level: "Advanced",
        prereqs: ["cloud-12-11"]
      },
      {
        id: "cloud-12-15",
        name: "Worker Node",
        def: "Runs application workloads.",
        why: "Executes actual application containers managed by kubelet.",
        level: "Intermediate",
        prereqs: ["cloud-12-10"]
      }
    ]
  },
  {
    id: "cat-13",
    domainId: "cloud",
    number: 13,
    title: "Kubernetes Storage",
    description: "Persistent Volume abstractions, dynamic provisioning, PVC claims, and stateful workload persistence.",
    icon: "hard-drive",
    topics: [
      {
        id: "cloud-13-1",
        name: "Persistent Volume (PV)",
        def: "Persistent storage resource available to Kubernetes.",
        why: "Provides network-attached persistent disk space independent of Pod lifetime.",
        level: "Intermediate",
        prereqs: ["cloud-12-1"]
      },
      {
        id: "cloud-13-2",
        name: "Persistent Volume Claim (PVC)",
        def: "Request for persistent storage made by a workload.",
        why: "Binds application Pods to requested storage capacity and access modes.",
        level: "Intermediate",
        prereqs: ["cloud-13-1"]
      },
      {
        id: "cloud-13-3",
        name: "StorageClass",
        def: "Defines how Kubernetes dynamically provisions storage.",
        why: "Automates volume provisioning on cloud providers (e.g., EBS, Managed Disk).",
        level: "Advanced",
        prereqs: ["cloud-13-2"]
      },
      {
        id: "cloud-13-4",
        name: "Persistent Storage",
        def: "Storage that survives Pod deletion and recreation.",
        why: "Essential for databases, caches, and stateful agent data persistence.",
        level: "Intermediate",
        prereqs: ["cloud-13-1"]
      },
      {
        id: "cloud-13-5",
        name: "Stateful Application",
        def: "Application that requires persistent identity or data.",
        why: "Requires specialized controllers (StatefulSets) and stable storage bindings.",
        level: "Advanced",
        prereqs: ["cloud-13-4"]
      }
    ]
  },
  {
    id: "cat-14",
    domainId: "cloud",
    number: 14,
    title: "Redis & Caching",
    description: "In-memory caching patterns, key-value stores, distributed locks, session persistence, and Redis streams.",
    icon: "zap",
    topics: [
      {
        id: "cloud-14-1",
        name: "Redis",
        def: "Fast in-memory data store used for caching, messaging and other workloads.",
        why: "Delivers sub-millisecond data reads and flexible data structures.",
        level: "Intermediate"
      },
      {
        id: "cloud-14-2",
        name: "Cache",
        def: "Temporarily stores frequently accessed data for faster retrieval.",
        why: "Reduces primary database query pressure and improves latency.",
        level: "Beginner",
        prereqs: ["cloud-14-1"]
      },
      {
        id: "cloud-14-3",
        name: "Redis Pub/Sub",
        def: "Sends messages between publishers and subscribers in real time.",
        why: "Lightweight transient event broadcasting for live updates.",
        level: "Intermediate",
        prereqs: ["cloud-14-1"]
      },
      {
        id: "cloud-14-4",
        name: "Redis Streams",
        def: "Persistent event stream within Redis.",
        why: "Provides append-only log streaming with consumer group support.",
        level: "Advanced",
        prereqs: ["cloud-14-1"]
      },
      {
        id: "cloud-14-5",
        name: "Rate Limiting",
        def: "Controls how many requests a user or service can make.",
        why: "Protects API endpoints from abuse and brute-force traffic spikes.",
        level: "Intermediate",
        prereqs: ["cloud-14-1"]
      },
      {
        id: "cloud-14-6",
        name: "Distributed Lock",
        def: "Coordinates access to shared resources across multiple processes.",
        why: "Prevents race conditions in distributed multi-node applications.",
        level: "Advanced",
        prereqs: ["cloud-14-1"]
      },
      {
        id: "cloud-14-7",
        name: "Session Store",
        def: "Centrally stores user session information.",
        why: "Enables stateless web app instances with shared session memory.",
        level: "Intermediate",
        prereqs: ["cloud-14-1"]
      }
    ]
  },
  {
    id: "cat-15",
    domainId: "cloud",
    number: 15,
    title: "Memcached",
    description: "High-speed key-value caching, cache hits/misses, and low-latency RAM read buffers.",
    icon: "flash",
    topics: [
      {
        id: "cloud-15-1",
        name: "Memcached",
        def: "Simple, high-speed in-memory key-value cache.",
        why: "Provides ultra-lightweight object caching for quick database offloading.",
        level: "Beginner"
      },
      {
        id: "cloud-15-2",
        name: "Cache Key",
        def: "Identifier used to retrieve cached data.",
        why: "Acts as the lookup handle for stored values.",
        level: "Beginner",
        prereqs: ["cloud-15-1"]
      },
      {
        id: "cloud-15-3",
        name: "Cache Hit",
        def: "Requested data exists in cache.",
        why: "Results in fast sub-millisecond response without backend query execution.",
        level: "Beginner",
        prereqs: ["cloud-15-2"]
      },
      {
        id: "cloud-15-4",
        name: "Cache Miss",
        def: "Requested data does not exist in cache and must be retrieved elsewhere.",
        why: "Triggers fallback database retrieval and optional cache warming.",
        level: "Beginner",
        prereqs: ["cloud-15-2"]
      }
    ]
  },
  {
    id: "cat-16",
    domainId: "cloud",
    number: 16,
    title: "Queues & Messaging",
    description: "Asynchronous task queues, producer/consumer models, message brokers, dead-letter queues, and idempotency.",
    icon: "arrow-path-rounded",
    topics: [
      {
        id: "cloud-16-1",
        name: "Queue",
        def: "Holds messages or tasks until consumers process them.",
        why: "Decouples task producers from workers for asynchronous background execution.",
        level: "Beginner"
      },
      {
        id: "cloud-16-2",
        name: "Producer",
        def: "Creates and sends messages.",
        why: "Publishes work requests into messaging channels.",
        level: "Beginner",
        prereqs: ["cloud-16-1"]
      },
      {
        id: "cloud-16-3",
        name: "Consumer",
        def: "Receives and processes messages.",
        why: "Pulls or receives messages to execute background work.",
        level: "Beginner",
        prereqs: ["cloud-16-1"]
      },
      {
        id: "cloud-16-4",
        name: "Enqueue",
        def: "Adds a message to a queue.",
        why: "Appends work items to the queue tail.",
        level: "Beginner",
        prereqs: ["cloud-16-1"]
      },
      {
        id: "cloud-16-5",
        name: "Dequeue",
        def: "Retrieves or removes a message from a queue.",
        why: "Extracts next available work item from the queue head.",
        level: "Beginner",
        prereqs: ["cloud-16-1"]
      },
      {
        id: "cloud-16-6",
        name: "FIFO",
        def: "First-In, First-Out ordering.",
        why: "Guarantees strict sequential message processing order.",
        level: "Beginner",
        prereqs: ["cloud-16-1"]
      },
      {
        id: "cloud-16-7",
        name: "Worker",
        def: "Background process that performs queued tasks.",
        why: "Scales execution capacity independently of web frontends.",
        level: "Intermediate",
        prereqs: ["cloud-16-3"]
      },
      {
        id: "cloud-16-8",
        name: "Message Broker",
        def: "System that receives, stores and routes messages.",
        why: "Central infrastructure managing queue routing and persistence.",
        level: "Intermediate",
        prereqs: ["cloud-16-1"]
      },
      {
        id: "cloud-16-9",
        name: "Acknowledgement",
        def: "Confirms that a message was successfully processed.",
        why: "Prevents message loss by confirming completion before deletion.",
        level: "Intermediate",
        prereqs: ["cloud-16-3"]
      },
      {
        id: "cloud-16-10",
        name: "Retry",
        def: "Attempts processing again after failure.",
        why: "Handles transient consumer exceptions automatically.",
        level: "Beginner"
      },
      {
        id: "cloud-16-11",
        name: "Dead Letter Queue",
        def: "Stores messages that repeatedly fail processing.",
        why: "Isolates unprocessable 'poison-pill' messages for developer debugging.",
        level: "Advanced",
        prereqs: ["cloud-16-10"]
      },
      {
        id: "cloud-16-12",
        name: "Idempotency",
        def: "Ensures repeating an operation does not cause unintended duplicate effects.",
        why: "Guarantees safety under at-least-once message delivery semantics.",
        level: "Advanced",
        prereqs: ["cloud-16-3"]
      }
    ]
  },
  {
    id: "cat-17",
    domainId: "cloud",
    number: 17,
    title: "Service Bus",
    description: "Enterprise application messaging, topic subscriptions, reliable delivery, and dead-letter handling.",
    icon: "ticket",
    topics: [
      {
        id: "cloud-17-1",
        name: "Service Bus",
        def: "Messaging infrastructure enabling reliable communication between distributed applications.",
        why: "Provides enterprise-grade messaging queues and pub/sub topics.",
        level: "Intermediate"
      },
      {
        id: "cloud-17-2",
        name: "Queue",
        def: "Sends a message to processing consumers.",
        why: "Point-to-point delivery channel for workload processing.",
        level: "Beginner",
        prereqs: ["cloud-17-1"]
      },
      {
        id: "cloud-17-3",
        name: "Topic",
        def: "Publishes messages that can be consumed by multiple subscriptions.",
        why: "Enables 1-to-many publish-subscribe communication patterns.",
        level: "Intermediate",
        prereqs: ["cloud-17-1"]
      },
      {
        id: "cloud-17-4",
        name: "Subscription",
        def: "Receives messages from a topic.",
        why: "Filterable endpoint receiving published topic copies.",
        level: "Intermediate",
        prereqs: ["cloud-17-3"]
      },
      {
        id: "cloud-17-5",
        name: "Reliable Delivery",
        def: "Helps ensure messages are not lost during temporary failures.",
        why: "Uses durable disk storage and transactional guarantees.",
        level: "Advanced",
        prereqs: ["cloud-17-1"]
      },
      {
        id: "cloud-17-6",
        name: "Dead Lettering",
        def: "Moves unprocessable messages to a separate location.",
        why: "Prevents queue blocking from corrupted message payloads.",
        level: "Advanced",
        prereqs: ["cloud-17-5"]
      }
    ]
  },
  {
    id: "cat-18",
    domainId: "cloud",
    number: 18,
    title: "Apache Kafka",
    description: "High-throughput event streaming, topic partitioning, log offsets, consumer groups, and replication.",
    icon: "activity-pulse",
    topics: [
      {
        id: "cloud-18-1",
        name: "Kafka",
        def: "Distributed event-streaming platform designed for high-throughput event processing.",
        why: "Handles millions of real-time events per second across distributed logs.",
        level: "Intermediate"
      },
      {
        id: "cloud-18-2",
        name: "Producer",
        def: "Publishes events to Kafka.",
        why: "Writes high-volume event streams to target Kafka topics.",
        level: "Beginner",
        prereqs: ["cloud-18-1"]
      },
      {
        id: "cloud-18-3",
        name: "Consumer",
        def: "Reads events from Kafka.",
        why: "Reads event logs sequentially or in parallel.",
        level: "Beginner",
        prereqs: ["cloud-18-1"]
      },
      {
        id: "cloud-18-4",
        name: "Topic",
        def: "Logical category where events are stored.",
        why: "Organizes streams into named event feeds.",
        level: "Beginner",
        prereqs: ["cloud-18-1"]
      },
      {
        id: "cloud-18-5",
        name: "Partition",
        def: "Ordered subset of a topic enabling parallel processing.",
        why: "Unlocks horizontal throughput scaling by distributing topic logs across brokers.",
        level: "Advanced",
        prereqs: ["cloud-18-4"]
      },
      {
        id: "cloud-18-6",
        name: "Offset",
        def: "Position of a message within a partition.",
        why: "Sequential index tracking exact consumer read progress.",
        level: "Intermediate",
        prereqs: ["cloud-18-5"]
      },
      {
        id: "cloud-18-7",
        name: "Consumer Group",
        def: "Consumers working together to process partitions.",
        why: "Shares partition workload evenly among multiple worker nodes.",
        level: "Advanced",
        prereqs: ["cloud-18-5"]
      },
      {
        id: "cloud-18-8",
        name: "Broker",
        def: "Kafka server that stores and serves events.",
        why: "Manages physical storage partitions and handles client I/O.",
        level: "Intermediate",
        prereqs: ["cloud-18-1"]
      },
      {
        id: "cloud-18-9",
        name: "Replication",
        def: "Copies partitions across brokers for fault tolerance.",
        why: "Ensures data durability if individual brokers fail.",
        level: "Advanced",
        prereqs: ["cloud-18-8"]
      },
      {
        id: "cloud-18-10",
        name: "Leader",
        def: "Broker responsible for a partition's primary operations.",
        why: "Handles all read/write requests for a given partition.",
        level: "Advanced",
        prereqs: ["cloud-18-9"]
      },
      {
        id: "cloud-18-11",
        name: "Follower",
        def: "Replica that follows a partition leader.",
        why: "Passively syncs data from leader to take over during failovers.",
        level: "Advanced",
        prereqs: ["cloud-18-10"]
      },
      {
        id: "cloud-18-12",
        name: "Retention",
        def: "Determines how long Kafka keeps events.",
        why: "Configures time-based or size-based event log expiration policies.",
        level: "Intermediate",
        prereqs: ["cloud-18-4"]
      },
      {
        id: "cloud-18-13",
        name: "Event Streaming",
        def: "Continuous processing of events as they occur.",
        why: "Powers real-time analytics, ML feature pipelines, and event-driven architectures.",
        level: "Advanced",
        prereqs: ["cloud-18-1"]
      }
    ]
  },
  {
    id: "cat-19",
    domainId: "cloud",
    number: 19,
    title: "ZooKeeper & KRaft",
    description: "Distributed consensus, leader election, metadata management, and modern KRaft consensus for Kafka.",
    icon: "scale",
    topics: [
      {
        id: "cloud-19-1",
        name: "ZooKeeper",
        def: "Distributed coordination system historically used by Kafka for cluster coordination and metadata.",
        why: "Maintains cluster configuration and manages leader election.",
        level: "Intermediate"
      },
      {
        id: "cloud-19-2",
        name: "Leader Election",
        def: "Selects a leader among distributed nodes.",
        why: "Ensures single active coordinator node during cluster operations.",
        level: "Advanced",
        prereqs: ["cloud-19-1"]
      },
      {
        id: "cloud-19-3",
        name: "KRaft",
        def: "Modern Kafka architecture that removes the dependency on ZooKeeper.",
        why: "Simplifies architecture by running Raft consensus natively inside Kafka.",
        level: "Advanced",
        prereqs: ["cloud-18-1"]
      },
      {
        id: "cloud-19-4",
        name: "Cluster Metadata",
        def: "Information describing brokers, topics, partitions and cluster state.",
        why: "Maintains accurate topology mapping across the cluster.",
        level: "Intermediate",
        prereqs: ["cloud-19-1"]
      }
    ]
  },

  // ==================== DOMAIN 3: NETWORKING & REAL-TIME ====================
  {
    id: "cat-20",
    domainId: "networking",
    number: 20,
    title: "Networking Fundamentals",
    description: "IP addressing, TCP/UDP transport, DNS resolution, HTTP/HTTPS security, TLS encryption, and NAT firewalls.",
    icon: "globe-alt",
    topics: [
      {
        id: "net-20-1",
        name: "IP Address",
        def: "Identifies a device or network interface.",
        why: "Core numerical address for routing packets across networks.",
        level: "Beginner"
      },
      {
        id: "net-20-2",
        name: "Public IP",
        def: "Address reachable over the public internet.",
        why: "Allows globally accessible routing for web endpoints.",
        level: "Beginner",
        prereqs: ["net-20-1"]
      },
      {
        id: "net-20-3",
        name: "Private IP",
        def: "Address used inside private networks.",
        why: "Protects internal servers from direct internet exposure.",
        level: "Beginner",
        prereqs: ["net-20-1"]
      },
      {
        id: "net-20-4",
        name: "Port",
        def: "Logical endpoint identifying a network service.",
        why: "Directs incoming packets to specific software processes (e.g. 80, 443).",
        level: "Beginner"
      },
      {
        id: "net-20-5",
        name: "DNS",
        def: "Converts domain names into IP addresses.",
        why: "Translates human-readable hostnames to IP addresses.",
        level: "Beginner"
      },
      {
        id: "net-20-6",
        name: "TCP",
        def: "Reliable, connection-oriented transport protocol.",
        why: "Ensures ordered, error-checked packet delivery via handshakes.",
        level: "Intermediate"
      },
      {
        id: "net-20-7",
        name: "UDP",
        def: "Fast, connectionless transport protocol without guaranteed delivery.",
        why: "Provides low-latency transmission for real-time video, gaming, and WebRTC.",
        level: "Intermediate"
      },
      {
        id: "net-20-8",
        name: "HTTP",
        def: "Protocol used for web request and response communication.",
        why: "Foundation protocol for web browser and API interactions.",
        level: "Beginner"
      },
      {
        id: "net-20-9",
        name: "HTTPS",
        def: "HTTP secured using TLS encryption.",
        why: "Protects web data from eavesdropping and tampering.",
        level: "Beginner",
        prereqs: ["net-20-8"]
      },
      {
        id: "net-20-10",
        name: "TLS",
        def: "Encrypts and authenticates network communication.",
        why: "Provides cryptographic security for modern web traffic.",
        level: "Intermediate",
        prereqs: ["net-20-9"]
      },
      {
        id: "net-20-11",
        name: "NAT",
        def: "Translates private network addresses to public addresses and vice versa.",
        why: "Conserves IPv4 addresses and shields internal networks.",
        level: "Intermediate",
        prereqs: ["net-20-3"]
      },
      {
        id: "net-20-12",
        name: "Firewall",
        def: "Controls allowed and blocked network traffic.",
        why: "Enforces network security policies based on IP/Port rules.",
        level: "Beginner"
      },
      {
        id: "net-20-13",
        name: "Client",
        def: "System that requests a service.",
        why: "Initiates requests in client-server architecture.",
        level: "Beginner"
      },
      {
        id: "net-20-14",
        name: "Server",
        def: "System that provides a service.",
        why: "Listens for requests and returns responses.",
        level: "Beginner"
      }
    ]
  },
  {
    id: "cat-21",
    domainId: "networking",
    number: 21,
    title: "WebSocket",
    description: "Persistent bi-directional full-duplex sockets, heartbeats, reconnection, and live application streaming.",
    icon: "arrows-right-left",
    topics: [
      {
        id: "net-21-1",
        name: "WebSocket",
        def: "Provides persistent, two-way communication between client and server.",
        why: "Enables sub-10ms real-time data streaming without polling overhead.",
        level: "Intermediate",
        prereqs: ["net-20-6"]
      },
      {
        id: "net-21-2",
        name: "Full Duplex",
        def: "Both sides can send data independently.",
        why: "Allows simultaneous client push and server push capabilities.",
        level: "Intermediate",
        prereqs: ["net-21-1"]
      },
      {
        id: "net-21-3",
        name: "Persistent Connection",
        def: "Connection remains open instead of closing after every request.",
        why: "Eliminates HTTP TCP handshake latency overhead on repeated messages.",
        level: "Beginner",
        prereqs: ["net-21-1"]
      },
      {
        id: "net-21-4",
        name: "Heartbeat",
        def: "Periodic message used to detect dead connections.",
        why: "Identifies dropped network sockets and stale TCP connections.",
        level: "Intermediate",
        prereqs: ["net-21-1"]
      },
      {
        id: "net-21-5",
        name: "Reconnection",
        def: "Establishes a new connection after failure.",
        why: "Ensures resilient real-time client recovery after network drops.",
        level: "Intermediate",
        prereqs: ["net-21-4"]
      },
      {
        id: "net-21-6",
        name: "WebSocket Authentication",
        def: "Verifies clients connecting to the WebSocket.",
        why: "Secures persistent sockets using tokens/tickets during upgrade handshakes.",
        level: "Advanced",
        prereqs: ["net-21-1"]
      }
    ]
  },
  {
    id: "cat-22",
    domainId: "networking",
    number: 22,
    title: "WebRTC",
    description: "Peer-to-peer real-time media/data, ICE negotiation, STUN public discovery, TURN relaying, and SDP parameters.",
    icon: "video-camera",
    topics: [
      {
        id: "net-22-1",
        name: "WebRTC",
        def: "Enables real-time peer-to-peer audio, video and data communication.",
        why: "Powers low-latency browser-to-browser voice/video/data sharing.",
        level: "Advanced",
        prereqs: ["net-20-7"]
      },
      {
        id: "net-22-2",
        name: "P2P",
        def: "Allows two clients to communicate directly when possible.",
        why: "Bypasses server bottleneck for direct data exchange.",
        level: "Intermediate",
        prereqs: ["net-22-1"]
      },
      {
        id: "net-22-3",
        name: "Signaling",
        def: "Exchanges information needed to establish a WebRTC connection.",
        why: "Out-of-band message exchange for setting up P2P connections.",
        level: "Advanced",
        prereqs: ["net-22-1"]
      },
      {
        id: "net-22-4",
        name: "ICE",
        def: "Framework for discovering possible network paths between peers.",
        why: "Systematically tests candidate connection routes across NATs.",
        level: "Advanced",
        prereqs: ["net-22-3"]
      },
      {
        id: "net-22-5",
        name: "STUN",
        def: "Helps discover a client's public-facing network address.",
        why: "Discovers NAT bindings so peers know how to reach each other (STUN = Discover).",
        level: "Intermediate",
        prereqs: ["net-22-4"]
      },
      {
        id: "net-22-6",
        name: "TURN",
        def: "Relays traffic when direct peer-to-peer communication fails.",
        why: "Fallback relay server when symmetric NATs block direct P2P connections (TURN = Relay).",
        level: "Advanced",
        prereqs: ["net-22-5"]
      },
      {
        id: "net-22-7",
        name: "SDP",
        def: "Describes media capabilities and connection parameters.",
        why: "Formats codec preferences, IP candidates, and media metadata.",
        level: "Advanced",
        prereqs: ["net-22-3"]
      },
      {
        id: "net-22-8",
        name: "Data Channel",
        def: "Allows arbitrary data to be sent between WebRTC peers.",
        why: "Transfers arbitrary text/binary payloads directly over SCTP/UDP.",
        level: "Intermediate",
        prereqs: ["net-22-1"]
      }
    ]
  },
  {
    id: "cat-23",
    domainId: "networking",
    number: 23,
    title: "Jump Host / Bastion Host",
    description: "Hardened security gateways, isolated private networks, and SSH jump access patterns.",
    icon: "server-stack",
    topics: [
      {
        id: "net-23-1",
        name: "Jump Host",
        def: "Controlled gateway used to access servers inside a private network.",
        why: "Acts as single audited proxy entry point to private infrastructure.",
        level: "Intermediate"
      },
      {
        id: "net-23-2",
        name: "Bastion Host",
        def: "Hardened server exposed as a controlled entry point into private infrastructure.",
        why: "Minimizes security exposure by locking down all other public ingress ports.",
        level: "Intermediate",
        prereqs: ["net-23-1"]
      },
      {
        id: "net-23-3",
        name: "Private Network",
        def: "Network not directly exposed to the public internet.",
        why: "Isolates databases and application workloads behind firewalls.",
        level: "Beginner"
      },
      {
        id: "net-23-4",
        name: "SSH",
        def: "Secure protocol commonly used to connect to remote servers.",
        why: "Provides encrypted remote shell execution and tunnel forwarding.",
        level: "Beginner"
      }
    ]
  },

  // ==================== DOMAIN 4: DEVOPS & DISTRIBUTED SYSTEMS ====================
  {
    id: "cat-24",
    domainId: "engineering",
    number: 24,
    title: "DevOps & CI/CD",
    description: "Version control workflows, automated CI test runners, continuous deployment, health checks, and logging.",
    icon: "git-branch",
    topics: [
      {
        id: "eng-24-1",
        name: "Git",
        def: "Version-control system for tracking code changes.",
        why: "Standard distributed code tracking tool for software projects.",
        level: "Beginner"
      },
      {
        id: "eng-24-2",
        name: "GitHub",
        def: "Platform for hosting and collaborating on Git repositories.",
        why: "Central cloud platform for code collaboration, pull requests, and automation.",
        level: "Beginner",
        prereqs: ["eng-24-1"]
      },
      {
        id: "eng-24-3",
        name: "Branch",
        def: "Independent line of development.",
        why: "Isolates feature work from main production branches.",
        level: "Beginner",
        prereqs: ["eng-24-1"]
      },
      {
        id: "eng-24-4",
        name: "Pull Request",
        def: "Proposal to merge code changes into another branch.",
        why: "Facilitates peer code review and CI verification before integration.",
        level: "Beginner",
        prereqs: ["eng-24-2"]
      },
      {
        id: "eng-24-5",
        name: "CI",
        def: "Automatically builds and tests code changes.",
        why: "Catches bugs early by running automated tests on every commit.",
        level: "Intermediate",
        prereqs: ["eng-24-4"]
      },
      {
        id: "eng-24-6",
        name: "CD",
        def: "Automatically delivers and deploys software.",
        why: "Automates release deployment to staging and production environments.",
        level: "Intermediate",
        prereqs: ["eng-24-5"]
      },
      {
        id: "eng-24-7",
        name: "GitHub Actions",
        def: "Automation platform for CI/CD workflows.",
        why: "Executes custom build/test scripts natively within GitHub repositories.",
        level: "Intermediate",
        prereqs: ["eng-24-5"]
      },
      {
        id: "eng-24-8",
        name: "Deployment",
        def: "Releases software to an environment.",
        why: "Pushes validated code builds into active runtime servers.",
        level: "Beginner"
      },
      {
        id: "eng-24-9",
        name: "Rollback",
        def: "Returns to a previous working version.",
        why: "Restores service stability immediately when new deployments fail.",
        level: "Intermediate",
        prereqs: ["eng-24-8"]
      },
      {
        id: "eng-24-10",
        name: "Health Check",
        def: "Tests whether a service is functioning correctly.",
        why: "Allows load balancers and orchestrators to detect dead instances.",
        level: "Beginner"
      },
      {
        id: "eng-24-11",
        name: "Environment Variable",
        def: "Configuration value supplied outside application code.",
        why: "Enables runtime configuration changes without modifying code binaries.",
        level: "Beginner"
      },
      {
        id: "eng-24-12",
        name: "Secret",
        def: "Sensitive configuration such as API keys or passwords.",
        why: "Keeps sensitive access credentials out of source repositories.",
        level: "Beginner"
      },
      {
        id: "eng-24-13",
        name: "Monitoring",
        def: "Tracks system health and performance.",
        why: "Measures metrics (CPU, memory, latency, errors) in real time.",
        level: "Intermediate"
      },
      {
        id: "eng-24-14",
        name: "Logging",
        def: "Records application and system events for debugging and auditing.",
        why: "Provides structured diagnostic data for post-mortem analysis.",
        level: "Beginner"
      }
    ]
  },
  {
    id: "cat-25",
    domainId: "engineering",
    number: 25,
    title: "Terraform / Infrastructure as Code",
    description: "Declarative infrastructure management, state files, providers, resources, modules, and execution plans.",
    icon: "code-bracket",
    topics: [
      {
        id: "eng-25-1",
        name: "Terraform",
        def: "Infrastructure-as-Code tool for provisioning and managing infrastructure.",
        why: "Standard tool for cloud-agnostic declarative resource management.",
        level: "Intermediate"
      },
      {
        id: "eng-25-2",
        name: "IaC",
        def: "Defines infrastructure using code instead of manual configuration.",
        why: "Enables versioning, review, and automated provisioning of cloud hardware.",
        level: "Intermediate",
        prereqs: ["eng-25-1"]
      },
      {
        id: "eng-25-3",
        name: "Provider",
        def: "Terraform plugin that communicates with a cloud or service.",
        why: "Translates Terraform code into cloud API calls (AWS, Azure, GCP, Cloudflare).",
        level: "Intermediate",
        prereqs: ["eng-25-1"]
      },
      {
        id: "eng-25-4",
        name: "Resource",
        def: "Infrastructure object managed by Terraform.",
        why: "Defines target objects like VMs, databases, networks, or DNS records.",
        level: "Beginner",
        prereqs: ["eng-25-1"]
      },
      {
        id: "eng-25-5",
        name: "Variable",
        def: "Reusable input to Terraform configuration.",
        why: "Parametrizes configurations across multiple deployment environments.",
        level: "Beginner"
      },
      {
        id: "eng-25-6",
        name: "Output",
        def: "Exposes useful Terraform values after deployment.",
        why: "Returns generated IDs, public IPs, and connection strings.",
        level: "Beginner"
      },
      {
        id: "eng-25-7",
        name: "State",
        def: "Records Terraform's understanding of managed infrastructure.",
        why: "Maps declared configuration resources to real-world cloud resource IDs.",
        level: "Advanced",
        prereqs: ["eng-25-1"]
      },
      {
        id: "eng-25-8",
        name: "Plan",
        def: "Shows proposed infrastructure changes.",
        why: "Previews additions, modifications, and deletions safely before applying.",
        level: "Intermediate",
        prereqs: ["eng-25-1"]
      },
      {
        id: "eng-25-9",
        name: "Apply",
        def: "Executes planned infrastructure changes.",
        why: "Provisions declared resources in target cloud environments.",
        level: "Intermediate",
        prereqs: ["eng-25-8"]
      },
      {
        id: "eng-25-10",
        name: "Destroy",
        def: "Removes infrastructure managed by Terraform.",
        why: "Tears down ephemeral environments cleanly to avoid cloud costs.",
        level: "Intermediate",
        prereqs: ["eng-25-1"]
      },
      {
        id: "eng-25-11",
        name: "Module",
        def: "Reusable Terraform configuration.",
        why: "Encapsulates complex multi-resource patterns into reusable blueprints.",
        level: "Advanced",
        prereqs: ["eng-25-1"]
      },
      {
        id: "eng-25-12",
        name: "Remote State",
        def: "Stores Terraform state remotely for shared/team usage.",
        why: "Prevents concurrent state corruption and locks state during team runs.",
        level: "Advanced",
        prereqs: ["eng-25-7"]
      }
    ]
  },
  {
    id: "cat-26",
    domainId: "engineering",
    number: 26,
    title: "Distributed Systems",
    description: "CAP theorem, consistency models, sharding, circuit breakers, rate limiting, and observability.",
    icon: "share",
    topics: [
      {
        id: "eng-26-1",
        name: "Distributed Systems",
        def: "Systems where multiple computers work together as one logical system.",
        why: "Underpins scalable, fault-tolerant modern cloud applications.",
        level: "Intermediate"
      },
      {
        id: "eng-26-2",
        name: "Scalability",
        def: "Ability to handle increasing workload.",
        why: "Allows system capacity to grow seamlessly with data and traffic.",
        level: "Beginner"
      },
      {
        id: "eng-26-3",
        name: "Availability",
        def: "Ability to remain accessible.",
        why: "Measures system uptime percentage for processing incoming requests.",
        level: "Beginner"
      },
      {
        id: "eng-26-4",
        name: "Reliability",
        def: "Ability to consistently work correctly.",
        why: "Ensures correct computation without silent data corruption or loss.",
        level: "Beginner"
      },
      {
        id: "eng-26-5",
        name: "Fault Tolerance",
        def: "Ability to continue operating despite failures.",
        why: "Survives hardware crashes, network partitions, and process crashes.",
        level: "Intermediate",
        prereqs: ["eng-26-1"]
      },
      {
        id: "eng-26-6",
        name: "Load Balancing",
        def: "Distributes workload across multiple servers.",
        why: "Prevents individual server bottlenecks and ensures optimal throughput.",
        level: "Intermediate"
      },
      {
        id: "eng-26-7",
        name: "Distributed Cache",
        def: "Shared cache accessible across multiple services.",
        why: "Provides unified low-latency memory caching for stateless application clusters.",
        level: "Intermediate"
      },
      {
        id: "eng-26-8",
        name: "Pub/Sub",
        def: "Publishers send events that subscribers receive.",
        why: "Decouples producers from consumers for event-driven processing.",
        level: "Intermediate"
      },
      {
        id: "eng-26-9",
        name: "Replication",
        def: "Copies data across systems.",
        why: "Improves data availability, read throughput, and redundancy.",
        level: "Intermediate"
      },
      {
        id: "eng-26-10",
        name: "Partitioning",
        def: "Splits data or workload into partitions.",
        why: "Divides large datasets into manageable parallel processing chunks.",
        level: "Advanced"
      },
      {
        id: "eng-26-11",
        name: "Sharding",
        def: "Splits database data across multiple nodes.",
        why: "Overcomes single-database storage and write transaction limits.",
        level: "Advanced",
        prereqs: ["eng-26-10"]
      },
      {
        id: "eng-26-12",
        name: "CAP Theorem",
        def: "Describes trade-offs between consistency, availability and partition tolerance in distributed systems.",
        why: "Guides fundamental database architectural trade-offs during network splits.",
        level: "Advanced",
        prereqs: ["eng-26-1"]
      },
      {
        id: "eng-26-13",
        name: "Consistency",
        def: "Data appears synchronized and correct across the system.",
        why: "Ensures all read clients see identical up-to-date data states.",
        level: "Intermediate",
        prereqs: ["eng-26-12"]
      },
      {
        id: "eng-26-14",
        name: "Eventual Consistency",
        def: "Replicas become consistent over time.",
        why: "Trades immediate consistency for higher availability and low latency.",
        level: "Advanced",
        prereqs: ["eng-26-13"]
      },
      {
        id: "eng-26-15",
        name: "Idempotency",
        def: "Repeated operations produce the same intended result.",
        why: "Prevents duplicate charges or double mutations on network retries.",
        level: "Intermediate"
      },
      {
        id: "eng-26-16",
        name: "Circuit Breaker",
        def: "Stops repeated calls to a failing service.",
        why: "Prevents cascading failures when a downstream dependency experiences outage.",
        level: "Advanced"
      },
      {
        id: "eng-26-17",
        name: "Rate Limiting",
        def: "Controls request volume.",
        why: "Protects service stability against traffic spikes and denial of service.",
        level: "Intermediate"
      },
      {
        id: "eng-26-18",
        name: "Retry",
        def: "Reattempts failed operations.",
        why: "Recovers automatically from transient network glitches.",
        level: "Beginner"
      },
      {
        id: "eng-26-19",
        name: "Observability",
        def: "Understanding system behavior using logs, metrics and traces.",
        why: "Enables rapid debugging of complex microservice distributed interactions.",
        level: "Advanced"
      }
    ]
  }
];

// Milestones for top interactive progression timeline map
const ROADMAP_FLOW = [
  { id: "flow-1", label: "AI Fundamentals", catId: "cat-1" },
  { id: "flow-2", label: "Transformers & LLMs", catId: "cat-2" },
  { id: "flow-3", label: "Prompt & Context", catId: "cat-3" },
  { id: "flow-4", label: "AI Agents", catId: "cat-4" },
  { id: "flow-5", label: "Agent Memory", catId: "cat-5" },
  { id: "flow-6", label: "Long-Running Agents", catId: "cat-6" },
  { id: "flow-7", label: "Tools & Platforms", catId: "cat-7" },
  { id: "flow-8", label: "Harness Engineering", catId: "cat-8" },
  { id: "flow-9", label: "Cloud & Security", catId: "cat-9" },
  { id: "flow-10", label: "Docker & K8s", catId: "cat-11" },
  { id: "flow-11", label: "Redis & Messaging", catId: "cat-14" },
  { id: "flow-12", label: "Kafka & Service Bus", catId: "cat-18" },
  { id: "flow-13", label: "Networking & WebSockets", catId: "cat-20" },
  { id: "flow-14", label: "DevOps & IaC", catId: "cat-24" },
  { id: "flow-15", label: "Distributed Systems", catId: "cat-26" }
];
