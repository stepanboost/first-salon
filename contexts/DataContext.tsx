import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ServiceItem, Master } from '../types';

export interface Product {
  id: string;
  name: string;
  pricePerUnit: number;
  totalStock: number;
  unit: string;
  dateAdded: string;
}

interface DataContextType {
  services: ServiceItem[];
  masters: Master[];
  products: Product[];
  addService: (service: Omit<ServiceItem, 'id'>) => void;
  updateService: (id: string, service: Partial<ServiceItem>) => void;
  deleteService: (id: string) => void;
  addMaster: (master: Omit<Master, 'id'>) => void;
  updateMaster: (id: string, master: Partial<Master>) => void;
  deleteMaster: (id: string) => void;
  addProduct: (product: Omit<Product, 'id' | 'dateAdded'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const STORAGE_KEYS = {
  services: 'salon_services',
  masters: 'salon_masters',
  products: 'salon_products',
};

const getInitialServices = (): ServiceItem[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEYS.services);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  }
  // Импортируем начальные данные из constants
  const { SERVICES } = require('../constants');
  return SERVICES;
};

const getInitialMasters = (): Master[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEYS.masters);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  }
  const { MASTERS } = require('../constants');
  return MASTERS;
};

const getInitialProducts = (): Product[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEYS.products);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  }
  return [
    {
      id: '1',
      name: '1212',
      pricePerUnit: 1212121,
      totalStock: 202,
      unit: 'Миллилитры',
      dateAdded: '29.11.2025',
    },
  ];
};

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [services, setServices] = useState<ServiceItem[]>(getInitialServices);
  const [masters, setMasters] = useState<Master[]>(getInitialMasters);
  const [products, setProducts] = useState<Product[]>(getInitialProducts);

  // Сохранение в localStorage при изменении
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.services, JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.masters, JSON.stringify(masters));
  }, [masters]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.products, JSON.stringify(products));
  }, [products]);

  const addService = (service: Omit<ServiceItem, 'id'>) => {
    const newService: ServiceItem = {
      ...service,
      id: `service_${Date.now()}`,
    };
    setServices((prev) => [...prev, newService]);
  };

  const updateService = (id: string, updates: Partial<ServiceItem>) => {
    setServices((prev) =>
      prev.map((service) => (service.id === id ? { ...service, ...updates } : service))
    );
  };

  const deleteService = (id: string) => {
    setServices((prev) => prev.filter((service) => service.id !== id));
  };

  const addMaster = (master: Omit<Master, 'id'>) => {
    const newMaster: Master = {
      ...master,
      id: `master_${Date.now()}`,
    };
    setMasters((prev) => [...prev, newMaster]);
  };

  const updateMaster = (id: string, updates: Partial<Master>) => {
    setMasters((prev) =>
      prev.map((master) => (master.id === id ? { ...master, ...updates } : master))
    );
  };

  const deleteMaster = (id: string) => {
    setMasters((prev) => prev.filter((master) => master.id !== id));
  };

  const addProduct = (product: Omit<Product, 'id' | 'dateAdded'>) => {
    const newProduct: Product = {
      ...product,
      id: `product_${Date.now()}`,
      dateAdded: new Date().toLocaleDateString('ru-RU'),
    };
    setProducts((prev) => [...prev, newProduct]);
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts((prev) =>
      prev.map((product) => (product.id === id ? { ...product, ...updates } : product))
    );
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <DataContext.Provider
      value={{
        services,
        masters,
        products,
        addService,
        updateService,
        deleteService,
        addMaster,
        updateMaster,
        deleteMaster,
        addProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

