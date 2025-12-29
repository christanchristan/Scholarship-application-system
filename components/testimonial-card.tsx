import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Testimonial } from "@/types/testimonial"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-muted-foreground">{testimonial.scholarship}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted"}`}
            />
          ))}
        </div>
        <p className="text-muted-foreground">{testimonial.content}</p>
      </CardContent>
    </Card>
  )
}
