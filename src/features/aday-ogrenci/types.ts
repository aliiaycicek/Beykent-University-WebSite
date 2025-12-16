export interface Faculty {
  id: number;
  name: string;
  programs: number;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  image: string;
  text: string;
}

export interface ImportantDate {
  id: number;
  date: string;
  title: string;
  description: string;
  active: boolean;
}

export interface FAQItem {
  id: number;
  question: string;
}

export interface CampusFeature {
  id: number;
  name: string;
  description: string;
  image: string;
}
