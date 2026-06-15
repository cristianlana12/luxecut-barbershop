export type AppointmentStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export type ServiceType =
  | 'classic_haircut'
  | 'skin_fade'
  | 'beard_trim'
  | 'haircut_beard'
  | 'kids_haircut'
  | 'premium_grooming';

export type BarberId = 'marcus' | 'david' | 'leo';

export interface Appointment {
  id?: string;
  full_name: string;
  email: string;
  phone: string;
  service_type: ServiceType;
  barber_id: BarberId;
  appointment_date: string;
  appointment_time: string;
  notes?: string;
  status?: AppointmentStatus;
  estimated_price?: number;
  created_at?: string;
}

