"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"

interface NavItem {
  id: string
  label: string
  icon: LucideIcon
  badge?: number
}

interface DashboardNavProps {
  items: NavItem[]
  activeItem: string
  onItemClick: (id: string) => void
}

export function DashboardNav({ items, activeItem, onItemClick }: DashboardNavProps) {
  return (
    <nav className="space-y-2 px-6">
      {items.map((item) => (
        <Button
          key={item.id}
          variant={activeItem === item.id ? "secondary" : "ghost"}
          className="w-full justify-start gap-2"
          onClick={() => onItemClick(item.id)}
        >
          <item.icon className="h-4 w-4" />
          <span>{item.label}</span>
          {item.badge && item.badge > 0 && (
            <Badge variant="secondary" className="ml-auto">
              {item.badge}
            </Badge>
          )}
        </Button>
      ))}
    </nav>
  )
}
