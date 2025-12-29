"use client"

import Link from "next/link"
import { GraduationCap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <GraduationCap className="h-6 w-6" />
              <span>Scholar4Ethio</span>
            </Link>
            <p className="text-sm text-muted-foreground">{t.footer.description}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/scholarships" className="text-muted-foreground hover:text-foreground">
                  {t.nav.scholarships}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">{t.footer.services}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground">
                  {t.services.basicEditing}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground">
                  {t.services.fullApplication}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground">
                  {t.services.cvSopCreation}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">{t.footer.contact}</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">{t.footer.location}</li>
              <li>
                <a href="mailto:info@scholar4ethio.com" className="text-muted-foreground hover:text-foreground">
                  {t.footer.email}
                </a>
              </li>
              <li>
                <a href="tel:+251912345678" className="text-muted-foreground hover:text-foreground">
                  {t.footer.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Scholar4Ethio. {t.footer.allRightsReserved}
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground">
              {t.footer.termsOfService}
            </Link>
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
              {t.footer.privacyPolicy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
