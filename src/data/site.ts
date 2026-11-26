export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQs', href: '#faqs' },
]

export const heroStats = [
  { num: '10', unit: '+', label: 'Successful Projects' },
  { num: '100', unit: '%', label: 'Client Satisfaction' },
  { num: '24/', unit: '7', label: 'Support & Maintenance' },
]

export const ticker = [
  'Brand Identity',
  'Web Design',
  'UI/UX Systems',
  'Motion & Animation',
  'Product Design',
  'Creative Direction',
  'Design Subscriptions',
]

export const services = [
  {
    id: 'ui-ux',
    num: '01',
    title: 'UI/UX Design',
    description:
      'User research, wireframes, prototypes and polished interfaces for websites and mobile apps — designed to turn visitors into loyal users.',
    tags: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    id: 'web-development',
    num: '02',
    title: 'Web Development',
    description:
      'Custom websites, web applications and dashboards built with React and Next.js — fast, responsive, SEO-ready and built on clean, scalable architecture.',
    tags: ['React & Next.js', 'Responsive Websites', 'Web Apps & Dashboards', 'E-commerce'],
  },
  {
    id: 'mobile-development',
    num: '03',
    title: 'Mobile App Development',
    description:
      'Cross-platform iOS and Android apps built with React Native — from MVP to App Store and Google Play launch, with the integrations your business needs.',
    tags: ['React Native', 'iOS & Android', 'API Integrations', 'App Store Launch'],
  },
]

export const benefits = [
  {
    id: 'pricing',
    num: '01',
    icon: '$',
    title: 'Predictable Pricing',
    description:
      'A simple pricing structure that gives you unlimited design. No hourly billing, no surprises — ever.',
  },
  {
    id: 'turnarounds',
    num: '02',
    icon: '⏱',
    title: 'Fast Turnarounds',
    description: 'Quick and reliable results to keep your business moving forward without waiting weeks.',
  },
  {
    id: 'requests',
    num: '03',
    icon: '⟳',
    title: 'Unlimited Requests',
    description:
      'Submit as many requests as you need. We handle them one by one — or in parallel on higher tiers.',
  },
  {
    id: 'portal',
    num: '04',
    icon: '↗',
    title: 'Design Portal',
    description: 'Manage tasks, revisions, and updates inside a clean, organized dashboard built for clarity.',
  },
  {
    id: 'quality',
    num: '05',
    icon: '★',
    title: 'Top-Tier Quality',
    description:
      'Built with care by a team that treats your brand like their own — every pixel intentional.',
  },
  {
    id: 'problems',
    num: '06',
    icon: '◈',
    title: 'Problem Solving',
    description: 'We dig into your brand challenges and surface innovative, strategy-backed solutions.',
  },
]

export type Project = {
  id: string
  label: string
  title: string
  summary: string
  image?: string
  url?: string
}

export const projects: Project[] = [
  {
    id: 'mawprint',
    label: 'Print Industry · Brand & Web',
    title: 'MawPrint',
    summary:
      "A brand-new website built from scratch — directly shaped by the CEO's vision and requirements.",
    image: '/mawprint.png',
    url: 'https://mawprint.com/',
  },
  {
    id: 'mawprint-dashboard',
    label: 'Print Industry · Web App',
    title: 'MawPrint Work Dashboard',
    summary:
      'A custom operations dashboard for the MawPrint team to manage orders, jobs, and client work in one place.',
    image: '/dashboard.png',
  },
  {
    id: 'terrain',
    label: 'E-Commerce · Retail',
    title: 'Terrain Outdoor Storefront',
    summary: 'Modern, conversion-focused storefront that boosted average order value.',
  },
]

export const numbers = [
  { val: '120', unit: '+', label: 'Projects Shipped', desc: 'Across 14 industries worldwide' },
  { val: '98', unit: '%', label: 'Client Retention', desc: 'Most clients return for another project' },
  { val: '7', unit: 'yr', label: 'In Business', desc: 'Founded 2017, profitable from day one' },
  { val: '4.9', unit: '★', label: 'Avg App Rating', desc: 'Across all published mobile apps' },
]

export const steps = [
  {
    number: '01',
    title: 'Book a free discovery call',
    description:
      'A casual 30-minute conversation about your project, goals, and where you need help. No commitments, no pressure.',
  },
  {
    number: '02',
    title: 'Receive your action plan',
    description:
      "Within 48 hours you'll receive a detailed scope, timeline, and pricing. No guesswork, no hidden costs.",
  },
  {
    number: '03',
    title: "Let's start designing",
    description:
      "Once we're aligned, we get to work immediately. You'll see first concepts within the first week.",
  },
]

export const testimonials = [
  {
    text: "Devora Labs built our new website from scratch and a custom work dashboard that now runs our day-to-day operations. They took the time to understand exactly how we work, turned our ideas into a polished, professional platform, and delivered on every promise.",
    name: 'MawPrint',
    role: 'Website & Operations Dashboard',
    initials: 'MP',
  },
  {
    text: 'Devora Labs gave us an elegant online presence that truly does justice to our gems. The website is beautiful, fast and easy for customers to browse — and the team was a pleasure to work with from the first call to launch.',
    name: 'De-silva Gems',
    role: 'Website · Gem & Jewellery',
    initials: 'DG',
  },
]

export const faqs = [
  {
    question: "What's your design process like?",
    answer:
      "We start with a discovery call to understand your goals, then move through strategy, concepts, and iterations. You'll get clear milestones and regular check-ins so the project stays on track.",
  },
  {
    question: 'How long does a typical project take?',
    answer:
      "It depends on scope — from 2 weeks for a focused task to 8–12 weeks for a full brand or product redesign. We'll give you a timeline and milestones in the proposal.",
  },
  {
    question: 'How much do you charge?',
    answer:
      "We work on fixed project fees or monthly retainers, so you know the cost up front. Pricing is based on scope; we'll outline it clearly after the discovery call.",
  },
  {
    question: 'Do you work with startups?',
    answer:
      "Yes. We work with startups at every stage — from pre-launch to scaling. We're used to moving fast and fitting into your workflow.",
  },
  {
    question: 'Can you work with my existing team?',
    answer:
      'Absolutely. We slot in as your design partner and work with your product, marketing, or dev team. We use your tools and processes where it makes sense.',
  },
  {
    question: 'Do you build mobile apps for both iOS and Android?',
    answer:
      'Yes. We build cross-platform mobile apps with React Native, so a single codebase ships to both the Apple App Store and Google Play — saving you time and budget without compromising on a native feel.',
  },
  {
    question: 'What technologies do you use for web development?',
    answer:
      'We build websites and web applications with React, Next.js, TypeScript and Tailwind CSS, connected to modern APIs and headless CMSs. Every site is responsive, fast-loading and built with SEO best practices from day one.',
  },
  {
    question: 'Do you work with clients outside Sri Lanka?',
    answer:
      'Yes. We are a Sri Lanka–based web and mobile app development team working with startups and businesses worldwide. We collaborate remotely across time zones with regular check-ins.',
  },
  {
    question: 'What do I need to have ready before we start?',
    answer:
      "A clear brief, goals, and any brand or product references help. We'll guide you on what we need in the discovery call so you're not guessing.",
  },
]

export const contact = {
  email: 'infodevoralabs@gmail.com',
  phone: '+94 760 244 531',
  pricingOptions: ['UI/UX Design', 'Web Development', 'Mobile Development', 'Other'],
}
