import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'Results', href: '/#results' },
  { name: 'Resources', href: '/#resources' },
  { name: 'Contact', href: '/contact' },
]

export const courses = [
  {
    id: 1,
    title: 'GS Foundation Course',
    category: 'comprehensive',
    description: 'Complete preparation for UPSC Prelims & Mains with integrated approach',
    duration: '12 months',
    mode: 'Offline + Online',
    price: '₹1,25,000',
    features: ['Comprehensive Study Material', 'Weekly Tests', 'Mentorship Program', 'Current Affairs'],
    popular: true,
  },
  {
    id: 2,
    title: 'GS PCM 2 Year Fledgling',
    category: 'comprehensive',
    description: 'Extended foundation program for fresh graduates starting early',
    duration: '24 months',
    mode: 'Offline + Online',
    price: '₹2,10,000',
    features: ['Extended Coverage', 'Basic to Advanced', 'Regular Mentorship', 'All India Test Series'],
    popular: false,
  },
  {
    id: 3,
    title: 'CSAT Course',
    category: 'prelims',
    description: 'Focused CSAT preparation with comprehensive practice',
    duration: '3 months',
    mode: 'Online',
    price: '₹5,500',
    features: ['CSAT Specific', 'Practice Papers', 'Speed Building', 'Tricks & Techniques'],
    popular: false,
  },
  {
    id: 4,
    title: 'Prelims Test Series',
    category: 'prelims',
    description: '50+ Full-length tests designed by expert faculty',
    duration: '6 months',
    mode: 'Online',
    price: '₹8,500',
    features: ['CSAT Coverage', 'Detailed Explanations', 'Performance Analytics', 'Discussion Sessions'],
    popular: false,
  },
  {
    id: 5,
    title: '59 Questions Reflections (Prelims 2025)',
    category: 'prelims',
    description: 'Analysis of UPSC Prelims 2025 with detailed solutions',
    duration: '1 month',
    mode: 'Online',
    price: '₹2,000',
    features: ['PYQ Analysis', 'Answer Key', 'Detailed Solutions', 'Video Explanations'],
    popular: false,
  },
  {
    id: 6,
    title: 'Mains Answer Writing',
    category: 'mains',
    description: 'Intensive answer writing practice with personalized feedback',
    duration: '4 months',
    mode: 'Offline + Online',
    price: '₹15,000',
    features: ['Daily Answer Writing', 'Model Answers', 'Individual Evaluation', 'Personalized Guidance'],
    popular: false,
  },
  {
    id: 7,
    title: 'Sure-Shot Mains Test Series',
    category: 'mains',
    description: 'Mock mains tests with comprehensive evaluation',
    duration: '3 months',
    mode: 'Online',
    price: '₹10,000',
    features: ['Full Length Tests', 'GS + Essay', 'Detailed Evaluation', 'Model Answers'],
    popular: false,
  },
  {
    id: 8,
    title: 'Essay Writing Programme',
    category: 'mains',
    description: 'Master essay writing with diverse topic coverage',
    duration: '2 months',
    mode: 'Offline + Online',
    price: '₹6,000',
    features: ['Essay Practice', 'Topic Coverage', 'Feedback Sessions', 'Model Essays'],
    popular: false,
  },
  {
    id: 9,
    title: 'Ethics Paper (Paper-V)',
    category: 'mains',
    description: 'Specialized ethics and integrity preparation',
    duration: '2 months',
    mode: 'Online',
    price: '₹5,000',
    features: ['Case Studies', 'Case let Practice', 'Theory Coverage', 'Answer Structuring'],
    popular: false,
  },
  {
    id: 10,
    title: 'Optional Subject Coaching',
    category: 'optional',
    description: 'Expert coaching for all popular optional subjects',
    duration: '6 months',
    mode: 'Offline + Online',
    price: '₹35,000',
    features: ['Subject Experts', 'Notes & Material', 'Test Series', 'Doubt Sessions'],
    popular: false,
  },
  {
    id: 11,
    title: 'Optional Subject Crash Course',
    category: 'optional',
    description: 'Quick revision for optional subjects',
    duration: '2 months',
    mode: 'Online',
    price: '₹15,000',
    features: ['Crash Coverage', 'Important Topics', 'Quick Revision', 'Practice Tests'],
    popular: false,
  },
  {
    id: 12,
    title: 'Interview Guidance Programme',
    category: 'interview',
    description: 'Complete interview preparation with mock interviews',
    duration: '2 months',
    mode: 'Offline',
    price: '₹12,000',
    features: ['Mock Interviews', 'Personality Development', 'Current Issues Prep', 'DAF Analysis'],
    popular: false,
  },
  {
    id: 13,
    title: 'SMART Current Affairs 2026',
    category: 'comprehensive',
    description: 'Comprehensive current affairs coverage for 2026',
    duration: '12 months',
    mode: 'Online',
    price: '₹8,000',
    features: ['Monthly Compilations', 'Video Classes', 'PYQ Integration', 'Practice Questions'],
    popular: false,
  },
  {
    id: 14,
    title: 'StepUp Mentorship 2027',
    category: 'comprehensive',
    description: 'Personalized mentorship with 1-on-1 guidance',
    duration: '12 months',
    mode: 'Hybrid',
    price: '₹45,000',
    features: ['1-on-1 Mentorship', 'Custom Plan', 'Regular Tracking', 'Expert Sessions'],
    popular: false,
  },
  {
    id: 15,
    title: 'IFoS Programme',
    category: 'optional',
    description: 'Specialized Indian Forest Service preparation',
    duration: '8 months',
    mode: 'Offline + Online',
    price: '₹40,000',
    features: ['IFoS Specific', 'Forest Related', 'Optional Coaching', 'Interview Prep'],
    popular: false,
  },
  {
    id: 16,
    title: 'Module Courses',
    category: 'comprehensive',
    description: 'Focused modules for specific subjects',
    duration: 'Variable',
    mode: 'Online',
    price: '₹4,000',
    features: ['Subject Specific', 'Expert Faculty', 'Comprehensive Notes', 'Practice Tests'],
    popular: false,
  },
]

