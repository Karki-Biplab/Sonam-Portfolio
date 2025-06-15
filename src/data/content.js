import {
  SearchCheck,
  Eye,
  ScanSearch,
  Facebook,
  Wrench,
  LayoutTemplate,
  LineChart,
  BarChartBig,
  Award,
  GraduationCap,
  Briefcase,
  CalendarDays,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export const PERSONAL_INFO = {
  name: "Sonam Lama",
  title: "SEO & Content Professional",
  heroIntro: [
    "Hello, I'm Sonam.",
    "A hardworking and",
    "resourceful individual.",
  ],
  about:
    "A hardworking and resourceful individual with good collaboration, organizational, and time management abilities. Committed to developing a career path and expanding work experience. Curious multitasker with great work ethic and good team skills as well as collaboration abilities and problem-solving skills. Willing to take on any task to help the team.",
  contactEmail: "laxenon1@gmail.com",
  phone: "9818911944",
  location: "Kathmandu, Nepal 44600",
  socials: {
    linkedin: "https://www.linkedin.com/in/sonam-lama-20085719b",
    github: "https://github.com/sonaml-007",
  },
};

export const EDUCATION = [
  {
    degree:
      "Bachelor of Science in Computer Science and Information Technology",
    institution:
      "Institute of Science and Technology (IOST; TU), Texas International College",
    year: "August 2024",
    details: "Completed a Bachelor’s Degree in CSIT.",
    icon: GraduationCap,
  },
  {
    degree: "High School Diploma (Science Stream)",
    institution: "Kathmandu Model Higher Secondary School",
    year: "April 2019",
    details: "Completed professional development in the Science stream.",
    icon: GraduationCap,
  },
];

export const CERTIFICATIONS = [
  {
    name: "The Fundamentals of Digital Marketing",
    issuer: "Google Digital Garage",
    icon: Award,
  },
  { name: "SEMRush Certified SEO", issuer: "SEMRush", icon: Award },
];

export const SKILLS_TOOLS = [
  {
    name: "SEM Rush & Ahrefs",
    icon: SearchCheck,
    description:
      "Comprehensive SEO, keyword research, and competitor analysis.",
  },
  {
    name: "Google Analytics (GA4)",
    icon: BarChartBig,
    description: "Web analytics, user behavior tracking, and reporting.",
  },
  {
    name: "Google Search Console",
    icon: LineChart,
    description:
      "Website performance monitoring and issue diagnosis in Google Search.",
  },
  {
    name: "WordPress CMS",
    icon: LayoutTemplate,
    description: "Content management, website publishing, and blog handling.",
  },
  {
    name: "Rank Math & Yoast SEO",
    icon: Wrench,
    description: "WordPress SEO plugins for on-page optimization.",
  },
  {
    name: "Microsoft Clarity",
    icon: Eye,
    description:
      "User behavior analytics with heatmaps and session recordings.",
  },
  {
    name: "Screaming Frog",
    icon: ScanSearch,
    description: "SEO site auditing and technical issue identification.",
  },
  {
    name: "Meta Business Suite",
    icon: Facebook,
    description:
      "Social media marketing, advertising, and page management on Meta platforms.",
  },
];

// Using 'PROJECTS' related variables for experiences to minimize component changes for now
const experiencesData = [
  {
    id: "4",
    slug: "seo-executive-nest-nepal",
    title: "SEO Executive",
    year: "Feb 2024 - Present",
    tags: [
      "SEO",
      "Technical SEO",
      "Content Strategy",
      "Analytics",
      "WordPress",
    ],
    imageUrl: "/next.svg",
    dataAiHint: "digital marketing team",
    company: "Nest Nepal",
    description:
      "Leading SEO initiatives, including keyword research, content creation, technical SEO, on-page/off-page strategies, and performance analytics.",
    details:
      "Working at “Nest Nepal” as an SEO Executive.\nKeyword Research: Strongly focused on keyword research using SEM Rush, Ahrefs, UberSuggest, and Google Keyword tools, and through Google Search.\nContent Research and Writing: Researched and wrote articles and content for the company’s websites.\nTechnical SEO: Sitemaps, Schema, and Page Speed Insights.\nOn-Page SEO: MetaTags, Keywords, FAQs, and Snippets.\nOff-Page SEO: Social Media Handling, Company Profile, and a bit of backlinking research.\nCompetitor Research: Performed competitor research and analysis, as well as backlinking research.\nWordPress and CMS: Published articles using WordPress, with the help of the Rank Math plugin, and handled the blog site’s frontend.\nSocial Media Marketing and Sales: Engaged in research, advertisement, and copywriting for the company’s Social Media.\nSuggestion: Researched and discussed the content and structure for the company’s site.\nAnalytics: Used GSC, GA4, and Clarity for further SEO improvement.",
    client: "Nest Nepal",
    role: "SEO Executive",
    liveUrl: "#",
  },
  {
    id: "1",
    slug: "content-script-writing",
    title: "Content (Script) Writer",
    year: "Aug 2023 - Present",
    tags: ["Freelance", "Content Creation", "YouTube SEO", "Script Writing"],
    imageUrl: "/next.svg",
    dataAiHint: "writing script computer",
    company: "Freelance",
    description:
      "Part-time freelance Content Writer & YouTube SEO, specializing in writing engaging YouTube video scripts for various channels.",
    details:
      "Working as a part-time freelance Content Writer & YouTube SEO.\nWriting YouTube video scripts for upcoming channels on a contractual basis.",
    client: "Freelance Clients",
    role: "Content Writer & YouTube SEO",
    liveUrl: "#",
  },
  {
    id: "2",
    slug: "project-management-trainee",
    title: "Project Manager Trainee",
    year: "Nov 2022 - Jan 2023",
    tags: [
      "Project Management",
      "Client Interaction",
      "Documentation",
      "Agile",
    ],
    imageUrl: "/next.svg",
    dataAiHint: "team meeting project",
    company: "Buddha Tech",
    description:
      "Gained foundational experience in project management, including client communication, meeting facilitation, and detailed documentation.",
    details:
      "Became a project manager trainee for “Buddha Tech” for two months.\nPerformed various tasks such as client interactions, minute-taking, and detail collection, along with a strong focus on documentation.",
    client: "Buddha Tech",
    role: "Project Manager Trainee",
    liveUrl: "#",
  },
  {
    id: "3",
    slug: "seo-intern-danson",
    title: "SEO Intern",
    year: "Aug 2022 - Nov 2022",
    tags: [
      "SEO",
      "Keyword Research",
      "Content Writing",
      "WordPress",
      "Digital Marketing",
    ],
    imageUrl: "/next.svg",
    dataAiHint: "seo analytics chart",
    company: "Danson Solutions (Remote)",
    description:
      "Internship focusing on SEO fundamentals, including keyword and content research, competitor analysis, and WordPress publishing.",
    details:
      "Enrolled in “Danson Solutions” as an SEO Intern, Remote.\nKeyword Research: Strongly focused on keyword research using SEM Rush and Google Keyword tools, and through Google Search.\nContent Research and Writing: Researched and wrote articles for the company’s subsidiary sites.\nCompetitor Research: Performed competitor research and analysis, as well as backlinking research.\nWordPress and CMS: Published articles using WordPress, with the help of the Rank Math plugin as well as Yoast SEO.\nDigital Marketing and Sales: Engaged in research, advertisement, and copywriting for the Sales and Marketing team.\nPresentation: Research and presentation on “Ranking Factors” for SEO.\nMiscellaneous tasks: QA (Black Box and UAT), Data Entry, and Ideation.",
    client: "Danson Solutions",
    role: "SEO Intern",
    liveUrl: "#",
  },
];

export const PROJECTS = experiencesData;
export const FEATURED_PROJECTS = experiencesData.slice(0, 3);
export const ARCHIVE_PROJECTS = experiencesData;

export const SKILLS = SKILLS_TOOLS;

export const CONTACT_DETAILS_ITEMS = [
  {
    icon: Mail,
    text: PERSONAL_INFO.contactEmail,
    href: `mailto:${PERSONAL_INFO.contactEmail}`,
  },
  {
    icon: Phone,
    text: PERSONAL_INFO.phone,
    href: `tel:${PERSONAL_INFO.phone}`,
  },
  {
    icon: MapPin,
    text: PERSONAL_INFO.location,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      PERSONAL_INFO.location
    )}`,
  },
];
