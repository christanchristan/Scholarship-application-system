"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { GraduationCap, Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <GraduationCap className="h-6 w-6" />
          <span>Scholar4Ethio</span>
        </Link>

        {/* Mobile menu button */}
        <button className="block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            {t.nav.home}
          </Link>
          <Link href="/scholarships" className="text-sm font-medium hover:underline underline-offset-4">
            {t.nav.scholarships}
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
            {t.nav.about}
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
            {t.nav.contact}
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Link href="/dashboard">
            <Button variant="outline">{t.nav.dashboard}</Button>
          </Link>
          <Link href="/apply">
            <Button>{t.nav.applyNow}</Button>
          </Link>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b p-4 md:hidden flex flex-col gap-4">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              {t.nav.home}
            </Link>
            <Link href="/scholarships" className="text-sm font-medium hover:underline underline-offset-4">
              {t.nav.scholarships}
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              {t.nav.about}
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              {t.nav.contact}
            </Link>
            <div className="flex items-center justify-between pt-2 border-t">
              <LanguageSwitcher />
            </div>
            <Link href="/dashboard">
              <Button variant="outline" className="w-full">
                {t.nav.dashboard}
              </Button>
            </Link>
            <Link href="/apply">
              <Button className="w-full">{t.nav.applyNow}</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
