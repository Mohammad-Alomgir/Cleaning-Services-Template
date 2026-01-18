
import React from 'react';
import { 
  Home, 
  Building2, 
  Droplets, 
  Wind, 
  WashingMachine, 
  UtensilsCrossed,
  Hammer,
  Trash2
} from 'lucide-react';
import { Service, Testimonial, PricingPlan, TeamMember } from './types';

export const SERVICES: Service[] = [
  {
    id: 'house-cleaning',
    title: 'House Cleaning',
    description: 'Professional home cleaning services tailored to your specific needs and schedule.',
    icon: <Home className="w-8 h-8" />,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRJcc-CJmmOPtlkTMudR76iL9tZAWArOaGMw&s'
  },
  {
    id: 'office-cleaning',
    title: 'Office Cleaning',
    description: 'Ensure a productive and healthy environment for your team with our commercial cleaning.',
    icon: <Building2 className="w-8 h-8" />,
    image: 'https://img.freepik.com/free-photo/full-shot-men-cleaning-office_23-2149345516.jpg?semt=ais_hybrid&w=740&q=80'
  },
  {
    id: 'plumbing-services',
    title: 'Plumbing Services',
    description: 'Expert plumbing solutions for residential and commercial properties.',
    icon: <Droplets className="w-8 h-8" />,
    image: 'https://procrewschedule.com/wp-content/uploads/2020/06/plumber-at-work-in-a-bathroom-1024x683-1.jpg'
  },
  {
    id: 'window-cleaning',
    title: 'Window Cleaning',
    description: 'Crystal clear results for all your exterior and interior window surfaces.',
    icon: <Wind className="w-8 h-8" />,
    image: 'https://www.bondcleaningincanberra.com.au/wp-content/uploads/2019/12/windowcleaningservices-main_orig-1.jpg'
  },
  {
    id: 'laundry-service',
    title: 'Laundry Service',
    description: 'Premium laundry and dry cleaning services with convenient pickup and delivery.',
    icon: <WashingMachine className="w-8 h-8" />,
    image: 'https://www.sourceoffabric.com/wp-content/uploads/2024/09/217067478_m_normal_none-1200x780-1-1024x666.jpg'
  },
  {
    id: 'kitchen-cleaning',
    title: 'Kitchen Cleaning',
    description: 'Deep cleaning for kitchens to maintain the highest standards of hygiene.',
    icon: <UtensilsCrossed className="w-8 h-8" />,
    image: 'https://thumbs.dreamstime.com/b/young-handsome-man-apron-protective-gloves-wiping-sink-kitchen-husband-doing-chores-man-cleaning-kitchen-countertop-92949669.jpg'
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
