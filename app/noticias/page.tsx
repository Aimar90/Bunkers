"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/contexts/TranslationContext"
import {
  Ship,
  ArrowLeft,
  Calendar,
  User,
  Tag,
  ExternalLink,
  Search,
  Filter,
  ChevronRight,
  Globe,
  TrendingUp,
  Award,
  Newspaper,
  Languages,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NoticiasPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("todas")
  const { language, toggleLanguage, t } = useTranslation()

  const categories = [
    { id: "todas", name: t('news.all'), count: 12 },
    { id: "industria", name: t('news.categories.industry'), count: 5 },
    { id: "tecnologia", name: t('news.categories.technology'), count: 3 },
    { id: "sostenibilidad", name: t('news.categories.sustainability'), count: 4 },
  ]

  const news = [
    {
      id: 1,
      title: "FBCOL Expande Operaciones a Nuevos Puertos del Caribe",
      excerpt: "C.I. COMBUSTIBLES Y BUNKERS COLOMBIA S.A.S anuncia la expansión de sus servicios a tres nuevos puertos estratégicos en la región del Caribe, fortaleciendo su presencia en el mercado marítimo internacional.",
      content: "La expansión incluye instalaciones en Puerto Limón (Costa Rica), Puerto Cortés (Honduras) y Puerto Barranquilla (Colombia), con una inversión total de $15 millones de dólares.",
      category: "industria",
      author: "Equipo FBCOL",
      date: "2025-01-15",
      image: "/modern-maritime-port-with-fuel-tanker-and-containe.jpg",
      featured: true,
      tags: ["Expansión", "Caribe", "Puertos"]
    },
    {
      id: 2,
      title: "Nuevas Tecnologías en Combustibles Marinos Sostenibles",
      excerpt: "Implementación de sistemas avanzados de monitoreo de calidad y nuevas tecnologías para combustibles más limpios y eficientes.",
      content: "FBCOL ha invertido en tecnología de última generación para garantizar la calidad y sostenibilidad de sus combustibles marinos.",
      category: "tecnologia",
      author: "Departamento Técnico",
      date: "2025-01-12",
      image: "/aerial-view-of-large-container-ship-with-colorful-.jpg",
      featured: false,
      tags: ["Tecnología", "Sostenibilidad", "Calidad"]
    },
    {
      id: 3,
      title: "Certificación ISO 14001: Gestión Ambiental",
      excerpt: "FBCOL obtiene la certificación ISO 14001 por sus sistemas de gestión ambiental, reforzando su compromiso con la sostenibilidad.",
      content: "Esta certificación reconoce nuestros esfuerzos en la gestión ambiental y el desarrollo de prácticas sostenibles en la industria marítima.",
      category: "sostenibilidad",
      author: "Gerencia de Calidad",
      date: "2025-01-10",
      image: "/placeholder.jpg",
      featured: false,
      tags: ["Certificación", "ISO", "Ambiente"]
    },
    {
      id: 4,
      title: "Alianza Estratégica con Principales Navieras",
      excerpt: "Nueva alianza con las principales navieras del mundo para ofrecer servicios de combustible de clase mundial.",
      content: "Esta alianza nos permite ofrecer servicios más eficientes y confiables a nuestros clientes en todo el mundo.",
      category: "industria",
      author: "Dirección Comercial",
      date: "2025-01-08",
      image: "/placeholder.jpg",
      featured: false,
      tags: ["Alianzas", "Navieras", "Servicios"]
    },
    {
      id: 5,
      title: "Innovación en Logística de Combustibles",
      excerpt: "Desarrollo de nuevos sistemas logísticos para optimizar la entrega de combustibles en puertos de todo el mundo.",
      content: "Nuestros nuevos sistemas logísticos reducen los tiempos de entrega en un 30% y mejoran la eficiencia operativa.",
      category: "tecnologia",
      author: "Departamento de Logística",
      date: "2025-01-05",
      image: "/placeholder.jpg",
      featured: false,
      tags: ["Logística", "Innovación", "Eficiencia"]
    },
    {
      id: 6,
      title: "Compromiso con la Reducción de Emisiones",
      excerpt: "FBCOL se compromete a reducir las emisiones de CO2 en un 25% para el año 2030 mediante nuevas tecnologías.",
      content: "Este compromiso forma parte de nuestra estrategia de sostenibilidad y responsabilidad ambiental.",
      category: "sostenibilidad",
      author: "Comité de Sostenibilidad",
      date: "2025-01-03",
      image: "/placeholder.jpg",
      featured: false,
      tags: ["Emisiones", "CO2", "2030"]
    }
  ]

  const filteredNews = news.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "todas" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredNews = news.filter(article => article.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                <ArrowLeft className="h-4 w-4" />
                <span>{t('news.back-home')}</span>
              </Link>
              <div className="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>
              <div className="flex items-center space-x-2">
                <Ship className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold text-gray-900 dark:text-white">FBCOL</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                onClick={toggleLanguage}
                variant="outline" 
                size="sm"
                className="translation-button nav-hover-lift border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Languages className="h-4 w-4 mr-2 translation-icon" />
                {language === 'en' ? 'ES' : 'EN'}
              </Button>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                <Newspaper className="h-3 w-3 mr-1" />
                {t('news.news')}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'en' ? 'Maritime Industry News' : 'Noticias de la'}
            {language === 'en' ? '' : <span className="text-blue-600"> Industria Marítima</span>}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('news.subtitle')}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder={t('news.search-placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
              {t('news.featured')}
            </h2>
            <Card className="news-card overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={featuredNews[0].image}
                      alt={featuredNews[0].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-500 text-white">
                        <Award className="h-3 w-3 mr-1" />
                        {language === 'en' ? 'Featured' : 'Destacada'}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(featuredNews[0].date).toLocaleDateString('es-ES')}
                    </span>
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredNews[0].author}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {featuredNews[0].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {featuredNews[0].excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredNews[0].tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="news-button">
                    {t('news.read-more')}
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* News Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {t('news.latest')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((article, index) => (
              <Card key={article.id} className="news-card group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {categories.find(cat => cat.id === article.category)?.name}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400 mb-2">
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(article.date).toLocaleDateString('es-ES')}
                    </span>
                    <span className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {article.author}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {article.tags.slice(0, 2).map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="w-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20">
                    {t('news.read-more')}
                    <ExternalLink className="h-3 w-3 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="newsletter-card">
          <CardContent className="p-8 text-center">
            <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {t('news.newsletter.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('news.newsletter.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('news.newsletter.email-placeholder')}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button className="newsletter-button">
                {t('news.newsletter.subscribe')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
