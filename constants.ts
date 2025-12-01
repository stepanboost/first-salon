import { Master, ServiceItem } from './types';

export const BRAND_NAME = "Beauty Salon";
export const ADDRESS = "г. Бишкек, пр. Чуй, 168";
export const PHONE = "+996 (312) 62-45-67";
export const PHONE_CLEAN = "+996312624567";
export const WORKING_HOURS = "Пн-Вс: 9:00-21:00";

export const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "Мастера", href: "#masters" },
  { label: "О салоне", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

export const HERO_CONTENT = {
  title: "Салон красоты премиум класса",
  subtitle: "Откройте для себя мир красоты и роскоши в нашем салоне. Профессиональные мастера, качественные услуги и атмосфера релакса.",
  imageLabel: "Beauty Salon Interior",
  ctaPrimary: "Записаться сейчас",
};

export const BENEFITS = [
  {
    title: "Премиум услуги",
    description: "Маникюр, педикюр, стрижки, окрашивание от ведущих мастеров"
  },
  {
    title: "Удобная запись",
    description: "Онлайн бронирование в удобное время с подтверждением"
  },
  {
    title: "Роскошная атмосфера",
    description: "Современный интерьер и комфортные условия для отдыха"
  }
];

export const SERVICES: ServiceItem[] = [
  { id: "manicure", name: "Маникюр" },
  { id: "haircut_style", name: "Стрижка + Укладка" },
  { id: "peeling", name: "Пилинг" },
];

export const MASTERS: Master[] = [
  {
    id: "anna",
    name: "Анна",
    role: "Мастер",
    services: [
      { name: "Маникюр", price: "1500 сом" },
      { name: "Стрижка + Укладка", price: "1300 сом" }
    ]
  },
  {
    id: "aigul",
    name: "Айгуль",
    role: "Мастер",
    services: [
      { name: "Стрижка + Укладка", price: "2500 сом" },
      { name: "Пилинг", price: "4000 сом" }
    ]
  },
  {
    id: "zhanna",
    name: "Жанна",
    role: "Мастер",
    services: [
      { name: "Пилинг", price: "5000 сом" }
    ]
  }
];