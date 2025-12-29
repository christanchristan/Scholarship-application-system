import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Download, Calendar, User } from "lucide-react"
import type { Application } from "@/data/applications"

interface ApplicationCardProps {
  application: Application
  expanded?: boolean
}

export function ApplicationCard({ application, expanded = false }: ApplicationCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-yellow-100 text-yellow-800"
      case "Submitted":
        return "bg-blue-100 text-blue-800"
      case "Complete":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className={expanded ? "" : "border-l-4 border-l-primary"}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{application.scholarshipTitle}</h3>
          <Badge className={getStatusColor(application.status)}>{application.status}</Badge>
        </div>
        {expanded && (
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{application.studentName}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>Submitted: {application.submittedDate}</span>
            </div>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Service Package:</span>
            <span className="font-medium">{application.servicePackage}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Last Updated:</span>
            <span>{application.lastUpdated}</span>
          </div>

          {expanded && (
            <div className="pt-3 border-t">
              <h4 className="text-sm font-medium mb-2">Documents:</h4>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(application.documents).map(
                  ([type, filename]) =>
                    filename && (
                      <Button key={type} variant="outline" size="sm" className="justify-start gap-2">
                        <Download className="h-3 w-3" />
                        <span className="capitalize">{type}</span>
                      </Button>
                    ),
                )}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
