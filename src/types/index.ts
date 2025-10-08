// University Website Type Definitions

export interface University {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  establishedYear: number;
  address: Address;
  contact: Contact;
  socialMedia: SocialMedia;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Contact {
  phone: string;
  email: string;
  fax?: string;
}

export interface SocialMedia {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
}

export interface Faculty {
  id: string;
  name: string;
  description: string;
  dean: AcademicStaff;
  departments: Department[];
  image: string;
  establishedYear: number;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  head: AcademicStaff;
  facultyId: string;
  programs: Program[];
}

export interface Program {
  id: string;
  name: string;
  degree: 'Bachelor' | 'Master' | 'PhD';
  duration: number;
  language: string;
  description: string;
  departmentId: string;
}

export interface AcademicStaff {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  phone?: string;
  office?: string;
  specialization: string[];
  image?: string;
  bio?: string;
  departmentId?: string;
}

export interface News {
  id: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  publishDate: string;
  author: string;
  category: NewsCategory;
  tags: string[];
  featured: boolean;
}

export type NewsCategory =
  | 'academic'
  | 'research'
  | 'student-life'
  | 'events'
  | 'announcements'
  | 'achievements';

export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  image?: string;
  category: EventCategory;
  registrationRequired: boolean;
  registrationDeadline?: string;
}

export type EventCategory =
  | 'conference'
  | 'seminar'
  | 'workshop'
  | 'graduation'
  | 'cultural'
  | 'sports';

export interface Student {
  id: string;
  studentNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  programId: string;
  year: number;
  gpa?: number;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface PageMeta {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
}
