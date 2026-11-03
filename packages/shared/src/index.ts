export enum BookingStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export enum UserRole {
  CUSTOMER = 'CUSTOMER',
  ADMIN = 'ADMIN',
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  role: UserRole;
  createdAt: string;
}

export interface CarOption {
  id: string;
  name: string;
  description?: string;
  pricePerDay: number;
}

export interface Car {
  id: string;
  name: string;
  brand: string;
  country: string;
  hourlyRate: number;
  dailyRate: number;
  images: string[];
  options: CarOption[];
  available: boolean;
}

export interface PriceBreakdown {
  totalDays: number;
  totalHours: number;
  dailyCost: number;
  hourlyCost: number;
  optionsCost: number;
  totalCost: number;
  ruleApplied: string[];
}

export interface BookingRequest {
  carId: string;
  pickupTime: string; // ISO string
  returnTime: string; // ISO string
  selectedOptionIds: string[];
  // If not logged in:
  customerEmail?: string;
  customerPassword?: string;
  customerName?: string;
  customerPhone?: string;
}
