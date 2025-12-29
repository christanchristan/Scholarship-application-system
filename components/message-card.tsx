import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Calendar, Mail } from "lucide-react"
import type { Message } from "@/data/messages"

interface MessageCardProps {
  message: Message
  expanded?: boolean
}

export function MessageCard({ message, expanded = false }: MessageCardProps) {
  return (
    <Card className={`${!message.read ? "border-l-4 border-l-primary bg-muted/30" : ""}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium">{message.from}</span>
            {!message.read && <Badge variant="secondary">New</Badge>}
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            <span>{message.date}</span>
          </div>
        </div>
        <h3 className="font-semibold">{message.subject}</h3>
      </CardHeader>
      {expanded && (
        <CardContent>
          <p className="text-sm text-muted-foreground">{message.content}</p>
        </CardContent>
      )}
    </Card>
  )
}
