/**
 * AI Engineering & Production Systems Roadmap Dataset
 * Exclusively contains the 53 System & AI Engineering Topics.
 */

const DOMAINS = {
  CLOUD: {
    id: "cloud",
    title: "Cloud & Infrastructure",
    icon: "cloud-server",
    color: "var(--cloud-color)",
    lightColor: "var(--cloud-color-alpha15)",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)"
  },
  ENGINEERING: {
    id: "engineering",
    title: "DevOps & Distributed Systems",
    icon: "cpu",
    color: "var(--engineering-color)",
    lightColor: "var(--engineering-color-alpha15)",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)"
  },
  NETWORKING: {
    id: "networking",
    title: "Networking & Real-Time",
    icon: "network",
    color: "var(--networking-color)",
    lightColor: "var(--networking-color-alpha15)",
    gradient: "linear-gradient(135deg, #10b981 0%, #14b8a6 100%)"
  },
  AI: {
    id: "ai",
    title: "AI & Agentic Systems",
    icon: "brain-circuit",
    color: "var(--ai-color)",
    lightColor: "var(--ai-color-alpha15)",
    gradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)"
  }
};

const ROADMAP_DATA = [
  // ==================== DOMAIN 1: CLOUD & INFRASTRUCTURE ====================
  {
    id: "cat-1",
    domainId: "cloud",
    number: 1,
    title: "Kubernetes Core & Containers",
    description: "Foundational Kubernetes primitives, Pod lifecycle, and Deployment management.",
    icon: "layers",
    topics: [
      {
        id: "cat-1-1",
        name: "Kubernetes",
        def: "Kubernetes is a system that automatically runs, manages, scales, and recovers containerized applications.",
        idea: "Kubernetes is a system that automatically runs, manages, scales, and recovers containerized applications.",
        mentalModel: "Think of Kubernetes as a manager for a large team of application containers.",
        howItWorks: "Application\n   ↓\nContainer\n   ↓\nKubernetes\n   ↓\nSchedule → Run → Monitor → Restart/Scale",
        example: "You deploy a FastAPI application to Kubernetes, and Kubernetes keeps the required number of application Pods running.",
        why: "Manually managing many containers becomes difficult; Kubernetes automates their deployment and lifecycle.",
        remember: "Kubernetes ≠ Docker\n\nDocker → runs/packages containers\nKubernetes → manages containers across a cluster",
        level: "Intermediate"
      },
      {
        id: "cat-1-2",
        name: "Kubernetes Pod",
        def: "A Pod is Kubernetes' smallest deployable unit that runs one or more containers together.",
        idea: "A Pod is Kubernetes' smallest deployable unit that runs one or more containers together.",
        mentalModel: "Think of a Pod as an apartment containing one or more containers that share their environment.",
        howItWorks: "Kubernetes\n   ↓\nPod\n   ↓\nContainer\n   ↓\nApplication",
        example: "A FastAPI container runs inside a Kubernetes Pod.",
        why: "Kubernetes needs a unit it can schedule, monitor, restart, and manage.",
        remember: "Pod ≠ Container\n\nA container runs the application; a Pod is Kubernetes' management unit around one or more containers.",
        level: "Intermediate"
      },
      {
        id: "cat-1-3",
        name: "Kubernetes Deployment",
        def: "A Deployment manages the desired number and version of application Pods.",
        idea: "A Deployment manages the desired number and version of application Pods.",
        mentalModel: "Think of it as a manager making sure the required workers are always available.",
        howItWorks: "Deployment\n   ↓\nReplicaSet\n   ↓\nPods\n\nIf a Pod fails:\n\nPod fails\n   ↓\nDeployment/ReplicaSet\n   ↓\nNew Pod created",
        example: "You want 3 FastAPI Pods running. The Deployment maintains those replicas.",
        why: "It automates Pod replacement, scaling, and controlled application updates.",
        remember: "Deployment ≠ Pod\n\nPod runs the application; Deployment manages the desired Pod state.",
        level: "Intermediate"
      }
    ]
  },
  {
    id: "cat-2",
    domainId: "cloud",
    number: 2,
    title: "Kubernetes Networking & Exposure",
    description: "Service abstractions, ClusterIP, NodePort, LoadBalancers, and HTTP Ingress routing.",
    icon: "network",
    topics: [
      {
        id: "cat-2-1",
        name: "Kubernetes Service",
        def: "A Service provides a stable network endpoint for reaching a group of Pods.",
        idea: "A Service provides a stable network endpoint for reaching a group of Pods.",
        mentalModel: "Think of it as a reception desk that knows which workers are available.",
        howItWorks: "Client\n  ↓\nService\n  ↓\nAvailable Pods\n\nPods can change, but the Service provides a stable way to reach them.",
        example: "Your frontend calls the backend Service instead of depending on a specific Pod IP.",
        why: "Pods are temporary and their IP addresses can change.",
        remember: "Service ≠ Pod\n\nPod runs the application; Service provides stable network access to Pods.",
        level: "Intermediate"
      },
      {
        id: "cat-2-2",
        name: "Kubernetes Service Types",
        def: "Service types control how a Kubernetes Service is exposed and accessed.",
        idea: "Service types control how a Kubernetes Service is exposed and accessed.",
        mentalModel: "Think of three levels of access:\n\nClusterIP   → Inside building\nNodePort    → Building entrance\nLoadBalancer → Public reception",
        howItWorks: "ClusterIP\n→ Internal cluster access\n\nNodePort\n→ Expose through node port\n\nLoadBalancer\n→ External load balancer",
        example: "A database might use ClusterIP, while a public API might use LoadBalancer.",
        why: "Different applications need different levels of network exposure.",
        remember: "Service type ≠ application\n\nIt controls network exposure, not what the application does.",
        level: "Intermediate"
      },
      {
        id: "cat-2-3",
        name: "ClusterIP",
        def: "ClusterIP exposes a Service inside the Kubernetes cluster.",
        idea: "ClusterIP exposes a Service inside the Kubernetes cluster.",
        mentalModel: "It's like an internal phone extension that outsiders cannot directly call.",
        howItWorks: "Pod\n ↓\nClusterIP Service\n ↓\nOther cluster components",
        example: "Your FastAPI backend can expose PostgreSQL or Redis through an internal Service.",
        why: "Internal services should often be reachable by other applications without being publicly exposed.",
        remember: "ClusterIP ≠ NodePort\n\nClusterIP → internal access\nNodePort → accessible through a node port",
        level: "Intermediate"
      },
      {
        id: "cat-2-4",
        name: "NodePort",
        def: "NodePort exposes a Kubernetes Service through a port on each node.",
        idea: "NodePort exposes a Kubernetes Service through a port on each node.",
        mentalModel: "Think of it as opening a specific numbered entrance on the building.",
        howItWorks: "External Client\n      ↓\nNode IP:NodePort\n      ↓\nService\n      ↓\nPods",
        example: "A client accesses an application through a node's exposed port.",
        why: "It provides a simple way to expose a Service outside the cluster.",
        remember: "NodePort ≠ LoadBalancer\n\nNodePort exposes a port; LoadBalancer typically provides external load-balancer access.",
        level: "Intermediate"
      },
      {
        id: "cat-2-5",
        name: "LoadBalancer",
        def: "A LoadBalancer Service exposes an application externally through a cloud/load-balancer endpoint.",
        idea: "A LoadBalancer Service exposes an application externally through a cloud/load-balancer endpoint.",
        mentalModel: "Think of it as a traffic controller distributing visitors to available workers.",
        howItWorks: "Internet\n   ↓\nLoad Balancer\n   ↓\nService\n   ↓\nPods",
        example: "A cloud provider creates an external load balancer for your Kubernetes API.",
        why: "It provides external access and distributes incoming traffic to the application.",
        remember: "LoadBalancer ≠ Ingress\n\nLoadBalancer exposes traffic; Ingress provides application-layer routing rules.",
        level: "Intermediate"
      },
      {
        id: "cat-2-6",
        name: "Kubernetes Ingress",
        def: "Ingress routes HTTP/HTTPS traffic to different Kubernetes Services using rules such as hostnames and paths.",
        idea: "Ingress routes HTTP/HTTPS traffic to different Kubernetes Services using rules such as hostnames and paths.",
        mentalModel: "Think of Ingress as a traffic receptionist who reads the address and sends visitors to the correct department.",
        howItWorks: "Internet\n   ↓\nIngress\n ├── /api → Backend Service\n └── /app → Frontend Service",
        example: "api.example.com goes to the backend while example.com goes to the frontend.",
        why: "It allows centralized HTTP/HTTPS routing instead of exposing every Service separately.",
        remember: "Ingress ≠ Service\n\nIngress decides where HTTP/HTTPS traffic goes; Service provides stable access to Pods.",
        level: "Intermediate"
      }
    ]
  },
  {
    id: "cat-3",
    domainId: "cloud",
    number: 3,
    title: "Kubernetes Config & Storage",
    description: "ConfigMaps, Secrets, Persistent Volumes, and Persistent Volume Claims.",
    icon: "database",
    topics: [
      {
        id: "cat-3-1",
        name: "ConfigMap",
        def: "A ConfigMap stores non-sensitive application configuration separately from application code.",
        idea: "A ConfigMap stores non-sensitive application configuration separately from application code.",
        mentalModel: "Think of it as a settings sheet.",
        howItWorks: "ConfigMap\n   ↓\nPod\n   ↓\nApplication reads configuration",
        example: "DATABASE_HOST\nAPP_MODE\nAPI_URL",
        why: "Configuration can change without rebuilding the application image.",
        remember: "ConfigMap ≠ Secret\n\nConfigMap → non-sensitive configuration\nSecret → sensitive values",
        level: "Intermediate"
      },
      {
        id: "cat-3-2",
        name: "Kubernetes Secret",
        def: "A Kubernetes Secret is designed to hold sensitive values such as passwords, tokens, and credentials.",
        idea: "A Kubernetes Secret is designed to hold sensitive values such as passwords, tokens, and credentials.",
        mentalModel: "Think of it as a locked box for sensitive configuration.",
        howItWorks: "Secret\n  ↓\nPod/Application\n  ↓\nCredential used",
        example: "Store a database password or API credential as a Secret instead of ordinary configuration.",
        why: "Sensitive credentials need controlled access and safer handling.",
        remember: "A Secret is not automatically completely secure; RBAC, encryption, access control, and safe handling still matter.",
        level: "Intermediate"
      },
      {
        id: "cat-3-3",
        name: "Persistent Volume (PV)",
        def: "A Persistent Volume provides storage that exists independently of a Pod's lifecycle.",
        idea: "A Persistent Volume provides storage that exists independently of a Pod's lifecycle.",
        mentalModel: "Think of a PV as a storage room outside the temporary apartment.",
        howItWorks: "Pod\n ↓\nPVC\n ↓\nPV\n ↓\nPersistent Storage",
        example: "Store uploaded files so they aren't lost when a Pod is deleted.",
        why: "Pod storage can be temporary, but applications often need data to survive Pod replacement.",
        remember: "PV ≠ PVC\n\nPV → actual storage resource\nPVC → request for storage",
        level: "Intermediate"
      },
      {
        id: "cat-3-4",
        name: "Persistent Volume Claim (PVC)",
        def: "A PVC is a request by an application for persistent storage.",
        idea: "A PVC is a request by an application for persistent storage.",
        mentalModel: "Think of PVC as asking the storage manager for a room of a certain size.",
        howItWorks: "Application\n   ↓\nPVC: \"I need storage\"\n   ↓\nPV\n   ↓\nStorage",
        example: "A Pod requests a 10 GB volume through a PVC and Kubernetes binds it to suitable persistent storage.",
        why: "Applications shouldn't need to directly manage the underlying storage resource.",
        remember: "PVC ≠ PV\n\nPVC → storage request\nPV → storage resource",
        level: "Intermediate"
      }
    ]
  },
  {
    id: "cat-4",
    domainId: "cloud",
    number: 4,
    title: "In-Memory Caching & Stores",
    description: "High-performance in-memory datastores including Redis and Memcached.",
    icon: "zap",
    topics: [
      {
        id: "cat-4-1",
        name: "Redis",
        def: "Redis is a fast in-memory data store commonly used for caching frequently requested data.",
        idea: "Redis is a fast in-memory data store commonly used for caching frequently requested data.",
        mentalModel: "Think of Redis as a quick-access shelf for frequently used data.",
        howItWorks: "Request\n   ↓\nRedis?\n ├── Hit → Fast response\n └── Miss\n       ↓\n   PostgreSQL\n       ↓\n   Store in Redis",
        example: "Cache dashboard statistics so repeated requests don't query PostgreSQL every time.",
        why: "It reduces repeated database work and improves response speed.",
        remember: "Redis ≠ PostgreSQL\n\nRedis → fast cache/data store\nPostgreSQL → persistent source of truth",
        level: "Intermediate"
      },
      {
        id: "cat-4-2",
        name: "Memcached",
        def: "Memcached is a simple in-memory cache designed for fast temporary data access.",
        idea: "Memcached is a simple in-memory cache designed for fast temporary data access.",
        mentalModel: "Think of it as a temporary notepad for frequently needed information.",
        howItWorks: "Request\n ↓\nMemcached?\n ├── Hit → Return data\n └── Miss → Get from source",
        example: "Cache frequently requested API results that don't require complex Redis features.",
        why: "It reduces repeated work and provides very fast temporary caching.",
        remember: "Memcached ≠ Redis\n\nBoth can cache data, but Redis provides a broader set of data structures and capabilities, while Memcached is intentionally simpler.",
        level: "Intermediate"
      }
    ]
  },

  // ==================== DOMAIN 2: DEVOPS & DISTRIBUTED SYSTEMS ====================
  {
    id: "cat-5",
    domainId: "engineering",
    number: 5,
    title: "Messaging & Service Bus",
    description: "Asynchronous task queues, enterprise service bus infrastructure, and broker mechanics.",
    icon: "mail",
    topics: [
      {
        id: "cat-5-1",
        name: "Queue",
        def: "A queue stores messages so producers and consumers can work independently.",
        idea: "A queue stores messages so producers and consumers can work independently.",
        mentalModel: "Think of a line at a counter: work waits until a worker can process it.",
        howItWorks: "Producer\n   ↓\nQueue\n   ↓\nConsumer",
        example: "A user uploads a PDF; the request puts a processing job into a queue while a worker processes it in the background.",
        why: "It separates producers from consumers and handles asynchronous work.",
        remember: "Queue ≠ Consumer\n\nQueue holds work; consumer processes it.",
        level: "Intermediate"
      },
      {
        id: "cat-5-2",
        name: "Service Bus",
        def: "A Service Bus is messaging infrastructure that lets applications communicate asynchronously and reliably.",
        idea: "A Service Bus is messaging infrastructure that lets applications communicate asynchronously and reliably.",
        mentalModel: "Think of it as a postal system between applications.",
        howItWorks: "Service A\n   ↓\nService Bus\n   ↓\nService B",
        example: "An order service publishes an order event and another service processes payment asynchronously.",
        why: "It decouples services and helps them communicate without requiring direct synchronous calls.",
        remember: "Service Bus ≠ Queue\n\nA queue is a messaging pattern/component; a Service Bus is broader messaging infrastructure that can provide queues and other messaging capabilities.",
        level: "Advanced"
      },
      {
        id: "cat-5-3",
        name: "Queue vs Message Broker",
        def: "A queue is a mechanism for holding work; a message broker is broader infrastructure for moving and managing messages between systems.",
        idea: "A queue is a mechanism for holding work; a message broker is broader infrastructure for moving and managing messages between systems.",
        mentalModel: "Queue = waiting line; broker = postal center.",
        howItWorks: "Producer\n   ↓\nBroker\n   ↓\nQueue / Topic\n   ↓\nConsumer",
        example: "A background job queue holds PDF-processing tasks, while a message broker may provide the infrastructure and routing around that messaging.",
        why: "Messaging systems decouple services and allow asynchronous communication.",
        remember: "A queue is one messaging pattern; a broker can provide queues, routing, delivery, and other messaging capabilities.",
        level: "Intermediate"
      },
      {
        id: "cat-5-4",
        name: "Kafka vs Service Bus",
        def: "Kafka focuses strongly on durable distributed event streaming, while a Service Bus generally focuses on reliable application messaging and communication.",
        idea: "Kafka focuses strongly on durable distributed event streaming, while a Service Bus generally focuses on reliable application messaging and communication.",
        mentalModel: "Kafka = event highway; Service Bus = managed messaging system.",
        howItWorks: "Kafka\nProducer → Topic → Partitions → Consumers\n\nService Bus\nProducer → Messaging infrastructure → Consumer",
        example: "Kafka is useful for large-scale event streams and analytics pipelines; a Service Bus can be useful for service-to-service messaging and business workflows.",
        why: "Different systems have different messaging, durability, routing, and operational requirements.",
        remember: "Kafka's partitioned event-log model is different from a traditional queue-oriented messaging model.",
        level: "Advanced"
      }
    ]
  },
  {
    id: "cat-6",
    domainId: "engineering",
    number: 6,
    title: "Apache Kafka Architecture",
    description: "Distributed event streaming, topic partitioning, consumer groups, and stream parallelization.",
    icon: "activity",
    topics: [
      {
        id: "cat-6-1",
        name: "Kafka",
        def: "Kafka is a distributed event-streaming platform designed to handle large volumes of messages/events reliably.",
        idea: "Kafka is a distributed event-streaming platform designed to handle large volumes of messages/events reliably.",
        mentalModel: "Think of Kafka as a large, durable event highway where events are organized into lanes.",
        howItWorks: "Producer\n   ↓\nKafka Topic\n   ↓\nPartitions\n   ↓\nConsumers",
        example: "An order service publishes order events to Kafka, and payment, analytics, and notification systems consume them.",
        why: "It enables scalable, durable, distributed event streaming and decouples producers from consumers.",
        remember: "Kafka ≠ Queue\n\nTraditional queues often focus on work being consumed; Kafka stores ordered event streams that consumers can read independently.",
        level: "Advanced"
      },
      {
        id: "cat-6-2",
        name: "Kafka Partitions",
        def: "A Kafka topic is divided into partitions so data can be distributed and consumed in parallel.",
        idea: "A Kafka topic is divided into partitions so data can be distributed and consumed in parallel.",
        mentalModel: "Think of a highway divided into multiple lanes.",
        howItWorks: "Topic\n ├── Partition 0\n ├── Partition 1\n └── Partition 2",
        example: "Three partitions can allow up to three active consumers in the same consumer group at once.",
        why: "Partitions provide scalability, parallelism, and ordering within each partition.",
        remember: "Partition ≠ Consumer\n\nPartition → stores an ordered subset of events\nConsumer → reads/processes events",
        level: "Advanced"
      },
      {
        id: "cat-6-3",
        name: "Consumer",
        def: "A Kafka consumer reads and processes events from Kafka partitions.",
        idea: "A Kafka consumer reads and processes events from Kafka partitions.",
        mentalModel: "Think of a consumer as a worker reading work from a lane.",
        howItWorks: "Kafka Partition\n      ↓\nConsumer\n      ↓\nProcess event",
        example: "A payment consumer reads order events and processes payments.",
        why: "Consumers perform the actual processing of events produced to Kafka.",
        remember: "Consumer ≠ Consumer Group\n\nConsumer → individual worker\nConsumer Group → collection of consumers working together",
        level: "Advanced"
      },
      {
        id: "cat-6-4",
        name: "Consumer Group",
        def: "A consumer group is a set of consumers that collectively process a Kafka topic's partitions.",
        idea: "A consumer group is a set of consumers that collectively process a Kafka topic's partitions.",
        mentalModel: "Think of a team of workers dividing lanes between themselves.",
        howItWorks: "3 Partitions\n     ↓\nConsumer Group\n ├── Consumer 1 → P0\n ├── Consumer 2 → P1\n └── Consumer 3 → P2",
        example: "If there are 3 partitions and 5 consumers in one group, only 3 consumers can actively consume at that moment.",
        why: "It provides parallel processing and workload distribution.",
        remember: "Consumer Group ≠ Partition\n\nGroup → workers coordinating consumption\nPartition → Kafka's unit of storage/parallelism",
        level: "Advanced"
      },
      {
        id: "cat-6-5",
        name: "Partition vs Consumer",
        def: "A partition stores Kafka events; a consumer reads and processes those events.",
        idea: "A partition stores Kafka events; a consumer reads and processes those events.",
        mentalModel: "Partition = lane; Consumer = worker using the lane.",
        howItWorks: "Partition\n   ↓\nConsumer\n   ↓\nProcess event",
        example: "With 3 partitions and 5 consumers in one group:\n\nP0 → C1\nP1 → C2\nP2 → C3\nC4 → idle\nC5 → idle",
        why: "Understanding this relationship explains Kafka's parallelism limits.",
        remember: "Adding consumers beyond the number of partitions does not create additional parallel consumption within that group.",
        level: "Advanced"
      },
      {
        id: "cat-6-6",
        name: "Consumer vs Consumer Group",
        def: "A consumer is one worker; a consumer group is the team coordinating those workers.",
        idea: "A consumer is one worker; a consumer group is the team coordinating those workers.",
        mentalModel: "Consumer = employee; Consumer Group = department.",
        howItWorks: "Consumer Group\n ├── Consumer\n ├── Consumer\n └── Consumer",
        example: "Three consumers in the same group divide three Kafka partitions among themselves.",
        why: "The group provides coordinated parallel processing.",
        remember: "Consumers do the processing; the group manages them as one logical processing unit.",
        level: "Advanced"
      }
    ]
  },
  {
    id: "cat-7",
    domainId: "engineering",
    number: 7,
    title: "Distributed Coordination",
    description: "Distributed consensus, cluster metadata management, and coordination services.",
    icon: "cpu",
    topics: [
      {
        id: "cat-7-1",
        name: "ZooKeeper",
        def: "ZooKeeper is a distributed coordination system historically used by systems such as Kafka for coordination and cluster metadata.",
        idea: "ZooKeeper is a distributed coordination system historically used by systems such as Kafka for coordination and cluster metadata.",
        mentalModel: "Think of it as a coordinator keeping distributed workers aware of important shared information.",
        howItWorks: "Distributed Services\n       ↓\n   ZooKeeper\n       ↓\nCoordination / Metadata",
        example: "Older Kafka deployments used ZooKeeper to help coordinate Kafka brokers.",
        why: "Distributed systems need reliable coordination between independent components.",
        remember: "ZooKeeper ≠ Kafka\n\nZooKeeper provides coordination; Kafka provides distributed event streaming.",
        level: "Advanced"
      }
    ]
  },

  // ==================== DOMAIN 3: NETWORKING & REAL-TIME ====================
  {
    id: "cat-8",
    domainId: "networking",
    number: 8,
    title: "Security, Auth & Traffic Controls",
    description: "Identity verification, role authorization, JWT tokens, OIDC, rate limiting, and input validation.",
    icon: "lock",
    topics: [
      {
        id: "cat-8-1",
        name: "Authentication",
        def: "Authentication verifies who a user or service is.",
        idea: "Authentication verifies who a user or service is.",
        mentalModel: "It's the identity check at the entrance.",
        howItWorks: "Credentials / Token\n      ↓\nVerify identity\n      ↓\nAuthenticated",
        example: "A backend validates a user's JWT before accepting the request as coming from that identity.",
        why: "The system needs to know who is making a request.",
        remember: "Authentication ≠ Authorization\n\nAuthentication → Who are you?\nAuthorization → What can you do?",
        level: "Beginner"
      },
      {
        id: "cat-8-2",
        name: "Authorization",
        def: "Authorization determines what an authenticated identity is allowed to do.",
        idea: "Authorization determines what an authenticated identity is allowed to do.",
        mentalModel: "After checking your ID, the system checks which rooms you're allowed to enter.",
        howItWorks: "Authenticated user\n      ↓\nCheck role/permissions\n      ↓\nAllow / Deny",
        example: "A staff user can read tasks but cannot delete users.",
        why: "Being authenticated doesn't mean having permission to perform every operation.",
        remember: "Valid JWT ≠ permission to perform every action.",
        level: "Intermediate"
      },
      {
        id: "cat-8-3",
        name: "JWT",
        def: "JWT is a signed token format commonly used to carry claims about an authenticated identity between systems.",
        idea: "JWT is a signed token format commonly used to carry claims about an authenticated identity between systems.",
        mentalModel: "Think of it as a verifiable identity card.",
        howItWorks: "Login\n ↓\nJWT issued\n ↓\nClient sends JWT\n ↓\nBackend validates token\n ↓\nIdentity/claims available",
        example: "A client sends:\n\nAuthorization: Bearer <JWT>\n\nThe backend validates it before processing the request.",
        why: "It allows systems to transmit verifiable identity-related claims between requests.",
        remember: "JWT authentication ≠ authorization\n\nA valid JWT proves the token can be trusted; the backend must still check permissions.",
        level: "Intermediate"
      },
      {
        id: "cat-8-4",
        name: "OIDC",
        def: "OIDC is an identity layer built on OAuth 2.0 that lets applications authenticate users through an identity provider.",
        idea: "OIDC is an identity layer built on OAuth 2.0 that lets applications authenticate users through an identity provider.",
        mentalModel: "Think of Google or another identity provider as the trusted identity office confirming who you are.",
        howItWorks: "User\n ↓\nIdentity Provider\n ↓\nAuthentication\n ↓\nApplication receives identity information",
        example: "A user signs in with Google, and your application uses OIDC to obtain verified identity information.",
        why: "Applications can delegate user authentication to an identity provider instead of building the entire identity system themselves.",
        remember: "OIDC ≠ OAuth 2.0\n\nOIDC → authentication/identity\nOAuth 2.0 → authorization/delegated access",
        level: "Advanced"
      },
      {
        id: "cat-8-5",
        name: "Rate Limiting",
        def: "Rate limiting controls how many requests a client or identity can make within a given period.",
        idea: "Rate limiting controls how many requests a client or identity can make within a given period.",
        mentalModel: "Think of it as a security guard limiting how many people can enter per minute.",
        howItWorks: "Requests\n   ↓\nRate Limiter\n   ↓\nWithin limit? → Allow\nOver limit?   → Reject / delay",
        example: "Allow each user to make 100 API requests per minute.",
        why: "It protects services from abuse, accidental overload, and excessive traffic.",
        remember: "Rate limiting ≠ Authentication\n\nAuthentication identifies the requester; rate limiting controls request volume.",
        level: "Intermediate"
      },
      {
        id: "cat-8-6",
        name: "Input Validation",
        def: "Input validation checks whether incoming data matches the expected format and rules before the application processes it.",
        idea: "Input validation checks whether incoming data matches the expected format and rules before the application processes it.",
        mentalModel: "Think of a security checkpoint checking packages before they enter a building.",
        howItWorks: "Request\n ↓\nValidate input\n ↓\nValid? → Process\nInvalid? → Reject",
        example: "An API expects:\n\nage = integer\nemail = valid email\n\nInvalid input is rejected before business logic processes it.",
        why: "It prevents malformed or unexpected data from causing application errors or security problems.",
        remember: "Input validation ≠ Authorization\n\nValidation checks the data; authorization checks whether the user is allowed to perform the action.",
        level: "Beginner"
      }
    ]
  },
  {
    id: "cat-9",
    domainId: "networking",
    number: 9,
    title: "Real-Time Networking Protocols",
    description: "Bi-directional WebSocket streaming and WebRTC TURN relay infrastructure.",
    icon: "radio",
    topics: [
      {
        id: "cat-9-1",
        name: "WebSocket",
        def: "WebSocket provides a persistent two-way connection that allows the server and client to communicate in real time.",
        idea: "WebSocket provides a persistent two-way connection that allows the server and client to communicate in real time.",
        mentalModel: "Think of it as an open phone call instead of repeatedly calling someone for updates.",
        howItWorks: "Client\n   ↕\nWebSocket Connection\n   ↕\nServer\n\nThe server can send updates without waiting for a new HTTP request.\n\nAgent working\n   ↓\nBackend\n   ↓\nWebSocket\n   ↓\nFrontend",
        example: "A frontend shows live progress while an AI agent performs a long-running task.",
        why: "It enables real-time updates such as notifications, progress, and live status.",
        remember: "WebSocket ≠ HTTP request/response\n\nHTTP commonly follows request → response; WebSocket keeps a two-way connection open.",
        level: "Intermediate"
      },
      {
        id: "cat-9-2",
        name: "TURN Server",
        def: "A TURN server relays real-time communication traffic when peers cannot connect directly.",
        idea: "A TURN server relays real-time communication traffic when peers cannot connect directly.",
        mentalModel: "Think of TURN as a relay station used when two people cannot reach each other directly.",
        howItWorks: "Browser A\n    ↓\n   TURN\n    ↓\nBrowser B",
        example: "In WebRTC, NAT or firewall restrictions may prevent two browsers from establishing a direct peer-to-peer connection, so traffic can be relayed through TURN.",
        why: "Some network environments prevent direct peer-to-peer connectivity.",
        remember: "TURN ≠ Direct P2P\n\nP2P → peers communicate directly\nTURN → server relays traffic between peers when direct connection fails",
        level: "Advanced"
      },
      {
        id: "cat-9-3",
        name: "Jump Host / Bastion Host",
        def: "A Jump Host is a controlled server used as an entry point to access servers inside a private network.",
        idea: "A Jump Host is a controlled server used as an entry point to access servers inside a private network.",
        mentalModel: "Think of it as a security gate: instead of entering every private room directly, you first enter through one controlled gate.",
        howItWorks: "Developer\n    ↓\nJump Host / Bastion\n    ↓\nPrivate Server\n    ↓\nDatabase / Application",
        example: "Your PostgreSQL server is inside a private network and has no public IP.\n\nInstead of:\n\nInternet → PostgreSQL ❌\n\nyou use:\n\nDeveloper\n    ↓ SSH\nJump Host\n    ↓ SSH\nPrivate PostgreSQL Server",
        why: "It prevents private servers from needing direct public access and gives you a controlled entry point for administrative access.",
        remember: "Jump Host ≠ VPN\n\nJump Host → you connect to a controlled server first, then access private resources.\nVPN → creates network-level access into the private network.\n\nA Jump Host is also commonly called a Bastion Host.",
        level: "Intermediate"
      }
    ]
  },

  // ==================== DOMAIN 4: AI & AGENTIC SYSTEMS ====================
  {
    id: "cat-10",
    domainId: "ai",
    number: 10,
    title: "AI Agents & Harness Engineering",
    description: "Agent permissions, context engineering, harness systems, long-running agent persistence, and memory structures.",
    icon: "bot",
    topics: [
      {
        id: "cat-10-1",
        name: "AI Agent Permissions / Tool Access",
        def: "An AI agent should receive only the tools and permissions required to perform its task.",
        idea: "An AI agent should receive only the tools and permissions required to perform its task.",
        mentalModel: "Think of an employee who gets only the keys needed for their job.",
        howItWorks: "Goal\n ↓\nAgent reasons\n ↓\nSelect tool\n ↓\nPermission check\n ↓\nAction\n ↓\nResult",
        example: "A Kubernetes agent can read Pod logs but must request approval before deleting a production Deployment.",
        why: "It limits the damage an agent can cause if it makes a mistake or behaves unexpectedly.",
        remember: "Tool access ≠ unrestricted authorization\n\nAn agent may have access to a tool while still being restricted by permissions, policies, or human approval.",
        level: "Intermediate"
      },
      {
        id: "cat-10-2",
        name: "Context Engineering",
        def: "Context engineering selects and organizes the most relevant information for an AI model or agent to solve the current task.",
        idea: "Context engineering selects and organizes the most relevant information for an AI model or agent to solve the current task.",
        mentalModel: "Think of giving a detective only the evidence relevant to the current case, rather than every document in the building.",
        howItWorks: "Large information pool\n        ↓\nFilter relevant data\n        ↓\nOrganize context\n        ↓\nLLM / Agent\n        ↓\nResponse / Action",
        example: "For a failing Kubernetes Pod, provide recent logs, Pod status, relevant configuration, and recent changes instead of six months of unrelated history.",
        why: "Too much irrelevant context can consume the context window, increase cost, and make relevant information harder to focus on.",
        remember: "Prompt Engineering ≠ Context Engineering\n\nPrompt engineering → instructions, goal, expected behavior\nContext engineering → relevant information/data supplied to the model",
        level: "Advanced"
      },
      {
        id: "cat-10-3",
        name: "Harness Engineering",
        def: "Harness engineering builds the surrounding control system that lets an AI agent operate safely and effectively.",
        idea: "Harness engineering builds the surrounding control system that lets an AI agent operate safely and effectively.",
        mentalModel: "Think of the LLM as the driver and the harness as the car's controls, brakes, dashboard, and safety systems.",
        howItWorks: "LLM\n ↓\nHarness\n ├── Tools\n ├── Memory\n ├── Permissions\n ├── Guardrails\n ├── Observability\n └── Approval\n ↓\nAction",
        example: "An AI agent can investigate a production Pod automatically, but the harness requires approval before deleting a production Deployment.",
        why: "The LLM should not have unrestricted control over tools, data, or production systems.",
        remember: "Harness ≠ Prompt\n\nPrompt tells the model what to do; harness controls the environment in which it operates.",
        level: "Advanced"
      },
      {
        id: "cat-10-4",
        name: "Long-Running AI Agent",
        def: "A long-running agent can continue a task across time, interruptions, or failures by saving its progress persistently.",
        idea: "A long-running agent can continue a task across time, interruptions, or failures by saving its progress persistently.",
        mentalModel: "Think of a worker who saves their work before going home, so they can continue tomorrow.",
        howItWorks: "Goal\n ↓\nExecute\n ↓\nSave progress\n ↓\nCrash / interruption\n ↓\nRestart\n ↓\nRecover state\n ↓\nContinue",
        example: "An agent investigates a Kubernetes issue, saves its findings, crashes, then resumes from the last saved state.",
        why: "Long tasks cannot depend entirely on one live process or one context window.",
        remember: "Long-term memory ≠ current context\n\nPersistent memory stores durable information; the current context contains the information needed for the present reasoning step.",
        level: "Advanced"
      },
      {
        id: "cat-10-5",
        name: "Short-Term vs Long-Term AI Memory",
        def: "AI systems can use current context for immediate work and persistent memory for information that must survive beyond the current interaction.",
        idea: "AI systems can use current context for immediate work and persistent memory for information that must survive beyond the current interaction.",
        mentalModel: "Short-term memory = desk; long-term memory = filing cabinet.",
        howItWorks: "Current task\n   ↓\nShort-term context\n   ↓\nReasoning\n\nPast useful information\n   ↓\nLong-term storage\n   ↓\nRetrieve when relevant",
        example: "An agent doesn't load six months of history into every request; it retrieves only relevant past information.",
        why: "Loading everything into every context is inefficient and can exceed the context window.",
        remember: "Memory ≠ Context window\n\nMemory stores information for future retrieval; context is what is actually provided to the model for the current processing step.",
        level: "Intermediate"
      }
    ]
  },
  {
    id: "cat-11",
    domainId: "ai",
    number: 11,
    title: "AI Evaluation & Benchmarking",
    description: "Evaluating model accuracy, groundedness, safety, tool usage, and agent trajectories.",
    icon: "shield-check",
    topics: [
      {
        id: "cat-11-1",
        name: "AI Evaluation",
        def: "AI evaluation measures whether an AI model or agent produces correct, relevant, grounded, safe, and useful results.",
        idea: "AI evaluation measures whether an AI model or agent produces correct, relevant, grounded, safe, and useful results.",
        mentalModel: "Think of it as testing an AI worker's answer, decisions, actions, and behavior—not just whether it says \"done.\"",
        howItWorks: "AI Agent\n   ↓\nTask\n   ↓\nEvaluate\n ├── Correctness\n ├── Relevance\n ├── Groundedness\n ├── Safety\n ├── Tool Use\n └── Trajectory",
        example: "An agent is asked:\n\n\"Fix the production Redis problem.\"\n\nEvaluate whether it:\n\nUnderstood the problem\n        ↓\nUsed the correct tools\n        ↓\nTook sensible actions\n        ↓\nRespected permissions\n        ↓\nVerified the fix\n        ↓\nReported the actual result",
        why: "An AI can produce a convincing answer while being factually wrong, unsupported by evidence, unsafe, or taking a poor sequence of actions.",
        remember: "Correctness ≠ Groundedness\n\nCorrectness → Is the result actually correct?\nGroundedness → Is the result supported by the available evidence?\n\nTool-use evaluation ≠ Trajectory evaluation\nTool-use → Did it use the right tools correctly?\nTrajectory → Did it follow an appropriate sequence of actions?\n\nFinal answer ≠ successful execution",
        level: "Advanced"
      }
    ]
  },

  // ==================== DOMAIN 5: OBSERVABILITY & TESTING ====================
  {
    id: "cat-12",
    domainId: "engineering",
    number: 12,
    title: "Observability & Alerting Stack",
    description: "Monitoring, log analysis, error tracking, APM platforms, and incident alerting.",
    icon: "server",
    topics: [
      {
        id: "cat-12-1",
        name: "Grafana",
        def: "Grafana visualizes metrics and other observability data through dashboards.",
        idea: "Grafana visualizes metrics and other observability data through dashboards.",
        mentalModel: "Think of it as the dashboard inside a control room.",
        howItWorks: "Metrics / Data\n     ↓\nGrafana\n     ↓\nDashboard\n     ↓\nEngineer",
        example: "Monitor:\n\nCPU\nMemory\nRequest rate\nLatency\nError rate",
        why: "Raw monitoring data is difficult to understand quickly; dashboards make trends and abnormal behavior easier to see.",
        remember: "Grafana ≠ Splunk\n\nGrafana → visualization/dashboarding\nSplunk → log/event search and analysis",
        level: "Intermediate"
      },
      {
        id: "cat-12-2",
        name: "Splunk",
        def: "Splunk helps collect, search, and analyze application and system logs/events.",
        idea: "Splunk helps collect, search, and analyze application and system logs/events.",
        mentalModel: "Think of it as a searchable archive of what happened inside your systems.",
        howItWorks: "Application\n   ↓\nLogs / Events\n   ↓\nSplunk\n   ↓\nSearch / Investigate",
        example: "A production API fails, so engineers search logs around the failure time to identify database errors or timeouts.",
        why: "Large production systems generate too many logs to investigate manually.",
        remember: "Splunk ≠ Grafana\n\nSplunk → investigate logs/events\nGrafana → visualize observability data",
        level: "Intermediate"
      },
      {
        id: "cat-12-3",
        name: "Sentry",
        def: "Sentry detects and records application errors and crashes so developers can investigate them.",
        idea: "Sentry detects and records application errors and crashes so developers can investigate them.",
        mentalModel: "Think of it as an automatic accident report system for your application.",
        howItWorks: "Application\n   ↓\nError / Crash\n   ↓\nSentry\n   ↓\nError details\n   ↓\nDeveloper",
        example: "A FastAPI endpoint throws an unexpected exception; Sentry records the error and its context.",
        why: "Developers need visibility into application failures that users experience in production.",
        remember: "Sentry ≠ general log platform\n\nSentry focuses strongly on application errors and performance issues; tools such as Splunk are broader log/event analysis platforms.",
        level: "Intermediate"
      },
      {
        id: "cat-12-4",
        name: "New Relic",
        def: "New Relic provides broad observability for applications, infrastructure, performance, errors, and related telemetry.",
        idea: "New Relic provides broad observability for applications, infrastructure, performance, errors, and related telemetry.",
        mentalModel: "Think of it as a production control center for application and infrastructure behavior.",
        howItWorks: "Application\nInfrastructure\nDatabase\n     ↓\nNew Relic\n     ↓\nMetrics / Traces / Errors / Performance",
        example: "New Relic shows that an API takes 4 seconds and most of that time is spent in a PostgreSQL query.",
        why: "Distributed applications can be slow for many different reasons, so engineers need visibility across the request path.",
        remember: "New Relic ≠ only error tracking\n\nIt provides broader application and infrastructure observability.",
        level: "Intermediate"
      },
      {
        id: "cat-12-5",
        name: "Datadog",
        def: "Datadog brings metrics, logs, traces, infrastructure, application monitoring, and alerts together in an observability platform.",
        idea: "Datadog brings metrics, logs, traces, infrastructure, application monitoring, and alerts together in an observability platform.",
        mentalModel: "Think of it as a central production monitoring room.",
        howItWorks: "Applications\nServers\nContainers\nDatabases\n     ↓\nDatadog\n     ↓\nMonitor → Detect → Alert → Investigate",
        example: "Datadog detects that API error rate has exceeded a threshold and alerts the engineering team.",
        why: "Engineers need a central place to monitor distributed production systems and respond to abnormal behavior.",
        remember: "Datadog ≠ Slack\n\nDatadog → monitors and detects\nSlack → communicates the alert to the team",
        level: "Intermediate"
      },
      {
        id: "cat-12-6",
        name: "Slack",
        def: "Slack provides team communication and can receive automated production alerts and notifications.",
        idea: "Slack provides team communication and can receive automated production alerts and notifications.",
        mentalModel: "Think of it as the communication channel connecting the engineering team during an incident.",
        howItWorks: "Monitoring Tool\n      ↓\nAlert\n      ↓\nSlack\n      ↓\nEngineering Team\n      ↓\nCoordinate + Respond",
        example: "Datadog detects high API error rates and sends an alert to the production Slack channel.",
        why: "Detecting a problem is not enough; engineers need to communicate and coordinate their response.",
        remember: "Slack ≠ Monitoring\n\nDatadog/Grafana/Sentry → observe and investigate\nSlack → communicate and coordinate",
        level: "Beginner"
      }
    ]
  },
  {
    id: "cat-13",
    domainId: "engineering",
    number: 13,
    title: "Web Performance, Testing & Deployment",
    description: "PageSpeed Insights, Playwright test automation, Regression & Sanity testing, Feature Flags, and Canary deployments.",
    icon: "repeat",
    topics: [
      {
        id: "cat-13-1",
        name: "PageSpeed Insights",
        def: "PageSpeed Insights analyzes web-page performance and provides performance measurements and recommendations.",
        idea: "PageSpeed Insights analyzes web-page performance and provides performance measurements and recommendations.",
        mentalModel: "Think of it as a performance inspection for your website.",
        howItWorks: "Website\n   ↓\nPageSpeed Insights\n   ↓\nPerformance analysis\n   ↓\nProblems + Recommendations",
        example: "It can identify issues involving page loading, responsiveness, and layout stability.",
        why: "A website can work correctly while still providing a slow or poor user experience.",
        remember: "PageSpeed Insights ≠ Backend monitoring\n\nPageSpeed Insights → web-page performance\nBackend observability tools → application/infrastructure behavior",
        level: "Beginner"
      },
      {
        id: "cat-13-2",
        name: "Playwright",
        def: "Playwright automates real browser interactions to test complete web application workflows.",
        idea: "Playwright automates real browser interactions to test complete web application workflows.",
        mentalModel: "Think of it as a robot user testing your website.",
        howItWorks: "Playwright\n   ↓\nOpen browser\n   ↓\nLogin\n   ↓\nNavigate\n   ↓\nPerform action\n   ↓\nVerify result",
        example: "Automatically test:\n\nLogin\n ↓\nDashboard\n ↓\nCreate Task\n ↓\nVerify task appears",
        why: "Manual testing of repeated user workflows is slow and easy to miss.",
        remember: "Playwright ≠ Regression Testing\n\nPlaywright → testing automation tool\nRegression testing → purpose of checking existing functionality after changes",
        level: "Intermediate"
      },
      {
        id: "cat-13-3",
        name: "Regression Testing",
        def: "Regression testing checks whether a new change has broken functionality that previously worked.",
        idea: "Regression testing checks whether a new change has broken functionality that previously worked.",
        mentalModel: "You repair one part of a machine and then check that the other working parts still work.",
        howItWorks: "Existing application\n       ↓\nCode change\n       ↓\nRun existing tests\n       ↓\nDid something break?",
        example: "You modify JWT authentication and discover that task creation and notifications no longer work.",
        why: "Changes in one part of an application can accidentally affect existing functionality.",
        remember: "Regression ≠ Sanity\n\nRegression → broader check of existing functionality\nSanity → quick check of critical/basic functionality",
        level: "Intermediate"
      },
      {
        id: "cat-13-4",
        name: "Sanity Testing",
        def: "Sanity testing is a quick, focused check that important/basic functionality works after a change.",
        idea: "Sanity testing is a quick, focused check that important/basic functionality works after a change.",
        mentalModel: "Before driving a repaired car, quickly check the engine and brakes.",
        howItWorks: "New deployment\n   ↓\nQuick critical checks\n   ↓\nBasic functionality works?\n   ↓\nContinue deeper testing",
        example: "After deployment:\n\nApplication starts ✅\nLogin works ✅\nDashboard opens ✅",
        why: "There is little value in running hundreds of tests if the application cannot perform its basic functions.",
        remember: "Sanity ≠ Regression\n\nSanity → quick and focused\nRegression → broader existing-functionality verification",
        level: "Beginner"
      },
      {
        id: "cat-13-5",
        name: "Feature Flags",
        def: "A feature flag lets you turn functionality on/off or expose it to selected users without requiring another application deployment.",
        idea: "A feature flag lets you turn functionality on/off or expose it to selected users without requiring another application deployment.",
        mentalModel: "Think of it as a switch controlling who gets a feature.",
        howItWorks: "Feature deployed\n      ↓\nFeature Flag\n   ├── OFF → old behavior\n   └── ON  → new behavior",
        example: "Enable a new AI model only for internal testers first.",
        why: "It separates deploying code from releasing functionality.",
        remember: "Feature Flag ≠ Canary Deployment\n\nFeature Flag → controls feature availability\nCanary → controls traffic/users receiving a new deployed version",
        level: "Intermediate"
      },
      {
        id: "cat-13-6",
        name: "Canary Deployment",
        def: "Canary deployment sends a small percentage of production traffic to a new version before gradually increasing the rollout.",
        idea: "Canary deployment sends a small percentage of production traffic to a new version before gradually increasing the rollout.",
        mentalModel: "Test a new product with a small group before giving it to everyone.",
        howItWorks: "New version\n    ↓\n5% traffic\n    ↓\nMonitor\n    ↓\nHealthy?\n ├── Yes → 10% → 25% → 50% → 100%\n └── No  → Stop / Rollback",
        example: "A new AI model receives 5% of production traffic while 95% remains on the old version.",
        why: "It reduces the blast radius of a bad release.",
        remember: "Canary ≠ Feature Flag\n\nCanary → controls rollout of a deployed version\nFeature Flag → controls whether a feature is enabled",
        level: "Advanced"
      }
    ]
  }
];
