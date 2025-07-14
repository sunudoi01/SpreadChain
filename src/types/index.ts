export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  technologies: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  results: string;
  client: string;
  duration: string;
  technologies: string[];
  challenge: string;
  solution: string;
  outcome: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
}

export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  requirements: string[];
  benefits: string[];
}