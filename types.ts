// Import React to provide the React namespace for types like React.ReactNode
import React from 'react';


export interface Feautured {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  employees: string;
  priceMonthly: number;
  priceYearly: number;
  features: string[];
  isPopular?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}
