export interface Message {
  id: string
  from: string
  subject: string
  content: string
  date: string
  read: boolean
  applicationId?: string
}

export const messages: Message[] = [
  {
    id: "msg-1",
    from: "Scholar4Ethio Team",
    subject: "Application Update - Chevening Scholarship",
    content: "Your CV has been reviewed and edited. Please check the updated version in your dashboard.",
    date: "2024-05-15",
    read: false,
    applicationId: "app-1",
  },
  {
    id: "msg-2",
    from: "Scholar4Ethio Team",
    subject: "Document Submission Required",
    content:
      "We need your official transcript to complete your application. Please upload it at your earliest convenience.",
    date: "2024-05-12",
    read: true,
    applicationId: "app-1",
  },
  {
    id: "msg-3",
    from: "Scholar4Ethio Team",
    subject: "Application Successfully Submitted",
    content: "Congratulations! Your DAAD scholarship application has been successfully submitted to the university.",
    date: "2024-05-01",
    read: true,
    applicationId: "app-2",
  },
]
