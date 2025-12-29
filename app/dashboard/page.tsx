"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Bell, Download, FileText, Inbox, LayoutDashboard, LogOut, Settings, User } from "lucide-react"
import { applications } from "@/data/applications"
import { messages } from "@/data/messages"
import { DashboardNav } from "@/components/dashboard-nav"
import { ApplicationCard } from "@/components/application-card"
import { MessageCard } from "@/components/message-card"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col border-r bg-muted/30">
        <div className="p-6">
          <h2 className="text-lg font-semibold">User Dashboard</h2>
          <p className="text-sm text-muted-foreground">Manage your applications</p>
        </div>

        <DashboardNav
          activeItem={activeTab}
          onItemClick={setActiveTab}
          items={[
            {
              id: "overview",
              label: "Overview",
              icon: LayoutDashboard,
            },
            {
              id: "applications",
              label: "Applications",
              icon: FileText,
            },
            {
              id: "messages",
              label: "Messages",
              icon: Inbox,
              badge: messages.filter((m) => !m.read).length,
            },
            {
              id: "profile",
              label: "Profile",
              icon: User,
            },
            {
              id: "settings",
              label: "Settings",
              icon: Settings,
            },
          ]}
        />

        <div className="mt-auto p-6">
          <Button variant="outline" className="w-full justify-start gap-2">
            <LogOut className="h-4 w-4" />
            <span>Log Out</span>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Mobile Navigation */}
        <div className="md:hidden border-b p-4">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-5">
              <TabsTrigger value="overview">
                <LayoutDashboard className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="applications">
                <FileText className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="messages" className="relative">
                <Inbox className="h-4 w-4" />
                {messages.filter((m) => !m.read).length > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                    {messages.filter((m) => !m.read).length}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="profile">
                <User className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Settings className="h-4 w-4" />
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="p-6">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                <Button variant="outline" size="icon">
                  <Bell className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{applications.length}</div>
                    <p className="text-xs text-muted-foreground">+2 from last month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">In Progress</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {applications.filter((a) => a.status === "In Progress").length}
                    </div>
                    <p className="text-xs text-muted-foreground">Applications being processed</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Submitted</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {applications.filter((a) => a.status === "Submitted").length}
                    </div>
                    <p className="text-xs text-muted-foreground">Applications submitted to universities</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Completed</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {applications.filter((a) => a.status === "Complete").length}
                    </div>
                    <p className="text-xs text-muted-foreground">Successfully completed applications</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Recent Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {applications.slice(0, 3).map((application) => (
                        <ApplicationCard key={application.id} application={application} />
                      ))}

                      <div className="text-center pt-2">
                        <Button variant="outline" onClick={() => setActiveTab("applications")}>
                          View All Applications
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Messages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {messages.slice(0, 3).map((message) => (
                        <MessageCard key={message.id} message={message} />
                      ))}

                      <div className="text-center pt-2">
                        <Button variant="outline" onClick={() => setActiveTab("messages")}>
                          View All Messages
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Applications Tab */}
          {activeTab === "applications" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight">My Applications</h1>
                <Link href="/apply">
                  <Button>New Application</Button>
                </Link>
              </div>

              <Tabs defaultValue="all">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                  <TabsTrigger value="submitted">Submitted</TabsTrigger>
                  <TabsTrigger value="complete">Complete</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="space-y-4 mt-6">
                  {applications.map((application) => (
                    <ApplicationCard key={application.id} application={application} expanded />
                  ))}
                </TabsContent>
                <TabsContent value="in-progress" className="space-y-4 mt-6">
                  {applications
                    .filter((a) => a.status === "In Progress")
                    .map((application) => (
                      <ApplicationCard key={application.id} application={application} expanded />
                    ))}
                </TabsContent>
                <TabsContent value="submitted" className="space-y-4 mt-6">
                  {applications
                    .filter((a) => a.status === "Submitted")
                    .map((application) => (
                      <ApplicationCard key={application.id} application={application} expanded />
                    ))}
                </TabsContent>
                <TabsContent value="complete" className="space-y-4 mt-6">
                  {applications
                    .filter((a) => a.status === "Complete")
                    .map((application) => (
                      <ApplicationCard key={application.id} application={application} expanded />
                    ))}
                </TabsContent>
              </Tabs>
            </div>
          )}

          {/* Messages Tab */}
          {activeTab === "messages" && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold tracking-tight">Messages</h1>

              <Tabs defaultValue="all">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="unread">
                    Unread
                    {messages.filter((m) => !m.read).length > 0 && (
                      <Badge variant="secondary" className="ml-2">
                        {messages.filter((m) => !m.read).length}
                      </Badge>
                    )}
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="space-y-4 mt-6">
                  {messages.map((message) => (
                    <MessageCard key={message.id} message={message} expanded />
                  ))}
                </TabsContent>
                <TabsContent value="unread" className="space-y-4 mt-6">
                  {messages
                    .filter((m) => !m.read)
                    .map((message) => (
                      <MessageCard key={message.id} message={message} expanded />
                    ))}
                </TabsContent>
              </Tabs>
            </div>
          )}

          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold tracking-tight">My Profile</h1>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center">
                        <User className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <h2 className="text-xl font-semibold">Abebe Kebede</h2>
                      <p className="text-sm text-muted-foreground">Student at Addis Ababa University</p>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Full Name</h3>
                          <p>Abebe Kebede</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                          <p>abebe.kebede@example.com</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Phone</h3>
                          <p>+251 91 234 5678</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Current Education</h3>
                          <p>Bachelor's in Computer Science</p>
                        </div>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <Button>Edit Profile</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">CV.pdf</p>
                          <p className="text-xs text-muted-foreground">Uploaded on May 10, 2023</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Statement_of_Purpose.pdf</p>
                          <p className="text-xs text-muted-foreground">Uploaded on May 10, 2023</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Transcript.pdf</p>
                          <p className="text-xs text-muted-foreground">Uploaded on May 10, 2023</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold tracking-tight">Settings</h1>

              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Settings content would go here */}
                    <p className="text-muted-foreground">
                      Configure your notification preferences and account settings
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
