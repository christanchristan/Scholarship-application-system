"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, GraduationCap, MapPin, Heart, Share2, ExternalLink } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import type { Scholarship } from "@/types/scholarship"

interface ScholarshipCardProps {
  scholarship: Scholarship
}

export function ScholarshipCard({ scholarship }: ScholarshipCardProps) {
  const { t } = useLanguage()
  const [isFavorited, setIsFavorited] = useState(false)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: scholarship.title,
          text: `Check out this scholarship: ${scholarship.title}`,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
    }
  }

  const getDaysUntilDeadline = () => {
    const deadline = new Date(scholarship.deadline)
    const today = new Date()
    const diffTime = deadline.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const daysLeft = getDaysUntilDeadline()
  const isUrgent = daysLeft <= 30 && daysLeft > 0

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex gap-2">
            <Badge
              variant={
                scholarship.degreeType === "PhD"
                  ? "default"
                  : scholarship.degreeType === "Master"
                    ? "secondary"
                    : "outline"
              }
            >
              {t.scholarships[scholarship.degreeType.toLowerCase() as keyof typeof t.scholarships]}
            </Badge>
            <Badge variant="outline">{scholarship.country}</Badge>
            {isUrgent && (
              <Badge variant="destructive" className="text-xs">
                {daysLeft} days left
              </Badge>
            )}
          </div>
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsFavorited(!isFavorited)}>
              <Heart className={`h-4 w-4 ${isFavorited ? "fill-red-500 text-red-500" : ""}`} />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleShare}>
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <h3 className="text-lg font-semibold mt-2 line-clamp-2">{scholarship.title}</h3>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>
              {scholarship.university}, {scholarship.country}
            </span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>
              {t.scholarships.deadline}: {scholarship.deadline}
            </span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <GraduationCap className="h-4 w-4" />
            <span>
              {t.scholarships[scholarship.degreeType.toLowerCase() as keyof typeof t.scholarships]} in{" "}
              {scholarship.field}
            </span>
          </div>
          {scholarship.description && (
            <p className="text-muted-foreground text-xs line-clamp-2 mt-2">{scholarship.description}</p>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex gap-3 w-full">
          <Link href={`/scholarships/${scholarship.id}`} className="flex-1">
            <Button variant="outline" className="w-full gap-2">
              <ExternalLink className="h-4 w-4" />
              {t.scholarships.details}
            </Button>
          </Link>
          <Link href={`/apply?scholarship=${scholarship.id}`} className="flex-1">
            <Button className="w-full">{t.scholarships.apply}</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
