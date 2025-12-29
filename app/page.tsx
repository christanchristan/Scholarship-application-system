"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScholarshipCard } from "@/components/scholarship-card"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { scholarships } from "@/data/scholarships"
import { services } from "@/data/services"
import { testimonials } from "@/data/testimonials"
import { ArrowRight, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{t.home.heroTitle}</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8">{t.home.heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/apply">
              <Button size="lg">{t.home.getStarted}</Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline">
                {t.home.seePackages}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Scholarships */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t.home.featuredScholarships}</h2>
              <p className="text-muted-foreground mt-2">{t.home.latestOpportunities}</p>
            </div>
            <Link href="/scholarships" className="mt-4 md:mt-0">
              <Button variant="outline" className="flex items-center gap-2">
                {t.home.viewAll} <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scholarships.slice(0, 3).map((scholarship) => (
              <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t.home.ourServices}</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">{t.home.servicesSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">{t.home.whyChooseUs}</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">{t.home.expertGuidance}</h3>
                    <p className="text-muted-foreground">{t.home.expertGuidanceDesc}</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">{t.home.personalizedSupport}</h3>
                    <p className="text-muted-foreground">{t.home.personalizedSupportDesc}</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">{t.home.affordablePackages}</h3>
                    <p className="text-muted-foreground">{t.home.affordablePackagesDesc}</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">{t.home.provenSuccess}</h3>
                    <p className="text-muted-foreground">{t.home.provenSuccessDesc}</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/about">
                  <Button>{t.home.learnMore}</Button>
                </Link>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-6 h-[400px] flex items-center justify-center">
              <p className="text-muted-foreground text-center">
                Image placeholder: Students celebrating scholarship success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t.home.successStories}</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">{t.home.successStoriesSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">{t.home.readyToStart}</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">{t.home.readyToStartDesc}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/apply">
              <Button size="lg" variant="secondary">
                {t.nav.applyNow}
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                {t.home.contactUs}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
