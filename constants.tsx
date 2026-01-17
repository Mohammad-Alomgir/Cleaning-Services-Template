
import React from 'react';
import { 
  Home, 
  Building2, 
  Droplets, 
  Wind, 
  WashingMachine, 
  UtensilsCrossed,
  Hammer,
  Trash2,
  ShieldHalf
} from 'lucide-react';
import { Service, Feautured, Testimonial, PricingPlan, TeamMember } from './types';


export const Feautured: Feautured[] = [
  {
    id: 'expert-craftmanship',
    title: 'Expert Craftsmanship',
    description: 'Our team delivers top-notch cleaning with unmatched precision. Every corner of your home or office is handled with care and attention to detail.',
    icon:<ShieldHalf className="w-8 h-8" />,
  },
];

export const SERVICES: Service[] = [
  {
    id: 'house-cleaning',
    title: 'House Cleaning',
    description: 'Our team delivers top-notch cleaning with unmatched precision. Every corner of your home or office is handled with care and attention to detail.',
    icon:<ShieldHalf className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'office-cleaning',
    title: 'Office Cleaning',
    description: 'Ensure a productive and healthy environment for your team with our commercial cleaning.',
    icon: <Building2 className="w-8 h-8" />,
    image: 'https://www.freepik.com/free-photo/professional-cleaning-service-person-cleaning-office-window_48048756.htm#fromView=keyword&page=1&position=10&uuid=8ec8e29b-04f4-455d-8dba-0f940c964bb4&query=Office+cleaning'
  },
  {
    id: 'plumbing-services',
    title: 'Plumbing Services',
    description: 'Expert plumbing solutions for residential and commercial properties.',
    icon: <Droplets className="w-8 h-8" />,
    image: 'https://picsum.photos/seed/plumbing/600/400'
  },
  {
    id: 'window-cleaning',
    title: 'Window Cleaning',
    description: 'Crystal clear results for all your exterior and interior window surfaces.',
    icon: <Wind className="w-8 h-8" />,
    image: 'https://picsum.photos/seed/window/600/400'
  },
  {
    id: 'laundry-service',
    title: 'Laundry Service',
    description: 'Premium laundry and dry cleaning services with convenient pickup and delivery.',
    icon: <WashingMachine className="w-8 h-8" />,
    image: 'https://picsum.photos/seed/laundry/600/400'
  },
  {
    id: 'kitchen-cleaning',
    title: 'Kitchen Cleaning',
    description: 'Deep cleaning for kitchens to maintain the highest standards of hygiene.',
    icon: <UtensilsCrossed className="w-8 h-8" />,
    image: 'https://picsum.photos/seed/kitchen/600/400'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Farhan Rio',
    role: 'Agent Manager',
    content: 'Spark Cleaning is the best in town. They are reliable, thorough, and very professional. My office has never looked better.',
    avatar: 'https://picsum.photos/seed/person1/100/100',
    rating: 5
  },
  {
    id: '2',
    name: 'Leofar Tom',
    role: 'Founder of Ref Group',
    content: 'Fantastic service! The team arrived on time and did an incredible job with the deep cleaning of our new facility.',
    avatar: 'https://picsum.photos/seed/person2/100/100',
    rating: 5
  },
  {
    id: '3',
    name: 'Rapht Goki',
    role: 'Agent Manager',
    content: 'I highly recommend Spark Cleaning for residential needs. They are careful with furniture and very efficient.',
    avatar: 'https://picsum.photos/seed/person3/100/100',
    rating: 4
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'new-business',
    name: 'New Business',
    employees: '1-4 Employees',
    priceMonthly: 99,
    priceYearly: 890,
    features: ['Plus One-Time Bamboo In-Depth HR Audit For: $500']
  },
  {
    id: 'small-business',
    name: 'Small Business',
    employees: '5-19 Employees',
    priceMonthly: 199,
    priceYearly: 1790,
    features: ['Plus One-Time Bamboo In-Depth HR Audit For: $500'],
    isPopular: true
  },
  {
    id: 'growing-business',
    name: 'Growing Business',
    employees: '20-49 Employees',
    priceMonthly: 299,
    priceYearly: 2690,
    features: ['Plus One-Time Bamboo In-Depth HR Audit For: $500']
  },
  {
    id: 'large-business',
    name: 'Large Business',
    employees: 'Unlimited Employees',
    priceMonthly: 399,
    priceYearly: 3590,
    features: ['Plus One-Time Bamboo In-Depth HR Audit For: $500']
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Laito French',
    role: 'Head of Plumbing',
    image: 'https://picsum.photos/seed/team1/400/500'
  },
  {
    id: '2',
    name: 'Andrea Luies',
    role: 'Cleaning Expert',
    image: 'https://picsum.photos/seed/team2/400/500'
  },
  {
    id: '3',
    name: 'Liana Rob',
    role: 'Service Manager',
    image: 'https://picsum.photos/seed/team3/400/500'
  },
  {
    id: '4',
    name: 'Petra Julia',
    role: 'Project Supervisor',
    image: 'https://picsum.photos/seed/team4/400/500'
  }
];
