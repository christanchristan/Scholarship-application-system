"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, XCircle, AlertCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"

export type NotificationType = "success" | "error" | "warning" | "info"

interface NotificationProps {
  type: NotificationType
  title: string
  message?: string
  duration?: number
  onClose?: () => void
}

export function Notification({ type, title, message, duration = 5000, onClose }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false)
        onClose?.()
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [duration, onClose])

  if (!isVisible) return null

  const icons = {
    success: CheckCircle,
    error: XCircle,
    warning: AlertCircle,
    info: AlertCircle,
  }

  const colors = {
    success: "border-green-200 bg-green-50 text-green-800",
    error: "border-red-200 bg-red-50 text-red-800",
    warning: "border-yellow-200 bg-yellow-50 text-yellow-800",
    info: "border-blue-200 bg-blue-50 text-blue-800",
  }

  const Icon = icons[type]

  return (
    <Card className={cn("fixed top-4 right-4 z-50 w-96 shadow-lg", colors[type])}>
      <CardContent className="flex items-start gap-3 p-4">
        <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h4 className="font-medium">{title}</h4>
          {message && <p className="text-sm mt-1 opacity-90">{message}</p>}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 hover:bg-black/10"
          onClick={() => {
            setIsVisible(false)
            onClose?.()
          }}
        >
          <X className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}

// Notification context for global notifications
interface NotificationContextType {
  showNotification: (notification: Omit<NotificationProps, "onClose">) => void
}

import { createContext, useContext } from "react"

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<(NotificationProps & { id: string })[]>([])

  const showNotification = (notification: Omit<NotificationProps, "onClose">) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newNotification = {
      ...notification,
      id,
      onClose: () => {
        setNotifications((prev) => prev.filter((n) => n.id !== id))
      },
    }
    setNotifications((prev) => [...prev, newNotification])
  }

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {notifications.map((notification) => (
          <Notification key={notification.id} {...notification} />
        ))}
      </div>
    </NotificationContext.Provider>
  )
}

export function useNotification() {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error("useNotification must be used within NotificationProvider")
  }
  return context
}
