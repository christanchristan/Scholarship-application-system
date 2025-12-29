"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ScholarshipCard } from "@/components/scholarship-card"
import { LoadingSpinner } from "@/components/loading-spinner"
import { scholarships } from "@/data/scholarships"
import { useLanguage } from "@/contexts/language-context"
import { Search, Filter, X } from "lucide-react"

export default function ScholarshipsPage() {
  const { t } = useLanguage()
  const [isLoading, setIsLoading] = useState(false)
  const [filters, setFilters] = useState({
    search: "",
    country: "",
    degreeType: "",
    fields: [] as string[],
    deadlineRange: "",
  })

  const countries = [...new Set(scholarships.map((s) => s.country))].sort()
  const degreeTypes = [...new Set(scholarships.map((s) => s.degreeType))].sort()
  const fields = [...new Set(scholarships.map((s) => s.field))].sort()

  const filteredScholarships = useMemo(() => {
    return scholarships.filter((scholarship) => {
      const matchesSearch =
        scholarship.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        scholarship.university.toLowerCase().includes(filters.search.toLowerCase()) ||
        scholarship.field.toLowerCase().includes(filters.search.toLowerCase())

      const matchesCountry = !filters.country || scholarship.country === filters.country
      const matchesDegree = !filters.degreeType || scholarship.degreeType === filters.degreeType
      const matchesFields = filters.fields.length === 0 || filters.fields.includes(scholarship.field)

      // Deadline filtering
      let matchesDeadline = true
      if (filters.deadlineRange) {
        const deadline = new Date(scholarship.deadline)
        const today = new Date()
        const diffDays = Math.ceil((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

        switch (filters.deadlineRange) {
          case "30":
            matchesDeadline = diffDays <= 30 && diffDays > 0
            break
          case "90":
            matchesDeadline = diffDays <= 90 && diffDays > 0
            break
          case "180":
            matchesDeadline = diffDays <= 180 && diffDays > 0
            break
          default:
            matchesDeadline = true
        }
      }

      return matchesSearch && matchesCountry && matchesDegree && matchesFields && matchesDeadline
    })
  }, [filters, scholarships])

  const handleFieldToggle = (field: string) => {
    setFilters((prev) => ({
      ...prev,
      fields: prev.fields.includes(field) ? prev.fields.filter((f) => f !== field) : [...prev.fields, field],
    }))
  }

  const clearFilters = () => {
    setFilters({
      search: "",
      country: "",
      degreeType: "",
      fields: [],
      deadlineRange: "",
    })
  }

  const hasActiveFilters =
    filters.search || filters.country || filters.degreeType || filters.fields.length > 0 || filters.deadlineRange

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">{t.scholarships.title}</h1>
        <p className="text-muted-foreground">{t.scholarships.subtitle}</p>
      </div>

      {/* Enhanced Filters */}
      <div className="bg-muted/30 p-6 rounded-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <Label htmlFor="search" className="mb-2 block">
              {t.common.search}
            </Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="search"
                placeholder={t.scholarships.searchPlaceholder}
                className="pl-9"
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="country" className="mb-2 block">
              {t.scholarships.country}
            </Label>
            <Select
              value={filters.country}
              onValueChange={(value) => setFilters({ ...filters, country: value === "all" ? "" : value })}
            >
              <SelectTrigger id="country">
                <SelectValue placeholder={t.scholarships.allCountries} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.scholarships.allCountries}</SelectItem>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="degree" className="mb-2 block">
              {t.scholarships.degreeLevel}
            </Label>
            <Select
              value={filters.degreeType}
              onValueChange={(value) => setFilters({ ...filters, degreeType: value === "all" ? "" : value })}
            >
              <SelectTrigger id="degree">
                <SelectValue placeholder={t.scholarships.allDegrees} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.scholarships.allDegrees}</SelectItem>
                {degreeTypes.map((degree) => (
                  <SelectItem key={degree} value={degree}>
                    {t.scholarships[degree.toLowerCase() as keyof typeof t.scholarships]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="deadline" className="mb-2 block">
              Deadline Range
            </Label>
            <Select
              value={filters.deadlineRange}
              onValueChange={(value) => setFilters({ ...filters, deadlineRange: value === "all" ? "" : value })}
            >
              <SelectTrigger id="deadline">
                <SelectValue placeholder="All Deadlines" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Deadlines</SelectItem>
                <SelectItem value="30">Next 30 days</SelectItem>
                <SelectItem value="90">Next 3 months</SelectItem>
                <SelectItem value="180">Next 6 months</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Field Filters */}
        <div className="mt-6">
          <Label className="mb-3 block">{t.scholarships.field}</Label>
          <div className="flex flex-wrap gap-2">
            {fields.map((field) => (
              <div key={field} className="flex items-center space-x-2">
                <Checkbox
                  id={`field-${field}`}
                  checked={filters.fields.includes(field)}
                  onCheckedChange={() => handleFieldToggle(field)}
                />
                <Label htmlFor={`field-${field}`} className="text-sm cursor-pointer">
                  {field}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="h-4 w-4" />
            <span>
              {t.scholarships.showing} {filteredScholarships.length} {t.scholarships.of} {scholarships.length}
            </span>
          </div>
          {hasActiveFilters && (
            <Button variant="outline" onClick={clearFilters} className="gap-2">
              <X className="h-4 w-4" />
              {t.common.clear} {t.common.filter}
            </Button>
          )}
        </div>
      </div>

      {/* Results */}
      {isLoading ? (
        <div className="flex justify-center py-12">
          <LoadingSpinner size="lg" />
        </div>
      ) : filteredScholarships.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2">{t.scholarships.noResults}</h3>
          <p className="text-muted-foreground mb-4">{t.scholarships.noResultsDesc}</p>
          <Button onClick={clearFilters}>{t.scholarships.resetFilters}</Button>
        </div>
      )}
    </div>
  )
}
