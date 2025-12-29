"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { applications } from "@/data/applications"
import { AdminApplicationCard } from "@/components/admin-application-card"
import { FileText, MessageSquare, Upload, Users } from "lucide-react"

export default function AdminDashboard() {
  const [selectedApplication, setSelectedApplication] = useState<string | null>(null)
  const [messageText, setMessageText] = useState("")
  const [statusUpdate, setStatusUpdate] = useState("")

  const handleStatusUpdate = (applicationId: string, newStatus: string) => {
    // In a real app, this would update the application status in the database
    console.log(`Updating application ${applicationId} to status: ${newStatus}`)
  }

  const handleSendMessage = (applicationId: string) => {
    // In a real app, this would send a message to the user
    console.log(`Sending message to application ${applicationId}: ${messageText}`)
    setMessageText("")
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage student applications and provide support</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{applications.length}</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{applications.filter((a) => a.status === "In Progress").length}</div>
            <p className="text-xs text-muted-foreground">Requires immediate attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Currently working with us</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">82%</div>
            <p className="text-xs text-muted-foreground">Applications successfully submitted</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="applications" className="space-y-6">
        <TabsList>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>

        <TabsContent value="applications" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Student Applications</h2>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Applications</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="submitted">Submitted</SelectItem>
                  <SelectItem value="complete">Complete</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            {applications.map((application) => (
              <Card key={application.id}>
                <CardContent className="pt-6">
                  <AdminApplicationCard
                    application={application}
                    onStatusUpdate={handleStatusUpdate}
                    onSendMessage={(id) => setSelectedApplication(id)}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="students" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Student Management</h2>
          </div>

          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground text-center py-8">Student management features coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Document Management</h2>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Upload Final Documents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="application-select">Select Application</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose an application" />
                  </SelectTrigger>
                  <SelectContent>
                    {applications.map((app) => (
                      <SelectItem key={app.id} value={app.id}>
                        {app.studentName} - {app.scholarshipTitle}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="document-type">Document Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select document type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cv">Final CV</SelectItem>
                    <SelectItem value="sop">Final Statement of Purpose</SelectItem>
                    <SelectItem value="application">Complete Application</SelectItem>
                    <SelectItem value="other">Other Document</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="document-upload">Upload Document</Label>
                <Input id="document-upload" type="file" accept=".pdf,.doc,.docx" />
              </div>

              <Button className="w-full">
                <Upload className="h-4 w-4 mr-2" />
                Upload Document
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Send Messages</h2>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send Message to Student</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="student-select">Select Student</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a student" />
                  </SelectTrigger>
                  <SelectContent>
                    {applications.map((app) => (
                      <SelectItem key={app.id} value={app.id}>
                        {app.studentName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message-subject">Subject</Label>
                <Input id="message-subject" placeholder="Enter message subject" />
              </div>

              <div>
                <Label htmlFor="message-content">Message</Label>
                <Textarea id="message-content" placeholder="Type your message here..." rows={5} />
              </div>

              <Button className="w-full">
                <MessageSquare className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Message Dialog */}
      <Dialog open={!!selectedApplication} onOpenChange={() => setSelectedApplication(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Send Message</DialogTitle>
            <DialogDescription>Send a message to the student about their application</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="quick-message">Message</Label>
              <Textarea
                id="quick-message"
                placeholder="Type your message here..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                rows={4}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setSelectedApplication(null)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                if (selectedApplication) {
                  handleSendMessage(selectedApplication)
                  setSelectedApplication(null)
                }
              }}
            >
              Send Message
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
