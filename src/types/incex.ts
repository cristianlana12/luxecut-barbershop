export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number; // minutes
  price: number;
  image?: string;
}

export interface Booking {
  id: string;
  service_id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  date: string; // ISO date
  time: string; // HH:mm
  notes?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  created_at: string;
}

export interface BookingFormData {
  serviceId: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
}

export interface DashboardStats {
  totalBookings: number;
  pending: number;
  confirmed: number;
  completed: number;
  cancelled: number;
}