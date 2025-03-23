export type AttentionType = 'ONLINE' | 'IN_PERSON' | 'BOTH';
export type SessionType = 'INDIVIDUAL' | 'COUPLE' | 'FAMILY' | 'GROUP';
export type PaymentMethod = 'TRANSFER' | 'CREDIT_CARD' | 'DEBIT_CARD';
export type Gender = 'MALE' | 'FEMALE' | 'OTHER' | 'PREFER_NOT_TO_SAY';

export interface Education {
  title: string;
  university: string;
  year: number;
  type: 'DEGREE' | 'MASTER' | 'DOCTORATE' | 'CERTIFICATION';
}

export interface Schedule {
  day: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

export interface SessionFee {
  sessionType: SessionType;
  price: number;
  duration: number; // in minutes
}

export interface Review {
  patientId: string;
  rating: number;
  comment: string;
  date: Date;
}

export interface BasicProfileData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  rut: string | null;
  gender: Gender | null;
  profile_image: string | null;
  region: string | null;
  city: string | null;
}

export interface PsychologistProfile {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  profileImage: string;
  rut?: string;
  gender?: Gender;
  email: string;
  phone: string;
  region: string;
  city: string;
  
  // Professional Data
  professionalTitle: string;
  healthRegistrationNumber?: string;
  specialties: string[];
  education: Education[];
  yearsOfExperience: number;
  
  // Attention Details
  attentionType: AttentionType;
  languages: string[];
  schedule: Schedule[];
  
  // Fees and Payment
  sessionFees: SessionFee[];
  acceptedPaymentMethods: PaymentMethod[];
  
  // Profile Content
  biography: string;
  
  // Reviews
  reviews: Review[];
  averageRating: number;
  
  // Verification
  verifiedDocuments: {
    professionalDegree: boolean;
    healthRegistration: boolean;
    civilLiability: boolean;
  };
  
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}