// data/site.ts
// Single source of truth for portfolio content.
// Pulled from Anki Shah's CV — education intentionally excluded per request.

export const profile = {
  name: "Anki Shah",
  role: "Cloud & DevOps Engineer",
  subrole: "System Administrator",
  // location: "Kathmandu, Nepal",
  phone: "+977 986-3328668",
  email: "ankishah019@gmail.com",
  github: "https://github.com/Anki54321",
  linkedin: "https://www.linkedin.com/in/anki-shah-68a456278",
  resumeUrl: "/Anki Shah CV.pdf",
  tagline:
    "I build, manage, and optimize cloud infrastructure, ensuring systems remain secure, reliable, and resilient so teams can focus on building, not maintaining infrastructure.",
  summary:
    "I manage enterprise Linux infrastructure, cloud platforms, and containerized environments, with a focus on reliability, automation, and operational excellence. I build and maintain resilient systems that prioritize performance, scalability, and uptime.",
  status: {
    label: "online",
    detail: "currently automating, monitoring, and optimizing systems",
  },
};

export const skillGroups = [
  {
    title: "Cloud & Storage",
    items: ["AWS EC2", "AWS S3", "Cloud Infrastructure Management"],
  },
  {
    title: "Containers & DevOps",
    items: ["Docker", "Git", "GitHub", "Nginx"],
  },
  {
    title: "Monitoring & Backup",
    items: ["Zabbix", "Grafana", "Veeam", "Commvault", "Ahsay"],
  },
  {
    title: "Systems & Networking",
    items: ["Linux (Ubuntu, CentOS)", "DNS", "VPN", "Firewalls", "Virtualization"],
     },
  {
    title: "Programming & Databases",
    items: ["Python", "Java", "JavaScript", "MySQL", "REST APIs"],
  },
]

export const experience = [
  {
    role: "System Administrator / IT Support",
    org: "Datahub Nepal",
    orgUrl: "https://datahub.com.np",
    location: "Kathmandu, Nepal",
    period: "Jul 2025 - Present",
    current: true,
    points: [
      "Provisioned and configured virtual machines across multiple cloud platforms, building a working foundation in Docker containerization, backup/recovery, and DNS configuration.",
      "Diagnosed and resolved application-level issues under senior guidance, contributing to automation and configuration work that reduced manual intervention.",
      "Monitored and troubleshot cloud servers and applications using Zabbix and Grafana, leveraging real-time dashboards, metrics, and alerting to reduce overall system downtime by 30%.",
      "Designed and configured a Docker-based Nextcloud deployment integrated with an AWS S3 storage backend, improving storage scalability and access efficiency by 40%.",
      "Run backup, recovery, and disaster-recovery operations, including Bare Metal Recovery and data replication with Veeam, Commvault, and Ahsay, holding 99% data integrity through migrations.",
      "Troubleshoot VPN connectivity, firewall policy, and endpoint security issues, reducing user access downtime.",
      "Support users on domain management and hosting configuration, and mentor interns on Linux administration, Docker, and monitoring best practices.",
    ],
  },
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Nepali", level: "Native" },
  { name: "Hindi", level: "Fluent" },
];