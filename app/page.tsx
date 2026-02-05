"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/contexts/TranslationContext"
import {
  Ship,
  Anchor,
  Globe,
  Users,
  Award,
  ArrowRight,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Fuel,
  Shield,
  Clock,
  Languages,
  ChevronDown,
  Newspaper,
  FileText,
  Calendar,
  LogIn,
  CheckCircle,
} from "lucide-react"

function Counter({ end, duration = 2000, suffix = "" }: { end: string; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const numericEnd = parseFloat(end.replace(/[^0-9.]/g, ''))
  const isDecimal = end.includes('.')

  useEffect(() => {
    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(progress * numericEnd)
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [numericEnd, duration])

  return (
    <span>
      {isDecimal ? count.toFixed(1) : Math.floor(count)}
      {suffix || (end.includes('+') ? '+' : end.includes('%') ? '%' : '')}
    </span>
  )
}

export default function SonanBunkersLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { language, toggleLanguage, t } = useTranslation()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const text = t('hero.subtitle')
    let index = 0
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50) // Velocidad de escritura

    return () => clearInterval(timer)
  }, [t, language])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isDropdownOpen && !(event.target as Element).closest('.relative')) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDropdownOpen])


  const services = [
    {
      icon: <Fuel className="h-8 w-8 text-white" />,
      title: t('services.fuel.title'),
      description: t('services.fuel.description'),
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: t('services.quality.title'),
      description: t('services.quality.description'),
    },
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      title: t('services.operations.title'),
      description: t('services.operations.description'),
    },
  ]

  const stats = [
    { number: "10+", label: t('stats.years'), description: t('stats.years-desc'), icon: <Award className="h-6 w-6 text-primary stats-icon" /> },
    { number: "500+", label: t('stats.vessels'), description: t('stats.vessels-desc'), icon: <Ship className="h-6 w-6 text-primary stats-icon" /> },
    { number: "8", label: t('stats.locations'), description: t('stats.locations-desc'), icon: <Globe className="h-6 w-6 text-primary stats-icon" /> },
    { number: "99.9%", label: t('stats.reliability'), description: t('stats.reliability-desc'), icon: <Shield className="h-6 w-6 text-primary stats-icon" /> },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border nav-slide-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2 nav-logo-bounce">
                <Ship className="h-8 w-8 text-primary nav-hover-lift" />
                <div>
                  <span className="text-xl font-bold text-foreground">FBCOL</span>
                  <span className="text-sm text-muted-foreground ml-1">COLOMBIA</span>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-foreground nav-link-hover nav-link-fade" style={{ animationDelay: '0.1s' }}>
                {t('nav.services')}
              </a>
              <a href="#about" className="text-foreground nav-link-hover nav-link-fade" style={{ animationDelay: '0.2s' }}>
                {t('nav.about')}
              </a>
              <a href="#locations" className="text-foreground nav-link-hover nav-link-fade" style={{ animationDelay: '0.3s' }}>
                {t('nav.locations')}
              </a>
              <a href="#contact" className="text-foreground nav-link-hover nav-link-fade" style={{ animationDelay: '0.4s' }}>
                {t('nav.contact')}
              </a>

              {/* Dropdown Menu */}
              <div className="relative z-50">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-foreground nav-link-hover nav-link-fade flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-primary/10 transition-all duration-200"
                  style={{ animationDelay: '0.5s' }}
                >
                  <span className="font-medium">Más</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Content */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl dropdown-menu z-[100]">
                    <div className="py-2">
                      <a href="/noticias" className="flex items-center space-x-3 px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200 dropdown-item">
                        <Newspaper className="h-4 w-4 text-blue-600" />
                        <span className="text-gray-700 dark:text-gray-300">Noticias</span>
                      </a>
                      <a href="#events" className="flex items-center space-x-3 px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200 dropdown-item">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        <span className="text-gray-700 dark:text-gray-300">Eventos</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <Button
                onClick={toggleLanguage}
                variant="outline"
                size="sm"
                className="translation-button nav-hover-lift nav-link-fade border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                style={{ animationDelay: '0.6s' }}
              >
                <Languages className="h-4 w-4 mr-2 translation-icon" />
                {language === 'en' ? 'ES' : 'EN'}
              </Button>

              {/* Login Button */}
              <Button
                asChild
                variant="outline"
                size="sm"
                className="nav-hover-lift nav-link-fade border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                style={{ animationDelay: '0.7s' }}
              >
                <a href="/login">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </a>
              </Button>

              <Button className="ocean-gradient text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 nav-button-pulse nav-hover-lift nav-link-fade" style={{ animationDelay: '0.8s' }}>{t('nav.get-quote')}</Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden nav-hover-lift nav-link-fade" style={{ animationDelay: '0.6s' }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-fade-in-up">
            <div className="px-4 py-4 space-y-4">
              <a href="#services" className="block text-foreground hover:text-primary nav-link-hover transition-all duration-300">
                {t('mobile.services')}
              </a>
              <a href="#about" className="block text-foreground hover:text-primary nav-link-hover transition-all duration-300">
                {t('mobile.about')}
              </a>
              <a href="#locations" className="block text-foreground hover:text-primary nav-link-hover transition-all duration-300">
                {t('mobile.locations')}
              </a>
              <a href="#contact" className="block text-foreground hover:text-primary nav-link-hover transition-all duration-300">
                {t('mobile.contact')}
              </a>
              <Button
                onClick={toggleLanguage}
                variant="outline"
                className="w-full translation-button nav-hover-lift border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Languages className="h-4 w-4 mr-2 translation-icon" />
                {language === 'en' ? 'Español' : 'English'}
              </Button>

              {/* Mobile Login Button */}
              <Button
                asChild
                variant="outline"
                className="w-full nav-hover-lift border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <a href="/login">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </a>
              </Button>

              <Button className="w-full ocean-gradient text-white nav-hover-lift">{t('mobile.get-quote')}</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/aerial-view-of-large-container-ship-with-colorful-.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(1.1) contrast(1.2) saturate(1.1)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-background/20 to-background/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              <span className="text-gradient">{t('hero.title').split(' ')[0]}</span> {t('hero.title').split(' ').slice(1).join(' ')}
            </h1>

            <div className="relative mb-8 max-w-3xl mx-auto">
              <div className="hero-subtitle-animated">
                <p className="text-lg md:text-xl text-pretty typewriter-text relative z-10">
                  {displayedText}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="ocean-gradient text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                {t('hero.discover')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
              >
                {t('hero.explore')}
              </Button>
            </div>
          </div>

          {/* Floating Animation Element */}
          <div className="absolute top-20 right-10 animate-float opacity-20">
            <Anchor className="h-16 w-16 text-primary" />
          </div>
        </div>

      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">{t('services.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group service-card-hover border-border/50 hover:border-primary/20"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white mb-6 service-icon-container service-icon-float shadow-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[60%] bg-blue-50/50 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[60%] bg-indigo-50/50 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`stats-card p-8 flex flex-col items-center text-center animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="stats-bg-pattern"></div>

                <div className="stats-icon-wrapper">
                  {stat.icon}
                </div>

                <div className="stats-number">
                  <Counter end={stat.number} />
                </div>

                <div className="text-lg font-bold text-foreground mb-2 relative z-10 transition-colors duration-300 group-hover:text-primary">
                  {stat.label}
                </div>

                <div className="text-sm text-muted-foreground leading-relaxed relative z-10">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">{t('about.title')}</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t('about.description')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-primary" />
                  <span>{t('about.iso')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>{t('about.global')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span>{t('about.team')}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className="rounded-lg overflow-hidden shadow-2xl animate-wave"
                style={{
                  backgroundImage: `url('/modern-maritime-port-with-fuel-tanker-and-containe.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "400px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>

        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold tracking-wide uppercase">
                Contáctanos
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone Card */}
            <div
              className="contact-card group relative p-8 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Phone className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-blue-600 transition-colors duration-300">
                  {t('contact.call')}
                </h3>

                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">
                  +1 (555) 123-4567
                </p>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href="tel:+15551234567"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:gap-2 transition-all duration-300"
                  >
                    Llamar ahora
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div
              className="contact-card group relative p-8 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Mail className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-indigo-600 transition-colors duration-300">
                  {t('contact.email')}
                </h3>

                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">
                  info@fbcol.com
                </p>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href="mailto:info@fbcol.com"
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-2 transition-all duration-300"
                  >
                    Enviar email
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div
              className="contact-card group relative p-8 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <MapPin className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-purple-600 transition-colors duration-300">
                  {t('contact.visit')}
                </h3>

                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">
                  {t('contact.offices')}
                </p>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href="#locations"
                    className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold hover:gap-2 transition-all duration-300"
                  >
                    Ver ubicaciones
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              className="ocean-gradient text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl px-8 py-6 text-lg font-semibold rounded-xl"
            >
              {t('contact.quote')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 footer-animated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="footer-column">
              <div className="flex items-center space-x-2 mb-4 footer-logo">
                <Ship className="h-6 w-6 footer-icon" />
                <span className="text-lg font-bold">FBCOL</span>
              </div>
              <p className="text-sm opacity-80 footer-description">
                {t('footer.description')}
              </p>
            </div>
            <div className="footer-column">
              <h4 className="font-semibold mb-4 footer-title">{t('footer.services')}</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li className="footer-link">{t('services.fuel.title')}</li>
                <li className="footer-link">{t('services.quality.title')}</li>
                <li className="footer-link">{t('services.operations.title')}</li>
                <li className="footer-link">Logística Global</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="font-semibold mb-4 footer-title">{t('footer.company')}</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li className="footer-link">{t('footer.about')}</li>
                <li className="footer-link">{t('footer.team')}</li>
                <li className="footer-link">{t('footer.careers')}</li>
                <li className="footer-link">{t('footer.news')}</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="font-semibold mb-4 footer-title">{t('nav.contact')}</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li className="footer-link">info@fbcol.com</li>
                <li className="footer-link">+1 (555) 123-4567</li>
                <li className="footer-link">Oficinas Globales</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-60 footer-copyright">
            <p>&copy; 2025 {t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
