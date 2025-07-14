import { Service, CaseStudy, BlogPost, Partner, TeamMember, Job } from '../types';

export const partners: Partner[] = [
  { id: '1', name: 'TechCorp', logo: 'https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
  { id: '2', name: 'InnovateLabs', logo: 'https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
  { id: '3', name: 'FutureVision', logo: 'https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
  { id: '4', name: 'DataDrive', logo: 'https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
  { id: '5', name: 'BlockchainCorp', logo: 'https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
];

export const services: Service[] = [
  {
    id: '1',
    title: 'AI Development',
    description: 'Custom AI solutions powered by machine learning and deep learning technologies to transform your business processes.',
    icon: 'brain',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'AI Integration'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'Python']
  },
  {
    id: '2',
    title: 'Blockchain Integration',
    description: 'Seamlessly integrate blockchain technology into your existing systems for enhanced security and transparency.',
    icon: 'blocks',
    features: [
      'Smart Contract Development',
      'DeFi Solutions',
      'NFT Platforms',
      'Cryptocurrency Integration',
      'Blockchain Consulting'
    ],
    technologies: ['Ethereum', 'Solidity', 'Web3.js', 'Hardhat', 'IPFS']
  },
  {
    id: '3',
    title: 'Custom Software Solutions',
    description: 'Tailored software development solutions designed to meet your specific business requirements and goals.',
    icon: 'code',
    features: [
      'Web Applications',
      'Mobile Apps',
      'API Development',
      'Cloud Solutions',
      'System Integration'
    ],
    technologies: ['React', 'Node.js', 'Python', 'AWS', 'Docker']
  },
  {
    id: '4',
    title: 'Team Extension',
    description: 'Expand your development capabilities with our expert team of blockchain and AI specialists.',
    icon: 'users',
    features: [
      'Dedicated Teams',
      'Staff Augmentation',
      'Technical Leadership',
      'Project Management',
      'Quality Assurance'
    ],
    technologies: ['Agile', 'Scrum', 'DevOps', 'CI/CD', 'Testing']
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'DeFi Trading Platform',
    description: 'Revolutionary decentralized trading platform with AI-powered analytics and automated trading strategies.',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    tags: ['DeFi', 'Trading', 'AI Analytics'],
    results: '300% increase in trading efficiency',
    client: 'CryptoTrade Inc.',
    duration: '8 months',
    technologies: ['Ethereum', 'Solidity', 'React', 'Python', 'TensorFlow'],
    challenge: 'The client needed a secure, scalable DeFi platform with intelligent trading capabilities.',
    solution: 'We developed a comprehensive platform combining blockchain security with AI-driven analytics.',
    outcome: 'Achieved 300% increase in trading efficiency and processed over $50M in transactions.'
  },
  {
    id: '2',
    title: 'Supply Chain Transparency',
    description: 'Blockchain-based supply chain management system with real-time tracking and verification capabilities.',
    image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    tags: ['Supply Chain', 'Blockchain', 'IoT'],
    results: '95% reduction in fraud cases',
    client: 'GlobalSupply Corp.',
    duration: '6 months',
    technologies: ['Hyperledger', 'IoT', 'React', 'Node.js', 'MongoDB'],
    challenge: 'Complex supply chain with multiple stakeholders needed transparency and fraud prevention.',
    solution: 'Implemented blockchain-based tracking system with IoT integration for real-time monitoring.',
    outcome: '95% reduction in fraud cases and improved customer trust by 85%.'
  },
  {
    id: '3',
    title: 'AI-Powered Healthcare Platform',
    description: 'Machine learning platform for medical diagnosis and treatment recommendations with 99% accuracy.',
    image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    tags: ['Healthcare', 'AI', 'Machine Learning'],
    results: '99% diagnostic accuracy achieved',
    client: 'MedTech Solutions',
    duration: '12 months',
    technologies: ['Python', 'TensorFlow', 'React', 'AWS', 'Docker'],
    challenge: 'Healthcare provider needed accurate diagnostic assistance and treatment recommendations.',
    solution: 'Developed AI platform using deep learning models trained on medical data.',
    outcome: 'Achieved 99% diagnostic accuracy and reduced diagnosis time by 60%.'
  },
  {
    id: '4',
    title: 'Smart Contract Automation',
    description: 'Automated smart contract system for insurance claims processing with instant payouts.',
    image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    tags: ['Insurance', 'Smart Contracts', 'Automation'],
    results: '80% faster claim processing',
    client: 'InsureTech Ltd.',
    duration: '4 months',
    technologies: ['Ethereum', 'Solidity', 'Web3.js', 'React', 'Node.js'],
    challenge: 'Insurance company needed to automate claims processing and reduce manual intervention.',
    solution: 'Created smart contract system with automated verification and instant payouts.',
    outcome: '80% faster claim processing and 90% reduction in operational costs.'
  },
  {
    id: '5',
    title: 'NFT Marketplace Platform',
    description: 'Comprehensive NFT marketplace with advanced features and seamless user experience.',
    image: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    tags: ['NFT', 'Marketplace', 'Web3'],
    results: '1M+ NFTs traded',
    client: 'ArtChain Gallery',
    duration: '10 months',
    technologies: ['Ethereum', 'IPFS', 'React', 'Web3.js', 'Solidity'],
    challenge: 'Art gallery needed a user-friendly NFT marketplace with advanced trading features.',
    solution: 'Built comprehensive marketplace with minting, trading, and auction capabilities.',
    outcome: 'Over 1M NFTs traded with $25M+ in total volume within first year.'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Decentralized Finance: What to Expect in 2025',
    excerpt: 'Explore the latest trends and innovations shaping the DeFi landscape and how they will impact traditional finance.',
    content: 'Full article content would go here...',
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    date: '2024-01-15',
    author: 'Sarah Johnson',
    readTime: '5 min read',
    category: 'DeFi'
  },
  {
    id: '2',
    title: 'AI in Blockchain: Revolutionizing Smart Contract Development',
    excerpt: 'Discover how artificial intelligence is transforming smart contract development and blockchain security.',
    content: 'Full article content would go here...',
    image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    date: '2024-01-10',
    author: 'Michael Chen',
    readTime: '7 min read',
    category: 'AI'
  },
  {
    id: '3',
    title: 'Building Scalable Enterprise Blockchain Solutions',
    excerpt: 'Learn the key considerations and best practices for implementing blockchain technology in enterprise environments.',
    content: 'Full article content would go here...',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    date: '2024-01-05',
    author: 'David Rodriguez',
    readTime: '6 min read',
    category: 'Blockchain'
  },
  {
    id: '4',
    title: 'Machine Learning Models for Cryptocurrency Trading',
    excerpt: 'How advanced ML algorithms are changing the cryptocurrency trading landscape.',
    content: 'Full article content would go here...',
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    date: '2023-12-28',
    author: 'Emily Watson',
    readTime: '8 min read',
    category: 'AI'
  },
  {
    id: '5',
    title: 'Web3 Development Best Practices',
    excerpt: 'Essential guidelines for building secure and efficient Web3 applications.',
    content: 'Full article content would go here...',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    date: '2023-12-20',
    author: 'Alex Thompson',
    readTime: '10 min read',
    category: 'Web3'
  },
  {
    id: '6',
    title: 'The Rise of Decentralized Autonomous Organizations',
    excerpt: 'Understanding DAOs and their potential to reshape organizational structures.',
    content: 'Full article content would go here...',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    date: '2023-12-15',
    author: 'Lisa Park',
    readTime: '6 min read',
    category: 'Blockchain'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'John Smith',
    position: 'CEO & Founder',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    bio: 'Visionary leader with 15+ years in blockchain and AI. Former CTO at major fintech companies.',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    position: 'CTO',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    bio: 'Technical expert specializing in AI and machine learning with PhD in Computer Science.',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: '3',
    name: 'Michael Chen',
    position: 'Head of Blockchain',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    bio: 'Blockchain architect with extensive experience in DeFi and smart contract development.',
    linkedin: '#'
  },
  {
    id: '4',
    name: 'Emily Watson',
    position: 'AI Research Lead',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    bio: 'AI researcher focused on natural language processing and computer vision applications.',
    linkedin: '#',
    twitter: '#'
  }
];

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Blockchain Developer',
    location: 'San Francisco, CA',
    type: 'Full-time',
    department: 'Engineering',
    description: 'We are looking for an experienced blockchain developer to join our growing team.',
    requirements: [
      '5+ years of blockchain development experience',
      'Proficiency in Solidity and Web3.js',
      'Experience with Ethereum and other blockchain platforms',
      'Strong understanding of smart contracts and DeFi protocols'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible work arrangements',
      'Professional development budget'
    ]
  },
  {
    id: '2',
    title: 'AI/ML Engineer',
    location: 'Remote',
    type: 'Full-time',
    department: 'Engineering',
    description: 'Join our AI team to develop cutting-edge machine learning solutions.',
    requirements: [
      'MS/PhD in Computer Science or related field',
      'Experience with TensorFlow, PyTorch, or similar frameworks',
      'Strong Python programming skills',
      'Experience with deep learning and neural networks'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Remote work flexibility',
      'Conference and training budget'
    ]
  },
  {
    id: '3',
    title: 'Product Manager',
    location: 'New York, NY',
    type: 'Full-time',
    department: 'Product',
    description: 'Lead product strategy and development for our blockchain and AI solutions.',
    requirements: [
      '3+ years of product management experience',
      'Understanding of blockchain and AI technologies',
      'Strong analytical and communication skills',
      'Experience with agile development methodologies'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible PTO policy',
      'Stock options'
    ]
  }
];