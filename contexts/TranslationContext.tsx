"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'es'

interface TranslationContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

// Diccionario de traducciones
const translations = {
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.locations': 'Locations',
    'nav.contact': 'Contact',
    'nav.get-quote': 'Get Quote',
    
    // Hero Section
    'hero.title': 'Fueling the Shipping Industry',
    'hero.subtitle': 'C.I. FUELS AND BUNKERS COLOMBIA S.A.S integrates business strategies whilst upholding the highest ethics for maximum success in marine fuel supply.',
    'hero.discover': 'Discover FBCOL',
    'hero.explore': 'Explore Our Services',
    
    // Services Section
    'services.title': 'Our Core Services',
    'services.subtitle': 'Comprehensive marine fuel solutions designed for the modern shipping industry',
    'services.fuel.title': 'Marine Fuel Supply',
    'services.fuel.description': 'Premium quality bunker fuel delivered with precision and reliability to ports worldwide.',
    'services.quality.title': 'Quality Assurance',
    'services.quality.description': 'Rigorous testing and certification ensuring the highest standards for your vessel operations.',
    'services.operations.title': '24/7 Operations',
    'services.operations.description': 'Round-the-clock support and fuel delivery services to meet your scheduling demands.',
    
    // Stats Section
    'stats.years': 'Years of Excellence',
    'stats.years-desc': 'Fueling the shipping industry',
    'stats.vessels': 'Vessels Served',
    'stats.vessels-desc': 'Monthly fuel deliveries',
    'stats.locations': 'Global Locations',
    'stats.locations-desc': 'Strategic port coverage',
    'stats.reliability': 'Reliability Rate',
    'stats.reliability-desc': 'On-time delivery guarantee',
    
    // About Section
    'about.title': 'Innovation, Durability & Efficiency',
    'about.description': 'With over a decade of experience in the maritime industry, C.I. FUELS AND BUNKERS COLOMBIA S.A.S has established itself as a trusted partner for vessel operators worldwide. We combine traditional maritime expertise with modern technology to deliver exceptional service.',
    'about.iso': 'ISO certified quality management systems',
    'about.global': 'Global network of strategic partnerships',
    'about.team': 'Expert team with maritime industry expertise',
    
    // Contact Section
    'contact.title': "Let's Discuss Your Project",
    'contact.subtitle': 'Ready to optimize your fuel supply chain? Get in touch with our experts.',
    'contact.call': 'Call Us',
    'contact.email': 'Email Us',
    'contact.visit': 'Visit Us',
    'contact.offices': 'Global Offices Available',
    'contact.quote': 'Request Quote',
    
    // Footer
    'footer.description': 'Fueling the shipping industry with excellence and reliability for over a decade.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.about': 'About Us',
    'footer.team': 'Our Team',
    'footer.careers': 'Careers',
    'footer.news': 'News',
    'footer.copyright': 'C.I. FUELS AND BUNKERS COLOMBIA S.A.S. All rights reserved.',
    
    // Mobile Menu
    'mobile.services': 'Services',
    'mobile.about': 'About',
    'mobile.locations': 'Locations',
    'mobile.contact': 'Contact',
    'mobile.get-quote': 'Get Quote',
    
    // News Page
    'news.back-home': 'Back to home',
    'news.news': 'News',
    'news.title': 'Maritime Industry News',
    'news.subtitle': 'Stay informed about the latest news, innovations, and developments in the marine fuels sector and the shipping industry.',
    'news.search-placeholder': 'Search news...',
    'news.all': 'All',
    'news.featured': 'Featured News',
    'news.read-more': 'Read more >',
    'news.latest': 'Latest News',
    'news.newsletter.title': 'Stay Updated',
    'news.newsletter.subtitle': 'Subscribe to our newsletter and receive the latest maritime industry news directly in your inbox.',
    'news.newsletter.email-placeholder': 'Enter your email',
    'news.newsletter.subscribe': 'Subscribe',
    'news.newsletter.success': 'Successfully subscribed!',
    'news.categories.industry': 'Industry',
    'news.categories.technology': 'Technology',
    'news.categories.sustainability': 'Sustainability',
    'news.categories.regulations': 'Regulations',
    'news.categories.market': 'Market',
    'news.categories.operations': 'Operations',
  },
  es: {
    // Navigation
    'nav.services': 'Servicios',
    'nav.about': 'Acerca de',
    'nav.locations': 'Ubicaciones',
    'nav.contact': 'Contacto',
    'nav.get-quote': 'Cotizar',
    
    // Hero Section
    'hero.title': 'Alimentando la Industria Naviera',
    'hero.subtitle': 'C.I. COMBUSTIBLES Y BUNKERS COLOMBIA S.A.S integra estrategias comerciales manteniendo la más alta ética para el máximo éxito en el suministro de combustible marino.',
    'hero.discover': 'Descubrir FBCOL',
    'hero.explore': 'Explorar Nuestros Servicios',
    
    // Services Section
    'services.title': 'Nuestros Servicios Principales',
    'services.subtitle': 'Soluciones integrales de combustible marino diseñadas para la industria naviera moderna',
    'services.fuel.title': 'Suministro de Combustible Marino',
    'services.fuel.description': 'Combustible búnker de primera calidad entregado con precisión y confiabilidad a puertos de todo el mundo.',
    'services.quality.title': 'Seguro de Calidad',
    'services.quality.description': 'Pruebas y certificación rigurosas que garantizan los más altos estándares para las operaciones de su embarcación.',
    'services.operations.title': 'Operaciones 24/7',
    'services.operations.description': 'Servicios de soporte y entrega de combustible las 24 horas para satisfacer sus demandas de programación.',
    
    // Stats Section
    'stats.years': 'Años de Excelencia',
    'stats.years-desc': 'Alimentando la industria naviera',
    'stats.vessels': 'Embarcaciones Atendidas',
    'stats.vessels-desc': 'Entregas mensuales de combustible',
    'stats.locations': 'Ubicaciones Globales',
    'stats.locations-desc': 'Cobertura estratégica de puertos',
    'stats.reliability': 'Tasa de Confiabilidad',
    'stats.reliability-desc': 'Garantía de entrega puntual',
    
    // About Section
    'about.title': 'Innovación, Durabilidad y Eficiencia',
    'about.description': 'Con más de una década de experiencia en la industria marítima, C.I. COMBUSTIBLES Y BUNKERS COLOMBIA S.A.S se ha establecido como un socio confiable para operadores de embarcaciones en todo el mundo. Combinamos experiencia marítima tradicional con tecnología moderna para brindar un servicio excepcional.',
    'about.iso': 'Sistemas de gestión de calidad certificados ISO',
    'about.global': 'Red global de asociaciones estratégicas',
    'about.team': 'Equipo experto con experiencia en la industria marítima',
    
    // Contact Section
    'contact.title': 'Hablemos de Tu Proyecto',
    'contact.subtitle': '¿Listo para optimizar tu cadena de suministro de combustible? Ponte en contacto con nuestros expertos.',
    'contact.call': 'Llámanos',
    'contact.email': 'Escríbenos',
    'contact.visit': 'Visítanos',
    'contact.offices': 'Oficinas Globales Disponibles',
    'contact.quote': 'Solicitar Cotización',
    
    // Footer
    'footer.description': 'Alimentando la industria naviera con excelencia y confiabilidad durante más de una década.',
    'footer.services': 'Servicios',
    'footer.company': 'Empresa',
    'footer.about': 'Acerca de Nosotros',
    'footer.team': 'Nuestro Equipo',
    'footer.careers': 'Carreras',
    'footer.news': 'Noticias',
    'footer.copyright': 'C.I. COMBUSTIBLES Y BUNKERS COLOMBIA S.A.S. Todos los derechos reservados.',
    
    // Mobile Menu
    'mobile.services': 'Servicios',
    'mobile.about': 'Acerca de',
    'mobile.locations': 'Ubicaciones',
    'mobile.contact': 'Contacto',
    'mobile.get-quote': 'Cotizar',
    
    // News Page
    'news.back-home': 'Volver al inicio',
    'news.news': 'Noticias',
    'news.title': 'Noticias de la Industria Marítima',
    'news.subtitle': 'Mantente informado sobre las últimas novedades, innovaciones y desarrollos en el sector de combustibles marinos y la industria naviera.',
    'news.search-placeholder': 'Buscar noticias...',
    'news.all': 'Todas',
    'news.featured': 'Noticia Destacada',
    'news.read-more': 'Leer más >',
    'news.latest': 'Últimas Noticias',
    'news.newsletter.title': 'Mantente Actualizado',
    'news.newsletter.subtitle': 'Suscríbete a nuestro boletín y recibe las últimas noticias de la industria marítima directamente en tu bandeja de entrada.',
    'news.newsletter.email-placeholder': 'Ingresa tu email',
    'news.newsletter.subscribe': 'Suscribirse',
    'news.newsletter.success': '¡Suscripción exitosa!',
    'news.categories.industry': 'Industria',
    'news.categories.technology': 'Tecnología',
    'news.categories.sustainability': 'Sostenibilidad',
    'news.categories.regulations': 'Regulaciones',
    'news.categories.market': 'Mercado',
    'news.categories.operations': 'Operaciones',
  }
}

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en')
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <TranslationContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  )
}

export const useTranslation = () => {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}
