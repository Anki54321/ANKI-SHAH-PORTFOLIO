type ProjectSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  diagram?: string;
  diagramImage?: string;
  subsections?: { heading: string; bullets: string[] }[];
};
 
export const projects: {
  slug: string;
  featured: boolean;
  title: string;
  tag: string | null;
  description: string;
  longDescription: string[];
  sections?: ProjectSection[];
  image: string | null;
  stack: string[];
  sourceUrl: string | null;
  liveUrl: string | null;
  paperUrl: string | null;
}[] = [
  {
    slug: "Threatlens",
    featured: true,
    title: "Cyber Threat Detection and Profiling Using AI",
    tag: "Published research · IJSREM, NCFT 2025",
    description:
      "AI-based cyber threat detection system using NLP and the MITRE ATT&CK framework to classify OSINT threat data from Twitter, benchmarking Random Forest, SVM, Logistic Regression, and Naïve Bayes — reaching an F1-score of 77%.",
    longDescription: [
      "Built to analyze open-source cybersecurity chatter on Twitter (OSINT) and turn it into structured, actionable threat intelligence. The pipeline pulls in raw social data, cleans and processes it with NLP, then classifies it against known attacker behavior.",
      "Integrated the MITRE ATT&CK framework so detected threats map directly to recognized tactics and techniques, generating real-time threat profiles instead of just raw alerts.",
      "Benchmarked four classification models: Random Forest, SVM, Logistic Regression, and Naïve Bayes - to find the best-performing approach, landing on an F1-score of 77%.",
    ],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "As the gap between vulnerability disclosure and real-world exploitation keeps shrinking, security teams need threat intelligence that arrives in real time rather than after the fact. ThreatLens addresses this by treating Twitter as a live OSINT feed to continuously scann posts for threat-related language, then running that language through an NLP and machine-learning pipeline to identify, name, and profile emerging threats automatically.",
          "Rather than just flagging that something suspicious happened, the system profiles the threat's likely intent, origin, and potential impact, then maps it onto the MITRE ATT&CK framework so the output is a structured, analyst-ready threat profile instead of raw noise.",
        ],
      },
      {
        heading: "Key Features",
        subsections: [
          {
            heading: "Real-Time OSINT Monitoring",
            bullets: [
              "Continuously ingests posts from key Twitter sources as a live threat-intelligence feed.",
              "Filters signal from noise across high-volume, unstructured social data.",
            ],
          },
          {
            heading: "NLP Preprocessing (spaCy)",
            bullets: [
              "Tokenization, stemming, lemmatization, and stop-word removal to clean raw text.",
              "Feature extraction tuned to isolate threat-relevant language from everyday chatter.",
            ],
          },
          {
            heading: "MITRE ATT&CK Mapping",
            bullets: [
              "Identified threats are mapped to known tactics and techniques in the ATT&CK matrix.",
              "Produces structured, actionable threat profiles instead of unlabeled alerts.",
            ],
          },
          {
            heading: "ML-Based Threat Profiling",
            bullets: [
              "A layered classification model assesses intent and likely impact per threat.",
              "Generates risk-based alerts to shorten analyst response time.",
            ],
          },
        ],
      },
      {
        heading: "Machine Learning Models Benchmarked",
        paragraphs: [
          "Six classifiers were evaluated for the profiling stage to find the strongest performer on this data: Decision Tree, Gradient Boosting, Logistic Regression, Naïve Bayes, Random Forest, and SVM. The profiling component reached a 77% F1-score in characterizing emerging threats.",
        ],
      },
      {
        heading: "Pipeline",
        diagram:
          "Twitter (OSINT) ──► NLP Preprocessing (spaCy) ──► ML Classification ──► MITRE ATT&CK Mapping ──► Risk-Based Alerts",
      },
      {
        heading: "System Roles",
        bullets: [
          "Service Provider : trains/tests models, reviews accuracy results, and manages registered users.",
          "Admin : reviews and authorizes registered user accounts.",
          "Remote User : registers, logs in, and requests threat/identity predictions against the trained models.",
        ],
      },
      {
        heading: "Published Research",
        paragraphs: [
          "Co-authored and presented at NCFT 2025, published in the International Journal of Scientific Research in Engineering and Management (IJSREM), Special Edition Volume 09 (ISSN: 2582-3930).",
        ],
      },
    ],
    image: "/threatlens.png" as string | null,
    stack: ["Python", "Machine Learning", "NLP", "spaCy", "MITRE ATT&CK"],
    sourceUrl: "https://github.com/Anki54321/cyber-threat-identification" as string | null,
    liveUrl: "https://threatlens.anki.com.np" as string | null,
    paperUrl:
      "https://ijsrem.com/download/cyber-threat-detection-and-profiling-using-ai" as string | null,
  },
  {
    slug: "LandVista",
    featured: true,
    title: "Land Vista",
    tag: null as string | null,
    description:
      "AI-powered land price prediction and business investment guidance platform for Telangana's real estate market, combining historical trend analysis with personalized investment recommendations.",
    longDescription: [
      "A data-driven decision-support platform built for Telangana's real estate market, where fluctuating land prices and a lack of comprehensive analysis tools make it hard for investors and homebuyers to identify profitable areas with confidence.",
      "Land Vista lets users select a region, view historical price trends, and get AI-generated future price predictions alongside personalized business investment suggestions tailored to that area.",
    ],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Land Vista was built as a team project (Unity Minds, GNITC) to address a gap in Telangana's real estate market: investors, homebuyers, and business owners had no single tool combining historical price trends, predictive modeling, and location-specific investment guidance.",
          "The platform lets a user pick a region: Central, North, South, East, or West Hyderabad and see both historical land price data and AI-projected future prices, alongside recommendations for what type of business is likely to succeed there based on local trends and demographics.",
        ],
      },
      {
        heading: "Problem It Solves",
        bullets: [
          "No comprehensive tool existed to guide real estate decision-making in Telangana's market.",
          "Fluctuating land prices made it difficult to identify which areas were actually profitable.",
          "Investors lacked personalized, data-backed business investment suggestions for a given location.",
        ],
      },
      {
        heading: "Key Features",
        subsections: [
          {
            heading: "Price Prediction by Region",
            bullets: [
              "Users select a specific region (Central, North, South, East, West) to view historical pricing data.",
              "AI models project future land prices based on that historical trend.",
            ],
          },
          {
            heading: "Business Suggestions",
            bullets: [
              "Recommends profitable business types for a selected area based on past trends and existing local businesses.",
              "Example: West Hyderabad (Kondapur) — existing businesses include food stalls, shopping malls, and PG hostels; the system suggested co-working spaces and cafés given the area's growing population.",
            ],
          },
          {
            heading: "Personalized Investment Advice",
            bullets: [
              "Tailors investment suggestions to projected returns and individual user preferences.",
              "Aims to maximize profit potential while reducing guesswork in site selection.",
            ],
          },
          {
            heading: "Interactive Dashboard",
            bullets: [
              "Real-time data visualization with graphs and charts for price trends.",
              "Side-by-side investment comparison across regions.",
            ],
          },
        ],
      },
      {
        heading: "Prediction Factors",
        bullets: [
          "Historical price trends and seasonality",
          "Economic indicator analysis",
          "Comparative market analysis",
          "Location and proximity factors",
          "Real estate development trends",
        ],
      },
      {
        heading: "Target Audience",
        bullets: [
          "Real estate investors and brokerages",
          "Small investors and homebuyers",
          "Business owners and corporations scouting locations",
          "Government and urban planning bodies",
        ],
      },
      {
        heading: "System Architecture",
        diagramImage: "/Landvista-systemarchitecture.jpg",
      },
      {
        heading: "User Flow",
        bullets: [
          "User logs in and enters a location.",
          "Region Analysis path → Price Prediction (graphs/charts) → user selects a year for analysis.",
          "Business Prediction path → Business Trends and Business Suggestions for that region.",
        ],
      },
      {
        heading: "System Requirements",
        bullets: [
          "Backend: Python (Django or Flask), Pandas for data handling, Scikit-learn for the ML models.",
          "Frontend: HTML, CSS, JavaScript, Chart.js for data visualization.",
          "Database: SQLite or MySQL for user data and storage.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "Benchmarked against traditional (non-AI) real estate prediction methods, the AI-powered platform showed a meaningful lift across key metrics: roughly 25% higher ROI, 15% growth in investor engagement, and about 50% risk reduction compared to traditional approaches.",
        ],
      },
    ],
    image: null as string | null,
    stack: [
      "Python",
      "Flask",
      "Pandas",
      "Scikit-learn",
      "Chart.js",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    sourceUrl: "https://github.com/Anki54321/LAND-VISTA" as string | null,
    liveUrl: null as string | null,
    paperUrl: null as string | null,
  },
];
 