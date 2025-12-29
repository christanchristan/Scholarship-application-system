import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import type { Service } from "@/types/service"

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-full bg-primary/10">
            <service.icon className="h-6 w-6 text-primary" />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-center">{service.title}</h3>
      </CardHeader>
      <CardContent className="flex-1 text-center">
        <p className="text-muted-foreground">{service.description}</p>
        <div className="mt-4 text-lg font-semibold">{service.price} ETB</div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Link href={`/apply?service=${service.id}`}>
          <Button>Select Package</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