export const toppers = [
  {
    name: 'Priya Sharma',
    rank: 'AIR 12',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    attempt: '3rd Attempt',
    message: 'Ravindra Sir\'s mentorship was instrumental in my success. The structured approach and personalized guidance transformed my preparation.',
  },
  {
    name: 'Rahul Verma',
    rank: 'AIR 45',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    attempt: '2nd Attempt',
    message: 'The answer writing program here is unmatched. The feedback mechanism helped me improve significantly.',
  },
  {
    name: 'Ananya Patel',
    rank: 'AIR 89',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    attempt: '1st Attempt',
    message: 'Started as a beginner and cleared in my first attempt. The faculty support was exceptional throughout.',
  },
  {
    name: 'Vikram Singh',
    rank: 'AIR 156',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    attempt: '2nd Attempt',
    message: 'The current affairs coverage is phenomenal. It covered everything that came in the exam.',
  },
]

export const faqs = [
  {
    question: 'What is the eligibility criteria for UPSC CSE?',
    answer: 'A candidate must have a bachelor\'s degree from a recognized university. There is no age limit for the exam, but the number of attempts is limited to 6 for general category, 9 for OBC, and unlimited for SC/ST candidates.',
  },
  {
    question: 'How long does it take to prepare for UPSC?',
    answer: 'Most successful candidates take 8-12 months of dedicated preparation. However, the duration varies based on individual background, prior knowledge, and the intensity of preparation. Our courses are designed to optimize this timeline.',
  },
  {
    question: 'Do you provide study materials?',
    answer: 'Yes, all our courses include comprehensive study materials prepared by expert faculty. These materials are regularly updated to reflect the latest exam pattern and current affairs.',
  },
  {
    question: 'Can I join from any city?',
    answer: 'We offer both offline (at our centers) and online modes. Our online programs are designed to provide the same quality of education as our classroom programs, accessible from anywhere in India.',
  },
  {
    question: 'What makes Ravindra IAS different from other coaching institutes?',
    answer: 'Our unique approach combines traditional teaching methods with modern technology. We focus on understanding concepts rather than rote learning, provide personalized mentorship, and maintain a strong track record of producing successful candidates.',
  },
  {
    question: 'Do you offer scholarship or financial assistance?',
    answer: 'Yes, we offer scholarships based on merit and economic background. We also have EMI options for course fees. Please contact our counseling team for more details.',
  },
]

export const features = [
  {
    icon: 'Users',
    title: 'Expert Faculty',
    description: 'Learn from experienced educators and former bureaucrats who understand the exam inside out.',
  },
  {
    icon: 'BookOpen',
    title: 'Comprehensive Material',
    description: 'Access meticulously crafted study materials covering every aspect of the syllabus.',
  },
  {
    icon: 'TrendingUp',
    title: 'Proven Results',
    description: '500+ selections in the last 5 years with consistent top rankers across all categories.',
  },
  {
    icon: 'Target',
    title: 'Personalized Approach',
    description: 'Individual mentorship and customized preparation plans based on your strengths and weaknesses.',
  },
  {
    icon: 'Laptop',
    title: 'Hybrid Learning',
    description: 'Flexible learning with both online and offline options to suit your schedule.',
  },
  {
    icon: 'MessageCircle',
    title: 'Doubt Resolution',
    description: 'Regular doubt-clearing sessions and one-on-one interactions with faculty members.',
  },
]

export const resources = [
  {
    title: 'Daily Current Affairs',
    description: 'Stay updated with daily news analysis and its relevance for the exam.',
    icon: 'Newspaper',
    link: '#resources',
  },
  {
    title: 'Weekly Magazine',
    description: 'Comprehensive weekly compilation of important events and issues.',
    icon: 'Book',
    link: '#resources',
  },
  {
    title: 'Previous Year Papers',
    description: 'Access to all UPSC prelims and mains papers from 2010 onwards.',
    icon: 'FileText',
    link: '#resources',
  },
  {
    title: 'Mock Tests',
    description: 'Online test series with detailed analytics and performance tracking.',
    icon: 'ClipboardList',
    link: '#resources',
  },
]

export const stats = [
  { label: 'Years of Excellence', value: '15+' },
  { label: 'Successful Candidates', value: '2500+' },
  { label: 'Top 100 Ranks', value: '120+' },
  { label: 'Success Rate', value: '18%' },
]

export const socialLinks = [
  { name: 'Facebook', url: '#', icon: 'Facebook' },
  { name: 'Twitter', url: '#', icon: 'Twitter' },
  { name: 'Instagram', url: '#', icon: 'Instagram' },
  { name: 'YouTube', url: '#', icon: 'Youtube' },
  { name: 'Telegram', url: '#', icon: 'Send' },
]
