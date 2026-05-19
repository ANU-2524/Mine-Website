export const myProjects = [
  {
    id: 9,
    title: "RiskLens",
    description:
      "An AI-powered global risk intelligence platform that analyzes news, SEC filings, and market trends to detect early warning signs of corporate crises.",
    subDescription: [
      "Developed a 3D visualization 'Galaxy Map' using Three.js to monitor global entities.",
      "Integrated Claude API for natural language risk queries and executive summaries.",
      "Built a production-grade stack with FastAPI, PostgreSQL, and Redis.",
      "Implemented automated background ingestion and real-time risk dashboards."
    ],
    href: "https://github.com/ANU-2524/RiskLens",
    logo: "",
    image: "/assets/projects/risklens.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/Python.svg" },
      { id: 2, name: "React", path: "/assets/logos/React.svg" },
      { id: 3, name: "FastAPI", path: "/assets/logos/web.png" },
      { id: 4, name: "PostgreSQL", path: "/assets/logos/sql.svg" },
      { id: 5, name: "Docker", path: "/assets/logos/docker.svg" }
    ]
  },
  {
    id: 1,
    title: "JustCoding",
    description:
      "A comprehensive interactive learning platform designed to demystify coding through challenges, live code execution, and instant feedback.",
    subDescription: [
      "Developed an interactive coding environment supporting real-time execution.",
      "Designed clean UI using React and Tailwind CSS.",
      "Implemented structured learning paths and challenge modules.",
      "Deployed using Vercel for fast global performance."
    ],
    href: "https://just-coding-theta.vercel.app/",
    logo: "",
    image: "/assets/projects/justCode.png",
    tags: [
      { id: 1, name: "Vite", path: "/assets/logos/Vite.js.svg" } ,
      { id: 2, name: "JavaScript", path: "/assets/logos/JavaScript.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/TailwindCSS.svg" },
      { id: 4, name: "Web App", path: "/assets/logos/web.png" } , 
    ]
  },
  {
    id: 7,
    title: "Truth_N_Dare",
    description:
      "A fun, web-based Truth or Dare game built with HTML, CSS, and JavaScript. It fetches random and hilarious prompts from a free API, offering a playful, interactive experience with smooth animations and a responsive UI.",
    subDescription: [
      "Built using HTML, CSS, and JavaScript with a smooth animated interface.",
      "Integrated the TruthOrDareBot API to fetch random truth or dare prompts.",
      "Designed a playful UI where users enter their name and start instantly."
    ],
    href: "https://github.com/ANU-2524/Truth_N_Dare",
    logo: "",
    image: "/assets/projects/truthNdare.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/Python.svg" },
      { id: 2, name: "JavaScript", path: "/assets/logos/JavaScript.svg" },
      { id: 3, name: "Real-time", path: "/assets/logos/read.svg" }
    ]
  },
  {
    id: 10,
    title: "DEFLATE File Compressor",
    description:
      "A high-performance lossless data compression tool combining LZ77 and Huffman Coding, featuring a Neural Audio Codec module (VQ-VAE).",
    subDescription: [
      "Implemented the DEFLATE algorithm from scratch with 40-60% compression on text.",
      "Integrated a trainable Neural Audio Codec (VQ-VAE) for 128x audio compression.",
      "Built an interactive Streamlit dashboard for real-time Huffman tree visualization.",
      "Optimized Python engine for information entropy calculations and batch processing."
    ],
    href: "https://github.com/ANU-2524/DEFLATE-fileCompressor",
    logo: "",
    image: "/assets/projects/deflate.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/Python.svg" },
      { id: 2, name: "Streamlit", path: "/assets/logos/web.png" },
      { id: 3, name: "PyTorch", path: "/assets/logos/Python.svg" },
      { id: 4, name: "Algorithms", path: "/assets/logos/read.svg" }
    ]
  },
  {
    id: 8,
    title: "AI Worlflow Assistant",
    description:
      "A real-time collaboration suite with messaging, task boards, and team workflows.",
    subDescription: [
      "Implemented real-time chat using Socket.IO.",
      "Built kanban-based task management system.",
      "Enabled file sharing and multi-device support.",
      "Designed an efficient workspace UI."
    ],
    href: "https://github.com/ANU-2524/ai-workflow-assistant",
    logo: "",
    image: "/assets/projects/ai.png",
    tags: [
      { id: 1, name: "Kafka", path: "/assets/logos/kafka.svg" },
      { id: 2, name: "Socket.IO", path: "/assets/logos/socket.svg" },
      { id: 3, name: "Real-time", path: "/assets/logos/read.svg" } , 
      { id: 4, name: "Docker", path: "/assets/logos/docker.svg" } , 
      { id: 5, name: "Kafka", path: "/assets/logos/kafka.svg" } , 
      { id: 6, name: "Django", path: "/assets/logos/Django.svg" } , 
      { id: 7, name: "Web App", path: "/assets/logos/web.png" } ,
    ]
  } , 
  {
    id: 2,
    title: "SnapSendSmile",
    description:
      "A real-time instant photo sharing app built for fun, speed, and smooth user interactions.",
    subDescription: [
      "Created a high-performance UI for instant image uploads.",
      "Integrated Firebase backend for real-time syncing.",
      "Designed playful and modern user interactions.",
      "Optimized for mobile responsiveness and fast load times."
    ],
    href: "https://snap-send-smile.vercel.app/",
    logo: "",
    image: "/assets/projects/sss.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/React.svg" },
      { id: 2, name: "Firebase", path: "/assets/logos/Firebase.svg" },
      { id: 3, name: "Real-time", path: "/assets/logos/socket.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/TailwindCSS.svg" }
    ]
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "A real-time Python-powered weather forecasting tool with location-based data and clean UI.",
    subDescription: [
      "Used Python APIs to fetch real-time weather data.",
      "Built clean and lightweight interface.",
      "Added location-based weather retrieval.",
    ],
    href: "https://weather-app-pythonproject-n5c3.onrender.com/",
    logo: "",
    image: "/assets/projects/weather.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "API", path: "/assets/logos/api.svg" },
      { id: 3, name: "Tools", path: "/assets/logos/tools.svg" }
    ]
  },
  {
    id: 6,
    title: "CollabNerds",
    description:
      "A real-time collaboration suite with messaging, task boards, and team workflows.",
    subDescription: [
      "Implemented real-time chat using Socket.IO.",
      "Built kanban-based task management system.",
      "Enabled file sharing and multi-device support.",
      "Designed an efficient workspace UI."
    ],
    href: "https://glowing-melba-4fb0ac.netlify.app/",
    logo: "",
    image: "/assets/projects/collabNerds.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/React.svg" },
      { id: 2, name: "Socket.IO", path: "/assets/logos/socket.svg" },
      { id: 3, name: "Real-time", path: "/assets/logos/web.png" }
    ]
  }
];


export const mySocials = [
  {
    name: "Leetcode",
    href: "https://leetcode.com/u/anu2524soni/",
    icon: "/assets/socials/leetcode.png",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/anu--soni/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Github",
    href: "https://github.com/ANU-2524",
    icon: "/assets/socials/GitHub.svg",
  },
];
