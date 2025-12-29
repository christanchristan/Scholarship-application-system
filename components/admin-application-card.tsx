"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, Download, User, Calendar } from "lucide-react"
import type { Application } from "@/data/applications"

interface AdminApplicationCardProps {
  application: Application
  onStatusUpdate: (id: string, status: string) => void
  onSendMessage: (id: string) => void
}

export function AdminApplicationCard({ application, onStatusUpdate, onSendMessage }: AdminApplicationCardProps) {
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
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{application.scholarshipTitle}</h3>
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
        </div>
        <Badge className={getStatusColor(application.status)}>{application.status}</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h4 className="text-sm font-medium mb-2">Student Details</h4>
          <div className="space-y-1 text-sm">
            <p>
              <span className="text-muted-foreground">Email:</span> {application.email}
            </p>
            <p>
              <span className="text-muted-foreground">Service:</span> {application.servicePackage}
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Documents</h4>
          <div className="space-y-1">
            {Object.entries(application.documents).map(
              ([type, filename]) =>
                filename && (
                  <Button key={type} variant="outline" size="sm" className="w-full justify-start gap-2">
                    <Download className="h-3 w-3" />
                    <span className="capitalize">{type}</span>
                  </Button>
                ),
            )}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Actions</h4>
          <div className="space-y-2">
            <Select value={application.status} onValueChange={(value) => onStatusUpdate(application.id, value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Submitted">Submitted</SelectItem>
                <SelectItem value="Complete">Complete</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="sm" className="w-full gap-2" onClick={() => onSendMessage(application.id)}>
              <MessageSquare className="h-3 w-3" />
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
