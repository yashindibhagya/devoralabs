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
      'Elevate your identity with sharp positioning, cohesive visuals, and interfaces that convert visitors into loyal users.',
    tags: ['Art Direction', 'Brand Strategy', 'Logo Design', 'Color Systems'],
  },
  {
    id: 'web-development',
    num: '02',
    title: 'Web Development',
    description:
      'Refresh or rebuild your web presence with pixel-perfect flows, micro-interactions, and clean, scalable architecture.',
    tags: ['Clean & Modern UI', 'Rebranding', 'Design Systems', 'Prototyping'],
  },
  {
    id: 'mobile-development',
    num: '03',
    title: 'Mobile Development',
    description:
      'Launch a revenue-driving app that captures qualified leads 24/7 — designed, developed, and shipped in 14 days or less.',
    tags: ['React Native', 'Integrations', 'CMS', 'Animation'],
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
  { val: '10', unit: '+', label: 'Projects Shipped', desc: '10+ products, brands and platforms shipped' },
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
    text: 'Devora Labs transformed our outdated platform into a revenue-generating machine. Conversion rates up 340% in the first quarter.',
    name: 'Sarah Chen',
    role: 'CEO, NovaPay',
    initials: 'SC',
  },
  {
    text: 'The team delivered a mobile app that our customers actually love. 4.9 stars on the App Store speaks for itself. Absolute professionals.',
    name: 'Marcus Wright',
    role: 'Founder, Flux',
    initials: 'MW',
  },
  {
    text: "Best tech investment we've made. They understood our vision better than we did — and executed it flawlessly, on time, on budget.",
    name: 'Priya Patel',
    role: 'VP Product, Terrain',
    initials: 'PP',
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
