export interface ServiceItem {
  id: string;
  name: string;
}

export interface MasterService {
  name: string;
  price: string;
}

export interface Master {
  id: string;
  name: string;
  role: string;
  services: MasterService[];
}

export interface ModalState {
  isOpen: boolean;
  preselectedService?: string;
  preselectedMaster?: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  service: string;
  master: string;
  time: string;
}